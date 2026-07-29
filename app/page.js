import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Scrolltotopbutton from "@/components/Scrolltotopbutton";

const fleet = [
  { slug: "rolls-royce-ghost", name: "Rolls-Royce Ghost", tag: "Ultra Luxury", cap: "Up to 3 passengers", url: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=800&q=80", href: "/fleet" },
  { slug: "cadillac-escalade", name: "Cadillac Escalade ESV", tag: "SUV", cap: "Up to 6 passengers", url: "https://images.unsplash.com/photo-1683778547049-8d969766b441?w=800&q=80", href: "/fleet" },
  { slug: "lincoln-stretch", name: "Lincoln Stretch Limousine", tag: "Stretch Limo", cap: "Up to 10 passengers", url: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&q=80", href: "/fleet" },
  { slug: "mercedes-sprinter", name: "Mercedes-Benz Sprinter", tag: "Luxury Van", cap: "Up to 14 passengers", url: "https://images.unsplash.com/photo-1578557904035-f68542b3770e?w=800&q=80", href: "/fleet" },
  { slug: "bmw-7-series", name: "BMW 7 Series", tag: "Executive Sedan", cap: "Up to 3 passengers", url: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80", href: "/fleet" },
];

const services = [
  { slug: "airport", icon: "01", title: "Airport Transfer", desc: "JFK, LGA, EWR & Islip. Flight-tracked with curb-side pickup.", href: "/services/airport-transfer" },
  { slug: "corporate", icon: "02", title: "Corporate", desc: "Executive transport for meetings, roadshows & client hospitality.", href: "/services/corporate" },
  { slug: "wedding", icon: "03", title: "Wedding", desc: "Champagne toasts, red-carpet arrivals — your day, flawlessly.", href: "/services/wedding" },
  { slug: "prom", icon: "04", title: "Prom", desc: "Arrive in style. Party buses & luxury sedans for your big night.", href: "/services/prom" },
  { slug: "point-to-point", icon: "05", title: "Point to Point", desc: "Direct, private transfers anywhere in the tri-state area.", href: "/services/point-to-point" },
  { slug: "hourly", icon: "06", title: "Hourly", desc: "By-the-hour chauffeur service for errands, tours & on-demand.", href: "/services/hourly" },
];

export const metadata = {
  title: "NYLI Limo | New York's Premier Chauffeur Service",
  description: "World-class limousine service in New York City. Airport transfers, corporate transportation, weddings & events. +1 631-452-4500.",
};

const testimonials = [
  { quote: "They tracked my flight for four hours after a delay and were waiting with a warm smile. That's not service. That's clairvoyance.", name: "Victoria Chen", role: "Frequent Flyer" },
  { quote: "The champagne was chilled, the cars were flawless, and every guest commented on the chauffeurs. Flawless.", name: "David & Sarah Kaplan", role: "Wedding, Brooklyn" },
  { quote: "NYLI is the only car service where the chauffeur remembers your name after the first ride.", name: "James Thornton", role: "Partner, Thornton & Associates" },
];

export default function Home() {
  return (
    <main className="font-['Work_Sans',sans-serif] overflow-x-hidden bg-[#F6F0E2] text-[#18110D]">
      <Navbar />

      {/* HERO */}
      <section className="relative min-h-screen flex items-end overflow-hidden bg-[#18110D]">
        <img
          src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1920&q=80"
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-55"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#18110D] via-[#18110D]/35 to-[#18110D]/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#7C0F1E]/35 to-transparent" />

        <div className="relative z-10 max-w-[1240px] mx-auto px-6 pb-24 w-full">
          <span className="inline-block text-[11px] tracking-[0.38em] text-[#C79A3C] font-semibold uppercase animate-fade-in-up stagger-1">
            New York Since 2009
          </span>
          <h1 className="font-['Cormorant_Garamond',serif] font-light leading-[0.88] text-[56px] md:text-[96px] lg:text-[128px] my-6 text-[#F6F0E2] animate-fade-in-up stagger-2">
            The Road<br />
            <span className="italic text-[#E6C878]">to Luxury.</span>
          </h1>
          <div className="flex flex-wrap items-end justify-between gap-6 mt-10 animate-fade-in-up stagger-3">
            <p className="text-[#F6F0E2]/75 text-base font-light max-w-sm leading-relaxed">
              Every journey is a statement. From Manhattan boardrooms to Hamptons weekends.
            </p>
            <div className="flex gap-4 flex-wrap animate-fade-in-up stagger-4">
              <Link
                href="/booking"
                className="inline-flex items-center gap-2 px-11 py-4 bg-[#C79A3C] text-[#4A0812] text-[12px] font-bold uppercase tracking-[0.2em] transition-all duration-300 hover:bg-[#E6C878] hover:-translate-y-1"
              >
                Book Your Ride &rarr;
              </Link>
              <a
                href="tel:+16314524500"
                className="inline-flex items-center gap-2 px-11 py-4 border border-white/40 text-[#F6F0E2] text-[12px] font-semibold uppercase tracking-[0.2em] hover:border-[#C79A3C] hover:text-[#E6C878] transition-all duration-300"
              >
                +1 631-452-4500
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS - oxblood band */}
      <section className="bg-[#4A0812] pt-20 pb-24 px-6" style={{ clipPath: "polygon(0 8%, 100% 0, 100% 100%, 0 100%)" }}>
        <div className="max-w-[1080px] mx-auto grid md:grid-cols-3 pt-8">
          {[
            { num: "01", title: "Choose", desc: "Browse our fleet of luxury vehicles, every one immaculate." },
            { num: "02", title: "Book", desc: "Instant confirmation. No calls, no hidden fees." },
            { num: "03", title: "Arrive", desc: "Your chauffeur arrives early, dressed in black." },
          ].map((s, i) => (
            <div
              key={s.num}
              className={`text-center px-6 ${i < 2 ? "md:border-r md:border-white/15" : ""}`}
            >
              <div className="font-['Cormorant_Garamond',serif] italic text-[64px] text-[#E6C878]">{s.num}</div>
              <h3 className="font-['Cormorant_Garamond',serif] text-2xl text-[#F6F0E2] mt-2 mb-2.5">{s.title}</h3>
              <p className="text-[#F6F0E2]/60 text-sm font-light leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FLEET */}
      <section id="fleet" className="pt-24 pb-16 -mt-10">
        <div className="max-w-[1240px] mx-auto mb-11 px-6 flex items-end justify-between">
          <div>
            <span className="text-[11px] tracking-[0.3em] text-[#7C0F1E] font-semibold uppercase">The Fleet</span>
            <h2 className="font-['Cormorant_Garamond',serif] font-light text-5xl mt-3">Select Your Ride</h2>
          </div>
          <Link href="/fleet" className="text-[#7C0F1E] text-[12px] uppercase tracking-[0.15em] font-semibold hover:text-[#4A0812] transition-colors">
            View All &rarr;
          </Link>
        </div>
        <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-none">
          {fleet.map((v) => (
            <Link key={v.slug} href={v.href} className="group flex-shrink-0 w-[380px] snap-center relative overflow-hidden h-[520px]">
              <img src={v.url} alt={v.name} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#18110D]/95 via-[#18110D]/10 to-transparent px-6 pt-8 pb-6">
                <span className="inline-block text-[10px] uppercase tracking-[0.15em] text-[#E6C878] border border-[#C79A3C] px-3 py-1.5 mb-3">
                  {v.tag}
                </span>
                <h3 className="font-['Cormorant_Garamond',serif] text-2xl text-[#F6F0E2]">{v.name}</h3>
                <p className="text-[#F6F0E2]/60 text-[13px] mt-1">{v.cap}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 px-6">
          <div className="max-w-[1100px] mx-auto">
            <div className="mb-5">
              <span className="text-[11px] tracking-[0.3em] text-[#7C0F1E] font-semibold uppercase">Services</span>
              <h2 className="font-['Cormorant_Garamond',serif] font-light text-5xl my-3">Every Occasion</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              {[services.slice(0, 3), services.slice(3, 6)].map((col, ci) => (
                <div key={ci}>
                  {col.map((s, i) => (
                    <Link
                      key={s.slug}
                      href={s.href}
                      className={`group grid grid-cols-[56px_1fr_auto] items-center py-7 border-b border-[#18110D]/10 transition-all duration-300 hover:pl-3 hover:border-[#7C0F1E] ${
                        i === col.length - 1 ? "border-none" : ""
                      }`}
                    >
                      <span className="font-['Cormorant_Garamond',serif] italic text-2xl text-[#C79A3C]">{s.icon}</span>
                      <div>
                        <h3 className="font-['Cormorant_Garamond',serif] text-xl mb-1">{s.title}</h3>
                        <p className="text-[#847863] text-[13px] m-0">{s.desc}</p>
                      </div>
                      <span className="text-[#7C0F1E] text-xl opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                        &rarr;
                      </span>
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          </div>
      </section>

      {/* TESTIMONIALS - dark section */}
      <section className="bg-[#18110D] py-24 px-6">
        <div className="max-w-[1080px] mx-auto">
          <div className="text-center mb-14">
            <span className="text-[11px] tracking-[0.38em] text-[#C79A3C] font-semibold uppercase">Testimonials</span>
            <h2 className="font-['Cormorant_Garamond',serif] font-light text-5xl mt-3 text-[#F6F0E2]">Trusted by Thousands</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-[#FFFDF8] p-9 border-t-[3px] border-[#C79A3C] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl">
                <div className="font-['Cormorant_Garamond',serif] text-[44px] text-[#E6C878] leading-[0.5] mb-3.5">&ldquo;</div>
                <p className="text-[#4A4038] text-sm font-light leading-relaxed mb-5">{t.quote}</p>
                <p className="font-['Cormorant_Garamond',serif] text-lg m-0">{t.name}</p>
                <p className="text-[#847863] text-[11px] tracking-[0.1em] uppercase mt-0.5">{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT / COVERAGE - oxblood */}
      <section id="about" className="bg-[#4A0812] py-28 px-6 relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-[340px] h-[340px] border border-[#C79A3C]/20 rounded-full" />
        <div className="max-w-[1080px] mx-auto grid lg:grid-cols-2 gap-16 items-center relative">
          <div>
            <span className="text-[11px] tracking-[0.38em] text-[#C79A3C] font-semibold uppercase">Why NYLI</span>
            <h2 className="font-['Cormorant_Garamond',serif] font-light text-5xl my-4 mb-9 text-[#F6F0E2] leading-tight">
              The Standard <span className="italic text-[#E6C878]">Never Wavers.</span>
            </h2>
            <div className="grid sm:grid-cols-2 gap-7">
              {[
                { title: "15+ Years", desc: "Serving NYC since 2009" },
                { title: "50K+ Rides", desc: "Zero missed flights" },
                { title: "4.9★ Rating", desc: "Across all platforms" },
                { title: "100% On-Time", desc: "Guaranteed punctuality" },
              ].map((s) => (
                <div key={s.title} className="border-t-2 border-[#C79A3C] pt-4">
                  <div className="font-['Cormorant_Garamond',serif] text-[30px] text-[#F6F0E2]">{s.title}</div>
                  <div className="text-[#F6F0E2]/60 text-[13px]">{s.desc}</div>
                </div>
              ))}
            </div>
          </div>

          <div id="contact" className="border border-white/20 p-10">
            <span className="text-[11px] tracking-[0.38em] text-[#C79A3C] font-semibold uppercase">Coverage</span>
            <div className="flex flex-wrap gap-2 mt-5">
              {["Manhattan", "Brooklyn", "Queens", "Bronx", "Staten Island", "Long Island", "Hamptons", "New Jersey", "Connecticut", "Westchester"].map((a) => (
                <span
                  key={a}
                  className="px-4.5 py-2 border border-white/25 text-[#F6F0E2] text-[12px] hover:border-[#C79A3C] hover:text-[#E6C878] hover:bg-[#C79A3C]/10 transition-all duration-300 cursor-default"
                >
                  {a}
                </span>
              ))}
            </div>
            <div className="mt-7 pt-5 border-t border-white/20 text-[#F6F0E2]/70 text-[13px]">
              <p className="mb-2">1421 Islip Ave STE 1037, Central Islip, NY</p>
              <a href="tel:+16314524500" className="text-[#E6C878] font-semibold">+1 631-452-4500</a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="book" className="py-24 px-6 text-center bg-[#F6F0E2]">
        <span className="text-[11px] tracking-[0.3em] text-[#7C0F1E] font-semibold uppercase">Ready When You Are</span>
        <h2 className="font-['Cormorant_Garamond',serif] font-light text-6xl my-4">
          Ready to <span className="italic text-[#7C0F1E]">Ride?</span>
        </h2>
        <p className="text-[#847863] text-sm mb-10">One call or click. Instant confirmation. No hidden fees.</p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link
            href="/booking"
            className="inline-flex items-center gap-2 px-11 py-4 bg-[#C79A3C] text-[#4A0812] text-[12px] font-bold uppercase tracking-[0.2em] transition-all duration-300 hover:bg-[#E6C878] hover:-translate-y-1"
          >
            Book Now &rarr;
          </Link>
          <a
            href="tel:+16314524500"
            className="px-11 py-4 border border-[#18110D] text-[#18110D] text-[12px] font-semibold uppercase tracking-[0.2em]"
          >
            +1 631-452-4500
          </a>
        </div>
      </section>

      <Footer />
      <Scrolltotopbutton />
    </main>
  );
}

