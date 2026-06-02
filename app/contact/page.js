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
            <div className="w-16 h-px bg-[#b4913c] mb-6" />
            <p className="text-white/70 leading-relaxed mb-6 font-['Montserrat',sans-serif]">
              Whether it's 3 AM for an emergency airport run or noon on Christmas Day, 
              SKNYC Limo is available 24 hours a day, 365 days a year. Our dispatch 
              team never sleeps, and our chauffeurs are always ready.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <span className="text-2xl">📞</span>
                <div>
                  <h3 className="text-lg mb-1">Phone</h3>
                  <a href="tel:+19176904576" className="text-[#b4913c] hover:underline">+1 917-690-4576</a><br />
                  <a href="tel:+15164407666" className="text-[#b4913c] hover:underline">+1 516-440-7666</a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <span className="text-2xl">✉️</span>
                <div>
                  <h3 className="text-lg mb-1">Email</h3>
                  <a href="mailto:reservations@sknyclimo.com" className="text-[#b4913c] hover:underline">reservations@sknyclimo.com</a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <span className="text-2xl">📍</span>
                <div>
                  <h3 className="text-lg mb-1">Address</h3>
                  <p className="text-white/70">135 West 50th Street, Suite 1850<br />New York, NY 10020</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#0d0d15] p-6 border border-[#b4913c]/20">
            <h3 className="text-xl mb-4 text-[#b4913c]">Send Us a Message</h3>
            <form className="space-y-4">
              <input type="text" placeholder="Your Name" className="w-full p-3 bg-[#07070d] border border-white/15 text-white focus:border-[#b4913c] outline-none font-['Montserrat',sans-serif]" />
              <input type="email" placeholder="Email Address" className="w-full p-3 bg-[#07070d] border border-white/15 text-white focus:border-[#b4913c] outline-none font-['Montserrat',sans-serif]" />
              <input type="tel" placeholder="Phone Number" className="w-full p-3 bg-[#07070d] border border-white/15 text-white focus:border-[#b4913c] outline-none font-['Montserrat',sans-serif]" />
              <textarea rows="4" placeholder="Message" className="w-full p-3 bg-[#07070d] border border-white/15 text-white focus:border-[#b4913c] outline-none font-['Montserrat',sans-serif]"></textarea>
              <button className="w-full p-3 bg-[#b4913c] text-[#07070d] font-bold uppercase tracking-widest text-sm hover:bg-[#caa84d] transition-all font-['Montserrat',sans-serif]">
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Map */}
        <div className="mt-12">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.966309534301!2d-73.983284684593!3d40.76097927932644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6bb808b%3A0x8b8c9b9b9b9b9b9b!2s135%20W%2050th%20St%2C%20New%20York%2C%20NY%2010020!5e0!3m2!1sen!2sus!4v1644260000000!5m2!1sen!2sus" 
            width="100%" 
            height="400" 
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            className="border border-[#b4913c]/30"
          />
        </div>
      </div>
    </ServiceLayout>
  );
}