import React from "react";
import Navbar from "../components/Navbar";

const Confirmation = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fffaf5] to-[#fff3e6] text-[#2f2519]">
      <Navbar />

      {/* Header */}
      <header className="relative overflow-hidden border-b border-[#ead8c6] bg-[#fff4e7]">
        <div className="max-w-5xl mx-auto px-6 py-14 text-center">
        

          <h1 className="mt-5 text-4xl md:text-5xl font-extrabold tracking-tight text-[#5a3c1a] uppercase">
            Confirmation
          </h1>

          <p className="mt-4 text-lg md:text-xl italic text-[#7a5a36]">
            THE SACRAMENT OF CONFIRMATION: THE NORMS TO BE FOLLOWED FOR ADMINISTERING AND
            RECEPTION OF THE SACRAMENT.
          </p>
        </div>

        <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[#f4d1a8] blur-3xl opacity-30" />
      </header>

      {/* Content */}
      <main className="max-w-5xl mx-auto px-6 py-10">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Main */}
          <section className="lg:col-span-2 space-y-8">
            {/* What is Confirmation */}
            <article className="rounded-2xl border border-[#f1e2d0] bg-white shadow-md">
              <div className="p-7 md:p-9">
                <h2 className="text-2xl font-bold text-[#5a3c1a]">
                  Meaning of the Sacrament
                </h2>

                <p className="mt-4 leading-relaxed text-[1.05rem] text-[#3a2b1f]">
                  The Sacrament of Confirmation is a call to spiritual maturity in Christ with the power
                  and the gifts of the Holy Spirit. The confirmed are made strong and obliged by word
                  and deed to witness to Christ and to spread and defend the Faith.
                </p>

                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border border-[#f1e2d0] bg-[#fffaf5] p-5">
                    <p className="font-semibold text-[#5a3c1a]">Age in our Archdiocese</p>
                    <p className="mt-2 text-[#3a2b1f]">
                      Confirmation is to be given only to those who have completed the age of 12 (twelve).
                    </p>
                  </div>

                  <div className="rounded-xl border border-[#f1e2d0] bg-[#fffaf5] p-5">
                    <p className="font-semibold text-[#5a3c1a]">Obligation & preparation</p>
                    <p className="mt-2 text-[#3a2b1f]">
                      The faithful are bound to receive it at the proper time. Parish Priests are to see
                      that the faithful are properly instructed to receive this Sacrament.
                    </p>
                  </div>
                </div>
              </div>
            </article>

            {/* Norms / ministers / guidance */}
            <article className="rounded-2xl border border-[#f1e2d0] bg-white shadow-md">
              <div className="p-7 md:p-9">
                <h2 className="text-2xl font-bold text-[#5a3c1a]">
                  Norms & Pastoral Guidance
                </h2>

                <ul className="mt-6 space-y-3 text-[1.05rem] text-[#3a2b1f] leading-relaxed">
                  <li className="flex gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#c08b4a]" />
                    <span>
                      Priests are to make suitable provision for the catechesis of the parents of those to be confirmed.
                    </span>
                  </li>

                  <li className="flex gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#c08b4a]" />
                    <span>
                      The Bishop is the ordinary minister of Confirmation. In case of necessity he may grant to Vicar General
                      or priest the faculty to administer the Sacrament.
                    </span>
                  </li>

                  <li className="flex gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#c08b4a]" />
                    <span>
                      It is advisable not to combine Confirmation with Holy Communion or other celebrations such as Parish Feast,
                      Jubilee Celebration, etc., so that due importance is given to the Sacraments and to the candidates receiving them.
                    </span>
                  </li>

                  <li className="flex gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#c08b4a]" />
                    <span>
                      The priest by virtue of his office or by mandate of the Diocesan Bishop who baptises an adult may also administer
                      Confirmation to that person on the same occasion.
                    </span>
                  </li>

                  <li className="flex gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#c08b4a]" />
                    <span>
                      The Parish Priest must notify the Parish Priest of the place of Baptism of the confirmed, so that it may be recorded
                      in the baptismal register.
                    </span>
                  </li>
                </ul>

                <div className="mt-7 rounded-xl border border-[#f1e2d0] bg-[#fffaf5] p-5">
                  <p className="font-semibold text-[#5a3c1a]">Note</p>
                  <p className="mt-2 text-[1.03rem] leading-relaxed text-[#3a2b1f]">
                    It is advisable that every child who will be administered the Sacrament of Confirmation in the Archdiocese be commissioned
                    to read, proclaim and bear witness to the Word of God, by offering them a copy of the Holy Bible at a small ceremony during
                    the Mass, after the Communion Prayer.
                  </p>
                </div>
              </div>
            </article>
          </section>

          {/* Sidebar */}
          <aside className="space-y-8">
            

            <div className="rounded-2xl border border-[#ead8c6] bg-white shadow-md">
              <div className="p-7">
                <h3 className="text-xl font-bold text-[#5a3c1a]">Program Details</h3>
                <p className="mt-3 text-[1.02rem] leading-relaxed text-[#3a2b1f]">
                  Please contact the Faith Formation office for program details.
                </p>

               
              </div>
            </div>

           
          </aside>
        </div>
      </main>

      {/* Footer */}
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

export default Confirmation;