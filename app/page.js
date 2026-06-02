import Navbar from "@/components/Navbar";
import Link from "next/link";

/* DATA ---------------------------------------------- */
const services = [
  {
    icon: "✈️",
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
    icon: "⏱️",
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
    image: "https://images.unsplash.com/photo-1686836015338-6db51fc71d9d?w=800&q=80",
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
        color: "from-blue-900/40 to-indigo-900/20",

    href: "/about/chauffeurs",
  },
  {
    title: "Flight Tracking",
    desc: "We monitor your flight in real-time. Delayed two hours? We know before you land. No extra charges for wait time.",
    icon: "📡",
    color: "from-blue-900/40 to-indigo-900/20",
    href: "/services/airport-transfer",
  },
  {
    title: "24/7 Availability",
    desc: "Round-the-clock dispatch and customer support, 365 days a year. We're always just one call away.",
    icon: "🕐",
        color: "from-blue-900/40 to-indigo-900/20",

    href: "/contact",
  },
  {
    title: "Luxury Fleet",
    desc: "From executive sedans to stretch limousines — our meticulously maintained fleet covers every occasion.",
    icon: "🚘",
        color: "from-blue-900/40 to-indigo-900/20",

    href: "/fleet",
  },
  {
    title: "Instant Online Booking",
    desc: "Book in under 2 minutes. Instant confirmation, digital receipts, and easy modification up to 24 hours before pickup.",
    icon: "⚡",
        color: "from-blue-900/40 to-indigo-900/20",

    href: "/booking",
  },
  {
    title: "Corporate Accounts",
    desc: "Streamlined billing, monthly statements, and dedicated account managers for businesses and frequent travelers.",
    icon: "🏢",
        color: "from-blue-900/40 to-indigo-900/20",

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
    <main className="bg-[#07070d] text-white font-['Cormorant_Garamond',serif] overflow-x-hidden">
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=1800&q=80')",
          }}
        />
        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#07070d]/80 via-[#07070d]/60 to-[#07070d]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#07070d]/70 via-transparent to-[#07070d]/40" />

        {/* Decorative line */}
        <div className="absolute left-12 top-1/2 -translate-y-1/2 hidden xl:block">
          <div className="w-px h-64 bg-gradient-to-b from-transparent via-[#b4913c] to-transparent opacity-50" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto pt-28">
          <p className="text-[#b4913c] text-sm tracking-[0.4em] uppercase mb-6 font-['Montserrat',sans-serif]">
            New York&apos;s Premier Limousine Service
          </p>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-light leading-none mb-6 tracking-tight">
            <span className="block">Arrive in</span>
            <span className="text-[#b4913c] italic font-medium">Luxury.</span>
          </h1>
          <p className="text-white/60 text-lg md:text-xl font-['Montserrat',sans-serif] font-light tracking-wide max-w-2xl mx-auto mb-12 leading-relaxed">
            From JFK to the Hamptons — world-class chauffeur service that
            defines New York City elegance. Available around the clock.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/booking"
              className="px-10 py-4 bg-[#b4913c] text-[#07070d] font-bold uppercase tracking-widest text-sm hover:bg-[#caa84d] transition-all duration-300 shadow-[0_0_40px_rgba(180,145,60,0.4)] hover:shadow-[0_0_60px_rgba(180,145,60,0.6)] font-['Montserrat',sans-serif]"
            >
              Book Your Ride
            </Link>
            <a
              href="tel:+19176904576"
              className="px-10 py-4 border border-[#b4913c]/50 text-[#b4913c] font-medium uppercase tracking-widest text-sm hover:border-[#b4913c] hover:bg-[#b4913c]/10 transition-all duration-300 font-['Montserrat',sans-serif]"
            >
              Call Now
            </a>
          </div>

          {/* Phone numbers */}
          <div className="mt-8 flex flex-col sm:flex-row gap-2 sm:gap-6 justify-center text-white/40 text-sm font-['Montserrat',sans-serif]">
            <a href="tel:+19176904576" className="hover:text-[#b4913c] transition-colors">
              +1 917-690-4576
            </a>
            <span className="hidden sm:block opacity-40">·</span>
            <a href="tel:+15164407666" className="hover:text-[#b4913c] transition-colors">
              +1 516-440-7666
            </a>
          </div>
        </div>

        
      </section>

      {/* ── STATS ── */}
      <section className="border-y border-[#b4913c]/20 bg-[#0a0a10]">
        <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-4xl md:text-5xl font-light text-[#b4913c] mb-2">
                {s.value}
              </div>
              <div className="text-white/50 text-xs tracking-widest uppercase font-['Montserrat',sans-serif]">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" className="py-28 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#b4913c] text-xs tracking-[0.4em] uppercase mb-4 font-['Montserrat',sans-serif]">
            What We Offer
          </p>
          <h2 className="text-5xl md:text-6xl font-light mb-4">Our Services</h2>
          <div className="w-16 h-px bg-[#b4913c] mx-auto" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service) => (
            <Link
              key={service.href}
              href={service.href}
              className="group relative p-8 border border-white/8 bg-white/[0.02] hover:bg-[#b4913c]/5 hover:border-[#b4913c]/40 rounded-sm transition-all duration-300 overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-0 group-hover:w-full h-px bg-gradient-to-r from-[#b4913c] to-transparent transition-all duration-500" />
             
              <h3 className="text-xl mb-3 text-[#b4913c] group-hover:text-[#b4913c] transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed font-['Montserrat',sans-serif] font-light">
                {service.desc}
              </p>
              <div className="mt-6 flex items-center gap-2 text-[#b4913c] text-xs uppercase tracking-widest font-['Montserrat',sans-serif] font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Learn More
                <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── FEATURED VEHICLES ── */}
      <section id="fleet" className="py-28 bg-[#09090f]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-[#b4913c] text-xs tracking-[0.4em] uppercase mb-4 font-['Montserrat',sans-serif]">
              Travel In Style
            </p>
            <h2 className="text-5xl md:text-6xl font-light mb-4">Featured Vehicles</h2>
            <div className="w-16 h-px bg-[#b4913c] mx-auto mb-6" />
            <p className="text-white/50 text-sm font-['Montserrat',sans-serif] max-w-xl mx-auto leading-relaxed">
              Our immaculate fleet is serviced daily and detailed before every ride. Choose your vehicle and ride in uncompromising comfort.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {vehicles.map((v) => (
              <Link
                key={v.href}
                href={v.href}
                className="group relative overflow-hidden rounded-sm border border-white/8 hover:border-[#b4913c]/40 transition-all duration-500"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={v.image}
                    alt={v.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07070d] via-[#07070d]/30 to-transparent" />
                  {/* Category badge */}
                  <div className="absolute top-4 right-4 bg-[#b4913c] text-[#07070d] text-xs font-bold uppercase tracking-wider px-3 py-1 font-['Montserrat',sans-serif]">
                    {v.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 bg-[#0d0d15]">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl group-hover:text-[#b4913c] transition-colors duration-300 leading-tight">
                      {v.name}
                    </h3>
                    <span className="text-white/40 text-xs font-['Montserrat',sans-serif] whitespace-nowrap ml-2 mt-1">
                      {v.capacity}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {v.features.map((f) => (
                      <span
                        key={f}
                        className="text-xs text-[#b4913c]/70 border border-[#b4913c]/25 px-2 py-1 font-['Montserrat',sans-serif]"
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-2 text-[#b4913c] text-xs uppercase tracking-widest font-['Montserrat',sans-serif] font-medium">
                    View Details
                    <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/fleet"
              className="inline-flex items-center gap-3 px-10 py-4 border border-[#b4913c]/50 text-[#b4913c] text-sm uppercase tracking-widest font-['Montserrat',sans-serif] hover:bg-[#b4913c]/10 hover:border-[#b4913c] transition-all duration-300"
            >
              View Full Fleet
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── WORLD CLASS ── */}
      <section id="why-us" className="py-28 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#b4913c] text-xs tracking-[0.4em] uppercase mb-4 font-['Montserrat',sans-serif]">
            The SKNYC Standard
          </p>
          <h2 className="text-5xl md:text-6xl font-light mb-4">World-Class Experience</h2>
          <div className="w-16 h-px bg-[#b4913c] mx-auto" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {worldClass.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`group relative p-8 rounded-sm bg-gradient-to-br ${item.color} border border-white/8 hover:border-[#b4913c]/40 transition-all duration-300 overflow-hidden`}
            >
              <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-[#b4913c]/5 -translate-y-8 translate-x-8 group-hover:scale-150 transition-transform duration-500" />
           
              <h3 className="text-xl mb-3 group-hover:text-[#b4913c] transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-white/55 text-sm leading-relaxed font-['Montserrat',sans-serif] font-light">
                {item.desc}
              </p>
              <div className="mt-6 flex items-center gap-2 text-[#b4913c] text-xs uppercase tracking-widest font-['Montserrat',sans-serif] font-medium opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                Explore
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── WHERE WE OPERATE ── */}
      <section id="coverage" className="py-28 bg-[#09090f]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-[#b4913c] text-xs tracking-[0.4em] uppercase mb-4 font-['Montserrat',sans-serif]">
              Coverage Area
            </p>
            <h2 className="text-5xl md:text-6xl font-light mb-4">Where We Operate</h2>
            <div className="w-16 h-px bg-[#b4913c] mx-auto mb-4" />
            <p className="text-white/50 text-sm font-['Montserrat',sans-serif] max-w-lg mx-auto">
              Serving the greater New York metropolitan area — from the five boroughs to the surrounding tri-state region.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 items-start">
            {/* Left: Areas + Airports */}
            <div className="space-y-10">
              {/* Areas */}
              <div>
                <h3 className="text-sm uppercase tracking-[0.3em] text-[#b4913c] mb-5 font-['Montserrat',sans-serif]">
                  Service Areas
                </h3>
                <div className="flex flex-wrap gap-2.5">
                  {areas.map((area) => (
                    <span
                      key={area}
                      className="px-4 py-2 border border-white/15 text-white/70 text-sm font-['Montserrat',sans-serif] hover:border-[#b4913c]/50 hover:text-[#b4913c] transition-all duration-200 cursor-default"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>

              {/* Airports */}
              <div>
                <h3 className="text-sm uppercase tracking-[0.3em] text-[#b4913c] mb-5 font-['Montserrat',sans-serif]">
                  Airport Transfers
                </h3>
                <div className="space-y-3">
                  {airports.map((airport) => (
                    <div
                      key={airport.code}
                      className="flex items-center gap-4 p-4 border border-white/8 bg-white/[0.02] hover:border-[#b4913c]/30 transition-all duration-200"
                    >
                      <span className="text-[#b4913c] font-bold text-lg font-['Montserrat',sans-serif] w-12 shrink-0">
                        {airport.code}
                      </span>
                      <span className="text-white/65 text-sm font-['Montserrat',sans-serif]">
                        {airport.name}
                      </span>
                      <div className="ml-auto w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Map */}
            <div className="relative">
              <a
                href="https://maps.google.com/?q=New+York+City,+NY"
                target="_blank"
                rel="noopener noreferrer"
                className="group block relative overflow-hidden rounded-sm border border-[#b4913c]/25 hover:border-[#b4913c]/60 transition-all duration-300 shadow-[0_0_40px_rgba(180,145,60,0.1)] hover:shadow-[0_0_60px_rgba(180,145,60,0.2)]"
                aria-label="Open SKNYC Limo location in Google Maps"
              >
                <img
                  src="https://res.cloudinary.com/dgz6utv5q/image/upload/v1780331064/mapimglimosknyc_xq64ej.png"
                  alt="SKNYC Limo Service Area Map"
                  className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"
                  
                />
                {/* Map overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#07070d]/60 via-transparent to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-[#b4913c] text-[#07070d] px-6 py-3 font-bold uppercase tracking-widest text-sm font-['Montserrat',sans-serif]">
                    Open in Google Maps
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="text-white/80 text-sm font-['Montserrat',sans-serif]">
                    📍 New York City Metropolitan Area
                  </p>
                </div>
              </a>

              {/* Address card */}
              <div className="mt-4 p-5 border border-[#b4913c]/20 bg-[#0d0d15] space-y-3">
                <p className="text-[#b4913c] text-xs uppercase tracking-widest font-['Montserrat',sans-serif]">
                  Contact & Address
                </p>
                <p className="text-white/70 text-sm font-['Montserrat',sans-serif]">
                   135 West 50th Street, Suite 1850<br />
                  New York, NY 10020
                </p>
                <div className="flex flex-col gap-1.5">
                  <a
                    href="tel:+19176904576"
                    className="text-white/70 hover:text-[#b4913c] text-sm font-['Montserrat',sans-serif] transition-colors"
                  >
                     +1 917-690-4576
                  </a>
                  <a
                    href="tel:+15164407666"
                    className="text-white/70 hover:text-[#b4913c] text-sm font-['Montserrat',sans-serif] transition-colors"
                  >
                     +1 516-440-7666
                  </a>
                  <a
                    href="mailto:reservations@sknyclimo.com"
                    className="text-white/70 hover:text-[#b4913c] text-sm font-['Montserrat',sans-serif] transition-colors"
                  >
                    ✉️ reservations@sknyclimo.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="relative py-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1800&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-[#07070d]/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#07070d] via-transparent to-[#07070d]" />

        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <p className="text-[#b4913c] text-xs tracking-[0.4em] uppercase mb-6 font-['Montserrat',sans-serif]">
            Ready When You Are
          </p>
          <h2 className="text-5xl md:text-6xl font-light mb-6">
            Book Your Ride <span className="text-[#b4913c] italic">Today</span>
          </h2>
          <p className="text-white/55 text-base font-['Montserrat',sans-serif] mb-10 leading-relaxed">
            Experience New York like never before. Instant confirmation, no hidden fees, and the impeccable service of SKNYC Limo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/booking"
              className="px-12 py-4 bg-[#b4913c] text-[#07070d] font-bold uppercase tracking-widest text-sm hover:bg-[#caa84d] transition-all duration-300 shadow-[0_0_50px_rgba(180,145,60,0.5)] font-['Montserrat',sans-serif]"
            >
              Reserve Now
            </Link>
            <a
              href="tel:+19176904576"
              className="px-12 py-4 border border-white/30 text-white font-medium uppercase tracking-widest text-sm hover:border-[#b4913c] hover:text-[#b4913c] transition-all duration-300 font-['Montserrat',sans-serif]"
            >
              +1 917-690-4576
            </a>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-[#05050a] border-t border-[#b4913c]/15">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Brand */}
            <div className="lg:col-span-1">
              <div className="mb-5">
                {/* Logo placeholder */}
                <span className="text-3xl  font-light tracking-widest text-[#b4913c]">
                  SKNYC
                  <span className="text-white/40 text-lg"> LIMO</span>
                </span>
              </div>
              <p className="text-white/45 text-sm leading-relaxed font-['Montserrat',sans-serif] mb-6">
                New York City&apos;s premier chauffeur service. Luxury transportation for every occasion.
              </p>
              <div className="flex gap-3">
                {["facebook", "instagram", "twitter"].map((social) => (
                  <a
                    key={social}
                    href={`https://${social}.com/sknyclimo`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 border border-white/15 flex items-center justify-center text-white/40 hover:border-[#b4913c]/50 hover:text-[#b4913c] transition-all duration-200 capitalize text-xs font-['Montserrat',sans-serif]"
                  >
                    {social[0].toUpperCase()}
                  </a>
                ))}
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-sm uppercase tracking-[0.3em] text-[#b4913c] mb-5 font-['Montserrat',sans-serif]">
                Services
              </h4>
              <ul className="space-y-2.5">
                {services.slice(0, 7).map((s) => (
                  <li key={s.href}>
                    <Link
                      href={s.href}
                      className="text-white/45 text-sm font-['Montserrat',sans-serif] hover:text-[#b4913c] transition-colors"
                    >
                      {s.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Fleet */}
            <div>
              <h4 className="text-sm uppercase tracking-[0.3em] text-[#b4913c] mb-5 font-['Montserrat',sans-serif]">
                Our Fleet
              </h4>
              <ul className="space-y-2.5">
                {vehicles.map((v) => (
                  <li key={v.href}>
                    <Link
                      href={v.href}
                      className="text-white/45 text-sm font-['Montserrat',sans-serif] hover:text-[#b4913c] transition-colors"
                    >
                      {v.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-sm uppercase tracking-[0.3em] text-[#b4913c] mb-5 font-['Montserrat',sans-serif]">
                Contact
              </h4>
              <ul className="space-y-3 text-white/45 text-sm font-['Montserrat',sans-serif]">
                <li>
                  <a href="tel:+19176904576" className="hover:text-[#b4913c] transition-colors">
                     +1 917-690-4576
                  </a>
                </li>
                <li>
                  <a href="tel:+15164407666" className="hover:text-[#b4913c] transition-colors">
                     +1 516-440-7666
                  </a>
                </li>
                <li>
                  <a href="mailto:reservations@sknyclimo.com" className="hover:text-[#b4913c] transition-colors">
                    ✉️ reservations@sknyclimo.com
                  </a>
                </li>
                <li className="leading-relaxed">
                   135 West 50th Street, Suite 1850<br />
                  New York, NY 10020
                </li>
                <li className="text-emerald-400/80">
                   Available 24/7 · 365 days/year
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-14 pt-8 border-t border-white/8 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-white/25 text-xs font-['Montserrat',sans-serif]">
              © {new Date().getFullYear()} SKNYC Limo. All rights reserved.
            </p>
            <div className="flex gap-6">
              {["Privacy Policy", "Terms of Service", "Cancellation Policy"].map((link) => (
                <Link
                  key={link}
                  href={`/${link.toLowerCase().replace(/ /g, "-")}`}
                  className="text-white/25 text-xs hover:text-[#b4913c] transition-colors font-['Montserrat',sans-serif]"
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}