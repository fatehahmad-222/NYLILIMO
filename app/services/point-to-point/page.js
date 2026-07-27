import ServiceLayout from "@/components/ServiceLayout";

export default function PointToPointPage() {
  return (
    <ServiceLayout
      title="Point to Point"
      description="Door-to-door luxury between any two destinations. No surge pricing, ever."
      heroImage="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1600&q=80"
      breadcrumbs={[
        { name: "Services", href: "/#services" },
        { name: "Point to Point" }
      ]}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-20">
          <div>
            <h2 className="text-2xl md:text-3xl font-['Cormorant_Garamond',serif] font-light mb-4">Reliable Point-to-Point Luxury</h2>
            <div className="w-8 h-px bg-[#b8860b] mb-6" />
            <p className="text-[#6b6b6b] leading-relaxed mb-4 text-[13px] font-light">
              Need to get from Manhattan to the Hamptons? From Brooklyn to Jersey City? 
              NYLI Limo provides premium point-to-point service for any two destinations 
              in the tri-state area. Unlike rideshare apps, we never use surge pricing.
            </p>
            <p className="text-[#6b6b6b] leading-relaxed text-[13px] font-light">
              Whether it&apos;s a dinner reservation, business meeting, or night out, 
              enjoy consistent luxury with transparent pricing. Book by the trip 
              and know exactly what you&apos;ll pay before you confirm.
            </p>
          </div>
          <div className="border border-[#e8e6e3] p-8">
            <h3 className="text-lg font-['Cormorant_Garamond',serif] mb-5 text-[#1a1a1a]">Why Choose Point-to-Point?</h3>
            <ul className="space-y-3 text-[#6b6b6b] text-[12px]">
              <li className="flex items-center gap-3">
                <span className="text-[#b8860b]">·</span> No surge pricing - ever
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#b8860b]">·</span> Any two destinations
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#b8860b]">·</span> Luxury vehicles guaranteed
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#b8860b]">·</span> On-time guarantee
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#b8860b]">·</span> Easy online booking
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#b8860b]">·</span> Fixed, upfront pricing
              </li>
            </ul>
          </div>
        </div>

        <div className="border border-[#e8e6e3] p-8 lg:p-10 bg-[#f9f8f6]">
          <h3 className="text-xl font-['Cormorant_Garamond',serif] mb-6 text-center">Popular Routes</h3>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              "Manhattan → JFK Airport",
              "Brooklyn → LaGuardia",
              "Manhattan → The Hamptons",
              "New York → New Jersey",
              "Manhattan → Westchester",
              "Queens → Newark Airport"
            ].map((route) => (
              <div key={route} className="flex items-center gap-3 text-[#6b6b6b] text-[12px] p-3 border border-[#e8e6e3] bg-white">
                <span className="text-[#b8860b]">→</span>
                {route}
              </div>
            ))}
          </div>
        </div>
      </div>
    </ServiceLayout>
  );
}
