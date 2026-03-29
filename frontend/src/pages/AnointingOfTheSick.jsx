import React from "react";
import Navbar from "../components/Navbar";

const AnointingOfTheSick = () => {
  return (
    <div className="min-h-screen bg-[#fffaf5] text-[#2f2519]">
      <Navbar />

      <header className="bg-[#fff4e7] text-center py-12 border-b border-[#e0d4c5] shadow-sm">
        <h1 className="text-3xl font-bold text-[#5a3c1a] uppercase">Anointing of the Sick</h1>
        <p className="italic text-[#7a5a36] mt-2 text-lg">
          “Is anyone among you sick? Let them call for the priests of the church.” — James 5:14
        </p>
      </header>

      <main className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-8 mt-10 border border-[#f1e2d0] leading-relaxed text-lg">

        <p className="mb-4">
          The Anointing of the Sick is a sacrament of healing offered to those who are seriously ill, 
          elderly, preparing for surgery, or near the time of death. It brings grace, peace, strength, 
          and often physical healing.
        </p>

        <p className="mb-4">
          Through holy oil and prayer, the Church unites the suffering person to Christ’s own Passion. 
          It is a profound gift of comfort, hope, and mercy.
        </p>

        <div className="bg-[#fff7ef] p-5 rounded-md border border-[#e9d8c6] shadow-sm text-center mt-8">
          <p className="font-semibold text-[#5a3c1a]">
            Please contact the parish immediately for emergencies  
            or hospital visits.
          </p>
        </div>

        <p className="mt-6">
          Regularly scheduled anointing services may also be available — please check the church calendar.
        </p>
      </main>

      <footer className="footer">© {new Date().getFullYear()} St. Therese of Child Jesus Church</footer>
    </div>
  );
};

export default AnointingOfTheSick;
