import ServiceLayout from "@/components/ServiceLayout";

export const metadata = {
  title: "Corporate Transportation NYC | Executive Chauffeur Service | NYLI Limo",
  description: "Executive corporate transportation in NYC. C-suite travel, client entertainment, roadshows. Punctuality guaranteed. Dedicated account managers.",
};

export default function CorporatePage() {
  return (
    <ServiceLayout
      title="Corporate Transportation"
      description="Executive-grade rides for C-suite travel, client entertainment, and roadshows."
      heroImage="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=1600&q=80"
      breadcrumbs={[
        { name: "Services", href: "/#services" },
        { name: "Corporate Transportation" }
      ]}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-20">
          <div>
            <h2 className="text-2xl md:text-3xl font-['Cormorant_Garamond',serif] font-light mb-4">Premium Business Travel Solutions</h2>
            <div className="w-8 h-px bg-[#C79A3C] mb-6" />
            <p className="text-[#847863] leading-relaxed mb-4 text-[13px] font-light">
              First impressions matter in business. NYLI Limo provides executive-level 
              transportation that reflects your company&apos;s commitment to excellence. 
              From airport transfers for visiting executives to client entertainment 
              and roadshows, we ensure punctuality, discretion, and comfort.
            </p>
            <p className="text-[#847863] leading-relaxed text-[13px] font-light">
              Our corporate accounts benefit from streamlined billing, dedicated account 
              managers, and priority booking. Join hundreds of businesses that trust 
              NYLI Limo for their transportation needs.
            </p>
          </div>
          <div className="border border-[#D4C9B8] p-8">
            <h3 className="text-lg font-['Cormorant_Garamond',serif] mb-5 text-[#18110D]">Corporate Benefits</h3>
            <ul className="space-y-3 text-[#847863] text-[12px]">
              <li className="flex items-center gap-3">
                <span className="text-[#C79A3C]">·</span> Monthly consolidated invoicing
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#C79A3C]">·</span> Dedicated account manager
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#C79A3C]">·</span> Priority booking &amp; dispatch
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#C79A3C]">·</span> Mobile app for easy booking
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#C79A3C]">·</span> Corporate events &amp; roadshows
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#C79A3C]">·</span> Confidentiality guaranteed
              </li>
            </ul>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {[
            { title: "Executive Sedans", desc: "BMW 7 Series, Mercedes S-Class for VIP executives.", icon: "💼" },
            { title: "Luxury SUVs", desc: "Cadillac Escalade, Lincoln Navigator for groups.", icon: "🚙" },
            { title: "Executive Vans", desc: "Mercedes Sprinter for team travel.", icon: "🚐" }
          ].map((item) => (
            <div key={item.title} className="p-8 border border-[#D4C9B8] text-center">
              <span className="text-2xl mb-4 block opacity-40">{item.icon}</span>
              <h3 className="text-lg font-['Cormorant_Garamond',serif] mb-2 text-[#18110D]">{item.title}</h3>
              <p className="text-[#847863] text-[12px]">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="border-l-2 border-[#C79A3C] p-8 lg:p-10 bg-[#EDE7DB]">
          <p className="text-[#847863] italic text-[13px] leading-relaxed">
            &quot;NYLI has been our exclusive transportation partner for over 3 years. 
            Their professionalism and reliability are unmatched. Our executives 
            always arrive on time and in style.&quot;
          </p>
          <p className="text-[#C79A3C] mt-4 text-[10px] tracking-wider uppercase font-medium">
            — Fortune 500 Executive
          </p>
        </div>
      </div>
    </ServiceLayout>
  );
}
