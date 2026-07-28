import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Scrolltotopbutton from "@/components/Scrolltotopbutton";

export const metadata = {
  title: "NYLI Limo | New York's Premier Chauffeur Service",
  description: "World-class limousine service in New York City. Airport transfers, corporate transportation, weddings & events. +1 631-452-4500.",
};

const fleet = [
  { name: "Rolls-Royce Ghost", tag: "Ultra Luxury", cap: "3 pax", url: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=900&q=80", href: "/fleet/rolls-royce" },
  { name: "Cadillac Escalade ESV", tag: "SUV", cap: "6 pax", url: "https://images.unsplash.com/photo-1683778547049-8d969766b441?w=900&q=80", href: "/fleet/escalade-esv" },
  { name: "Lincoln Stretch Limousine", tag: "Stretch Limo", cap: "10 pax", url: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=900&q=80", href: "/fleet/lincoln-stretch" },
  { name: "Mercedes-Benz Sprinter", tag: "Luxury Van", cap: "14 pax", url: "https://images.unsplash.com/photo-1578557904035-f68542b3770e?w=900&q=80", href: "/fleet/sprinter" },
  { name: "BMW 7 Series", tag: "Executive Sedan", cap: "3 pax", url: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=900&q=80", href: "/fleet/bmw-7" },
  { name: "Party Bus", tag: "Party", cap: "20 pax", url: "https://images.unsplash.com/photo-1764717727512-226b456d928a?w=900&q=80", href: "/fleet/party-bus" },
];

const services = [
  { icon: "✈", title: "Airport Transfers", desc: "JFK, LGA, EWR, HPN, ISP. Flight tracking.", href: "/services/airport-transfer" },
  { icon: "💼", title: "Corporate Travel", desc: "Executive transport for business.", href: "/services/corporate" },
  { icon: "💍", title: "Weddings", desc: "Bridal packages, champagne service.", href: "/services/wedding" },
  { icon: "🎓", title: "Prom & Events", desc: "Arrive in style, arrive safe.", href: "/services/prom" },
  { icon: "📍", title: "Point to Point", desc: "Door-to-door. No surge pricing.", href: "/services/point-to-point" },
  { icon: "⏱", title: "Hourly Service", desc: "Your chauffeur, your schedule.", href: "/services/hourly" },
];

const testimonials = [
  { quote: "They tracked my flight for four hours after a delay and were waiting with a warm smile. That's not service. That's clairvoyance.", name: "Victoria Chen", role: "Frequent Flyer" },
  { quote: "The champagne was chilled, the cars were flawless, and every guest commented on the chauffeurs. Flawless.", name: "David & Sarah Kaplan", role: "Wedding, Brooklyn" },
  { quote: "NYLI is the only car service where the chauffeur remembers your name after the first ride.", name: "James Thornton", role: "Partner, Thornton & Associates" },
];

export default function Home() {
  return (
    <main className="font-['Montserrat',sans-serif] overflow-x-hidden bg-[#0a0a0a] text-[#e5e5e5]">
      <Navbar />

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1920&q=80" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/70 to-[#0a0a0a]/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <span className="inline-block text-[10px] tracking-[0.4em] text-[#c41e1e] font-medium mb-6 uppercase">New York Since 2009</span>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-['Cormorant_Garamond',serif] font-light text-white leading-[0.9] mb-8 tracking-tight">
            The Road<br /><span className="italic">to Luxury.</span>
          </h1>
          <p className="text-white/40 text-sm md:text-base font-light max-w-lg mx-auto mb-12 leading-relaxed">
            Every journey is a statement. From Manhattan boardrooms to Hamptons weekends.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/booking" className="px-12 py-4 bg-[#8b1a1a] text-white text-[11px] font-medium uppercase tracking-[0.2em] hover:bg-white hover:text-[#0a0a0a] transition-all duration-500">
              Book Your Ride
            </Link>
            <a href="tel:+16314524500" className="px-12 py-4 border border-white/20 text-white text-[11px] font-medium uppercase tracking-[0.2em] hover:border-[#8b1a1a] hover:text-[#8b1a1a] transition-all duration-500">
              +1 631-452-4500
            </a>
          </div>
        </div>
      </section>

      <section className="py-28 lg:py-36 border-b border-[#1e1e1e]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
            {[
              { num: "01", title: "Choose", desc: "Browse our fleet of luxury vehicles. Every car is immaculate and chauffeur-ready." },
              { num: "02", title: "Book", desc: "Tell us where and when. Instant confirmation. No calls, no hidden fees." },
              { num: "03", title: "Arrive", desc: "Your chauffeur arrives early, dressed in black. The rest is pure comfort." },
            ].map((s) => (
              <div key={s.num} className="text-center group">
                <div className="text-6xl md:text-7xl font-['Cormorant_Garamond',serif] font-light text-[#1e1e1e] mb-6 transition-colors duration-500 group-hover:text-[#8b1a1a]/20">{s.num}</div>
                <h3 className="text-xl font-['Cormorant_Garamond',serif] mb-4 text-white">{s.title}</h3>
                <p className="text-[#555555] text-[13px] font-light leading-relaxed max-w-xs mx-auto">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28 lg:py-36 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-16">
          <div className="flex items-end justify-between">
            <div>
              <span className="text-[10px] tracking-[0.3em] text-[#8b1a1a] font-medium uppercase">The Fleet</span>
              <h2 className="text-4xl md:text-5xl font-['Cormorant_Garamond',serif] font-light mt-4 text-white">Select Your Ride</h2>
            </div>
            <Link href="/fleet" className="hidden md:inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] font-medium text-[#8b1a1a] hover:text-white transition-colors">
              View All →
            </Link>
          </div>
        </div>
        <div className="flex overflow-x-auto gap-6 px-6 pb-4 snap-x snap-mandatory scrollbar-none">
          {fleet.map((v) => (
            <Link key={v.name} href={v.href} className="group flex-shrink-0 w-[85vw] md:w-[45vw] lg:w-[30vw] snap-center">
              <div className="relative h-[50vh] md:h-[60vh] overflow-hidden bg-[#111111]">
                <img src={v.url} alt={v.name} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-60" />
                <div className="absolute top-6 left-6 bg-[#0a0a0a]/80 backdrop-blur-sm text-white text-[9px] font-medium uppercase tracking-[0.15em] px-3 py-1.5 border border-[#1e1e1e]">{v.tag}</div>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <h3 className="text-lg font-['Cormorant_Garamond',serif] text-white group-hover:text-[#8b1a1a] transition-colors duration-300">{v.name}</h3>
                <span className="text-[#555555] text-[11px]">{v.cap}</span>
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center mt-8 md:hidden">
          <Link href="/fleet" className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] font-medium text-[#8b1a1a] hover:text-white transition-colors">
            View Full Fleet →
          </Link>
        </div>
      </section>

      <section id="services" className="py-28 lg:py-36 border-y border-[#1e1e1e]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[10px] tracking-[0.3em] text-[#8b1a1a] font-medium uppercase">Services</span>
            <h2 className="text-4xl md:text-5xl font-['Cormorant_Garamond',serif] font-light mt-4 text-white">Every Occasion</h2>
            <div className="w-8 h-px bg-[#8b1a1a] mx-auto mt-6" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((s) => (
              <Link key={s.href} href={s.href} className="group border border-[#1e1e1e] p-8 hover:border-[#8b1a1a]/30 transition-all duration-500 hover:bg-[#111111]">
                <span className="text-2xl mb-4 block opacity-40 group-hover:opacity-70 transition-opacity duration-300">{s.icon}</span>
                <h3 className="text-lg font-['Cormorant_Garamond',serif] text-white mb-2 group-hover:text-[#8b1a1a] transition-colors duration-300">{s.title}</h3>
                <p className="text-[#555555] text-[12px] font-light leading-relaxed">{s.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28 lg:py-36">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[10px] tracking-[0.3em] text-[#8b1a1a] font-medium uppercase">Testimonials</span>
            <h2 className="text-4xl md:text-5xl font-['Cormorant_Garamond',serif] font-light mt-4 text-white">Trusted by Thousands</h2>
            <div className="w-8 h-px bg-[#8b1a1a] mx-auto mt-6" />
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="border border-[#1e1e1e] p-8 hover:border-[#2a2a2a] transition-all duration-500">
                <svg className="w-5 h-5 text-[#8b1a1a]/20 mb-5" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
                <p className="text-[#888888] text-[13px] font-light leading-relaxed mb-6">{t.quote}</p>
                <p className="text-white text-sm font-['Cormorant_Garamond',serif]">{t.name}</p>
                <p className="text-[#555555] text-[10px] tracking-[0.1em] uppercase mt-1">{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28 lg:py-36 bg-[#111111]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <span className="text-[10px] tracking-[0.3em] text-[#8b1a1a] font-medium uppercase">Why NYLI</span>
              <h2 className="text-4xl md:text-5xl font-['Cormorant_Garamond',serif] font-light mt-4 mb-10 text-white leading-tight">
                The Standard<br /><span className="italic">Never Wavers.</span>
              </h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { title: "15+ Years", desc: "Serving NYC since 2009" },
                  { title: "50K+ Rides", desc: "Zero missed flights" },
                  { title: "4.9★ Rating", desc: "Across all platforms" },
                  { title: "100% On-Time", desc: "Guaranteed punctuality" },
                ].map((s) => (
                  <div key={s.title} className="border-l border-[#8b1a1a]/30 pl-4">
                    <div className="text-2xl font-['Cormorant_Garamond',serif] text-white">{s.title}</div>
                    <div className="text-[#555555] text-[11px] mt-1">{s.desc}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="border border-[#1e1e1e] p-8 lg:p-10 bg-[#0a0a0a]">
              <span className="text-[10px] tracking-[0.3em] text-[#8b1a1a] font-medium uppercase">Coverage</span>
              <div className="flex flex-wrap gap-2 mt-6">
                {["Manhattan", "Brooklyn", "Queens", "Bronx", "Staten Island", "Long Island", "Hamptons", "New Jersey", "Connecticut", "Westchester"].map((a) => (
                  <span key={a} className="px-3 py-1.5 border border-[#1e1e1e] text-[#555555] text-[10px] hover:border-[#8b1a1a] hover:text-[#8b1a1a] transition-all duration-300 cursor-default">{a}</span>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-[#1e1e1e] text-[#555555] text-[12px] font-light leading-relaxed">
                <p>1421 Islip Ave STE 1037, Central Islip, NY</p>
                <a href="tel:+16314524500" className="text-[#8b1a1a] hover:text-white transition-colors mt-2 inline-block">+1 631-452-4500</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24 bg-[#8b1a1a]">
        <div className="max-w-3xl mx-auto text-center px-6">
          <h2 className="text-4xl md:text-5xl font-['Cormorant_Garamond',serif] font-light text-white mb-6 leading-tight">Ready to Ride?</h2>
          <p className="text-white/70 text-[13px] font-light mb-10 max-w-sm mx-auto">One call or click. Instant confirmation. No hidden fees.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/booking" className="px-10 py-3.5 bg-[#0a0a0a] text-white text-[11px] font-medium uppercase tracking-[0.2em] hover:bg-white hover:text-[#0a0a0a] transition-all duration-500">
              Book Now
            </Link>
            <a href="tel:+16314524500" className="px-10 py-3.5 border border-white/40 text-white text-[11px] font-medium uppercase tracking-[0.2em] hover:bg-white hover:text-[#0a0a0a] transition-all duration-500">
              +1 631-452-4500
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <Scrolltotopbutton />
    </main>
  );
}
