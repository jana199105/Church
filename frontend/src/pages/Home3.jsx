import React, { useEffect, useRef, useState } from "react";
import "../App.css";

export default function Home() {
  /* ----------------- Hero (auto-rotating) ----------------- */
  const heroImages = [
    "/At.jpg",
    "/Ch.jpg",
    "/Ch2.jpg",
  ];
  const [currentHero, setCurrentHero] = useState(0);
  useEffect(() => {
    const t = setInterval(() => {
      setCurrentHero((p) => (p + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(t);
  }, [heroImages.length]);

  /* ----------------- News (auto-rotating) ----------------- */
  const newsItems = [
    { date: "Oct 1", title: "Annual Feast of St. Therese", desc: "Solemn Mass followed by procession." },
    { date: "All October", title: "Rosary Devotion", desc: "Every evening at 6:00 PM." },
    { date: "Nov 16–17", title: "Youth Retreat", desc: "Join us for spiritual renewal and fellowship." },
  ];
  const [currentNews, setCurrentNews] = useState(0);
  useEffect(() => {
    const t = setInterval(() => {
      setCurrentNews((p) => (p + 1) % newsItems.length);
    }, 6000);
    return () => clearInterval(t);
  }, [newsItems.length]);

  /* ----------------- Mass Timings show/hide ----------------- */
  const [showMass, setShowMass] = useState(false); // hidden by default
  const massRef = useRef(null);
  const openMass = () => {
    setShowMass(true);
    requestAnimationFrame(() => massRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }));
  };

  /* ----------------- Mobile nav toggle ----------------- */
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className="site">
      {/* Announcement */}
      <div className="announce">
        Welcome to St. Therese of Child Jesus Church, Dommasandra, Bangalore
      </div>

      {/* Header / Menus with Submenus */}
      <header className="header">
        <div className="container header-inner">
          <a className="brand" href="#home" aria-label="Home">
            <span className="brand-mark" aria-hidden>✝</span>
            <span className="brand-text">
              <strong>St. Therese of Child Jesus Church</strong>
              <small>Dommasandra, Bangalore</small>
            </span>
          </a>

          <nav className={`nav ${navOpen ? "open" : ""}`} aria-label="Primary">
            <a href="#home" className="nav-link">Home</a>

            <div className="nav-item has-submenu">
              <button className="nav-link nav-btn" aria-haspopup="true" aria-expanded="false">About Us</button>
              <div className="submenu">
                <a href="#about-parish">Parish History</a>
                <a href="#about-patron">Our Patron Saint</a>
                <a href="#about-contact">Administration</a>
              </div>
            </div>

            <div className="nav-item has-submenu">
              <button className="nav-link nav-btn" aria-haspopup="true" aria-expanded="false">Church Services</button>
              <div className="submenu">
                <button onClick={openMass} className="submenu-link">Mass Timings</button>
                <a href="#services-sacraments">Sacraments</a>
                <a href="#services-prayer">Prayer Groups</a>
              </div>
            </div>

            

            <div className="nav-item has-submenu">
              <button className="nav-link nav-btn" aria-haspopup="true" aria-expanded="false">News & Events</button>
              <div className="submenu">
                <a href="#news">Announcements</a>
                <a href="#news">Calendar</a>
                <a href="#news">Feasts</a>
              </div>
            </div>

         
            <a href="#gallery" className="nav-link">Gallery</a>
            <a href="#videos" className="nav-link">Videos</a>
            <a href="#contact" className="nav-link">Contact Us</a>
          </nav>

          <button
            className="nav-toggle"
            aria-label="Toggle navigation"
            aria-expanded={navOpen ? "true" : "false"}
            onClick={() => setNavOpen((v) => !v)}
          >
            ☰
          </button>
        </div>
      </header>

      {/* Split top (hero + news) */}
      <section className="top-section" id="home">
        <div className="hero-split">
          {/* Hero slider */}
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
              <h1>Faith. Love. Simplicity.</h1>
              <p>A welcoming Catholic community devoted to the Little Flower.</p>
              <div className="hero-cta">
                <button className="btn btn-primary" onClick={openMass}>View Mass Timings</button>
                <a href="#contact" className="btn btn-outline">Plan Your Visit</a>
              </div>
            </div>
          </div>

          {/* News auto-rotator */}
          <aside className="news-side">
            <h2 className="news-head">News & Events</h2>
            <div className="news-box">
              {newsItems.map((n, i) => (
                <div key={i} className={`news-item ${i === currentNews ? "active" : ""}`}>
                  <span className="news-date">{n.date}</span>
                  <h3>{n.title}</h3>
                  <p>{n.desc}</p>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      {/* Quick links banner row */}
      <section className="banner-row">
        <div className="container banner-grid">
          <article className="q-card" style={{ backgroundImage: "url(/images/quick-mass.jpg)" }}>
            <button onClick={openMass} className="q-btn">Mass Timings</button>
          </article>
          <article className="q-card" style={{ backgroundImage: "url(/images/quick-services.jpg)" }}>
            <a className="q-btn" href="#services-sacraments">Other Religious Services</a>
          </article>
          <article className="q-card" style={{ backgroundImage: "url(/images/quick-contact.jpg)" }}>
            <a className="q-btn" href="#contact">Contact Us</a>
          </article>
        </div>
      </section>

      {/* Parish Clergy row */}
      <section className="section" id="clergy">
        <div className="container">
          <div className="section-head">
            <h2>Parish Clergy</h2>
            <p>Guiding our faith community.</p>
          </div>

          <div className="clergy-grid">
            <div className="clergy-card">
              <h3 className="clergy-title">Parish Clergy</h3>
              <div className="clergy-body">
                <img src="/images/priest-parish.jpg" alt="Parish Priest" />
                <ul>
                  <li><strong>Parish Priest</strong></li>
                  <li>Rev. Fr. John Bosco</li>
                  <li>Mobile: +91 98765 43210</li>
                  <li>Email: parish@example.com</li>
                </ul>
              </div>
            </div>

            <div className="clergy-card">
              <h3 className="clergy-title">Archbishop</h3>
              <div className="clergy-body">
                <img src="/images/archbishop.jpg" alt="Archbishop" />
                <p className="muted">Rev. Dr. Peter Machado</p>
              </div>
            </div>

            <div className="clergy-card">
              <h3 className="clergy-title">His Holiness</h3>
              <div className="clergy-body">
                <img src="/images/pope.jpg" alt="His Holiness" />
                <p className="muted">Pope Francis</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mass Timings (hidden until opened) */}
      <section className={`section alt ${showMass ? "open" : "collapsed"}`} id="mass" ref={massRef} aria-hidden={!showMass}>
        <div className="container">
          <div className="section-head">
            <h2>Mass Timings</h2>
            <p>Subject to liturgical seasons & public holidays.</p>
          </div>

          <div className="panels">
            <div className="panel">
              <h3>Sunday</h3>
              <table className="table">
                <thead><tr><th>Time</th><th>Language</th><th>Notes</th></tr></thead>
                <tbody>
                  <tr><td>6:30 AM</td><td>Kannada</td><td></td></tr>
                  <tr><td>8:00 AM</td><td>English</td><td>Community Mass</td></tr>
                  <tr><td>10:00 AM</td><td>Tamil</td><td></td></tr>
                </tbody>
              </table>
            </div>

            <div className="panel">
              <h3>Weekdays</h3>
              <table className="table">
                <thead><tr><th>Time</th><th>Language</th><th>Notes</th></tr></thead>
                <tbody>
                  <tr><td>6:30 AM</td><td>English</td><td></td></tr>
                  <tr><td>6:30 PM</td><td>Tamil</td><td>Wednesday Novena</td></tr>
                </tbody>
              </table>
            </div>
          </div>

          <p className="note">For other sacraments & services, please contact the parish office.</p>
        </div>
      </section>

      {/* Contact */}
      <section className="section" id="contact">
        <div className="container">
          <div className="section-head"><h2>Contact & Location</h2></div>
          <div className="grid grid-2">
            <div className="card">
              <h3>Parish Office</h3>
              <p className="muted">Dommasandra, Bangalore, Karnataka</p>
              <ul className="list">
                <li>Phone: +91 98765 43210</li>
                <li>Email: info@sttheresedommasandra.com</li>
                <li>Office Hours: Mon–Sat, 9 AM – 5 PM</li>
              </ul>
              <a className="btn btn-primary" href="#">Send a Message</a>
            </div>
            <div className="card map">
              <div className="map-embed" role="img" aria-label="Map placeholder">
                Map Placeholder
              </div>
              <p className="muted">Parking available on-site. Use public transport where possible.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container footer-grid">
          <div>
            <a className="brand brand-inv" href="#home">
              <span className="brand-mark" aria-hidden>✝</span>
              <span className="brand-text">
                <strong>St. Therese of Child Jesus Church</strong>
                <small>Dommasandra, Bangalore</small>
              </span>
            </a>
            <p className="muted sm">© {new Date().getFullYear()} St. Therese of Child Jesus Church</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
