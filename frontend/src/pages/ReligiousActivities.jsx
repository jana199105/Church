import React from "react";
import "../ReligiousActivities.css";
import Navbar from "../components/Navbar";

const ReligiousActivities = () => {
  return (
    <div className="religious-page"><Navbar/>
      {/* Header Section */}
      <header className="religious-header">
        <h1>Religious Activities</h1>
        <p className="subtitle">
          “Be still and know that I am God.” – Psalm 46:10
        </p>
      </header>

      {/* Eucharistic Adoration */}
      <section className="religious-section">
        <h2>Eucharistic Adoration</h2>
        <p>
          Kindly note that during the period of Lent (March 5 to April 17, 2025),
          the usual Holy Hour conducted on Fridays will be brought forward to
          Thursday immediately following the 5:30 p.m. Mass.
        </p>
      </section>

      {/* Adoration Chapel */}
      <section className="religious-section">
        <h2>Adoration Chapel</h2>
        <p>Exposition every day from <strong>7:00 a.m.</strong> to <strong>7:00 p.m.</strong></p>
      </section>

      {/* Confession */}
      <section className="religious-section">
        <h2>Confession</h2>
        <p>Days and timings for Confession at the Adoration Chapel are as below:</p>
        <ul>
          <li><strong>Tuesdays:</strong> 11:00 a.m. – 12:00 p.m. and 5:00 p.m. – 6:00 p.m.</li>
          <li><strong>Saturdays:</strong> 5:00 p.m. – 6:00 p.m.</li>
          <li><strong>First Fridays:</strong> 5:00 p.m. – 6:00 p.m.</li>
        </ul>
        <p className="note">
          (Confessions on weekdays after Mass will be at the Sacristy.)
        </p>
      </section>

      {/* Footer */}
       <footer className="footer">© {new Date().getFullYear()} St. Therese of Child Jesus Church</footer>
    </div>
  );
};

export default ReligiousActivities;
