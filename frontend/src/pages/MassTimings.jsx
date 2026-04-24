import React, { useEffect, useState } from "react";
import "../App.css";
import Navbar from "../components/Navbar";
const MassTimings = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sundayMass = [
  { time: "7:00 AM", language: "Kannada", notes: "Mass" },
  { time: "8:00 AM", language: "Tamil", notes: "Mass" },
  { time: "9:15 AM", language: "English", notes: "Mass" },
  { time: "10:30 AM", language: "Malayalam", notes: "Mass" },
];

const weekdayMass = [
  { time: "6:30 AM", language: "English", notes: "Monday to Friday Mass" },
  { time: "6:00 PM", language: "English", notes: "Saturday Mass" },
  { time: "6:00 PM", language: "English", notes: "First Friday Mass (Adoration follows)" },
];
  const [showScrollTop, setShowScrollTop] = useState(false);
  return (
    <div className="site"><Navbar/>
    <div className="page-container fade-in">
      <header className="subpage-header">
        <h1>Mass Timings</h1>
        <p>Schedule of Holy Masses at St. Therese of Child Jesus Church</p>
      </header>

      <section className="mass-timing-section">
        <div className="mass-card">
          <h2>Sunday Mass Schedule</h2>
          <table className="mass-table">
            <thead>
              <tr>
                <th>Time</th>
                <th>Language</th>
                <th>Notes</th>
              </tr>
            </thead>
            <tbody>
              {sundayMass.map((m, i) => (
                <tr key={i}>
                  <td>{m.time}</td>
                  <td>{m.language}</td>
                  <td>{m.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mass-card">
          <h2>Weekday Mass Schedule</h2>
          <table className="mass-table">
            <thead>
              <tr>
                <th>Time</th>
                <th>Language</th>
               
              </tr>
            </thead>
            <tbody>
              {weekdayMass.map((m, i) => (
                <tr key={i}>
                  <td>{m.time}</td>
                  <td>{m.language}</td>
                
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mass-note">
          <p>
            <strong>Note:</strong> Timings are subject to change on special feasts and public holidays.
          </p>
        </div>
      </section>
    </div>
     <footer className="footer">
  <div className="footer-content">
    <span>
      © {new Date().getFullYear()} St. Therese of Child Jesus Church
    </span>

    <span className="powered-by">
      Powered by
     <span className="brand-name">
  Na<span className="cross-t">T</span>hans
</span>
    </span>
  </div>
</footer>

      {/* === Scroll To Top Button === */}
      {showScrollTop && (
        <button className="scrollTop" onClick={scrollTop} aria-label="Scroll to top">↑</button>
      )}
    </div>
  );
};

export default MassTimings;
