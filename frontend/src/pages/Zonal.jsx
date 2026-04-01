import React from "react";
import Navbar from "../components/Navbar";

const zones = [
  {
    name: "St. Theresa Zone",
    image: "/images/zones/st-theresa.jpg",
    description:
      "A community inspired by the simplicity, love, and little way of St. Theresa.",
  },
  {
    name: "Velankanni Zone",
    image: "/images/zones/velankanni-matha.jpg",
    description:
      "Entrusted to Our Lady of Velankanni, a patroness of healing, hope, and care.",
  },
  {
    name: "St. Peter’s Zone",
    image: "/images/zones/st-peter.jpg",
    description:
      "Rooted in faith and leadership after St. Peter, the rock of the Church.",
  },
  {
    name: "St. Francis Xavier’s Zone",
    image: "/images/zones/st-francis-xavier.jpg",
    description:
      "Inspired by missionary zeal, evangelization, and service to all.",
  },
  {
    name: "Holy Family Zone",
    image: "/images/zones/holy-family.jpg",
    description:
      "Centered on prayer, family unity, love, and the model of Nazareth.",
  },
  {
    name: "St. Antony Zone",
    image: "/images/zones/st-antony.jpg",
    description:
      "A zone devoted to faith, humility, prayer, and compassionate service.",
  },
  {
    name: "St. Paul’s Zone",
    image: "/images/zones/st-paul.jpg",
    description:
      "Guided by courage, conversion, and witness to Christ in daily life.",
  },
  {
    name: "Sahaya Madha Zone",
    image: "/images/zones/sahaya-madha.jpg",
    description:
      "Dedicated to Mother Mary under the title of help, comfort, and protection.",
  },
  {
    name: "St. Thomas Zone",
    image: "/images/zones/st-thomas.jpg",
    description:
      "A community that grows in faith, truth, and devotion through St. Thomas.",
  },
  {
    name: "St. Alphonsa Zone",
    image: "/images/zones/st-alphonsa.jpg",
    description:
      "Inspired by sacrifice, holiness, patience, and trust in God.",
  },
  {
    name: "St. George Zone",
    image: "/images/zones/st-george.jpg",
    description:
      "A strong and faithful community inspired by courage and victory in Christ.",
  },
];

const Zones = () => {
  return (
    <div className="min-h-screen bg-[#fcf8f3] text-[#2f2519]">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#2f2519] text-white">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.05),rgba(255,255,255,0))]" />
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-20 text-center relative">
          <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium text-[#f3e4cf]">
            Parish Community
          </span>

          <h1 className="mt-5 text-4xl md:text-6xl font-extrabold uppercase tracking-[0.08em]">
            Our Zones
          </h1>

          <p className="mt-4 max-w-2xl mx-auto text-[#f3e4cf] text-base md:text-lg">
            “Zones represent different areas of our parish, bringing together nearby families as one faith community.”
          </p>
        </div>
      </section>

      {/* Zones */}
      <main className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {zones.map((zone, index) => (
            <article
              key={index}
              className="overflow-hidden rounded-[28px] border border-[#eadcc9] bg-white shadow-[0_12px_30px_rgba(47,37,25,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(47,37,25,0.12)]"
            >
              {/* IMAGE FIXED HERE */}
              <div className="bg-gradient-to-b from-[#f8efe4] to-[#f2e2cf] p-5">
                <div className="flex h-[320px] items-center justify-center overflow-hidden rounded-2xl bg-white">
                  <img
                    src={zone.image}
                    alt={zone.name}
                    className="max-h-full max-w-full object-contain"
                    onError={(e) => {
                      e.currentTarget.src = "/images/zones/default-saint.jpg";
                    }}
                  />
                </div>
              </div>

              <div className="p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#9a6a38]">
                  Zone {index + 1}
                </p>

                <h2 className="mt-2 text-2xl font-bold text-[#5a3c1a]">
                  {zone.name}
                </h2>

                <div className="mt-4 h-1 w-14 rounded-full bg-[#d7b187]" />

                <p className="mt-4 text-[15px] leading-7 text-[#6c5843]">
                  {zone.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </main>

      <footer className="border-t border-[#ead8c6] bg-[#2f2519] text-[#fff4e7]">
        <div className="mx-auto max-w-7xl px-6 py-6 text-center text-sm">
          © {new Date().getFullYear()} St. Therese of Child Jesus Church
        </div>
      </footer>
    </div>
  );
};

export default Zones;