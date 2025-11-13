import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";
import "../App.css";

export default function FooterInfo() {
  return (
    <section className="footer-info">
      <div className="footer-column">
        <h3>About Us</h3>
        <p>
          On November 13th 1952, St. Theresa’s Church began as a small chapel for the friars. A handful of
          faithful gathered for Mass, which soon became the heart of our parish life.
        </p>
        <p>
          In 1953, the Mission Unit of St. Theresa was established — the foundation of our parish community.
        </p>
      </div>

      <div className="footer-column">
        <h3>Other Links</h3>
        <ul>
          <li><a href="https://www.bangalorearchdiocese.org/">Archdiocese of Bangalore</a></li>
          <li><a href="https://www.vatican.va/content/vatican/en.html">Vatican Church</a></li>
          
        </ul>
      </div>

      <div className="footer-column">
        <h3>Contact Us</h3>
        <p><FaMapMarkerAlt />  St. Theresa’s Church, Dommasandra, Bangalore – India</p>
        <p><FaPhone />  +91 9353192486</p>
        <p><FaEnvelope />  sttheresachurchoffice@gmail.com</p>
        <div className="social-icons">
          <FaFacebook /><FaInstagram /><FaYoutube /><FaLinkedin />
        </div>
      </div>

      <div className="footer-column">
        <h3>Location</h3>
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.176154051798!2d77.7513!3d12.9308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae13cc6aefb71d%3A0x36e64c9897355ecb!2sDommasandra%20Church!5e0!3m2!1sen!2sin!4v1700000000000"
          width="250"
          height="150"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
}
