import React from "react";
import Navbar from "../components/Navbar";
import "../Sacraments.css"; // optional if you want to add custom CSS

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
           “The Sacraments of the New Testament were instituted by Christ the Lord and entrusted to the Church. As actions of Christ and of the Church, they are signs and means by which faith is expressed and strengthened, worship is offered to God and our sanctification is brought about
           .Sacraments may not be denied to those who opportunely ask for them, are properly disposed and are not prohibited by law from receiving them.
            Catholic ministers may lawfully administer the Sacraments only to Catholic members of Christs faithful, who likewise may lawfully receive them only from Catholic ministers except in certain special cases when the Sacraments of Penance, the Eucharist and Anointing of the Sick may be received from Non-Catholic ministers
            in whose churches these Sacraments are valid.
            For the administration of the Sacraments, the minister may not ask for anything beyond the offerings which are determined by the competent authority and he must always ensure that the needy are not deprived of the help of the Sacraments by reason of poverty.”
             “Pastors of souls and other members of Christ’s faithful, according to their respective ecclesiastical function, have a duty to take care that those who seek the Sacraments are prepared to receive them by proper evangelization and catechetical instruction, attentive to the norms issued by competent authority.”
        </p>
      </header>

            {/* Page Content */}
      <main className="max-w-5xl mx-auto mt-14 px-6">

        

        {/* Sacraments Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

          <a
            href="/baptism"
            className="sacrament-card"
          >
            Baptism
          </a>

          <a href="/reconciliation" className="sacrament-card">
            Reconciliation
          </a>

          <a href="/holy-communion" className="sacrament-card">
            Holy Communion
          </a>

          <a href="/confirmation" className="sacrament-card">
            Confirmation
          </a>

          <a href="/marriage" className="sacrament-card">
            Marriage
          </a>

          <a href="/holy-orders" className="sacrament-card">
            Holy Orders
          </a>

          <a href="/anointing" className="sacrament-card">
            Anointing of the Sick
          </a>

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
