import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import "../GalleryMange.css";

const BASE =
  import.meta.env.VITE_API_URL || "https://church-bq2s.onrender.com";

const Gallery = () => {
  const [albums, setAlbums] = useState([]);
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const [media, setMedia] = useState([]);
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [loading, setLoading] = useState(false);

  // Fetch albums (remove duplicates)
  useEffect(() => {
    fetch(`${BASE}/gallery`)
      .then((res) => res.json())
      .then((data) => {
        console.log("Albums:", data); // debug
        const uniqueAlbums = [...new Set(data)];
        setAlbums(uniqueAlbums);
      })
      .catch((err) => console.error("Error loading albums:", err));
  }, []);

  // Fetch media inside album
  const openAlbum = async (album) => {
    setSelectedAlbum(album);
    setLoading(true);
    try {
      const res = await fetch(`${BASE}/gallery/${album}`);
      const data = await res.json();
      setMedia(data.files || []);
    } catch (err) {
      console.error("Error loading media:", err);
    } finally {
      setLoading(false);
    }
  };

  const goBack = () => {
    setSelectedAlbum(null);
    setMedia([]);
  };

  // Lightbox controls
  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const nextMedia = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev + 1) % media.length);
  };

  const prevMedia = (e) => {
    e.stopPropagation();
    setLightboxIndex(
      (prev) => (prev - 1 + media.length) % media.length
    );
  };

  return (
    <div className="gallery-page">
      <Navbar />
      <h1 className="gallery-title">📸 Church Gallery</h1>

      {!selectedAlbum ? (
        <>
          <h2 className="gallery-subtitle">Albums</h2>

          <div className="album-grid">
            {albums.length > 0 ? (
              albums.map((album) => (
                <div
                  key={album} // ✅ fixed key
                  className="album-card"
                  onClick={() => openAlbum(album)}
                >
                  <div className="folder-icon">📁</div>
                  <p className="album-name">{album}</p>
                </div>
              ))
            ) : (
              <p>No albums found.</p>
            )}
          </div>
        </>
      ) : (
        <>
          <button className="back-btn" onClick={goBack}>
            ← Back to Albums
          </button>

          <h2 className="gallery-subtitle">
            Album: {selectedAlbum}
          </h2>

          {loading ? (
            <p>Loading...</p>
          ) : (
            <div className="media-grid">
              {media.length > 0 ? (
                media.map((item, index) => (
                  <div
                    key={index}
                    className="media-card"
                    onClick={() => openLightbox(index)}
                  >
                    {item.type === "video" ? (
                      <video
                        src={`${BASE}${item.url}`}
                        className="media-item"
                      />
                    ) : (
                      <img
                        src={`${BASE}${item.url}`}
                        alt={item.name}
                        className="media-item"
                      />
                    )}
                  </div>
                ))
              ) : (
                <p>No media in this album.</p>
              )}
            </div>
          )}
        </>
      )}

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div className="lightbox" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox}>
            ×
          </button>

          <button className="lightbox-nav prev" onClick={prevMedia}>
            &#10094;
          </button>

          <div
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            {media[lightboxIndex].type === "video" ? (
              <video
                src={`${BASE}${media[lightboxIndex].url}`}
                controls
                autoPlay
              />
            ) : (
              <img
                src={`${BASE}${media[lightboxIndex].url}`}
                alt={media[lightboxIndex].name}
              />
            )}
          </div>

          <button className="lightbox-nav next" onClick={nextMedia}>
            &#10095;
          </button>
        </div>
      )}
    </div>
  );
};

export default Gallery;