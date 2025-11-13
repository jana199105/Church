import React from "react";
import "../Confession.css";
import Navbar from "../components/Navbar";
const Confession = () => {
  return (
    <div className="confession-page">
      {/* Header */}
      <Navbar/>     <header className="confession-header">
        <h1>Confession</h1>
        <p>A sacred time for reflection, repentance, and grace.</p>
      </header>

      {/* Main Content */}
      <main className="confession-content">
        <h2>Days and Timings for Confession</h2>
        <p>
          Confessions at the Adoration Chapel are held as follows:
        </p>

        <ul>
          <li><strong>Tuesdays:</strong> 11:00 a.m. – 12:00 p.m. and 5:00 p.m. – 6:00 p.m.</li>
          <li><strong>Saturdays:</strong> 5:00 p.m. – 6:00 p.m.</li>
          <li><strong>First Fridays:</strong> 5:00 p.m. – 6:00 p.m.</li>
        </ul>

        <p className="note">
          (Confessions on weekdays after Mass will be at the Sacristy.)
        </p>
      </main>

      {/* Quote Section */}
      <section className="confession-quote">
        “If we confess our sins, He is faithful and just to forgive us our sins 
        and to cleanse us from all unrighteousness.”  
        <br />
        — <em>1 John 1:9</em>
      </section>

      {/* Footer */}
       <footer className="footer">© {new Date().getFullYear()} St. Therese of Child Jesus Church</footer>
    </div>
  );
};

export default Confession;
