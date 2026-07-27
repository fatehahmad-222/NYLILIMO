import ServiceLayout from "@/components/ServiceLayout";

export default function ContactPage() {
  return (
    <ServiceLayout
      title="24/7 Availability"
      description="Round-the-clock dispatch and customer support, 365 days a year."
      breadcrumbs={[{ name: "Contact" }]}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-light mb-4 font-['Cormorant_Garamond',serif]">We&apos;re Always Here for You</h2>
            <div className="w-16 h-px bg-[#b8860b] mb-6" />
            <p className="text-[#6b6b6b] leading-relaxed mb-8 font-['Montserrat',sans-serif] text-[13px] font-light">
              Whether it&apos;s 3 AM for an emergency airport run or noon on Christmas Day,
              NYLI Limo is available 24 hours a day, 365 days a year. Our dispatch
              team never sleeps, and our chauffeurs are always ready.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4 p-4 bg-[#f9f8f6] border border-[#e8e6e3]">
                <span className="text-2xl">📞</span>
                <div>
                  <h3 className="text-lg mb-1 text-[#1a1a1a] font-['Cormorant_Garamond',serif]">Phone</h3>
                  <a href="tel:+16314524500" className="text-[#b8860b] hover:underline text-[13px] font-['Montserrat',sans-serif] font-light">+1 631-452-4500</a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-[#f9f8f6] border border-[#e8e6e3]">
                <span className="text-2xl">✉️</span>
                <div>
                  <h3 className="text-lg mb-1 text-[#1a1a1a] font-['Cormorant_Garamond',serif]">Email</h3>
                  <a href="mailto:reservations@nylilimo.com" className="text-[#b8860b] hover:underline text-[13px] font-['Montserrat',sans-serif] font-light">reservations@nylilimo.com</a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-[#f9f8f6] border border-[#e8e6e3]">
                <span className="text-2xl">📍</span>
                <div>
                  <h3 className="text-lg mb-1 text-[#1a1a1a] font-['Cormorant_Garamond',serif]">Address</h3>
                  <p className="text-[#6b6b6b] text-[13px] font-['Montserrat',sans-serif] font-light">1421 Islip Ave STE 1037<br />Central Islip, NY 11722-3941<br />United States</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#f9f8f6] p-8 border border-[#e8e6e3]">
            <h3 className="text-xl mb-6 text-[#b8860b] font-['Cormorant_Garamond',serif]">Send Us a Message</h3>
            <form className="space-y-4">
              <input type="text" placeholder="Your Name" className="w-full p-3 bg-white border border-[#e8e6e3] text-[#1a1a1a] placeholder-[#999999] focus:border-[#b8860b] outline-none font-['Montserrat',sans-serif] text-[13px] font-light transition-colors duration-200" />
              <input type="email" placeholder="Email Address" className="w-full p-3 bg-white border border-[#e8e6e3] text-[#1a1a1a] placeholder-[#999999] focus:border-[#b8860b] outline-none font-['Montserrat',sans-serif] text-[13px] font-light transition-colors duration-200" />
              <input type="tel" placeholder="Phone Number" className="w-full p-3 bg-white border border-[#e8e6e3] text-[#1a1a1a] placeholder-[#999999] focus:border-[#b8860b] outline-none font-['Montserrat',sans-serif] text-[13px] font-light transition-colors duration-200" />
              <textarea rows="4" placeholder="Message" className="w-full p-3 bg-white border border-[#e8e6e3] text-[#1a1a1a] placeholder-[#999999] focus:border-[#b8860b] outline-none font-['Montserrat',sans-serif] text-[13px] font-light transition-colors duration-200 resize-none"></textarea>
              <button className="w-full p-4 bg-[#b8860b] text-white font-['Montserrat',sans-serif] font-medium uppercase tracking-[0.15em] text-[12px] hover:bg-[#1a1a1a] transition-all duration-300">
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Map */}
        <div className="mt-12">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3052.5!2d-73.195!3d40.799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e274c5e5c5c5c5%3A0x1234567890abcdef!2s1421+Islip+Ave+STE+1037%2C+Central+Islip%2C+NY+11722!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            className="border border-[#e8e6e3]"
          />
        </div>
      </div>
    </ServiceLayout>
  );
}
