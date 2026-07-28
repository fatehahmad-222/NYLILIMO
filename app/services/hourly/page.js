import ServiceLayout from "@/components/ServiceLayout";

export const metadata = {
  title: "Hourly Chauffeur Service NYC | Private Driver | NYLI Limo",
  description: "Keep a personal chauffeur at your disposal. Hourly as-directed service for business days, events, or evenings. Total flexibility, pure luxury.",
};

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
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-20">
          <div>
            <h2 className="text-2xl md:text-3xl font-['Cormorant_Garamond',serif] font-light mb-4">Ultimate Flexibility with Hourly Service</h2>
            <div className="w-8 h-px bg-[#C79A3C] mb-6" />
            <p className="text-[#847863] leading-relaxed mb-4 text-[13px] font-light">
              Need transportation for multiple stops? Planning an evening out 
              with unpredictable timing? Our hourly as-directed service puts a 
              professional chauffeur at your disposal for as long as you need.
            </p>
            <p className="text-[#847863] leading-relaxed text-[13px] font-light">
              From shopping trips to business meetings, from bar crawls to 
              multi-location photography sessions — pay by the hour and enjoy 
              the flexibility to change plans on the fly without worrying about 
              separate bookings.
            </p>
          </div>
          <div className="border border-[#D4C9B8] p-8">
            <h3 className="text-lg font-['Cormorant_Garamond',serif] mb-5 text-[#18110D]">Hourly Service Benefits</h3>
            <ul className="space-y-3 text-[#847863] text-[12px]">
              <li className="flex items-center gap-3">
                <span className="text-[#C79A3C]">·</span> Pay only for time used
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#C79A3C]">·</span> Unlimited stops within reason
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#C79A3C]">·</span> Perfect for events &amp; nights out
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#C79A3C]">·</span> Flexible itinerary changes
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#C79A3C]">·</span> No rush - your chauffeur waits
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#C79A3C]">·</span> Consistent luxury throughout
              </li>
            </ul>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="border border-[#D4C9B8] p-8">
            <h3 className="text-lg font-['Cormorant_Garamond',serif] mb-5 text-[#18110D]">Hourly Rates</h3>
            <div>
              <div className="flex justify-between py-3 border-b border-[#f4f3f0]">
                <span className="text-[#847863] text-[12px]">Executive Sedan</span>
                <span className="text-[#C79A3C] text-[12px] font-medium">$75/hour</span>
              </div>
              <div className="flex justify-between py-3 border-b border-[#f4f3f0]">
                <span className="text-[#847863] text-[12px]">Luxury SUV</span>
                <span className="text-[#C79A3C] text-[12px] font-medium">$95/hour</span>
              </div>
              <div className="flex justify-between py-3 border-b border-[#f4f3f0]">
                <span className="text-[#847863] text-[12px]">Stretch Limousine (6-10 pax)</span>
                <span className="text-[#C79A3C] text-[12px] font-medium">$125/hour</span>
              </div>
              <div className="flex justify-between py-3">
                <span className="text-[#847863] text-[12px]">Party Bus (15-25 pax)</span>
                <span className="text-[#C79A3C] text-[12px] font-medium">$165/hour</span>
              </div>
            </div>
            <p className="text-[#847863] text-[10px] mt-6">*Minimum 3 hours. Gratuity not included.</p>
          </div>

          <div className="border border-[#D4C9B8] p-8">
            <h3 className="text-lg font-['Cormorant_Garamond',serif] mb-5 text-[#18110D]">Perfect For</h3>
            <ul className="space-y-3 text-[#847863] text-[12px]">
              <li className="flex items-center gap-3">
                <span className="text-[#C79A3C]">·</span> Dinner &amp; night out
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#C79A3C]">·</span> Shopping excursions
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#C79A3C]">·</span> Multiple business meetings
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#C79A3C]">·</span> Wedding photography tours
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#C79A3C]">·</span> Bar/bachelor/bachelorette parties
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#C79A3C]">·</span> Sightseeing tours
              </li>
            </ul>
          </div>
        </div>
      </div>
    </ServiceLayout>
  );
}
