import React from "react";
import Navbar from "../components/Navbar";

const HolyOrders = () => {
  return (
    <div className="min-h-screen bg-[#fffaf5] text-[#2f2519]">
      <Navbar />

      <header className="bg-[#fff4e7] text-center py-12 border-b border-[#e0d4c5] shadow-sm">
        <h1 className="text-3xl font-bold text-[#5a3c1a] uppercase">Holy Orders</h1>
        <p className="italic text-[#7a5a36] mt-2 text-lg">
          “The harvest is abundant but the laborers are few.” — Matthew 9:37
        </p>
      </header>

      <main className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-8 mt-10 border border-[#f1e2d0] leading-relaxed text-lg">

        <p className="mb-4">
          The Sacrament of Holy Orders consecrates men to serve the Church as deacons, priests, or bishops.
          Through the laying on of hands, the grace of the Holy Spirit configures the man to Christ 
          the High Priest.
        </p>

        <p className="mb-4">
          Those discerning a vocation are encouraged to pray, speak with a spiritual director, 
          and connect with the diocesan vocation office.
        </p>

        <div className="bg-[#fff7ef] p-5 rounded-md border border-[#e9d8c6] shadow-sm text-center mt-8">
          <p className="font-semibold text-[#5a3c1a]">
            “Be not afraid.” — St. John Paul II
          </p>
        </div>

        <p className="mt-6">
          For more information, please contact the diocesan vocation director.
        </p>
      </main>

      <footer className="footer">© {new Date().getFullYear()} St. Therese of Child Jesus Church</footer>
    </div>
  );
};

export default HolyOrders;
