import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import "../Gallery.css";

const BASE = import.meta.env.VITE_API_URL ?? "https://church-bq2s.onrender.com/";

export default function GalleryAdmin() {
  const [albums, setAlbums] = useState([]);
  const [selectedAlbum, setSelectedAlbum] = useState("");
  const [media, setMedia] = useState([]);
  const [files, setFiles] = useState([]);
  const [newAlbum, setNewAlbum] = useState("");

  // Load albums on mount
  useEffect(() => {
    fetch(`${BASE}/albums`)
      .then((res) => res.json())
      .then(setAlbums)
      .catch(console.error);
  }, []);

  // Load media inside album
  const loadMedia = (album) => {
    setSelectedAlbum(album);
    fetch(`${BASE}/gallery/${album}`)
      .then((res) => res.json())
      .then((data) => setMedia(data.files || []))
      .catch(console.error);
  };

  // Create album
  const createAlbum = async () => {
    if (!newAlbum.trim()) return alert("Enter album name");
    await fetch(`${BASE}/albums/${newAlbum}`, { method: "POST" });
    setAlbums([...albums, newAlbum]);
    setNewAlbum("");
  };

  // Upload files
  const uploadFiles = async () => {
    if (!selectedAlbum || files.length === 0) return alert("Select album & files");
    const form = new FormData();
    for (let f of files) form.append("files", f);
    const res = await fetch(`${BASE}/upload/${selectedAlbum}`, { method: "POST", body: form });
    if (res.ok) {
      loadMedia(selectedAlbum);
      alert("Uploaded!");
      setFiles([]);
    }
  };

  // Delete file
  const deleteFile = async (file) => {
    if (!window.confirm("Delete this file?")) return;
    await fetch(`${BASE}/delete/${selectedAlbum}/${file}`, { method: "DELETE" });
    setMedia(media.filter((m) => m.name !== file));
  };

  return (
    <>
      <Navbar />
      <section className="gallery-admin">
        <h2 className="gallery-title">🛠 Manage Gallery</h2>

        {/* Create Album */}
        <div className="album-create">
          <input
            type="text"
            placeholder="New album name"
            value={newAlbum}
            onChange={(e) => setNewAlbum(e.target.value)}
          />
          <button onClick={createAlbum}>+ Create Album</button>
        </div>

        {/* Album List */}
        <div className="album-list">
          {albums.map((a) => (
            <div
              key={a}
              onClick={() => loadMedia(a)}
              className={`album-card ${a === selectedAlbum ? "active" : ""}`}
            >
              <p>{a}</p>
            </div>
          ))}
        </div>

        {/* Upload Section */}
        {selectedAlbum && (
          <div className="upload-section">
            <h3>📁 Upload to {selectedAlbum}</h3>
            <input type="file" multiple onChange={(e) => setFiles(e.target.files)} />
            <button onClick={uploadFiles}>Upload</button>
          </div>
        )}

        {/* Media Display */}
        <div className="gallery-grid">
          {media.map((item) => (
            <div key={item.name} className="gallery-card">
              {item.type === "photo" ? (
                <img src={`${BASE}${item.url}`} alt={item.name} className="gallery-img" />
              ) : (
                <video src={`${BASE}${item.url}`} controls className="gallery-video" />
              )}
              <button className="delete-btn" onClick={() => deleteFile(item.name)}>
                ✖
              </button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
