import ServiceLayout from "@/components/ServiceLayout";

export const metadata = {
  title: "Airport Transfers NYC | JFK, LGA, EWR | NYLI Limo",
  description: "Premium NYC airport transfer service. Flight tracking, 60-min complimentary wait, no surge pricing. Serving JFK, LGA, EWR, HPN, ISP. Book online.",
};

export default function AirportTransferPage() {
  return (
    <ServiceLayout
      title="Airport Transfers"
      description="Seamless pickups and drop-offs at all major NYC airports with flight tracking and no hidden fees."
      heroImage="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1600&q=80"
      breadcrumbs={[
        { name: "Services", href: "/#services" },
        { name: "Airport Transfers" }
      ]}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          <div>
            <h2 className="text-2xl md:text-3xl font-['Cormorant_Garamond',serif] font-light mb-4">Stress-Free Airport Transportation</h2>
            <div className="w-8 h-px bg-[#C79A3C] mb-6" />
            <p className="text-[#847863] leading-relaxed mb-4 text-[13px] font-light">
              Traveling can be stressful enough without worrying about ground transportation. 
              NYLI Limo provides premium airport transfer services to and from all major 
              New York metropolitan airports. Our professional chauffeurs monitor your flight 
              in real-time, ensuring we&apos;re there when you land - even if your flight is delayed.
            </p>
            <p className="text-[#847863] leading-relaxed text-[13px] font-light">
              From business travelers needing efficiency to families requiring extra space, 
              our diverse fleet accommodates every need. Skip the taxi lines and ride in 
              luxury with NYLI Limo.
            </p>
          </div>
          <div className="border border-[#D4C9B8] p-8">
            <h3 className="text-lg font-['Cormorant_Garamond',serif] mb-5 text-[#18110D]">Service Features</h3>
            <ul className="space-y-3 text-[#847863] text-[12px]">
              <li className="flex items-center gap-3">
                <span className="text-[#C79A3C]">·</span> Flight tracking included
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#C79A3C]">·</span> 60 minutes complimentary wait time
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#C79A3C]">·</span> Luggage assistance
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#C79A3C]">·</span> Real-time driver updates
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#C79A3C]">·</span> No surge pricing - fixed rates
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#C79A3C]">·</span> Easy modifications up to 24 hours prior
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-20">
          <h2 className="text-2xl md:text-3xl font-['Cormorant_Garamond',serif] font-light text-center mb-12">Airports We Serve</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "JFK International Airport", code: "JFK", time: "45-60 mins from Midtown", image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&q=80" },
              { name: "LaGuardia Airport", code: "LGA", time: "30-40 mins from Midtown", image: "https://images.unsplash.com/photo-1570710891163-6d3b5c47248b?w=600&q=80" },
              { name: "Newark Liberty International", code: "EWR", time: "45-60 mins from Midtown", image: "https://images.unsplash.com/photo-1556388158-158ea5ccacbd?w=600&q=80" },
              { name: "Westchester County Airport", code: "HPN", time: "45-60 mins from Midtown", image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=600&q=80" },
              { name: "Long Island MacArthur Airport", code: "ISP", time: "75-90 mins from Midtown", image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=600&q=80" },
              { name: "Stewart International Airport", code: "SWF", time: "90+ mins from Midtown", image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=600&q=80" },
            ].map((airport) => (
              <div key={airport.code} className="border border-[#D4C9B8] overflow-hidden bg-[#F6F0E2]">
                <div className="h-44 overflow-hidden">
                  <img src={airport.image} alt={airport.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-['Cormorant_Garamond',serif] mb-1 text-[#18110D]">{airport.name}</h3>
                  <p className="text-[#C79A3C] text-[10px] mb-2 font-medium tracking-wider">{airport.code}</p>
                  <p className="text-[#847863] text-[11px]">⏱ {airport.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 border border-[#D4C9B8] p-8 lg:p-10">
          <h2 className="text-xl md:text-2xl font-['Cormorant_Garamond',serif] font-light mb-8 text-center">Sample Rates (One-Way)</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="border-b border-[#D4C9B8]">
                <tr className="text-left text-[#847863] text-[10px] uppercase tracking-wider font-medium">
                  <th className="pb-4">Vehicle</th>
                  <th className="pb-4">JFK</th>
                  <th className="pb-4">LGA</th>
                  <th className="pb-4">EWR</th>
                </tr>
              </thead>
              <tbody className="text-[#847863] text-[12px]">
                <tr className="border-b border-[#f4f3f0]">
                  <td className="py-4">Executive Sedan</td>
                  <td className="py-4">$95</td>
                  <td className="py-4">$85</td>
                  <td className="py-4">$110</td>
                </tr>
                <tr className="border-b border-[#f4f3f0]">
                  <td className="py-4">Luxury SUV</td>
                  <td className="py-4">$135</td>
                  <td className="py-4">$120</td>
                  <td className="py-4">$155</td>
                </tr>
                <tr>
                  <td className="py-4">Stretch Limousine</td>
                  <td className="py-4">$195</td>
                  <td className="py-4">$175</td>
                  <td className="py-4">$220</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-[#847863] text-[10px] text-center mt-6">*Rates exclude tolls, gratuity, and waiting time beyond 15 minutes. Contact for corporate rates.</p>
        </div>
      </div>
    </ServiceLayout>
  );
}
