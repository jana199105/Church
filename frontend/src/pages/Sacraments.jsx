import React from "react";
import Navbar from "../components/Navbar";
import "../Sacraments.css";
import { Link } from "react-router-dom";

const Sacraments = () => {
  return (
    <div className="min-h-screen bg-[#fffaf5] text-[#2f2519]">
      
      {/* Navigation */}
      <Navbar />

      {/* Header */}
      <header className="bg-[#fff4e7] text-center py-12 border-b border-[#e0d4c5] shadow-sm">
        <h1 className="text-3xl font-bold text-[#5a3c1a]">
          Our Sacraments
        </h1>
        <p className="italic text-[#7a5a36] mt-2 text-lg">
          “The Sacraments of the New Testament were instituted by Christ the Lord and entrusted to the Church...
        </p>
      </header>

      {/* Page Content */}
      <main className="max-w-5xl mx-auto mt-14 px-6">

        {/* Sacraments Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

          <Link to="/baptism" className="sacrament-card">
            Baptism
          </Link>

          <Link to="/reconciliation" className="sacrament-card">
            Reconciliation
          </Link>

          <Link to="/holy-communion" className="sacrament-card">
            Holy Communion
          </Link>

          <Link to="/confirmation" className="sacrament-card">
            Confirmation
          </Link>

          <Link to="/marriage" className="sacrament-card">
            Marriage
          </Link>

          <Link to="/holy-orders" className="sacrament-card">
            Holy Orders
          </Link>

          <Link to="/anointing" className="sacrament-card">
            Anointing of the Sick
          </Link>

        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        © {new Date().getFullYear()} St. Therese of Child Jesus Church
      </footer>
    </div>
  );
};

export default Sacraments;