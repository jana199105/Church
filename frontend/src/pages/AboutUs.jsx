import React from "react";
import "../AboutUs.css";
import Navbar from "../components/Navbar";
const AboutUs = () => {
  return (
    <div className="about-container"><Navbar/>
      <div className="about-header">
        <h1>📖 About Our Parish</h1>
       
      </div>

      <div className="about-content">
        <section className="about-section">
          <h2>Brief History of the Parish</h2>
          <p>
            St. Theresa’s Church, T.C. Halli was built by <strong>Most Rev. Dr. Packiam Arockiasamy</strong>, 
            Archbishop of Bangalore, in the year <strong>1986</strong>. However, the land was purchased by him 
            earlier in <strong>1975</strong>.
          </p>

          <p>
            Initially, St. Theresa’s Church, T.C. Halli was a sub-station of 
            <strong> St. Anthony’s Church, Kodathi</strong>. It was officially declared 
            and erected as a <strong>Parish Church on 1st July 2017</strong> by 
            <strong> Most Rev. Dr. Bernard Moras</strong>, Archbishop of Bangalore.
          </p>

          <p>
            The need for establishing it as a Parish was realized by the then Parish Priest 
            of St. Anthony’s Church, Kodathi, <strong>Rev. Fr. Therese Babu</strong>. 
            Through his dedication and understanding of the growing spiritual needs of the 
            community, the Archbishop declared and erected the new Parish Church on 
            <strong> 1st July 2017</strong>, appointing <strong>Fr. Therese Babu</strong> as 
            the first Parish Priest.
          </p>

          <p>
            The foundation stone for the <strong>New Church and the Presbytery</strong> was blessed 
            and laid down by <strong>Most Rev. Dr. Bernard Moras</strong>, Archbishop of Bangalore, 
            on <strong>18th November 2017</strong>.
          </p>
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
    </div>
  );
};

export default AboutUs;
