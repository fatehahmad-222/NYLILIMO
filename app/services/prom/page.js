import ServiceLayout from "@/components/ServiceLayout";

export const metadata = {
  title: "Prom & Homecoming Limo Service NYC | Safe Luxury | NYLI Limo",
  description: "Arrive like royalty at prom or homecoming. Safe, stylish, supervised luxury transportation. Packages for groups. NYC's trusted prom limousine service.",
};

export default function PromPage() {
  return (
    <ServiceLayout
      title="Prom & Homecoming"
      description="Arrive like royalty. Safe, stylish, and supervised — creating memories that last a lifetime."
      heroImage="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=1600&q=80"
      breadcrumbs={[
        { name: "Services", href: "/#services" },
        { name: "Prom & Homecoming" }
      ]}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-20">
          <div>
            <h2 className="text-2xl md:text-3xl font-['Cormorant_Garamond',serif] font-light mb-4">Make Your Prom Night Unforgettable</h2>
            <div className="w-8 h-px bg-[#C79A3C] mb-6" />
            <p className="text-[#847863] leading-relaxed mb-4 text-[13px] font-light">
              Prom night is a milestone celebration. NYLI Limo provides safe, 
              stylish transportation that lets you and your friends arrive in 
              ultimate style. Our professional chauffeurs prioritize safety 
              while ensuring a fun, memorable experience.
            </p>
            <p className="text-[#847863] leading-relaxed text-[13px] font-light">
              From stretch limousines to party buses, we have options for groups 
              of all sizes. All our drivers undergo background checks and are 
              trained in youth safety protocols, giving parents peace of mind.
            </p>
          </div>
          <div className="border border-[#D4C9B8] p-8">
            <h3 className="text-lg font-['Cormorant_Garamond',serif] mb-5 text-[#18110D]">Prom Package Features</h3>
            <ul className="space-y-3 text-[#847863] text-[12px]">
              <li className="flex items-center gap-3">
                <span className="text-[#C79A3C]">·</span> Premium sound system with Bluetooth
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#C79A3C]">·</span> LED mood lighting
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#C79A3C]">·</span> Photo-friendly interior
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#C79A3C]">·</span> Complimentary non-alcoholic beverages
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#C79A3C]">·</span> Professional, vetted chauffeurs
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#C79A3C]">·</span> GPS tracking for parents
              </li>
            </ul>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {[
            { capacity: "6-8 Students", vehicle: "Luxury SUV / Stretch Limo", price: "$450+", features: "Perfect for small groups" },
            { capacity: "10-14 Students", vehicle: "Lincoln Stretch / Sprinter", price: "$650+", features: "Most popular choice" },
            { capacity: "15-25 Students", vehicle: "Party Bus", price: "$850+", features: "Ultimate party experience" }
          ].map((pkg) => (
            <div key={pkg.capacity} className="p-8 border border-[#D4C9B8] text-center">
              <div className="text-2xl font-['Cormorant_Garamond',serif] text-[#C79A3C] mb-3">{pkg.capacity}</div>
              <h3 className="text-base mb-3 text-[#18110D] font-['Cormorant_Garamond',serif]">{pkg.vehicle}</h3>
              <div className="text-xl text-[#18110D] mb-3 font-['Cormorant_Garamond',serif]">{pkg.price}</div>
              <p className="text-[#847863] text-[11px]">{pkg.features}</p>
            </div>
          ))}
        </div>

        <div className="border border-[#D4C9B8] p-8 lg:p-10 bg-[#EDE7DB]">
          <h3 className="text-lg font-['Cormorant_Garamond',serif] mb-4 text-center">Safety First</h3>
          <p className="text-[#847863] text-center max-w-2xl mx-auto text-[12px]">
            All our chauffeurs are fully licensed, insured, and background-checked. 
            We maintain the highest safety standards and vehicles are inspected 
            before every event. Parents can track the journey in real-time.
          </p>
        </div>
      </div>
    </ServiceLayout>
  );
}
