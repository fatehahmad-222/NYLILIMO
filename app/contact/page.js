import ServiceLayout from "@/components/ServiceLayout";
import Link from "next/link";

export default function ContactPage() {
  return (
    <ServiceLayout
      title="24/7 Availability"
      description="Round-the-clock dispatch and customer support, 365 days a year."
      heroImage="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1600&q=80"
      breadcrumbs={[{ name: "Contact" }]}
      
    >
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-light mb-4">We're Always Here for You</h2>
            <div className="w-16 h-px bg-[#cd7f32] mb-6" />
            <p className="text-white/70 leading-relaxed mb-6 font-['Montserrat',sans-serif]">
              Whether it's 3 AM for an emergency airport run or noon on Christmas Day, 
              NYLI Limo is available 24 hours a day, 365 days a year. Our dispatch 
              team never sleeps, and our chauffeurs are always ready.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <span className="text-2xl">📞</span>
                <div>
                  <h3 className="text-lg mb-1">Phone</h3>
                  <a href="tel:+16314524500" className="text-[#cd7f32] hover:underline">+1 631-452-4500</a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <span className="text-2xl">✉️</span>
                <div>
                  <h3 className="text-lg mb-1">Email</h3>
                  <a href="mailto:reservations@nylilimo.com" className="text-[#cd7f32] hover:underline">reservations@nylilimo.com</a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <span className="text-2xl">📍</span>
                <div>
                  <h3 className="text-lg mb-1">Address</h3>
                  <p className="text-white/70">1421 Islip Ave STE 1037<br />Central Islip, NY 11722-3941<br />United States</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#191512] p-6 border border-[#cd7f32]/20">
            <h3 className="text-xl mb-4 text-[#cd7f32]">Send Us a Message</h3>
            <form className="space-y-4">
              <input type="text" placeholder="Your Name" className="w-full p-3 bg-[#0e0c0a] border border-white/15 text-white focus:border-[#cd7f32] outline-none font-['Montserrat',sans-serif]" />
              <input type="email" placeholder="Email Address" className="w-full p-3 bg-[#0e0c0a] border border-white/15 text-white focus:border-[#cd7f32] outline-none font-['Montserrat',sans-serif]" />
              <input type="tel" placeholder="Phone Number" className="w-full p-3 bg-[#0e0c0a] border border-white/15 text-white focus:border-[#cd7f32] outline-none font-['Montserrat',sans-serif]" />
              <textarea rows="4" placeholder="Message" className="w-full p-3 bg-[#0e0c0a] border border-white/15 text-white focus:border-[#cd7f32] outline-none font-['Montserrat',sans-serif]"></textarea>
              <button className="w-full p-3 bg-[#cd7f32] text-[#0e0c0a] font-bold uppercase tracking-widest text-sm hover:bg-[#e09545] transition-all font-['Montserrat',sans-serif]">
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
            className="border border-[#cd7f32]/30"
          />
        </div>
      </div>
    </ServiceLayout>
  );
}