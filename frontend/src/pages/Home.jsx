import React, { useEffect, useRef, useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
export default function Home() {
  /* ===== Navbar dropdown (click only) ===== */
  const [openMenu, setOpenMenu] = useState(null);
  const [openMonth, setOpenMonth] = useState(null);

  const navRef = useRef(null);
  const toggleMenu = (menu) => setOpenMenu((m) => (m === menu ? null : menu));
  // close submenu when clicking outside
  useEffect(() => {
    const onDocClick = (e) => {
      if (!navRef.current?.contains(e.target)) setOpenMenu(null);
    };
    document.addEventListener("click", onDocClick);
    return () => document.removeEventListener("click", onDocClick);
  }, []);

  /* ===== Hero + News rotation ===== */
  const heroImages = [
    "/At.jpg",
    "/Ch.jpg",
    "/Ch2.jpg",
  ];
  const [currentHero, setCurrentHero] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setCurrentHero((p) => (p + 1) % heroImages.length), 5000);
    return () => clearInterval(t);
  }, [heroImages.length]);

  

  const [newsItems, setNewsItems] = useState([]);
  const [activeMonth, setActiveMonth] = useState(0);
  const [activeEvent, setActiveEvent] = useState(0);

  useEffect(() => {
    fetch("https://church-bq2s.onrender.com/events/monthly")
      .then((res) => res.json())
      .then((data) => {
        setNewsItems(data);
        console.log("Fetched monthly events:", data);
      })
      .catch((err) => console.error("Error fetching events:", err));
  }, []);

  // Auto rotation
  useEffect(() => {
  if (newsItems.length === 0) return;

  const timer = setInterval(() => {
    setActiveEvent((prevEvent) => {
      // get fresh reference every interval tick
      const currentMonth = activeMonth;
      const monthEvents = newsItems[currentMonth]?.events || [];

      if (monthEvents.length === 0) return 0;

      const next = prevEvent + 1;
      if (next < monthEvents.length) {
        return next;
      } else {
        // move to next month
        setActiveMonth((prevMonth) => (prevMonth + 1) % newsItems.length);
        return 0;
      }
    });
  }, 4000); // every 4 seconds

  return () => clearInterval(timer);
}, [newsItems, activeMonth]);




  /* ===== Mass Timings expand/collapse ===== */
  const [showMass, setShowMass] = useState(false);
  const massRef = useRef(null);
const navigate = useNavigate();

const openMass = () => {
  navigate("/MassTimings"); // Navigate to Mass Timings page
};

const openContact = () => {
  navigate("/contact"); // Navigate to Mass Timings page
};
const openRA = () => {
  navigate("/NewsEvents"); // Navigate to Mass Timings page
};


const toggleMass = () => {
  navigate("/MassTimings"); // Optional: both can navigate
};

  /* ===== Smooth reveal on scroll + scrollTop ===== */
  const [showScrollTop, setShowScrollTop] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      setShowScrollTop(window.scrollY > 400);
      document.querySelectorAll(".reveal").forEach((el) => {
        const top = el.getBoundingClientRect().top;
        if (top < window.innerHeight * 0.85) el.classList.add("active");
      });
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div className="site">
      {/* === Welcome strip === */}
      



      {/* === Floating sticky navbar (click-only dropdowns) === */}
      <Navbar/>
      {/* === Hero + News split (centered card) === */}
      <section className="top-section" id="home">
        <div className="hero-split">
          {/* Left: Hero slider */}
          <div className="hero-side">
            {heroImages.map((src, i) => (
              <div
                key={i}
                className={`hero-slide ${i === currentHero ? "active" : ""}`}
                style={{ backgroundImage: `url(${src})` }}
              />
            ))}
            <div className="hero-overlay" />
            <div className="hero-text">
              <h2>Faith. Love. Simplicity.</h2>
              <p>A welcoming Catholic community devoted to the Little Flower.</p>
              <button className="btn btn-primary" onClick={openMass}>View Mass Timings</button>
            </div>
          </div>

          {/* Right: News */}
     <aside className="news-side">
      <h2 className="section-title">News & Events</h2>

     <div className="news-box">
      {newsItems.length > 0 ? (
        newsItems.map((monthItem, i) =>
          monthItem.events.map((event, j) => (
            <div
              key={`${i}-${j}`}
              className={`news-item ${
                i === activeMonth && j === activeEvent ? "active" : ""
              }`}
            >
              <h3 className="month-title">{monthItem.month}</h3>
              <h4 className="news-title">{event.header}</h4>
              <p className="news-desc">{event.sub_header}</p>
              <p className="news-date">
                {event.date_from} — {event.date_to}
              </p>
            </div>
          ))
        )
      ) : (
        <p>Loading events...</p>
      )}
    </div>


    </aside>


        </div>
      </section>

      {/* === Quick Links (your images) === */}
      <section className="quicklinks reveal" id="services">
        <div className="q-card" style={{ backgroundImage: "url('/Ch.jpg')" }} onClick={openMass}>
          <div className="q-overlay" /><span>Mass Timings</span>
        </div>
        <div className="q-card" style={{ backgroundImage: "url('/Ch2.jpg')" }} onClick={openRA}>
          <div className="q-overlay" /><span>Other Religious Services</span>
        </div>
        <div
          className="q-card"
          style={{ backgroundImage: "url('/At.jpg')" }}
          onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
        >
          <div className="q-overlay" onClick={openContact} /><span>Contact Us</span>
        </div>
      </section>

      {/* === Mass Timings (expand/collapse) === */}
      <section
        id="mass"
        className={`mass-section reveal ${showMass ? "open" : "collapsed"}`}
        ref={massRef}
        aria-hidden={!showMass}
      >
        <div className="container">
          <div className="mass-head">
            <h2>Mass Timings</h2>
            <Link to="/MassTimings" className="submenu-link">Mass Timings</Link>
          </div>

          <table className="table">
            <thead>
              <tr><th>Time</th><th>Language</th><th>Notes</th></tr>
            </thead>
            <tbody>
              <tr><td>6:30 AM</td><td>Kannada</td><td></td></tr>
              <tr><td>8:00 AM</td><td>English</td><td>Community Mass</td></tr>
              <tr><td>10:00 AM</td><td>Tamil</td><td></td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* === Clergy === */}
      <section className="clergy-section reveal" id="clergy">
        <h2>Parish Clergy</h2>
        <div className="clergy-grid">
          <div className="clergy-card">
            <img src="/priest.png" alt="Parish Priest" />
            <h3>Rev. Fr. Antony Peter J</h3>
            <p>Parish Priest</p>
          </div>
          {/*<div className="clergy-card">
            <img src="/bishop.jpg" alt="Archbishop" />
            <h3>Most Rev. Dr. Peter Machado</h3>
            <p>Archbishop of Bangalore</p>
          </div>
          <div className="clergy-card">
            <img src="/pope.jpg" alt="Pope" />
            <h3>His Holiness Pope Francis</h3>
            <p>Supreme Pontiff</p>
          </div>*/}
        </div>
      </section>

      {/* === Contact === 
      <section className="contact-section reveal" id="contact">
        <h2>Contact & Location</h2>
        <p>Dommasandra, Bangalore – Karnataka</p>
        <p>Phone: +91 98765 43210  |  Email: info@sttheresedommasandra.com</p>
      </section>*/}

      {/* === Footer === */}
      <footer className="footer">© {new Date().getFullYear()} St. Therese of Child Jesus Church</footer>

      {/* === Scroll To Top Button === */}
      {showScrollTop && (
        <button className="scrollTop" onClick={scrollTop} aria-label="Scroll to top">↑</button>
      )}
    </div>
  );
}
