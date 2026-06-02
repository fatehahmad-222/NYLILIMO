import ServiceLayout from "@/components/ServiceLayout";

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
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-3xl font-light mb-4">Make Your Prom Night Unforgettable</h2>
            <div className="w-16 h-px bg-[#b4913c] mb-6" />
            <p className="text-white/70 leading-relaxed mb-4 font-['Montserrat',sans-serif]">
              Prom night is a milestone celebration. SKNYC Limo provides safe, 
              stylish transportation that lets you and your friends arrive in 
              ultimate style. Our professional chauffeurs prioritize safety 
              while ensuring a fun, memorable experience.
            </p>
            <p className="text-white/70 leading-relaxed font-['Montserrat',sans-serif]">
              From stretch limousines to party buses, we have options for groups 
              of all sizes. All our drivers undergo background checks and are 
              trained in youth safety protocols, giving parents peace of mind.
            </p>
          </div>
          <div className="bg-[#0d0d15] p-6 border border-[#b4913c]/20">
            <h3 className="text-xl mb-4 text-[#b4913c]">Prom Package Features</h3>
            <ul className="space-y-3 text-white/70 font-['Montserrat',sans-serif]">
              <li className="flex items-center gap-3"> Premium sound system with Bluetooth</li>
              <li className="flex items-center gap-3"> LED mood lighting</li>
              <li className="flex items-center gap-3"> Photo-friendly interior</li>
              <li className="flex items-center gap-3"> Complimentary non-alcoholic beverages</li>
              <li className="flex items-center gap-3"> Professional, vetted chauffeurs</li>
              <li className="flex items-center gap-3"> GPS tracking for parents</li>
            </ul>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {[
            {
              capacity: "6-8 Students",
              vehicle: "Luxury SUV / Stretch Limo",
              price: "$450+",
              features: "Perfect for small groups"
            },
            {
              capacity: "10-14 Students",
              vehicle: "Lincoln Stretch / Sprinter",
              price: "$650+",
              features: "Most popular choice"
            },
            {
              capacity: "15-25 Students",
              vehicle: "Party Bus",
              price: "$850+",
              features: "Ultimate party experience"
            }
          ].map((pkg) => (
            <div key={pkg.capacity} className="p-6 border border-white/8 bg-white/[0.02] text-center">
              <div className="text-3xl font-light text-[#b4913c] mb-2">{pkg.capacity}</div>
              <h3 className="text-lg mb-2">{pkg.vehicle}</h3>
              <div className="text-2xl text-[#b4913c] mb-3">{pkg.price}</div>
              <p className="text-white/50 text-sm">{pkg.features}</p>
            </div>
          ))}
        </div>

        <div className="bg-[#b4913c]/10 p-8 border border-[#b4913c]/30">
          <h3 className="text-xl font-light mb-4 text-center">Safety First</h3>
          <p className="text-white/70 text-center max-w-2xl mx-auto font-['Montserrat',sans-serif]">
            All our chauffeurs are fully licensed, insured, and background-checked. 
            We maintain the highest safety standards and vehicles are inspected 
            before every event. Parents can track the journey in real-time.
          </p>
        </div>
      </div>
    </ServiceLayout>
  );
}