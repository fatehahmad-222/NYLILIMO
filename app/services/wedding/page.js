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
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-3xl font-light mb-4">Your Perfect Day Deserves Perfection</h2>
            <div className="w-16 h-px bg-[#cd7f32] mb-6" />SS
            <p className="text-white/70 leading-relaxed mb-4 font-['Montserrat',sans-serif]">
              Your wedding day is one of the most important days of your life. 
              NYLI Limo ensures that every transportation detail is handled 
              with elegance and precision. From the bridal party's arrival at 
              the ceremony to the grand exit at the reception, we add a touch 
              of luxury to your celebration.
            </p>
            <p className="text-white/70 leading-relaxed font-['Montserrat',sans-serif]">
              Our wedding specialists work with you to create a custom timeline, 
              ensuring everyone arrives on schedule. Choose from our fleet of 
              stretch limousines, luxury sedans, or party buses for your bridal party.
            </p>
          </div>
          <div className="bg-[#191512] p-6 border border-[#cd7f32]/20">
            <h3 className="text-xl mb-4 text-[#cd7f32]">Wedding Package Includes</h3>
            <ul className="space-y-3 text-white/70 font-['Montserrat',sans-serif]">
              <li className="flex items-center gap-3"> Complimentary champagne service</li>
              <li className="flex items-center gap-3"> Red carpet & ribbon decorations</li>
              <li className="flex items-center gap-3"> Photo stop opportunities</li>
              <li className="flex items-center gap-3"> Flexible hourly or package rates</li>
              <li className="flex items-center gap-3"> Bridal party coordination</li>
              <li className="flex items-center gap-3"> Sound system for entrance music</li>
            </ul>
          </div>
        </div>

        <h2 className="text-3xl font-light text-center mb-12">Popular Wedding Vehicles</h2>
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
            <div key={vehicle.name} className="border border-white/8 overflow-hidden">
              <img src={vehicle.image} alt={vehicle.name} className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl mb-2">{vehicle.name}</h3>
                <p className="text-[#cd7f32] text-sm mb-3">{vehicle.capacity}</p>
                <p className="text-white/50 text-sm">{vehicle.features}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center bg-[#191512] p-10">
          <h3 className="text-2xl font-light mb-4">Ready to Plan Your Grand Entrance?</h3>
          <p className="text-white/60 mb-6">Contact our wedding specialists for a customized quote.</p>
          <div className="flex gap-4 justify-center">
            <a href="/booking" className="px-8 py-3 bg-[#cd7f32] text-[#0e0c0a] font-bold uppercase tracking-widest text-sm hover:bg-[#e09545] transition-all font-['Montserrat',sans-serif]">
              Request Quote
            </a>
            <a href="tel:+16314524500" className="px-8 py-3 border border-[#cd7f32]/50 text-[#cd7f32] font-medium uppercase tracking-widest text-sm hover:border-[#cd7f32] font-['Montserrat',sans-serif]">
              Call Now
            </a>
          </div>
        </div>
      </div>
    </ServiceLayout>
  );
}