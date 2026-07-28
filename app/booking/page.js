import ServiceLayout from "@/components/ServiceLayout";

export const metadata = {
  title: "Book Your Ride | NYLI Limo - NYC Premier Chauffeur Service",
  description: "Reserve your luxury vehicle in under 2 minutes. Instant confirmation, no hidden fees. Airport transfers, corporate travel, weddings & more.",
};

export default function BookingPage() {
  return (
    <ServiceLayout
      title="Instant Online Booking"
      description="Book in under 2 minutes. Instant confirmation, digital receipts, and easy modification."
      breadcrumbs={[{ name: "Booking" }]}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light mb-4 font-['Cormorant_Garamond',serif]">Reserve Your Ride in Minutes</h2>
          <div className="w-16 h-px bg-[#C79A3C] mx-auto mb-6" />
          <p className="text-[#847863] font-['Work_Sans',sans-serif] text-[13px] max-w-lg mx-auto font-light">
            Our streamlined booking process gets you on the road quickly.
            Enter your details, choose your vehicle, and confirm.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <div className="bg-[#EDE7DB] p-8 lg:p-10 border border-[#D4C9B8]">
              <form className="space-y-6">
                <div>
                  <h3 className="text-sm font-['Cormorant_Garamond',serif] text-[#18110D] mb-5 pb-3 border-b border-[#D4C9B8]">
                    Trip Details
                  </h3>
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[#847863] text-[11px] uppercase tracking-wider mb-2 font-['Work_Sans',sans-serif] font-medium">Service Type *</label>
                      <select className="w-full p-3 bg-[#F6F0E2] border border-[#D4C9B8] text-[#18110D] focus:border-[#C79A3C] outline-none text-[13px] font-['Work_Sans',sans-serif] font-light transition-colors duration-200">
                        <option>Airport Transfer</option>
                        <option>Point to Point</option>
                        <option>Hourly As Directed</option>
                        <option>Wedding</option>
                        <option>Prom/Event</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[#847863] text-[11px] uppercase tracking-wider mb-2 font-['Work_Sans',sans-serif] font-medium">Vehicle Type *</label>
                      <select className="w-full p-3 bg-[#F6F0E2] border border-[#D4C9B8] text-[#18110D] focus:border-[#C79A3C] outline-none text-[13px] font-['Work_Sans',sans-serif] font-light transition-colors duration-200">
                        <option>Executive Sedan (3 pax)</option>
                        <option>Luxury SUV (6 pax)</option>
                        <option>Stretch Limousine (10 pax)</option>
                        <option>Luxury Van (14 pax)</option>
                        <option>Party Bus (20+ pax)</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-5 mt-5">
                    <div>
                      <label className="block text-[#847863] text-[11px] uppercase tracking-wider mb-2 font-['Work_Sans',sans-serif] font-medium">Pickup Date *</label>
                      <input type="date" className="w-full p-3 bg-[#F6F0E2] border border-[#D4C9B8] text-[#18110D] focus:border-[#C79A3C] outline-none text-[13px] font-['Work_Sans',sans-serif] font-light transition-colors duration-200" />
                    </div>
                    <div>
                      <label className="block text-[#847863] text-[11px] uppercase tracking-wider mb-2 font-['Work_Sans',sans-serif] font-medium">Pickup Time *</label>
                      <input type="time" className="w-full p-3 bg-[#F6F0E2] border border-[#D4C9B8] text-[#18110D] focus:border-[#C79A3C] outline-none text-[13px] font-['Work_Sans',sans-serif] font-light transition-colors duration-200" />
                    </div>
                  </div>

                  <div className="mt-5">
                    <label className="block text-[#847863] text-[11px] uppercase tracking-wider mb-2 font-['Work_Sans',sans-serif] font-medium">Pickup Address *</label>
                    <input type="text" placeholder="Street address, city, zip code" className="w-full p-3 bg-[#F6F0E2] border border-[#D4C9B8] text-[#18110D] placeholder-[#847863] focus:border-[#C79A3C] outline-none text-[13px] font-['Work_Sans',sans-serif] font-light transition-colors duration-200" />
                  </div>

                  <div className="mt-5">
                    <label className="block text-[#847863] text-[11px] uppercase tracking-wider mb-2 font-['Work_Sans',sans-serif] font-medium">Dropoff Address *</label>
                    <input type="text" placeholder="Street address, city, zip code" className="w-full p-3 bg-[#F6F0E2] border border-[#D4C9B8] text-[#18110D] placeholder-[#847863] focus:border-[#C79A3C] outline-none text-[13px] font-['Work_Sans',sans-serif] font-light transition-colors duration-200" />
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-['Cormorant_Garamond',serif] text-[#18110D] mb-5 pb-3 border-b border-[#D4C9B8] mt-8">
                    Contact Information
                  </h3>
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[#847863] text-[11px] uppercase tracking-wider mb-2 font-['Work_Sans',sans-serif] font-medium">Full Name *</label>
                      <input type="text" className="w-full p-3 bg-[#F6F0E2] border border-[#D4C9B8] text-[#18110D] focus:border-[#C79A3C] outline-none text-[13px] font-['Work_Sans',sans-serif] font-light transition-colors duration-200" />
                    </div>
                    <div>
                      <label className="block text-[#847863] text-[11px] uppercase tracking-wider mb-2 font-['Work_Sans',sans-serif] font-medium">Phone Number *</label>
                      <input type="tel" className="w-full p-3 bg-[#F6F0E2] border border-[#D4C9B8] text-[#18110D] focus:border-[#C79A3C] outline-none text-[13px] font-['Work_Sans',sans-serif] font-light transition-colors duration-200" />
                    </div>
                  </div>

                  <div className="mt-5">
                    <label className="block text-[#847863] text-[11px] uppercase tracking-wider mb-2 font-['Work_Sans',sans-serif] font-medium">Email Address *</label>
                    <input type="email" className="w-full p-3 bg-[#F6F0E2] border border-[#D4C9B8] text-[#18110D] focus:border-[#C79A3C] outline-none text-[13px] font-['Work_Sans',sans-serif] font-light transition-colors duration-200" />
                  </div>

                  <div className="mt-5">
                    <label className="block text-[#847863] text-[11px] uppercase tracking-wider mb-2 font-['Work_Sans',sans-serif] font-medium">Special Requests (optional)</label>
                    <textarea rows="3" placeholder="Flight number, extra luggage, etc." className="w-full p-3 bg-[#F6F0E2] border border-[#D4C9B8] text-[#18110D] placeholder-[#847863] focus:border-[#C79A3C] outline-none text-[13px] font-['Work_Sans',sans-serif] font-light transition-colors duration-200 resize-none"></textarea>
                  </div>
                </div>

                <button className="w-full p-4 bg-[#C79A3C] text-[#4A0812] font-['Work_Sans',sans-serif] font-medium uppercase tracking-[0.15em] text-[12px] hover:bg-[#4A0812] transition-all duration-300">
                  Get Instant Quote &amp; Book
                </button>
              </form>
            </div>
          </div>

          <div className="md:col-span-1">
            <div className="bg-[#EDE7DB] p-6 border border-[#D4C9B8]">
              <h3 className="text-sm font-['Cormorant_Garamond',serif] text-[#18110D] mb-4 pb-3 border-b border-[#D4C9B8]">
                Why Book With Us
              </h3>
              <ul className="space-y-4">
                {[
                  { icon: "✓", text: "Instant confirmation via email & SMS" },
                  { icon: "✓", text: "Free cancellation up to 24 hours prior" },
                  { icon: "✓", text: "Flight tracking for airport transfers" },
                  { icon: "✓", text: "Professional chauffeur in black suit" },
                  { icon: "✓", text: "Fixed rates — no surge pricing ever" },
                ].map((item) => (
                  <li key={item.text} className="flex gap-3 text-[#847863] text-[12px] font-['Work_Sans',sans-serif] font-light leading-relaxed">
                    <span className="text-[#C79A3C] shrink-0 mt-0.5">{item.icon}</span>
                    {item.text}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-6 p-6 border border-[#D4C9B8] text-center">
              <p className="text-[#847863] text-[11px] font-['Work_Sans',sans-serif] font-light mb-2">Need help?</p>
              <a href="tel:+16314524500" className="text-[#C79A3C] text-sm font-['Cormorant_Garamond',serif] hover:underline">
                +1 631-452-4500
              </a>
              <p className="text-[#847863] text-[10px] font-['Work_Sans',sans-serif] font-light mt-2">
                Available 24/7
              </p>
            </div>
          </div>
        </div>
      </div>
    </ServiceLayout>
  );
}
