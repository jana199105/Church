import React from "react";
import Navbar from "../components/Navbar";

const sectionTitle = "text-[28px] font-semibold text-[#7b4a12] mb-4";
const paragraph = "text-[18px] leading-9 text-[#2f2519]";

const Marriage = () => {
  return (
    <div className="min-h-screen bg-[#f7f2ec] text-[#2f2519]">
      <Navbar />

      <header className="bg-[#e9dfd3] border-b border-[#d8c7b4] text-center py-6">
        <h1 className="text-5xl font-bold text-[#7b4a12] uppercase tracking-wide">
          Marriage
        </h1>
        <p className="italic text-[#9a6222] mt-6 text-[18px]">
          “What God has joined together, no human being must separate.” — Mark 10:9
        </p>
      </header>

      <main className="w-full">
        <section className="bg-[#f3efea] border-b border-[#d8c7b4] px-6 py-5 space-y-5">
          <p className={paragraph}>
            The Sacrament of Matrimony unites a man and woman in lifelong covenantal
            love, mirroring Christ’s love for His Church. It is both a vocation and a
            sacrament of service.
          </p>

          <p className={paragraph}>
            Couples preparing for marriage participate in pre-Cana programs or marriage
            preparation sessions, focusing on communication, faith, and the sacramental
            meaning of Christian marriage.
          </p>
        </section>

        <section className="bg-[#efe8df] border-b border-[#d8c7b4] px-6 py-5 text-center">
          <p className="text-[18px] leading-8 text-[#7b4a12] max-w-3xl mx-auto">
            Couples should contact the parish at least 3 months
            <br />
            before the desired wedding date.
          </p>
        </section>

        <section className="px-6 py-10 max-w-6xl mx-auto space-y-10">
          <section>
            <h2 className={sectionTitle}>Engagement or Betrothal</h2>
            <div className="space-y-4">
              <p className={paragraph}>
                Engagement is a formal promise of marriage by the partners. It is a
                bilateral promise between a man and a woman to enter into marriage
                within the time agreed upon by them and according to the law of the Church.
              </p>
              <p className={paragraph}>
                Normally the engagement ceremony is held after the pre-nuptial enquiry.
                Engagement does not itself create a legal obligation to celebrate the marriage.
                The promise made during engagement and the matrimonial consent exchanged
                at marriage are juridically different.
              </p>
              <p className={paragraph}>
                Although the promise of engagement carries moral seriousness, it does not
                legally bind a person to marry against his or her will.
              </p>
            </div>
          </section>

          <section>
            <h2 className={sectionTitle}>Banns</h2>
            <div className="space-y-4">
              <p className={paragraph}>
                Banns are the public notification of the proposed marriage and form part
                of the pre-nuptial enquiry. They are intended to help establish freedom
                to marry before the celebration of marriage.
              </p>
              <ul className="list-disc pl-8 space-y-3 text-[18px] leading-9 text-[#2f2519]">
                <li>At least two banns should normally be published before marriage.</li>
                <li>They may be read in the church or displayed on the parish notice board.</li>
                <li>Ordinarily, the banns should be published at least two weeks before the wedding.</li>
                <li>Dispensation from banns is not normally given, except in cases of necessity.</li>
                <li>If no banns are read, freedom to marry may be established through written proof from reliable witnesses.</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className={sectionTitle}>Permission Required in Certain Cases</h2>
            <div className="space-y-4">
              <p className={paragraph}>
                In some situations, the permission of the local Ordinary is required
                before blessing or assisting at a marriage. These are cases where there
                may be particular pastoral, juridical, or ecclesial concerns.
              </p>
              <ul className="list-disc pl-8 space-y-3 text-[18px] leading-9 text-[#2f2519]">
                <li>Marriage of a transient person who has no domicile or quasi-domicile.</li>
                <li>Marriage that cannot be recognized or celebrated according to civil law.</li>
                <li>Marriage of a person bound by obligations arising from a previous union.</li>
                <li>Marriage of a person who has publicly rejected the Catholic faith.</li>
                <li>Marriage of a person under ecclesiastical censure or prohibition.</li>
                <li>Marriage by proxy.</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className={sectionTitle}>Mixed Marriages</h2>
            <div className="space-y-4">
              <p className={paragraph}>
                For mixed marriages, prior permission from the local Ordinary is ordinarily
                required. The Catholic party is asked to remain faithful to the Catholic faith
                and to do all in his or her power to ensure the baptism and Christian upbringing
                of children.
              </p>
              <p className={paragraph}>
                The non-Catholic party should be informed about the nature of Christian marriage,
                the dignity of the sacrament, and the promises made by the Catholic party.
              </p>
            </div>
          </section>

          <section>
            <h2 className={sectionTitle}>Dispensation in Special Cases</h2>
            <div className="space-y-4">
              <p className={paragraph}>
                In certain situations, dispensations may be required, such as in the case
                of disparity of cult or dispensation from canonical form. These are granted
                only for serious reasons and according to Church law.
              </p>
              <p className={paragraph}>
                The future well-being of the family, the faith of the Catholic party, and
                the Christian upbringing of children are important considerations in such cases.
              </p>
            </div>
          </section>

          <section>
            <h2 className={sectionTitle}>Marriage Registration</h2>
            <div className="space-y-4">
              <p className={paragraph}>
                Marriage registration is mandatory. After the nuptial service, the parties
                sign the official Church marriage register and the required forms are completed
                for submission to the competent authorities.
              </p>
              <ul className="list-disc pl-8 space-y-3 text-[18px] leading-9 text-[#2f2519]">
                <li>The couple sign the Church marriage register after the nuptial service.</li>
                <li>The necessary forms are signed along with the witnesses.</li>
                <li>Returns are to be submitted within the prescribed period.</li>
                <li>One copy of the marriage certificate may also be sent to the diocesan office according to local practice.</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className={sectionTitle}>Fruitful Celebration of Marriage</h2>
            <div className="space-y-4">
              <p className={paragraph}>
                Christian marriage normally requires a liturgical celebration expressing its
                social, communal, ecclesial, and sacramental nature. The celebration should be
                simple, dignified, prayerful, and faithful to the norms of the Church.
              </p>
              <p className={paragraph}>
                The liturgy should involve the Christian community with full and meaningful
                participation of the bride and bridegroom, family members, witnesses, and the faithful.
              </p>
            </div>
          </section>

          <section>
            <h2 className={sectionTitle}>Pastoral Care After Marriage</h2>
            <div className="space-y-4">
              <p className={paragraph}>
                The Church continues to accompany married couples after the wedding day,
                especially during the first years of marriage. Couples may need encouragement,
                guidance, and support as they grow in family life and vocation.
              </p>
              <p className={paragraph}>
                Family ministry, counseling, seminars, and support from other Christian families
                can help couples live married love responsibly and deepen their communion with
                one another, the Church, and society.
              </p>
            </div>
          </section>
        </section>
              <section className="text-center py-6">
          <p className="text-[18px] text-[#7b4a12]">
            For more information, please contact the Parish Priest.
          </p>
        </section>
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

export default Marriage;
