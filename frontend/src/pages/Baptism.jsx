import React from "react";
import Navbar from "../components/Navbar";

const Baptism = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fffaf5] to-[#fff3e6] text-[#2f2519]">
      <Navbar />

      {/* Header */}
      <header className="relative overflow-hidden border-b border-[#ead8c6] bg-[#fff4e7]">
        <div className="max-w-5xl mx-auto px-6 py-14 text-center">
         

          <h1 className="mt-5 text-4xl md:text-5xl font-extrabold tracking-tight text-[#5a3c1a] uppercase">
            Baptism
          </h1>

          <p className="mt-4 text-lg md:text-xl italic text-[#7a5a36]">
            “The norms to be followed in administering the Sacrament of Baptism.”
          </p>
        </div>

        <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[#f4d1a8] blur-3xl opacity-30" />
      </header>

      {/* Content */}
      <main className="max-w-5xl mx-auto px-6 py-10">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Main content */}
          <section className="lg:col-span-2 space-y-8">
            {/* Basic norms */}
            <article className="rounded-2xl border border-[#f1e2d0] bg-white shadow-md">
              <div className="p-7 md:p-9">
                <h2 className="text-2xl font-bold text-[#5a3c1a]">
                  Norms for Administering Baptism
                </h2>

                <p className="mt-4 leading-relaxed text-[1.05rem] text-[#3a2b1f]">
                  Baptism is to be administered according to the rite prescribed in the
                  liturgical books except in the case of urgent necessity when only those
                  elements, which are required for the validity of the Sacrament, should
                  be observed. The current ritual book, Rite of Baptism of Children (“RBC”),
                  is to be used for Baptism of infants. Infants are those who have not yet
                  reached the age of reason (7 years old) and cannot profess their own faith.
                  All other individuals are to be considered adults, and the rites and policies
                  of the Rite of Christian Initiation of Adults (“RCIA”) must be followed.
                </p>
              </div>
            </article>

            {/* Infant baptism */}
            <article className="rounded-2xl border border-[#f1e2d0] bg-white shadow-md">
              <div className="p-7 md:p-9">
                <h2 className="text-2xl font-bold text-[#5a3c1a]">Infant Baptism</h2>

                <div className="mt-5 space-y-4 leading-relaxed text-[1.05rem] text-[#3a2b1f]">
                  <p>
                    In the case of infant Baptism, parishes are to provide a catechetical program
                    of instruction for parents and godparents preceding the Baptism. This proper
                    instruction includes the meaning of Baptism, obligations attached to it, the
                    scriptural foundation for the sacrament, the sacramental life of the Church,
                    and the rite of Baptism itself.
                  </p>

                  <div className="rounded-xl border border-[#f1e2d0] bg-[#fffaf5] p-5">
                    <p className="font-semibold text-[#5a3c1a]">Before the birth</p>
                    <p className="mt-2">
                      To provide sufficient time for instruction and choosing appropriate godparents,
                      parents are encouraged to prepare prior to the birth of their child.
                    </p>
                  </div>

                  <div className="rounded-xl border border-[#f1e2d0] bg-[#fffaf5] p-5">
                    <p className="font-semibold text-[#5a3c1a]">Baptismal name</p>
                    <p className="mt-2">
                      The baptismal name is not to be foreign to Christian sentiment. The name of a saint
                      is highly encouraged as the baptized is assured of his/her intercession.
                    </p>
                  </div>

                  <div className="rounded-xl border border-[#f1e2d0] bg-[#fffaf5] p-5">
                    <p className="font-semibold text-[#5a3c1a]">Ministers of Baptism</p>
                    <p className="mt-2">
                      The ordinary ministers of Baptism are bishops, priests and deacons. In case of necessity,
                      any lay person may baptize an individual, if a cleric is not available. To baptize and confirm
                      a child in danger of death, a priest uses the rite found in the Rite of Confirmation (RC).
                    </p>
                  </div>
                </div>
              </div>
            </article>

            {/* Responsibilities + conditional baptism */}
            <article className="rounded-2xl border border-[#f1e2d0] bg-white shadow-md">
              <div className="p-7 md:p-9">
                <h2 className="text-2xl font-bold text-[#5a3c1a]">
                  Responsibilities & Conditional Baptism
                </h2>

                <div className="mt-5 space-y-4 leading-relaxed text-[1.05rem] text-[#3a2b1f]">
                  <p>
                    Parents have a grave responsibility to present their infants for Baptism as soon
                    after the birth as possible. Consideration must be given first of all to the welfare
                    of the child who is not to be “deprived of the benefit of the sacrament”.
                  </p>

                  <div className="rounded-xl border border-[#f1e2d0] bg-[#fffaf5] p-5">
                    <p className="font-semibold text-[#5a3c1a]">Baptism is received once</p>
                    <p className="mt-2">
                      Since Baptism can be conferred validly only once, one is never to be re-baptized unless
                      there is serious reason to doubt either the fact or the validity of Baptism previously
                      administered. Only in these cases would Baptism be conferred conditionally.
                    </p>
                  </div>

                  <div className="rounded-xl border border-[#f1e2d0] bg-[#fffaf5] p-5">
                    <p className="font-semibold text-[#5a3c1a]">After emergency Baptism</p>
                    <p className="mt-2">
                      After an emergency Baptism has been administered and the danger of death has passed,
                      parents are encouraged to have their children receive the accompanying ceremonies of Baptism.
                      Priests and deacons are encouraged to remain in contact with the parents once the emergency
                      Baptism has been celebrated.
                    </p>
                  </div>
                </div>
              </div>
            </article>

            {/* Godparents + place + records */}
            <article className="rounded-2xl border border-[#f1e2d0] bg-white shadow-md">
              <div className="p-7 md:p-9">
                <h2 className="text-2xl font-bold text-[#5a3c1a]">
                  Records, Godparents & Place of Baptism
                </h2>

                <ul className="mt-5 space-y-3 text-[1.05rem] text-[#3a2b1f] leading-relaxed">
                  <li className="flex gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#c08b4a]" />
                    <span>
                      Baptisms performed under emergency conditions are to be recorded in the baptismal register
                      of the parish in which the Baptism took place.
                    </span>
                  </li>

                  <li className="flex gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#c08b4a]" />
                    <span>
                      Parish Priests are responsible to ensure that the Christian faithful are aware of the requirements
                      concerning godparents.
                    </span>
                  </li>

                  <li className="flex gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#c08b4a]" />
                    <span>
                      Only Catholics who are fully initiated, mature enough, living a life consistent with the faith,
                      and not bound by canonical sanction may act as godparents/sponsors. A baptized believing non-Catholic
                      may be admitted with a Catholic godparent as a witness of the fact of Baptism.
                    </span>
                  </li>

                  <li className="flex gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#c08b4a]" />
                    <span>
                      The proper place of Baptism is the Parish Church or an approved Oratory. If it is to take place away
                      from the parents’ Parish Church, consent of the proper Parish Priest is to be obtained.
                    </span>
                  </li>

                  <li className="flex gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#c08b4a]" />
                    <span>
                      Sponsors/parents are to be suitably instructed on the meaning of the Sacrament and obligations attached to it.
                    </span>
                  </li>

                  <li className="flex gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#c08b4a]" />
                    <span>
                      Sponsors above sixteen years should be Catholics who have received Confirmation and Holy Eucharist
                      and live a life of Christian faith befit the role.
                    </span>
                  </li>
                </ul>
              </div>
            </article>

            {/* Adult baptism */}
            <article className="rounded-2xl border border-[#f1e2d0] bg-white shadow-md">
              <div className="p-7 md:p-9">
                <h2 className="text-2xl font-bold text-[#5a3c1a]">Adult Baptism</h2>

                <div className="mt-5 space-y-4 leading-relaxed text-[1.05rem] text-[#3a2b1f]">
                  <div className="rounded-xl border border-[#f1e2d0] bg-[#fffaf5] p-5">
                    <p className="font-semibold text-[#5a3c1a]">Basic requirements</p>
                    <p className="mt-2">
                      For adult Baptism, the person should obtain a court affidavit stating his/her desire to be baptized.
                      He/She must be adequately instructed and tested in the Christian life in the course of catechumenate
                      and express sorrow for personal sins.
                    </p>
                  </div>

                  <div className="rounded-xl border border-[#f1e2d0] bg-[#fffaf5] p-5">
                    <p className="font-semibold text-[#5a3c1a]">Requirements checklist</p>
                    <ol className="mt-3 list-decimal pl-5 space-y-2">
                      <li>
                        Be aware that baptizing a non-Christian is a sensitive issue even though an individual is free to embrace a faith.
                      </li>
                      <li>
                        A handwritten letter clearly expressing the decision to embrace the Catholic faith, reasons, and stating the person is
                        of sound mind and not forced; attested by two witnesses (preferably family) with signature, name, and address.
                      </li>
                      <li>An affidavit as per the law of the land.</li>
                      <li>
                        The Parish Priest where the marriage is to be blessed should ensure the non-Catholic party is adequately instructed before
                        receiving the sacraments.
                      </li>
                      <li>
                        Proof of date of birth (or written statement from a parent if proof is unavailable, consistent with school/government records).
                      </li>
                      <li>
                        Instructions in the Catechism and Sacraments lasting at least three months, and a letter from the instructor as proof.
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </article>

            {/* Matter & form */}
            <article className="rounded-2xl border border-[#f1e2d0] bg-white shadow-md">
              <div className="p-7 md:p-9">
                <h2 className="text-2xl font-bold text-[#5a3c1a]">
                  Matter & Form of the Sacrament
                </h2>

                <div className="mt-5 space-y-4 leading-relaxed text-[1.05rem] text-[#3a2b1f]">
                  <div className="rounded-xl border border-[#f1e2d0] bg-[#fffaf5] p-5">
                    <p className="font-semibold text-[#5a3c1a]">Valid matter</p>
                    <p className="mt-2">
                      The Matter of the Sacrament of Baptism is natural water. Rain water, water from ice, snow,
                      hailstones, dew, distilled water, mineral water, salt water are all valid matter.
                      Wine, oil, soup, milk, blood, juice from fruits, etc. are not valid matter.
                    </p>
                  </div>

                  <div className="rounded-xl border border-[#f1e2d0] bg-[#fffaf5] p-5">
                    <p className="font-semibold text-[#5a3c1a]">Blessing of water</p>
                    <p className="mt-2">
                      The water used in Baptism is specially blessed. Water blessed at the Easter Vigil should
                      as far as possible be kept and used during the Easter season. Outside the Easter season,
                      it is desirable the water be blessed for each occasion.
                    </p>
                  </div>

                  <div className="rounded-xl border border-[#f1e2d0] bg-[#fffaf5] p-5">
                    <p className="font-semibold text-[#5a3c1a]">Immersion or infusion</p>
                    <p className="mt-2">
                      Either immersion (symbol of participation in Christ’s death and resurrection) or infusion may lawfully be used.
                      For infusion to be certainly valid, the water should touch the head (preferably the forehead if hair is thick).
                      Water should flow in a way that signifies washing.
                    </p>
                  </div>

                  <div className="rounded-xl border border-[#f1e2d0] bg-[#fffaf5] p-5">
                    <p className="font-semibold text-[#5a3c1a]">Formula (Latin Church)</p>
                    <p className="mt-2 italic">
                      “N. (John, Mary…), I baptize you in the name of the Father, and of the Son, and of the Holy Spirit.”
                    </p>
                  </div>
                </div>
              </div>
            </article>
          </section>

          {/* Sidebar */}
          <aside className="space-y-8">
    
            
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

export default Baptism;