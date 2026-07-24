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
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-3xl font-light mb-4">Reliable Point-to-Point Luxury</h2>
            <div className="w-16 h-px bg-[#cd7f32] mb-6" />
            <p className="text-white/70 leading-relaxed mb-4 font-['Montserrat',sans-serif]">
              Need to get from Manhattan to the Hamptons? From Brooklyn to Jersey City? 
              NYLI Limo provides premium point-to-point service for any two destinations 
              in the tri-state area. Unlike rideshare apps, we never use surge pricing.
            </p>
            <p className="text-white/70 leading-relaxed font-['Montserrat',sans-serif]">
              Whether it's a dinner reservation, business meeting, or night out, 
              enjoy consistent luxury with transparent pricing. Book by the trip 
              and know exactly what you'll pay before you confirm.
            </p>
          </div>
          <div className="bg-[#191512] p-6 border border-[#cd7f32]/20">
            <h3 className="text-xl mb-4 text-[#cd7f32]">Why Choose Point-to-Point?</h3>
            <ul className="space-y-3 text-white/70 font-['Montserrat',sans-serif]">
              <li className="flex items-center gap-3"> No surge pricing - ever</li>
              <li className="flex items-center gap-3"> Any two destinations</li>
              <li className="flex items-center gap-3"> Luxury vehicles guaranteed</li>
              <li className="flex items-center gap-3"> On-time guarantee</li>
              <li className="flex items-center gap-3"> Easy online booking</li>
              <li className="flex items-center gap-3"> Fixed, upfront pricing</li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-[#cd7f32]/5 to-transparent p-8 rounded-sm">
          <h3 className="text-xl font-light mb-4 text-center">Popular Routes</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "Manhattan → JFK Airport",
              "Brooklyn → LaGuardia",
              "Manhattan → The Hamptons",
              "New York → New Jersey",
              "Manhattan → Westchester",
              "Queens → Newark Airport"
            ].map((route) => (
              <div key={route} className="flex items-center gap-3 text-white/70 text-sm font-['Montserrat',sans-serif]">
                <span className="text-[#cd7f32]">→</span>
                {route}
              </div>
            ))}
          </div>
        </div>
      </div>
    </ServiceLayout>
  );
}