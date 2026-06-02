import ServiceLayout from "@/components/ServiceLayout";
import Link from "next/link";

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
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-3xl font-light mb-4">Premium Business Travel Solutions</h2>
            <div className="w-16 h-px bg-[#b4913c] mb-6" />
            <p className="text-white/70 leading-relaxed mb-4 font-['Montserrat',sans-serif]">
              First impressions matter in business. SKNYC Limo provides executive-level 
              transportation that reflects your company's commitment to excellence. 
              From airport transfers for visiting executives to client entertainment 
              and roadshows, we ensure punctuality, discretion, and comfort.
            </p>
            <p className="text-white/70 leading-relaxed font-['Montserrat',sans-serif]">
              Our corporate accounts benefit from streamlined billing, dedicated account 
              managers, and priority booking. Join hundreds of businesses that trust 
              SKNYC Limo for their transportation needs.
            </p>
          </div>
          <div className="bg-[#0d0d15] p-6 border border-[#b4913c]/20">
            <h3 className="text-xl mb-4 text-[#b4913c]">Corporate Benefits</h3>
            <ul className="space-y-3 text-white/70 font-['Montserrat',sans-serif]">
              <li className="flex items-center gap-3">📊 Monthly consolidated invoicing</li>
              <li className="flex items-center gap-3">👤 Dedicated account manager</li>
              <li className="flex items-center gap-3">⚡ Priority booking & dispatch</li>
              <li className="flex items-center gap-3">📱 Mobile app for easy booking</li>
              <li className="flex items-center gap-3">💼 Corporate events & roadshows</li>
              <li className="flex items-center gap-3">🔒 Confidentiality guaranteed</li>
            </ul>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {[
            {
              title: "Executive Sedans",
              desc: "BMW 7 Series, Mercedes S-Class for VIP executives.",
              icon: "💼"
            },
            {
              title: "Luxury SUVs",
              desc: "Cadillac Escalade, Lincoln Navigator for groups.",
              icon: "🚙"
            },
            {
              title: "Executive Vans",
              desc: "Mercedes Sprinter for team travel.",
              icon: "🚐"
            }
          ].map((item) => (
            <div key={item.title} className="p-6 border border-white/8 bg-white/[0.02] text-center">
              <div className="text-4xl mb-3">{item.icon}</div>
              <h3 className="text-xl mb-2">{item.title}</h3>
              <p className="text-white/50 text-sm font-['Montserrat',sans-serif]">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-[#b4913c]/10 to-transparent p-8 border-l-4 border-[#b4913c]">
          <p className="text-white/80 italic font-['Montserrat',sans-serif]">
            "SKNYC has been our exclusive transportation partner for over 3 years. 
            Their professionalism and reliability are unmatched. Our executives 
            always arrive on time and in style."
          </p>
          <p className="text-[#b4913c] mt-4 font-['Montserrat',sans-serif] text-sm">
            — Fortune 500 Executive
          </p>
        </div>
      </div>
    </ServiceLayout>
  );
}