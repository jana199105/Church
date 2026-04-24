import "../App.css";

export default function Home() {
  return (
    <>
      {/* NAVBAR */}
      <header className="navbar">
        <div className="logo">
          <img src="/logo.png" alt="Church Logo" />
          <h1>Your Church Name</h1>
        </div>
        <nav>
          <a href="#mass">Mass Times</a>
          <a href="#about">About Us</a>
          <a href="#sacraments">Sacraments</a>
          <a href="#events">Events</a>
          <a href="#donate">Donate</a>
        </nav>
      </header>

      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <p className="welcome">WELCOME TO</p>
          <h2>St. Theresa of the Child Jesus Catholic Church</h2>
          <p className="location">T C Halli, Sarjapur - Marathahalli Rd</p>
          <p className="location">Dommasandra, Bangalore</p>
          <p className="location">Karnataka, 562125</p>
          <div className="hero-buttons">
            <a href="#mass" className="btn-gold">Join Our Mass</a>
            <a href="#live" className="btn-outline">Watch Live</a>
          </div>
        </div>
      </section>

      {/* MASS SCHEDULE */}
      <section id="mass" className="section-light">
        <h2>Mass Schedule</h2>
        <div className="schedule">
          <div className="day">Sunday</div>
          <div className="time">8:00 AM & 8:00 PM</div>
          <div className="day">Monday</div>
          <div className="time">7:00 AM & 6:00 PM</div>
        </div>
      </section>

      {/* INFO CARDS */}
      <section id="about" className="section-white cards">
        <div className="card">
          <img src="/sttheresa.jpg" alt="St Theresa" />
          <h3>About Us</h3>
          <p>Learn about our parish mission and patron saint.</p>
        </div>
        <div className="card">
          <img src="/chalice.jpg" alt="Sacraments" />
          <h3>Sacraments</h3>
          <p>Celebrate the sacraments of the Catholic Church.</p>
        </div>
        <div className="card donate-card">
          <h3>Donate</h3>
          <p>Support our church by making an online donation.</p>
          <a href="#donate" className="btn-maroon">GIVE</a>
        </div>
        <div className="card">
          <img src="/community.jpg" alt="Events" />
          <h3>Upcoming Events</h3>
          <p>See what’s happening in our parish community.</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>© 2025 St. Theresa of the Child Jesus Catholic Church. All rights reserved.</p>
      </footer>
    </>
  );
}
