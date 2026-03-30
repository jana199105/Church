from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
from pymongo import MongoClient
from bson import ObjectId
from werkzeug.utils import secure_filename
from datetime import datetime
import os

# ---------------------------------------------
# App Setup
# ---------------------------------------------
app = Flask(__name__)
CORS(app)

# ---------------------------------------------
# MongoDB Setup
# ---------------------------------------------
MONGO_URI = os.getenv(
    "MONGO_URI",
    "mongodb+srv://janaardhan36_db_user:WhTDlKNLKUZDja9v@cluster0.nwjbu9k.mongodb.net/"
)
client = MongoClient(MONGO_URI)
db = client["churchDb"]
events = db["events"]
gallery_col = db["gallery"]
try:
    # The ping command confirms that the client can reach the server
    client.admin.command('ping')
    print("✅ Successfully connected to MongoDB!")
except Exception as e:
    print("❌ Connection failed:", e)
# ---------------------------------------------
# Upload Folder Setup
# ---------------------------------------------
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
UPLOAD_FOLDER = os.path.join(BASE_DIR, "uploads")
os.makedirs(UPLOAD_FOLDER, exist_ok=True)
app.config["UPLOAD_FOLDER"] = UPLOAD_FOLDER

ALLOWED_EXTENSIONS = {"png", "jpg", "jpeg", "gif", "mp4", "mov", "avi"}
@app.route("/")
def home():
    return "Backend is running ✅"

# ---------------------------------------------
# Helper Functions
# ---------------------------------------------
def allowed_file(filename):
    return "." in filename and filename.rsplit(".", 1)[1].lower() in ALLOWED_EXTENSIONS

def serialize_event(e):
    return {
        "_id": str(e["_id"]),
        "header": e.get("header", ""),
        "sub_header": e.get("sub_header", ""),
        "date_from": e.get("date_from", ""),
        "date_to": e.get("date_to", "")
    }

# ---------------------------------------------
# User Login
# ---------------------------------------------
users = {
    "admin@sttherese": "admin123",
    "user@sttherese.com": "user123"
}

@app.route("/login", methods=["POST"])
def login():
    data = request.get_json()
    email = data.get("email")
    password = data.get("password")

    if email in users and users[email] == password:
        return jsonify({"message": "Login successful", "user": email}), 200
    return jsonify({"message": "Invalid credentials"}), 401

# ---------------------------------------------
# Events API
# ---------------------------------------------
@app.route("/events", methods=["GET"])
def get_events():
    data = list(events.find().sort("date_from", 1))
    return jsonify([serialize_event(e) for e in data])

@app.route("/events", methods=["POST"])
def add_event():
    data = request.json
    new_event = {
        "header": data.get("header"),
        "sub_header": data.get("sub_header"),
        "date_from": data.get("date_from"),
        "date_to": data.get("date_to")
    }
    inserted = events.insert_one(new_event)
    return jsonify({"inserted_id": str(inserted.inserted_id)}), 201

@app.route("/events/<id>", methods=["PUT"])
def update_event(id):
    data = request.json
    events.update_one({"_id": ObjectId(id)}, {"$set": data})
    return jsonify({"message": "Event updated"})

@app.route("/events/<id>", methods=["DELETE"])
def delete_event(id):
    events.delete_one({"_id": ObjectId(id)})
    return jsonify({"message": "Event deleted"})

@app.route("/events/monthly", methods=["GET"])
def get_monthly_events():
    try:
        print(events)
        all_events = list(events.find({}, {"_id": 0}))
        print(all_events)
        if not all_events:
            return jsonify([])

        grouped = {}
        for e in all_events:
            start_date = datetime.strptime(e["date_from"], "%Y-%m-%d")
            month_key = start_date.strftime("%B %Y")
            grouped.setdefault(month_key, []).append(e)

        formatted = [{"month": k, "events": v} for k, v in grouped.items()]
        return jsonify(formatted)
    except Exception as e:
        return jsonify({"error": str(e)}), 500

# ---------------------------------------------
# Gallery API
# ---------------------------------------------
# ✅ Serve static uploaded files properly


# ✅ Fetch all gallery items
@app.route("/gallery", methods=["GET"])
def get_albums():
    albums = os.listdir(app.config["UPLOAD_FOLDER"])
    return jsonify(albums)



# ✅ Add a new photo or video
@app.route("/gallery/add", methods=["POST"])
def add_gallery():
    file = request.files.get("file")
    title = request.form.get("title")
    media_type = request.form.get("type", "photo")

    if not file or not title:
        return jsonify({"error": "Missing title or file"}), 400

    if not allowed_file(file.filename):
        return jsonify({"error": "Invalid file type"}), 400

    filename = secure_filename(file.filename)
    filepath = os.path.join(app.config["UPLOAD_FOLDER"], filename)
    file.save(filepath)

    # ✅ Save proper URL path for frontend
    file_url = f"/uploads/{filename}"

    gallery_col.insert_one({
        "title": title,
        "url": file_url,
        "type": media_type
    })

    return jsonify({"message": "File uploaded successfully", "url": file_url}), 201


# ✅ Delete a gallery item
@app.route("/gallery/delete/<string:item_id>", methods=["DELETE"])
def delete_gallery(item_id):
    try:
        item = gallery_col.find_one({"_id": ObjectId(item_id)})
        if not item:
            return jsonify({"error": "Item not found"}), 404

        file_path = item.get("url", "").replace("/uploads/", "")
        full_path = os.path.join(app.config["UPLOAD_FOLDER"], file_path)
        if os.path.exists(full_path):
            os.remove(full_path)

        gallery_col.delete_one({"_id": ObjectId(item_id)})
        return jsonify({"message": "Deleted successfully"}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500


@app.route("/gallery/upload", methods=["POST"])
def upload_to_album():
    album = request.form.get("album", "General")
    title = request.form.get("title")
    media_type = request.form.get("type", "photo")
    files = request.files.getlist("file")

    album_dir = os.path.join(app.config["UPLOAD_FOLDER"], album)
    os.makedirs(album_dir, exist_ok=True)

    uploaded = []
    for file in files:
        if file and file.filename:
            filename = secure_filename(file.filename)
            file.save(os.path.join(album_dir, filename))
            uploaded.append({
                "title": title,
                "type": media_type,
                "url": f"/uploads/{album}/{filename}"
            })
    return jsonify(uploaded)


@app.route("/upload/<album>", methods=["POST"])
def upload_file(album):
    album_path = os.path.join(app.config["UPLOAD_FOLDER"], album)
    os.makedirs(album_path, exist_ok=True)

    if "files" not in request.files:
        return jsonify({"error": "No file part"}), 400

    files = request.files.getlist("files")
    file_urls = []

    for file in files:
        if file.filename == "":
            continue
        file_path = os.path.join(album_path, file.filename)
        file.save(file_path)
        file_urls.append(f"/uploads/{album}/{file.filename}")

    return jsonify({"message": "Files uploaded successfully", "files": file_urls}), 200


@app.route("/albums/<album>", methods=["POST"])
def create_album(album):
    album_path = os.path.join(app.config["UPLOAD_FOLDER"], album)
    os.makedirs(album_path, exist_ok=True)
    return jsonify({"message": f"Album '{album}' created."}), 201



# ✅ Get list of all albums
@app.route("/albums", methods=["GET"])
def list_albums():
    albums = []
    for name in os.listdir(app.config["UPLOAD_FOLDER"]):
        album_path = os.path.join(app.config["UPLOAD_FOLDER"], name)
        if os.path.isdir(album_path):
            albums.append(name)
    return jsonify(albums)

# ✅ 3. List Files (images + videos)
@app.route("/gallery/<album>", methods=["GET"])
def get_album(album):
    album_path = os.path.join(app.config["UPLOAD_FOLDER"], album)
    if not os.path.exists(album_path):
        return jsonify({"files": []})
    files = os.listdir(album_path)
    file_urls = []
    for f in files:
        file_path = os.path.join(album_path, f)
        if os.path.isfile(file_path):
            file_urls.append({
                "name": f,
                "url": f"/uploads/{album}/{f}",
                "type": "video" if f.lower().endswith((".mp4", ".mov", ".avi")) else "photo"
            })
    return jsonify({"files": file_urls})


# ✅ 4. Delete File
@app.route("/delete/<album>/<filename>", methods=["DELETE"])
def delete_file(album, filename):
    file_path = os.path.join(app.config["UPLOAD_FOLDER"], album, filename)
    if os.path.exists(file_path):
        os.remove(file_path)
        return jsonify({"message": "File deleted"})
    return jsonify({"error": "File not found"}), 404


# ✅ 5. Serve Files
@app.route("/uploads/<path:filename>")
def serve_uploaded_file(filename):
    return send_from_directory(app.config["UPLOAD_FOLDER"], filename)
from flask_cors import CORS
CORS(app)

if __name__ == "__main__":
    app.run(debug=True, port=5000)