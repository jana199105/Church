import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import "../Contact.css";
const Contact = () => {
      const [showScrollTop, setShowScrollTop] = useState(false);
  return (
     <div className="site"><Navbar/>
       <div className="page-container fade-in">
         <header className="subpage-header">
        <h1>PARISH OFFICE</h1>
      <p>
        St. Theresa of the Child Jesus Church, Domasandra is joyfully managed by
        a dedicated and faith-filled team led by our Parish Priest and supported by
        our Parish Council members and staff.
      </p>
      </header>
    
     
     
      <p>Please contact the Parish Office for any queries relating to:</p>
      <ul>
        <li>Mass Bookings</li>
        <li>Marriage Preparation / Counselling</li>
        <li>Family Record and Subscription Updates</li>
        <li>Cemetery and burial related enquiries</li>
      </ul>

    
      <h4>PARISH AND ACCOUNTS OFFICE TIMINGS:</h4>
      <table className="timing-table">
        
        <tr>
          <td className="label-cell">Sundays</td>
          <td>8:00 AM – 1:00 PM</td>
        </tr>
      </table>

      <h4>Address</h4>
      <p>
        <strong>St. Theresa of the Child Jesus Church</strong><br />
        Domasandra Main Road, Sarjapur Post<br />
        Bengaluru – 562125, Karnataka, India
      </p>

      <div className="map-container">
        <iframe
          src="https://www.google.com/maps?q=St+Theresa+of+the+Child+Jesus+Church,+Domasandra&output=embed"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      

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

export default Contact;
