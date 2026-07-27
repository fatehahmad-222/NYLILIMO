import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import Scrolltotopbutton from "@/components/Scrolltotopbutton";

/* DATA ---------------------------------------------- */
const services = [
  {
    icon: "✈",
    title: "Airport Transfers",
    desc: "Seamless pickups and drop-offs at JFK, LGA, EWR, HPN, and ISP. Flight tracking included — we wait if you're delayed.",
    href: "/services/airport-transfer",
  },
  {
    icon: "💼",
    title: "Corporate Transportation",
    desc: "Executive-grade rides for C-suite travel, client entertainment, and roadshows. Discretion and punctuality guaranteed.",
    href: "/services/corporate",
  },
  {
    icon: "💍",
    title: "Wedding Limousine",
    desc: "Make your grand entrance unforgettable. Bridal packages, decorated vehicles, and complimentary champagne service.",
    href: "/services/wedding",
  },
  {
    icon: "🎓",
    title: "Prom & Homecoming",
    desc: "Arrive like royalty. Safe, stylish, and supervised — our prom packages create memories that last a lifetime.",
    href: "/services/prom",
  },
  {
    icon: "📍",
    title: "Point to Point",
    desc: "Door-to-door luxury between any two destinations. City to city, borough to borough — no surge pricing, ever.",
    href: "/services/point-to-point",
  },
  {
    icon: "⏱",
    title: "Hourly As Directed",
    desc: "Keep a personal chauffeur at your disposal for the whole evening, event, or business day. Pure flexibility.",
    href: "/services/hourly",
  },
];

const vehicles = [
  {
    name: "Cadillac Escalade ESV",
    category: "SUV",
    capacity: "6 Passengers",
    image: "https://res.cloudinary.com/dgz6utv5q/image/upload/v1780417498/suv_lcvxgv.jpg",
    features: ["Premium Leather", "Privacy Partition", "Tinted Windows"],
    href: "/fleet/escalade-esv",
  },
  {
    name: "Lincoln Stretch Limousine",
    category: "Stretch Limo",
    capacity: "10 Passengers",
    image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&q=80",
    features: ["Full Bar", "LED Mood Lighting", "Premium Sound"],
    href: "/fleet/lincoln-stretch",
  },
  {
    name: "Mercedes-Benz Sprinter",
    category: "Luxury Van",
    capacity: "14 Passengers",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    features: ["Captain Chairs", "WiFi Enabled", "USB Charging"],
    href: "/fleet/sprinter",
  },
  {
    name: "Rolls-Royce Ghost",
    category: "Ultra Luxury",
    capacity: "3 Passengers",
    image: "https://images.unsplash.com/photo-1563720223185-11003d516935?w=800&q=80",
    features: ["White Glove Service", "Starlight Headliner", "Champagne Service"],
    href: "/fleet/rolls-royce",
  },
  {
    name: "Party Bus",
    category: "Party Bus",
    capacity: "20 Passengers",
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&q=80",
    features: ["Dance Floor", "LED System", "Multiple Screens"],
    href: "/fleet/party-bus",
  },
  {
    name: "BMW 7 Series",
    category: "Executive Sedan",
    capacity: "3 Passengers",
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80",
    features: ["Executive Comfort", "Privacy Glass", "Wireless Charging"],
    href: "/fleet/bmw-7",
  },
];

const worldClass = [
  {
    title: "Professional Chauffeurs",
    desc: "Every driver is background-checked, licensed, and trained in VIP hospitality protocols. Black-suit service, always.",
    icon: "🎩",
    href: "/about/chauffeurs",
  },
  {
    title: "Flight Tracking",
    desc: "We monitor your flight in real-time. Delayed two hours? We know before you land. No extra charges for wait time.",
    icon: "📡",
    href: "/services/airport-transfer",
  },
  {
    title: "24/7 Availability",
    desc: "Round-the-clock dispatch and customer support, 365 days a year. We're always just one call away.",
    icon: "🕐",
    href: "/contact",
  },
  {
    title: "Luxury Fleet",
    desc: "From executive sedans to stretch limousines — our meticulously maintained fleet covers every occasion.",
    icon: "🚘",
    href: "/fleet",
  },
  {
    title: "Instant Online Booking",
    desc: "Book in under 2 minutes. Instant confirmation, digital receipts, and easy modification up to 24 hours before pickup.",
    icon: "⚡",
    href: "/booking",
  },
  {
    title: "Corporate Accounts",
    desc: "Streamlined billing, monthly statements, and dedicated account managers for businesses and frequent travelers.",
    icon: "🏢",
    href: "/corporate-accounts",
  },
];

const areas = [
  "Manhattan", "Brooklyn", "Queens", "The Bronx", "Staten Island",
  "Long Island", "Hamptons", "New Jersey", "Connecticut",
  "Westchester", "Hoboken", "Jersey City", "Newark",
  "White Plains", "Stamford",
];

const airports = [
  { name: "JFK International Airport", code: "JFK" },
  { name: "LaGuardia Airport", code: "LGA" },
  { name: "Newark Liberty International", code: "EWR" },
  { name: "Westchester County Airport", code: "HPN" },
  { name: "Long Island MacArthur Airport", code: "ISP" },
  { name: "Stewart International Airport", code: "SWF" },
];

const stats = [
  { value: "15+", label: "Years of Experience" },
  { value: "50K+", label: "Rides Completed" },
  { value: "100%", label: "On-Time Guarantee" },
  { value: "4.9★", label: "Average Rating" },
];

/* ─── PAGE ──────────────────────────────────────────── */

export default function Home() {
  return (
    <main className="bg-white text-[#1a1a1a] font-['Montserrat',sans-serif] overflow-x-hidden">
      <Navbar />

      {/* ── HERO ── */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-[10px] uppercase tracking-[0.35em] text-[#b8860b] font-medium mb-6">
            New York&apos;s Premier Limousine Service
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-['Cormorant_Garamond',serif] font-light leading-[0.95] mb-8">
            Arrive in<br />
            <span className="italic">Luxury.</span>
          </h1>
          <p className="text-[#6b6b6b] text-sm md:text-base font-light leading-relaxed max-w-xl mx-auto mb-12">
            From JFK to the Hamptons — world-class chauffeur service that
            defines New York City elegance. Available around the clock.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/booking"
              className="inline-flex items-center justify-center px-10 py-3.5 bg-[#1a1a1a] text-white font-medium uppercase tracking-[0.15em] text-[11px] hover:bg-[#b8860b] transition-all duration-300"
            >
              Book Your Ride
            </Link>
            <a
              href="tel:+16314524500"
              className="inline-flex items-center justify-center px-10 py-3.5 border border-[#1a1a1a] text-[#1a1a1a] font-medium uppercase tracking-[0.15em] text-[11px] hover:border-[#b8860b] hover:text-[#b8860b] transition-all duration-300"
            >
              Call Now
            </a>
          </div>
          <div className="mt-8">
            <a
              href="tel:+16314524500"
              className="text-[#999999] text-[12px] hover:text-[#b8860b] transition-colors duration-300"
            >
              +1 631-452-4500
            </a>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="border-y border-[#e8e6e3]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <div key={s.label} className="text-center">
                {i > 0 && <div className="hidden md:block absolute" />}
                <div className="text-3xl md:text-4xl font-['Cormorant_Garamond',serif] font-light text-[#1a1a1a] mb-2">
                  {s.value}
                </div>
                <div className="text-[#999999] text-[10px] tracking-[0.2em] uppercase font-medium">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" className="py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#b8860b] font-medium">
              What We Offer
            </span>
            <h2 className="text-4xl md:text-5xl font-['Cormorant_Garamond',serif] font-light mt-4 mb-6">
              Our Services
            </h2>
            <div className="w-8 h-px bg-[#b8860b] mx-auto" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#e8e6e3]">
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group bg-white p-8 sm:p-10"
              >
                <span className="text-xl mb-5 block opacity-40">{service.icon}</span>
                <h3 className="text-lg font-['Cormorant_Garamond',serif] mb-3 text-[#1a1a1a]">
                  {service.title}
                </h3>
                <p className="text-[#6b6b6b] text-[12px] leading-relaxed font-light mb-6">
                  {service.desc}
                </p>
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#b8860b] font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Learn More →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED VEHICLES ── */}
      <section id="fleet" className="py-24 lg:py-32 bg-[#f9f8f6]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#b8860b] font-medium">
              Travel In Style
            </span>
            <h2 className="text-4xl md:text-5xl font-['Cormorant_Garamond',serif] font-light mt-4 mb-6">
              Featured Vehicles
            </h2>
            <div className="w-8 h-px bg-[#b8860b] mx-auto mb-6" />
            <p className="text-[#6b6b6b] text-[12px] font-light max-w-lg mx-auto leading-relaxed">
              Our immaculate fleet is serviced daily and detailed before every ride. Choose your vehicle and ride in uncompromising comfort.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {vehicles.map((v) => (
              <Link
                key={v.href}
                href={v.href}
                className="group bg-white border border-[#e8e6e3] overflow-hidden"
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={v.image}
                    alt={v.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4 bg-[#1a1a1a] text-white text-[9px] font-medium uppercase tracking-[0.1em] px-2.5 py-1">
                    {v.category}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-['Cormorant_Garamond',serif] text-[#1a1a1a] leading-tight">
                      {v.name}
                    </h3>
                    <span className="text-[#999999] text-[10px] whitespace-nowrap ml-2 mt-1">
                      {v.capacity}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {v.features.map((f) => (
                      <span
                        key={f}
                        className="text-[9px] text-[#999999] border border-[#e8e6e3] px-2 py-0.5"
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/fleet"
              className="inline-flex items-center gap-2 px-8 py-3 border border-[#1a1a1a] text-[#1a1a1a] text-[11px] uppercase tracking-[0.15em] font-medium hover:border-[#b8860b] hover:text-[#b8860b] transition-all duration-300"
            >
              View Full Fleet
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── WORLD CLASS ── */}
      <section id="why-us" className="py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#b8860b] font-medium">
              The NYLI Standard
            </span>
            <h2 className="text-4xl md:text-5xl font-['Cormorant_Garamond',serif] font-light mt-4 mb-6">
              World-Class Experience
            </h2>
            <div className="w-8 h-px bg-[#b8860b] mx-auto" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {worldClass.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group p-8 border border-[#e8e6e3] hover:border-[#b8860b]/30 transition-all duration-300"
              >
                <span className="text-xl mb-5 block opacity-40">{item.icon}</span>
                <h3 className="text-lg font-['Cormorant_Garamond',serif] mb-3 text-[#1a1a1a]">
                  {item.title}
                </h3>
                <p className="text-[#6b6b6b] text-[12px] leading-relaxed font-light">
                  {item.desc}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHERE WE OPERATE ── */}
      <section id="coverage" className="py-24 lg:py-32 bg-[#f9f8f6]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#b8860b] font-medium">
              Coverage Area
            </span>
            <h2 className="text-4xl md:text-5xl font-['Cormorant_Garamond',serif] font-light mt-4 mb-6">
              Where We Operate
            </h2>
            <div className="w-8 h-px bg-[#b8860b] mx-auto mb-6" />
            <p className="text-[#6b6b6b] text-[12px] font-light max-w-md mx-auto">
              Serving the greater New York metropolitan area — from the five boroughs to the surrounding tri-state region.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="mb-14">
              <h3 className="text-[11px] uppercase tracking-[0.2em] text-[#999999] mb-5 font-medium text-center">
                Service Areas
              </h3>
              <div className="flex flex-wrap justify-center gap-2">
                {areas.map((area) => (
                  <span
                    key={area}
                    className="px-4 py-2 border border-[#e8e6e3] text-[#6b6b6b] text-[12px] hover:border-[#b8860b] hover:text-[#b8860b] transition-all duration-200 cursor-default bg-white"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-[11px] uppercase tracking-[0.2em] text-[#999999] mb-5 font-medium text-center">
                Airport Transfers
              </h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {airports.map((airport) => (
                  <div
                    key={airport.code}
                    className="flex items-center gap-4 p-4 border border-[#e8e6e3] bg-white hover:border-[#b8860b]/30 transition-all duration-200"
                  >
                    <span className="text-[#b8860b] font-medium text-sm font-['Cormorant_Garamond',serif] w-10 shrink-0">
                      {airport.code}
                    </span>
                    <span className="text-[#6b6b6b] text-[12px]">
                      {airport.name}
                    </span>
                    <div className="ml-auto w-1.5 h-1.5 rounded-full bg-[#b8860b] shrink-0" />
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10 text-center">
              <a
                href="https://maps.google.com/?q=1421+Islip+Ave+STE+1037+Central+Islip+NY+11722"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.15em] text-[#b8860b] font-medium hover:opacity-70 transition-opacity duration-200"
              >
                View on Google Maps
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </a>
              <div className="mt-6 text-[#999999] text-[12px] leading-relaxed">
                <p>1421 Islip Ave STE 1037</p>
                <p>Central Islip, NY 11722-3941</p>
                <a href="tel:+16314524500" className="hover:text-[#b8860b] transition-colors">+1 631-452-4500</a>
                <span className="mx-2">·</span>
                <a href="mailto:reservations@nylilimo.com" className="hover:text-[#b8860b] transition-colors">reservations@nylilimo.com</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 lg:py-32">
        <div className="max-w-3xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#b8860b] font-medium">
            Ready When You Are
          </span>
          <h2 className="text-4xl md:text-5xl font-['Cormorant_Garamond',serif] font-light mt-4 mb-6">
            Book Your Ride <span className="italic">Today</span>
          </h2>
          <p className="text-[#6b6b6b] text-[12px] font-light mb-10 leading-relaxed max-w-md mx-auto">
            Experience New York like never before. Instant confirmation, no hidden fees, and the impeccable service of NYLI Limo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/booking"
              className="inline-flex items-center justify-center px-10 py-3.5 bg-[#1a1a1a] text-white font-medium uppercase tracking-[0.15em] text-[11px] hover:bg-[#b8860b] transition-all duration-300"
            >
              Reserve Now
            </Link>
            <a
              href="tel:+16314524500"
              className="inline-flex items-center justify-center px-10 py-3.5 border border-[#1a1a1a] text-[#1a1a1a] font-medium uppercase tracking-[0.15em] text-[11px] hover:border-[#b8860b] hover:text-[#b8860b] transition-all duration-300"
            >
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
