from flask import Flask, request, jsonify,  send_from_directory
from flask_cors import CORS
from pymongo import MongoClient
from bson import ObjectId
import os
from datetime import datetime
from werkzeug.utils import secure_filename
app = Flask(__name__)
CORS(app)

# ===== MongoDB Connection =====
MONGO_URI = os.getenv("MONGO_URI", "mongodb+srv://janaardhan36_db_user:WhTDlKNLKUZDja9v@cluster0.nwjbu9k.mongodb.net/")
client = MongoClient(MONGO_URI)
db = client["churchDb"]
events = db["events"]
gallery_col = db["gallery"]
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
UPLOAD_FOLDER = os.path.join(BASE_DIR, "uploads")
os.makedirs(UPLOAD_FOLDER, exist_ok=True)
app.config["UPLOAD_FOLDER"] = UPLOAD_FOLDER

# Allowed file extensions
ALLOWED_EXTENSIONS = {"png", "jpg", "jpeg", "gif", "mp4", "mov", "avi"}

# ===== Mock Users (for now) =====
users = {
    "admin@sttherese": "admin123",
    "user@sttherese.com": "user123"
}

# ===== Login Route =====
@app.route("/login", methods=["POST"])
def login():
    data = request.get_json()
    email = data.get("email")
    password = data.get("password")

    if email in users and users[email] == password:
        return jsonify({"message": "Login successful", "user": email}), 200
    else:
        return jsonify({"message": "Invalid credentials"}), 401


# ===== Events API =====

# Get all events
# ✅ Get all events
# helper: convert ObjectId -> str and format date nicely
def serialize_event(e):
    return {
        "_id": str(e["_id"]),
        "header": e.get("header", ""),
        "sub_header": e.get("sub_header", ""),
        "date_from": e.get("date_from", ""),
        "date_to": e.get("date_to", "")
    }

@app.route("/events", methods=["GET"])
def get_events():
    # sort by start date ascending
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
        # Fetch all events
        all_events = list(events.find({}, {"_id": 0}))
        if not all_events:
            return jsonify([])

        grouped = {}
        for e in all_events:
            # Use correct keys from your data
            start_date = datetime.strptime(e["date_from"], "%Y-%m-%d")
            month_key = start_date.strftime("%B %Y")

            if month_key not in grouped:
                grouped[month_key] = []

            grouped[month_key].append(e)

        # Convert to array format for frontend
        formatted = [{"month": k, "events": v} for k, v in grouped.items()]

        print("DEBUG monthly events:", formatted)  # check in Flask console
        return jsonify(formatted)

    except Exception as e:
        print("Error in get_monthly_events:", e)
        return jsonify({"error": str(e)}), 500

def allowed_file(filename):
    return "." in filename and filename.rsplit(".", 1)[1].lower() in ALLOWED_EXTENSIONS
# ✅ 1. Add new photo or video
@app.route("/gallery/add", methods=["POST"])
def add_gallery():
    try:
        file = request.files.get("file")
        title = request.form.get("title")
        media_type = request.form.get("type", "photo")

        if not file or not title:
            return jsonify({"error": "Missing title or file"}), 400

        if not allowed_file(file.filename):
            return jsonify({"error": "File type not allowed"}), 400

        filename = secure_filename(file.filename)
        path = os.path.join(app.config["UPLOAD_FOLDER"], filename)
        file.save(path)

        # Construct URL for frontend
        file_url = f"/uploads/{filename}"

        # Insert into MongoDB
        result = gallery_col.insert_one({
            "title": title,
            "url": file_url,
            "type": media_type
        })

        return jsonify({
            "message": "File uploaded successfully",
            "id": str(result.inserted_id),
            "url": file_url
        }), 201

    except Exception as e:
        print("Error:", e)
        return jsonify({"error": str(e)}), 500


# ✅ 2. Get all gallery items
@app.route("/gallery", methods=["GET"])
def get_gallery():
    try:
        items = []
        for g in gallery_col.find():
            items.append({
                "_id": str(g["_id"]),
                "title": g.get("title", ""),
                "url": g.get("url", ""),
                "type": g.get("type", "photo")
            })
        return jsonify(items), 200
    except Exception as e:
        print("Error:", e)
        return jsonify({"error": str(e)}), 500


# ✅ 3. Delete gallery item by ID
@app.route("/gallery/delete/<id>", methods=["DELETE"])
def delete_gallery(id):
    try:
        result = gallery_col.delete_one({"_id": ObjectId(id)})
        if result.deleted_count > 0:
            return jsonify({"message": "Deleted successfully"}), 200
        else:
            return jsonify({"error": "Item not found"}), 404
    except Exception as e:
        print("Error:", e)
        return jsonify({"error": str(e)}), 500


# ✅ 4. Serve uploaded files (images/videos)
@app.route("/uploads/<path:filename>")
def serve_uploaded_file(filename):
    return send_from_directory(app.config["UPLOAD_FOLDER"], filename)


# ===== Main =====
if __name__ == "__main__":
    app.run(debug=True)
