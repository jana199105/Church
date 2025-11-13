import React from "react";

import "../EucharisticAdoration.css";
import Navbar from "../components/Navbar";

const EucharisticAdoration = () => {
  return (
    <div className="min-h-screen bg-[#fffaf5] text-[#2f2519]">
      {/* Navigation */}
     <Navbar/>

      {/* Header */}
      <header className="bg-[#fff4e7] text-center py-12 border-b border-[#e0d4c5] shadow-sm">
        <h1 className="text-3xl font-bold text-[#5a3c1a]">
          Eucharistic Adoration
        </h1>
        <p className="italic text-[#7a5a36] mt-2 text-lg">
          A time for prayer, peace, and divine presence.
        </p>
      </header>

      {/* Content */}
      <main className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-8 mt-10 border border-[#f1e2d0]">
       

        <p className="text-lg leading-relaxed text-[#3a2b1f]">
          Every <strong>Friday</strong> from <strong>6:00 p.m.</strong> to <strong>6:45 p.m.</strong>
        </p>

        <div className="mt-8 bg-[#fff7ef] p-4 rounded-md border border-[#e9d8c6] text-center">
          <p className="italic text-[#7a5a36]">
            “Come, let us adore Him – Jesus Christ, truly present in the Holy Eucharist.”
          </p>
        </div>
      </main>

      {/* Footer */}
         <footer className="footer">© {new Date().getFullYear()} St. Therese of Child Jesus Church</footer>
    </div>
  );
};

export default EucharisticAdoration;
