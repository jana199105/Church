import React from "react";
import Navbar from "../components/Navbar";

const HolyCommunion = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fffaf5] to-[#fff3e6] text-[#2f2519]">
      <Navbar />

      {/* Header */}
      <header className="relative overflow-hidden border-b border-[#ead8c6] bg-[#fff4e7]">
        <div className="max-w-5xl mx-auto px-6 py-14 text-center">
         

          <h1 className="mt-5 text-4xl md:text-5xl font-extrabold tracking-tight text-[#5a3c1a] uppercase">
            Holy Communion
          </h1>

          <p className="mt-4 text-lg md:text-xl italic text-[#7a5a36]">
            “This is my body… This is my blood.” — Matthew 26:26
          </p>
        </div>

        {/* soft decorative blur */}
        <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[#f4d1a8] blur-3xl opacity-30" />
      </header>

      {/* Content */}
      <main className="max-w-5xl mx-auto px-6 py-10">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Main article */}
          <section className="lg:col-span-2">
            <article className="rounded-2xl border border-[#f1e2d0] bg-white shadow-md">
              <div className="p-7 md:p-9">
                <h2 className="text-2xl font-bold text-[#5a3c1a]">
                  Preparation for First Holy Communion
                </h2>

                <div className="mt-5 space-y-4 leading-relaxed text-[1.05rem] text-[#3a2d20]">
                  <p>
                    The Children are to be prepared for First Holy Communion when they
                    attain an age of reason. For Holy Communion to be administered to
                    children, it is required that they have sufficient knowledge and be
                    accurately prepared, so that according to their capacity they
                    understand what the ministry of Christ means and are able to receive
                    his Body and Blood with faith and devotion.
                  </p>

                  <div className="rounded-xl border border-[#f1e2d0] bg-[#fffaf5] p-5">
                    <p className="font-semibold text-[#5a3c1a]">
                      Special pastoral guidance
                    </p>
                    <p className="mt-2">
                      The Blessed Sacrament may, however, be administered to children on
                      death bed if they can distinguish the Body of Christ from ordinary
                      food and receive communion with reverence (CIC c. 913).
                    </p>
                  </div>

                  <div className="rounded-xl border border-[#f1e2d0] bg-[#fffaf5] p-5">
                    <p className="font-semibold text-[#5a3c1a]">
                      Recommended age (Archdiocese of Bangalore)
                    </p>
                    <p className="mt-2">
                      It is recommended that the Sacraments of Penance (Reconciliation)
                      and First Holy Communion be given to children when they are about
                      seven (7) years old.
                    </p>
                  </div>

                  <div className="rounded-xl border border-[#f1e2d0] bg-[#fffaf5] p-5">
                    <p className="font-semibold text-[#5a3c1a]">
                      Holy Communion Register
                    </p>
                    <p className="mt-2">
                      A Holy Communion Register is to be maintained in every parish.
                      Often parents migrating to other parishes/dioceses/countries request
                      a certificate of Holy Communion to administer other sacraments.
                      Without a communion register, it is not possible to issue a valid
                      certificate. The register is printed and made available at the
                      Paalanaa Bhavana book shop (Archdiocesan Pastoral Centre).
                    </p>
                  </div>
                </div>
              </div>
            </article>

            {/* Priests norms */}
            <article className="mt-8 rounded-2xl border border-[#f1e2d0] bg-white shadow-md">
              <div className="p-7 md:p-9">
                <h2 className="text-2xl font-bold text-[#5a3c1a]">
                  Norms for Priests Regarding the Blessed Eucharist
                </h2>

                <p className="mt-4 leading-relaxed text-[1.05rem] text-[#3a2d20]">
                  The Eucharistic Sacrifice, the memorial of the death and resurrection
                  of the Lord, in which the Sacrifice of the Cross is forever perpetuated,
                  is the summit and the source of all worship and Christian life (CIC c. 897).
                </p>

                <ul className="mt-6 space-y-3 text-[1.05rem] text-[#3a2d20] leading-relaxed">
                  <li className="flex gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#c08b4a]" />
                    <span>
                      A priest is entitled to offer Mass for anyone living or dead (CIC c. 901).
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#c08b4a]" />
                    <span>
                      Priests are to celebrate frequently; daily celebration is earnestly recommended
                      (CIC c. 904).
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#c08b4a]" />
                    <span>
                      For a good reason, priests may celebrate Mass twice in one day; even three
                      times on Sundays/holydays if pastoral need requires it (CIC c. 905).
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#c08b4a]" />
                    <span>
                      Catholic priests are forbidden to concelebrate the Eucharist with ministers
                      of communities not in full communion with the Catholic Church (CIC c. 908).
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#c08b4a]" />
                    <span>
                      A priest is to prepare by prayer before the Eucharist and make thanksgiving
                      afterwards (CIC c. 909).
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#c08b4a]" />
                    <span>
                      Daily Mass in the parish should not be cancelled except for a grave reason.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#c08b4a]" />
                    <span>
                      Priests are required to wear the prescribed liturgical vestments for Mass (CIC c. 929).
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#c08b4a]" />
                    <span>
                      The duty and right to bring the Blessed Eucharist as Viaticum belongs to the
                      priests in the parish; it is not to be unduly delayed (CIC c. 911, 922).
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#c08b4a]" />
                    <span>
                      A priest who celebrates a second/third Mass the same day (apart from Christmas Day)
                      may retain the stipend for only one Mass (CIC c. 951§1).
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#c08b4a]" />
                    <span>
                      If stipends are accepted for more than one Mass, bination/trination stipends must
                      be sent to the Diocesan procure for upkeep of seminarians.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#c08b4a]" />
                    <span>
                      A priest who concelebrated a second Mass the same day may not accept an offering
                      for that Mass (CIC c. 951§2).
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#c08b4a]" />
                    <span>
                      A priest not known to the Parish Priest may celebrate if he presents commendatory
                      letters (not more than a year old) or it is prudently judged he is not impeded
                      (CIC c. 903).
                    </span>
                  </li>
                </ul>
              </div>
            </article>
          </section>

          {/* Sidebar */}
          <aside className="space-y-8">
            {/* Mentally challenged */}
            <div className="rounded-2xl border border-[#f1e2d0] bg-white shadow-md">
              <div className="p-7">
                <h3 className="text-xl font-bold text-[#5a3c1a]">
                  Communion & Confirmation for the Mentally Challenged
                </h3>

                <div className="mt-4 space-y-4 text-[1.02rem] leading-relaxed text-[#3a2d20]">
                  <p>
                    The Blessed Eucharist may be administered to children in danger of death if they
                    can distinguish the Body of Christ from ordinary food and receive it with reverence.
                    Similar considerations could be invoked for the mentally challenged even outside
                    danger of death (CIC c. 913§2).
                  </p>

                  <p>
                    For Confirmation, valid reception requires that the candidate be validly baptised.
                    The use of reason is not necessary for validity; hence even the profoundly mentally
                    challenged can, and should, receive the Sacrament (CIC c. 889§1).
                  </p>
                </div>
              </div>
            </div>

            {/* Call to action */}
            <div className="rounded-2xl border border-[#ead8c6] bg-[#fffaf5] shadow-sm">
              <div className="p-7">
                <h3 className="text-xl font-bold text-[#5a3c1a]">Need Enrollment Help?</h3>
                <p className="mt-3 text-[1.02rem] leading-relaxed text-[#3a2d20]">
                  For enrollment information, contact our Faith Formation office.
                </p>
               
              </div>
            </div>
          </aside>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-10 border-t border-[#ead8c6] bg-[#2f2519] text-[#fff4e7]">
        <div className="max-w-5xl mx-auto px-6 py-6 text-center text-sm">
          © {new Date().getFullYear()} St. Therese of Child Jesus Church
        </div>
      </footer>
    </div>
  );
};

export default HolyCommunion;