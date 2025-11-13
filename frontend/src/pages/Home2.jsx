import "../App.css";
import { useState, useEffect } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaFacebook,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";
import MassSchedule from "../components/MassSchedule";



export default function Home() {
  // Image carousel logic
  const images = ["/altar-11.jpg", "/altar-11.jpg", "/altar-11.jpg"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="home">
      {/* TOP BAR */}
      <div className="topbar">
        <div className="contact-info">
          <FaEnvelope /> <span>sttheresachurch@gmail.com</span>
          <FaPhone /> <span>+91 8553911727</span>
        </div>
        <div className="social-icons">
          <FaFacebook />
          <FaYoutube />
          <FaInstagram />
        </div>
      </div>

      {/* HEADER BANNER */}
      <header className="header-banner">
        <div className="header-content">
         {/* <img src="/saint-left.png" alt="Saint" className="saint" />*/}
          <div className="title">
            <h1>St. Theresa of the Child Jesus</h1>
            <p>Dommasandra - Bangalore</p>
          </div>
          <img src="/sttheresa.webp" alt="Saint" className="saint" />
        </div>
      </header>

      {/* NAVBAR */}
      <nav className="navbar">
        <a href="#home">Home</a>
        <a href="#about">About Us</a>
        <a href="#mass">Mass Schedule</a>
        <a href="#sacraments">Sacraments</a>
        <a href="#events">Events</a>
        <a href="#donate">Donate</a>
      </nav>

    {/* IMAGE CAROUSEL */}
<section className="carousel">
  <img
    src={images[index]}
    alt="Church"
    className="carousel-image"
    loading="lazy"
  />
</section>

{/* FLASH NEWS BAR */}
<section className="flash-news">
  <div className="flash-label">FLASH NEWS</div>
  <marquee behavior="scroll" direction="left">
    Upcoming Feast Day Celebration — Sunday, Oct 26 | Join us for the 8:00 AM Mass followed by a community gathering.
  </marquee>
</section>


      {/* GRID SECTION */}
      <section className="main-grid">
        {/* News / Events */}
        <div className="card">
          <h2>News / Events</h2>
          <img src="/mass-timings.jpg" alt="Mass Timings" />
          <p>Stay updated with our parish activities and announcements.</p>
        </div>

        {/* Integrated Mass Schedule */}
        <MassSchedule />

        {/* YouTube 
        <div className="card youtube">
          <h2>Parish YouTube</h2>
          <iframe
            width="100%"
            height="200"
            src="https://www.youtube.com/embed/"
            title="Parish YouTube"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>*/}
      </section>

    
    </div>
  );
}
