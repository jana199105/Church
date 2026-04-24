import React from "react";
import Navbar from "../components/Navbar";

const Reconciliation = () => {
  return (
    <div className="min-h-screen bg-[#fffaf5] text-[#2f2519]">
      <Navbar />

      <header className="bg-[#fff4e7] text-center py-12 border-b border-[#e0d4c5] shadow-sm">
        <h1 className="text-3xl font-bold text-[#5a3c1a] uppercase">Reconciliation</h1>
        <p className="italic text-[#7a5a36] mt-2 text-lg">
          “Receive the Holy Spirit. Whose sins you forgive are forgiven them.” — John 20:23
        </p>
      </header>

      <main className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-8 mt-10 border border-[#f1e2d0] leading-relaxed text-lg text-[#3a2b1f]">

        <p className="mb-4">
          The Sacrament of Reconciliation, also known as Confession or Penance, is a sacrament of healing. 
          It restores our relationship with God and the Church when we fall through sin.
        </p>

        <p className="mb-4">
          Jesus gave His apostles the power to forgive sins, and through this sacrament, the mercy of God 
          is poured out on the faithful. Reconciliation renews the soul, brings peace, and strengthens us 
          to resist future temptation.
        </p>

        <div className="mt-8 bg-[#fff7ef] p-5 rounded-md border border-[#e9d8c6] shadow-sm text-center">
          <p className="font-semibold text-[#5a3c1a]">
            Confessions are available every Saturday from 5:00 – 5:45 p.m.  
            <br />and by appointment.
          </p>
        </div>

        <p className="mt-6">
          To schedule an appointment, please contact the parish office.
        </p>
      </main>

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

export default Reconciliation;
