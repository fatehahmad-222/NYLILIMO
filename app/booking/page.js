import ServiceLayout from "@/components/ServiceLayout";

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
          <div className="w-16 h-px bg-[#b8860b] mx-auto mb-6" />
          <p className="text-[#6b6b6b] font-['Montserrat',sans-serif] text-[13px] max-w-lg mx-auto font-light">
            Our streamlined booking process gets you on the road quickly.
            Enter your details, choose your vehicle, and confirm — that&apos;s it.
          </p>
        </div>

        <div className="bg-[#f9f8f6] p-8 lg:p-10 border border-[#e8e6e3]">
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-[#6b6b6b] text-[11px] uppercase tracking-wider mb-2 font-['Montserrat',sans-serif] font-medium">Service Type *</label>
                <select className="w-full p-3 bg-white border border-[#e8e6e3] text-[#1a1a1a] focus:border-[#b8860b] outline-none text-[13px] font-['Montserrat',sans-serif] font-light transition-colors duration-200">
                  <option>Airport Transfer</option>
                  <option>Point to Point</option>
                  <option>Hourly As Directed</option>
                  <option>Wedding</option>
                  <option>Prom/Event</option>
                </select>
              </div>
              <div>
                <label className="block text-[#6b6b6b] text-[11px] uppercase tracking-wider mb-2 font-['Montserrat',sans-serif] font-medium">Vehicle Type *</label>
                <select className="w-full p-3 bg-white border border-[#e8e6e3] text-[#1a1a1a] focus:border-[#b8860b] outline-none text-[13px] font-['Montserrat',sans-serif] font-light transition-colors duration-200">
                  <option>Executive Sedan (3 pax)</option>
                  <option>Luxury SUV (6 pax)</option>
                  <option>Stretch Limousine (10 pax)</option>
                  <option>Luxury Van (14 pax)</option>
                  <option>Party Bus (20+ pax)</option>
                </select>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-[#6b6b6b] text-[11px] uppercase tracking-wider mb-2 font-['Montserrat',sans-serif] font-medium">Pickup Date *</label>
                <input type="date" className="w-full p-3 bg-white border border-[#e8e6e3] text-[#1a1a1a] focus:border-[#b8860b] outline-none text-[13px] font-['Montserrat',sans-serif] font-light transition-colors duration-200" />
              </div>
              <div>
                <label className="block text-[#6b6b6b] text-[11px] uppercase tracking-wider mb-2 font-['Montserrat',sans-serif] font-medium">Pickup Time *</label>
                <input type="time" className="w-full p-3 bg-white border border-[#e8e6e3] text-[#1a1a1a] focus:border-[#b8860b] outline-none text-[13px] font-['Montserrat',sans-serif] font-light transition-colors duration-200" />
              </div>
            </div>

            <div>
              <label className="block text-[#6b6b6b] text-[11px] uppercase tracking-wider mb-2 font-['Montserrat',sans-serif] font-medium">Pickup Address *</label>
              <input type="text" placeholder="Street address, city, zip code" className="w-full p-3 bg-white border border-[#e8e6e3] text-[#1a1a1a] placeholder-[#999999] focus:border-[#b8860b] outline-none text-[13px] font-['Montserrat',sans-serif] font-light transition-colors duration-200" />
            </div>

            <div>
              <label className="block text-[#6b6b6b] text-[11px] uppercase tracking-wider mb-2 font-['Montserrat',sans-serif] font-medium">Dropoff Address *</label>
              <input type="text" placeholder="Street address, city, zip code" className="w-full p-3 bg-white border border-[#e8e6e3] text-[#1a1a1a] placeholder-[#999999] focus:border-[#b8860b] outline-none text-[13px] font-['Montserrat',sans-serif] font-light transition-colors duration-200" />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-[#6b6b6b] text-[11px] uppercase tracking-wider mb-2 font-['Montserrat',sans-serif] font-medium">Full Name *</label>
                <input type="text" className="w-full p-3 bg-white border border-[#e8e6e3] text-[#1a1a1a] focus:border-[#b8860b] outline-none text-[13px] font-['Montserrat',sans-serif] font-light transition-colors duration-200" />
              </div>
              <div>
                <label className="block text-[#6b6b6b] text-[11px] uppercase tracking-wider mb-2 font-['Montserrat',sans-serif] font-medium">Phone Number *</label>
                <input type="tel" className="w-full p-3 bg-white border border-[#e8e6e3] text-[#1a1a1a] focus:border-[#b8860b] outline-none text-[13px] font-['Montserrat',sans-serif] font-light transition-colors duration-200" />
              </div>
            </div>

            <div>
              <label className="block text-[#6b6b6b] text-[11px] uppercase tracking-wider mb-2 font-['Montserrat',sans-serif] font-medium">Email Address *</label>
              <input type="email" className="w-full p-3 bg-white border border-[#e8e6e3] text-[#1a1a1a] focus:border-[#b8860b] outline-none text-[13px] font-['Montserrat',sans-serif] font-light transition-colors duration-200" />
            </div>

            <div>
              <label className="block text-[#6b6b6b] text-[11px] uppercase tracking-wider mb-2 font-['Montserrat',sans-serif] font-medium">Special Requests (optional)</label>
              <textarea rows="3" placeholder="Flight number, extra luggage, etc." className="w-full p-3 bg-white border border-[#e8e6e3] text-[#1a1a1a] placeholder-[#999999] focus:border-[#b8860b] outline-none text-[13px] font-['Montserrat',sans-serif] font-light transition-colors duration-200 resize-none"></textarea>
            </div>

            <button className="w-full p-4 bg-[#b8860b] text-white font-['Montserrat',sans-serif] font-medium uppercase tracking-[0.15em] text-[12px] hover:bg-[#1a1a1a] transition-all duration-300">
              Get Instant Quote &amp; Book
            </button>
          </form>
        </div>

        <div className="mt-8 text-center text-[#999999] text-[12px] font-['Montserrat',sans-serif] font-light">
          * You&apos;ll receive instant confirmation via email and SMS
        </div>
      </div>
    </ServiceLayout>
  );
}
