import ServiceLayout from "@/components/ServiceLayout";
import Link from "next/link";
import Image from "next/image";

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
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Overview */}
        <div className="grid md:grid-cols-2 gap-12 ">
          <div>
            <h2 className="text-3xl font-light mb-4">Stress-Free Airport Transportation</h2>
            <div className="w-16 h-px bg-[#b4913c] mb-6" />
            <p className="text-white/70 leading-relaxed mb-4 font-['Montserrat',sans-serif]">
              Traveling can be stressful enough without worrying about ground transportation. 
              SKNYC Limo provides premium airport transfer services to and from all major 
              New York metropolitan airports. Our professional chauffeurs monitor your flight 
              in real-time, ensuring we're there when you land - even if your flight is delayed.
            </p>
            <p className="text-white/70 leading-relaxed font-['Montserrat',sans-serif]">
              From business travelers needing efficiency to families requiring extra space, 
              our diverse fleet accommodates every need. Skip the taxi lines and ride in 
              luxury with SKNYC Limo.
            </p>
          </div>
          <div className="bg-[#0d0d15] p-6 border border-[#b4913c]/20">
            <h3 className="text-xl mb-4 text-[#b4913c]">Service Features</h3>
            <ul className="space-y-3 text-white/70 font-['Montserrat',sans-serif]">
              <li className="flex items-center gap-3"> Flight tracking included</li>
              <li className="flex items-center gap-3"> 60 minutes complimentary wait time</li>
              <li className="flex items-center gap-3"> Luggage assistance</li>
              <li className="flex items-center gap-3"> Real-time driver updates</li>
              <li className="flex items-center gap-3"> No surge pricing - fixed rates</li>
              <li className="flex items-center gap-3"> Easy modifications up to 24 hours prior</li>
            </ul>
          </div>
        </div>

        {/* Airports Served */}
        <div className="mb-20">
          <h2 className="text-3xl font-light text-center mb-12">Airports We Serve</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "JFK International Airport", code: "JFK", time: "45-60 mins from Midtown", image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&q=80" },
              { name: "LaGuardia Airport", code: "LGA", time: "30-40 mins from Midtown", image: "https://images.unsplash.com/photo-1570710891163-6d3b5c47248b?w=600&q=80" },
              { name: "Newark Liberty International", code: "EWR", time: "45-60 mins from Midtown", image: "https://images.unsplash.com/photo-1556388158-158ea5ccacbd?w=600&q=80" },
              { name: "Westchester County Airport", code: "HPN", time: "45-60 mins from Midtown", image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=600&q=80" },
              { name: "Long Island MacArthur Airport", code: "ISP", time: "75-90 mins from Midtown", image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=600&q=80" },
              { name: "Stewart International Airport", code: "SWF", time: "90+ mins from Midtown", image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=600&q=80" },
            ].map((airport) => (
              <div key={airport.code} className="border border-white/8 bg-white/[0.02] overflow-hidden group hover:border-[#b4913c]/40 transition-all">
                <div className="h-48 overflow-hidden">
                  <img src={airport.image} alt={airport.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl mb-2">{airport.name}</h3>
                  <p className="text-[#b4913c] text-sm mb-3 font-['Montserrat',sans-serif]">{airport.code}</p>
                  <p className="text-white/50 text-sm font-['Montserrat',sans-serif]">⏱️ {airport.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Table */}
        <div className="bg-[#0d0d15] p-8 border border-[#b4913c]/20">
          <h2 className="text-2xl font-light mb-6 text-center">Sample Rates (One-Way)</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="border-b border-[#b4913c]/30">
                <tr className="text-left text-[#b4913c] font-['Montserrat',sans-serif] text-sm">
                  <th className="pb-3">Vehicle</th>
                  <th className="pb-3">JFK</th>
                  <th className="pb-3">LGA</th>
                  <th className="pb-3">EWR</th>
                </tr>
              </thead>
              <tbody className="text-white/70 text-sm font-['Montserrat',sans-serif]">
                <tr className="border-b border-white/10">
                  <td className="py-3">Executive Sedan</td>
                  <td className="py-3">$95</td>
                  <td className="py-3">$85</td>
                  <td className="py-3">$110</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-3">Luxury SUV</td>
                  <td className="py-3">$135</td>
                  <td className="py-3">$120</td>
                  <td className="py-3">$155</td>
                </tr>
                <tr>
                  <td className="py-3">Stretch Limousine</td>
                  <td className="py-3">$195</td>
                  <td className="py-3">$175</td>
                  <td className="py-3">$220</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-white/40 text-xs text-center mt-4 font-['Montserrat',sans-serif]">*Rates exclude tolls, gratuity, and waiting time beyond 15 minutes. Contact for corporate rates.</p>
        </div>
      </div>
    </ServiceLayout>
  );
}