import ServiceLayout from "@/components/ServiceLayout";

export default function WeddingPage() {
  return (
    <ServiceLayout
      title="Wedding Limousine"
      description="Make your grand entrance unforgettable with our premium wedding packages."
      heroImage="https://images.unsplash.com/photo-1519741497674-611481863552?w=1600&q=80"
      breadcrumbs={[
        { name: "Services", href: "/#services" },
        { name: "Wedding Limousine" }
      ]}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-20">
          <div>
            <h2 className="text-2xl md:text-3xl font-['Cormorant_Garamond',serif] font-light mb-4">Your Perfect Day Deserves Perfection</h2>
            <div className="w-8 h-px bg-[#b8860b] mb-6" />
            <p className="text-[#6b6b6b] leading-relaxed mb-4 text-[13px] font-light">
              Your wedding day is one of the most important days of your life. 
              NYLI Limo ensures that every transportation detail is handled 
              with elegance and precision. From the bridal party&apos;s arrival at 
              the ceremony to the grand exit at the reception, we add a touch 
              of luxury to your celebration.
            </p>
            <p className="text-[#6b6b6b] leading-relaxed text-[13px] font-light">
              Our wedding specialists work with you to create a custom timeline, 
              ensuring everyone arrives on schedule. Choose from our fleet of 
              stretch limousines, luxury sedans, or party buses for your bridal party.
            </p>
          </div>
          <div className="border border-[#e8e6e3] p-8">
            <h3 className="text-lg font-['Cormorant_Garamond',serif] mb-5 text-[#1a1a1a]">Wedding Package Includes</h3>
            <ul className="space-y-3 text-[#6b6b6b] text-[12px]">
              <li className="flex items-center gap-3">
                <span className="text-[#b8860b]">·</span> Complimentary champagne service
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#b8860b]">·</span> Red carpet &amp; ribbon decorations
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#b8860b]">·</span> Photo stop opportunities
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#b8860b]">·</span> Flexible hourly or package rates
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#b8860b]">·</span> Bridal party coordination
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#b8860b]">·</span> Sound system for entrance music
              </li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl md:text-3xl font-['Cormorant_Garamond',serif] font-light text-center mb-12">Popular Wedding Vehicles</h2>
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {[
            {
              name: "Lincoln Stretch Limousine",
              capacity: "Up to 10 passengers",
              features: "Full bar, LED lighting, premium sound",
              image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&q=80"
            },
            {
              name: "Cadillac Escalade ESV",
              capacity: "Up to 6 passengers",
              features: "Premium leather, privacy partition",
              image: "https://images.unsplash.com/photo-1686836015338-6db51fc71d9d?w=800&q=80"
            }
          ].map((vehicle) => (
            <div key={vehicle.name} className="border border-[#e8e6e3] overflow-hidden bg-white">
              <img src={vehicle.image} alt={vehicle.name} className="w-full h-56 object-cover" />
              <div className="p-6">
                <h3 className="text-lg font-['Cormorant_Garamond',serif] mb-2 text-[#1a1a1a]">{vehicle.name}</h3>
                <p className="text-[#b8860b] text-[10px] mb-2 font-medium tracking-wider">{vehicle.capacity}</p>
                <p className="text-[#6b6b6b] text-[12px]">{vehicle.features}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center border border-[#e8e6e3] p-10 lg:p-12 bg-[#f9f8f6]">
          <h3 className="text-xl md:text-2xl font-['Cormorant_Garamond',serif] font-light mb-4">Ready to Plan Your Grand Entrance?</h3>
          <p className="text-[#6b6b6b] mb-8 text-[12px]">Contact our wedding specialists for a customized quote.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="/booking" className="px-8 py-3 bg-[#1a1a1a] text-white font-medium uppercase tracking-[0.15em] text-[11px] hover:bg-[#b8860b] transition-all duration-300">
              Request Quote
            </a>
            <a href="tel:+16314524500" className="px-8 py-3 border border-[#1a1a1a] text-[#1a1a1a] font-medium uppercase tracking-[0.15em] text-[11px] hover:border-[#b8860b] hover:text-[#b8860b] transition-all duration-300">
              Call Now
            </a>
          </div>
        </div>
      </div>
    </ServiceLayout>
  );
}
