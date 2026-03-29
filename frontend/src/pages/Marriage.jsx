import React from "react";
import Navbar from "../components/Navbar";

const Marriage = () => {
  return (
    <div className="min-h-screen bg-[#fffaf5] text-[#2f2519]">
      <Navbar />

      <header className="bg-[#fff4e7] text-center py-12 border-b border-[#e0d4c5] shadow-sm">
        <h1 className="text-3xl font-bold text-[#5a3c1a] uppercase">Marriage</h1>
        <p className="italic text-[#7a5a36] mt-2 text-lg">
          “What God has joined together, no human being must separate.” — Mark 10:9
        </p>
      </header>

      <main className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-8 mt-10 border border-[#f1e2d0] leading-relaxed text-lg">

        <p className="mb-4">
          The Sacrament of Matrimony unites a man and woman in lifelong covenantal love, mirroring Christ’s 
          love for His Church. It is both a vocation and a sacrament of service.
        </p>

        <p className="mb-4">
          Couples preparing for marriage participate in pre-Cana programs or marriage preparation sessions, 
          focusing on communication, faith, and the sacramental meaning of Christian marriage.
        </p>

        <div className="bg-[#fff7ef] p-5 rounded-md border border-[#e9d8c6] shadow-sm text-center mt-8">
          <p className="font-semibold text-[#5a3c1a]">
            Couples should contact the parish at least 6 months  
            <br />before the desired wedding date.
          </p>
        </div>

        <p className="mt-6">
          To begin the preparation process, please contact the Parish Office.
        </p>
      </main>

      <footer className="footer">© {new Date().getFullYear()} St. Therese of Child Jesus Church</footer>
    </div>
  );
};

export default Marriage;
