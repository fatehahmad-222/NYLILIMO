import ServiceLayout from "@/components/ServiceLayout";

export default function BookingPage() {
  return (
    <ServiceLayout
      title="Instant Online Booking"
      description="Book in under 2 minutes. Instant confirmation, digital receipts, and easy modification."
      heroImage="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1600&q=80"
      breadcrumbs={[{ name: "Booking" }]}
    >
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-light mb-4">Reserve Your Ride in Minutes</h2>
          <div className="w-16 h-px bg-[#b4913c] mx-auto mb-6" />
          <p className="text-white/70 font-['Montserrat',sans-serif]">
            Our streamlined booking process gets you on the road quickly. 
            Enter your details, choose your vehicle, and confirm — that's it.
          </p>
        </div>

        <div className="bg-[#0d0d15] p-8 border border-[#b4913c]/20">
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-white/60 text-sm mb-2 font-['Montserrat',sans-serif]">Service Type *</label>
                <select className="w-full p-3 bg-[#07070d] border border-white/15 text-white focus:border-[#b4913c] outline-none">
                  <option>Airport Transfer</option>
                  <option>Point to Point</option>
                  <option>Hourly As Directed</option>
                  <option>Wedding</option>
                  <option>Prom/Event</option>
                </select>
              </div>
              <div>
                <label className="block text-white/60 text-sm mb-2 font-['Montserrat',sans-serif]">Vehicle Type *</label>
                <select className="w-full p-3 bg-[#07070d] border border-white/15 text-white focus:border-[#b4913c] outline-none">
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
                <label className="block text-white/60 text-sm mb-2 font-['Montserrat',sans-serif]">Pickup Date *</label>
                <input type="date" className="w-full p-3 bg-[#07070d] border border-white/15 text-white focus:border-[#b4913c] outline-none" />
              </div>
              <div>
                <label className="block text-white/60 text-sm mb-2 font-['Montserrat',sans-serif]">Pickup Time *</label>
                <input type="time" className="w-full p-3 bg-[#07070d] border border-white/15 text-white focus:border-[#b4913c] outline-none" />
              </div>
            </div>

            <div>
              <label className="block text-white/60 text-sm mb-2 font-['Montserrat',sans-serif]">Pickup Address *</label>
              <input type="text" placeholder="Street address, city, zip code" className="w-full p-3 bg-[#07070d] border border-white/15 text-white focus:border-[#b4913c] outline-none" />
            </div>

            <div>
              <label className="block text-white/60 text-sm mb-2 font-['Montserrat',sans-serif]">Dropoff Address *</label>
              <input type="text" placeholder="Street address, city, zip code" className="w-full p-3 bg-[#07070d] border border-white/15 text-white focus:border-[#b4913c] outline-none" />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-white/60 text-sm mb-2 font-['Montserrat',sans-serif]">Full Name *</label>
                <input type="text" className="w-full p-3 bg-[#07070d] border border-white/15 text-white focus:border-[#b4913c] outline-none" />
              </div>
              <div>
                <label className="block text-white/60 text-sm mb-2 font-['Montserrat',sans-serif]">Phone Number *</label>
                <input type="tel" className="w-full p-3 bg-[#07070d] border border-white/15 text-white focus:border-[#b4913c] outline-none" />
              </div>
            </div>

            <div>
              <label className="block text-white/60 text-sm mb-2 font-['Montserrat',sans-serif]">Email Address *</label>
              <input type="email" className="w-full p-3 bg-[#07070d] border border-white/15 text-white focus:border-[#b4913c] outline-none" />
            </div>

            <div>
              <label className="block text-white/60 text-sm mb-2 font-['Montserrat',sans-serif]">Special Requests (optional)</label>
              <textarea rows="3" placeholder="Flight number, extra luggage, etc." className="w-full p-3 bg-[#07070d] border border-white/15 text-white focus:border-[#b4913c] outline-none"></textarea>
            </div>

            <button className="w-full p-4 bg-[#b4913c] text-[#07070d] font-bold uppercase tracking-widest text-sm hover:bg-[#caa84d] transition-all font-['Montserrat',sans-serif]">
              Get Instant Quote & Book
            </button>
          </form>
        </div>

        <div className="mt-8 text-center text-white/40 text-sm font-['Montserrat',sans-serif]">
          * You'll receive instant confirmation via email and SMS
        </div>
      </div>
    </ServiceLayout>
  );
}