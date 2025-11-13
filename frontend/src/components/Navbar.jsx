// src/components/Navbar.jsx
import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../App.css";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navRef = useRef(null);
  const navigate = useNavigate();

  const toggleMenu = (menu) => setOpenMenu((m) => (m === menu ? null : menu));

  // Check login on load
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) setIsLoggedIn(true);
  }, []);

  useEffect(() => {
    const onDocClick = (e) => {
      if (!navRef.current?.contains(e.target)) setOpenMenu(null);
    };
    document.addEventListener("click", onDocClick);
    return () => document.removeEventListener("click", onDocClick);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    <>
      {/* === Welcome strip === */}
      <div className="topbar">
        Welcome to St. Therese of Child Jesus Church, Dommasandra – Bangalore
      </div>

      {/* === Header with image === */}
      <header className="header-banner-split">
        <div className="header-text">
          <h1>St. Therese of Child Jesus Church</h1>
          <p>Dommasandra, Bangalore</p>
        </div>
        <div className="header-image">
          <img src="/st1.jpeg" alt="St. Therese of Child Jesus" />
        </div>
      </header>

      {/* === Navbar === */}
      <nav className="navbar fadein" ref={navRef}>
        <ul className="nav-links">
          {!isLoggedIn ? (
            <>
              <li><Link to="/">Home</Link></li>

             <li><Link to="/AboutUs" className="submenu-link">History</Link></li>

              <li className={`has-submenu ${openMenu === "mass" ? "open" : ""}`}>
                <button onClick={() => toggleMenu("mass")}>
                  Church Services <span className="chevron">{openMenu === "mass" ? "▲" : "▼"}</span>
                </button>
                <ul className="submenu">
                  <li><Link to="/MassTimings" className="submenu-link">Mass Timings</Link></li>
                  <li><Link to="/adoration" className="submenu-link">Eucharistic Adoration</Link></li>
                 
                    <li><Link to="/AdorationChapel" className="submenu-link">Adoration Chapel</Link></li>
                     <li><Link to="/confession" className="submenu-link">Confession</Link></li>
              
                </ul>
              </li>

              <li className={`has-submenu ${openMenu === "services" ? "open" : ""}`}>
                <button onClick={() => toggleMenu("services")}>
                  Zones
                </button>
               
              </li>
   <li><Link to="/NewsEvents">News/Events</Link></li>
              <li><Link to="/Gallery">Gallery</Link></li>
              <li><Link to="/Contact">Contact</Link></li>
              <li><Link to="/login">Login</Link></li>
            </>
          ) : (
            <>
              <li><Link to="/events">Events</Link></li>
              <li><Link to="/galleryAdmin">Gallery</Link></li>
              
              <li><button onClick={handleLogout} className="logout-btn">Logout</button></li>
            </>
          )}
        </ul>
      </nav>
    </>
  );
}
