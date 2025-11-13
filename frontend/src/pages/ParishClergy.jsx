import React, { useEffect, useState } from "react";
import "../App.css";
import "../Events.css";
import Navbar from "../components/Navbar";

const ParishClergy = () => {
  return (
    <div className="min-h-screen bg-[#fffaf5] text-[#2f2519]">
   <Navbar/>

     

      {/* Main Content */}
      <main className="max-w-4xl mx-auto my-10 bg-white rounded-xl shadow-md p-8 md:p-12">
        <h2 className="text-2xl font-semibold text-[#5a3c1a] border-b-2 border-[#e5c7a3] pb-2">
          Our Parish Clergy
        </h2>

        <section className="mt-6 space-y-6 leading-relaxed">
          <div>
            <p className="font-semibold text-[#a25c23]">Parish Priest</p>
            <p>Rev. Fr. John D’Souza</p>
            <p><strong>Mobile No:</strong> +91 98765 43210</p>
            <p><strong>Email:</strong> john.dsouza@example.com</p>
          </div>

          <div>
            <p className="font-semibold text-[#a25c23]">Asst. Parish Priest</p>
            <p>Rev. Fr. Antony Raj</p>
            <p><strong>Mobile No:</strong> +91 91234 56789</p>
            <p><strong>Email:</strong> antony.raj@example.com</p>
          </div>

          <div>
            <p className="font-semibold text-[#a25c23]">Resident Priest</p>
            <p>Rev. Fr. Michael Pinto</p>
            <p><strong>Mobile No:</strong> +91 90909 80808</p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="text-center text-[#6b4c2b] text-sm bg-[#fff4e7] border-t border-[#e0d4c5] py-4 mt-10">
        © 2025 St. Theresa’s Church | All Rights Reserved
      </footer>
    </div>
  );
};

export default ParishClergy;
