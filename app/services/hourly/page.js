import ServiceLayout from "@/components/ServiceLayout";

export default function HourlyPage() {
  return (
    <ServiceLayout
      title="Hourly As Directed"
      description="Keep a personal chauffeur at your disposal for the whole evening, event, or business day."
      heroImage="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=1600&q=80"
      breadcrumbs={[
        { name: "Services", href: "/#services" },
        { name: "Hourly As Directed" }
      ]}
    >
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-3xl font-light mb-4">Ultimate Flexibility with Hourly Service</h2>
            <div className="w-16 h-px bg-[#cd7f32] mb-6" />
            <p className="text-white/70 leading-relaxed mb-4 font-['Montserrat',sans-serif]">
              Need transportation for multiple stops? Planning an evening out 
              with unpredictable timing? Our hourly as-directed service puts a 
              professional chauffeur at your disposal for as long as you need.
            </p>
            <p className="text-white/70 leading-relaxed font-['Montserrat',sans-serif]">
              From shopping trips to business meetings, from bar crawls to 
              multi-location photography sessions — pay by the hour and enjoy 
              the flexibility to change plans on the fly without worrying about 
              separate bookings.
            </p>
          </div>
          <div className="bg-[#191512] p-6 border border-[#cd7f32]/20">
            <h3 className="text-xl mb-4 text-[#cd7f32]">Hourly Service Benefits</h3>
            <ul className="space-y-3 text-white/70 font-['Montserrat',sans-serif]">
              <li className="flex items-center gap-3">🕐 Pay only for time used</li>
              <li className="flex items-center gap-3">📍 Unlimited stops within reason</li>
              <li className="flex items-center gap-3">🎯 Perfect for events & nights out</li>
              <li className="flex items-center gap-3">🔄 Flexible itinerary changes</li>
              <li className="flex items-center gap-3">⏰ No rush - your chauffeur waits</li>
              <li className="flex items-center gap-3">💎 Consistent luxury throughout</li>
            </ul>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-6 border border-white/8">
            <h3 className="text-xl mb-4 text-[#cd7f32]">Hourly Rates</h3>
            <div className="space-y-3">
              <div className="flex justify-between py-2 border-b border-white/10">
                <span>Executive Sedan</span>
                <span className="text-[#cd7f32]">$75/hour</span>
              </div>
              <div className="flex justify-between py-2 border-b border-white/10">
                <span>Luxury SUV</span>
                <span className="text-[#cd7f32]">$95/hour</span>
              </div>
              <div className="flex justify-between py-2 border-b border-white/10">
                <span>Stretch Limousine (6-10 pax)</span>
                <span className="text-[#cd7f32]">$125/hour</span>
              </div>
              <div className="flex justify-between py-2 border-b border-white/10">
                <span>Party Bus (15-25 pax)</span>
                <span className="text-[#cd7f32]">$165/hour</span>
              </div>
            </div>
            <p className="text-white/40 text-xs mt-4">*Minimum 3 hours. Gratuity not included.</p>
          </div>

          <div className="p-6 border border-white/8">
            <h3 className="text-xl mb-4 text-[#cd7f32]">Perfect For</h3>
            <ul className="space-y-2 text-white/70 font-['Montserrat',sans-serif]">
              <li> Dinner & night out</li>
              <li> Shopping excursions</li>
              <li> Multiple business meetings</li>
              <li> Wedding photography tours</li>
              <li> Bar/bachelor/bachelorette parties</li>
              <li> Sightseeing tours</li>
            </ul>
          </div>
        </div>
      </div>
    </ServiceLayout>
  );
}