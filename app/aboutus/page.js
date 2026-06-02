import Navbar from "@/components/Navbar";
import Link from "next/link";

/* ── STORY DATA ───────────────────────────────────────── */

const timeline = [
  {
    year: "2009",
    title: "Founded in Manhattan",
    desc: "SKNYC Limo was born from a single promise: that New York City deserved a limousine service as relentless, refined, and ambitious as the city itself. Our founder, a former luxury hotel concierge who spent a decade curating VIP experiences, launched with two vehicles and an obsession with punctuality.",
  },
  {
    year: "2012",
    title: "Corporate Contracts & Growth",
    desc: "Word spread through Midtown boardrooms. Within three years, Fortune 500 companies and law firms retained SKNYC as their exclusive ground transport partner. We expanded our fleet to 15 vehicles and opened a dedicated corporate accounts division.",
  },
  {
    year: "2016",
    title: "Fleet Expansion & White Glove Standard",
    desc: "We introduced the White Glove Standard — a rigorous 47-point service protocol covering chauffeur presentation, vehicle preparation, route intelligence, and client communication. Every ride, every time. The Rolls-Royce Ghost joined the fleet that same year.",
  },
  {
    year: "2019",
    title: "50,000 Rides Milestone",
    desc: "A quiet Tuesday in October marked our 50,000th completed ride. Not a single no-show. Not a single missed flight. We celebrated by giving every chauffeur a week off — because the people who carry our reputation deserve to be carried too.",
  },
  {
    year: "2024",
    title: "The Standard, Redefined",
    desc: "Today SKNYC operates the most sophisticated private fleet in the New York metropolitan area. We've served celebrities, heads of state, brides, students heading to prom, and executives closing billion-dollar deals. The vehicle changes. The standard never does.",
  },
];

const values = [
  {
    title: "Punctuality Is Non-Negotiable",
    desc: "We don't believe in 'close enough.' Our chauffeurs arrive 15 minutes early — every time, for every client, without exception. Tardiness is simply not in our vocabulary.",
    
  },
  {
    title: "Discretion Above All",
    desc: "What happens in our vehicles stays there. From confidential board discussions to personal milestones, our chauffeurs are trained in the art of professional silence and absolute discretion.",
    
  },
  {
    title: "Obsessive Preparation",
    desc: "Before every pickup, we review traffic patterns, monitor weather, track flights, and prepare alternate routes. By the time you step in, we've already solved every problem you haven't thought of yet.",
    
  },
  {
    title: "People Over Profit",
    desc: "We've turned down contracts that would compromise our service quality. Growth without integrity isn't growth — it's erosion. We'd rather have 100 loyal clients than 1,000 disappointed ones.",
    
  },
];

const team = [
  {
    name: "Marcus Reid",
    role: "Founder & CEO",
    bio: "Former VIP concierge at The Plaza Hotel. 20+ years in luxury hospitality. Built SKNYC from two cars and an unshakeable belief that ground transportation could be an experience, not just a transaction.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
  },
  {
    name: "Sophia Delgado",
    role: "Director of Operations",
    bio: "Former logistics director for a private aviation firm. Sophia is the reason our on-time rate has held at 99.4% for six consecutive years. She considers that a problem to solve, not a record to celebrate.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
  },
  {
    name: "James Okafor",
    role: "Head Chauffeur & Training Director",
    bio: "17 years behind the wheel for heads of state, A-list entertainers, and C-suite executives. James wrote our 47-point White Glove Standard and personally trains every chauffeur who joins the SKNYC family.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
  },
];

const stats = [
  { value: "15+", label: "Years in Service" },
  { value: "50K+", label: "Rides Completed" },
  { value: "99.4%", label: "On-Time Rate" },
  { value: "4.9★", label: "Average Rating" },
];

/* ── PAGE ─────────────────────────────────────────────── */

export default function AboutPage() {
  return (
    <main className="bg-[#07070d] text-white font-['Cormorant_Garamond',serif] overflow-x-hidden">
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative min-h-[600px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1800&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#07070d]/75 via-[#07070d]/60 to-[#07070d]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#07070d]/60 via-transparent to-[#07070d]/40" />

        {/* Decorative vertical line */}
        <div className="absolute left-12 top-1/2 -translate-y-1/2 hidden xl:block">
          <div className="w-px h-64 bg-gradient-to-b from-transparent via-[#b4913c] to-transparent opacity-40" />
        </div>

        <div
          className="relative z-10 text-center px-4 max-w-4xl mx-auto"
          style={{ paddingTop: "180px", paddingBottom: "80px" }}
        >
          <p className="text-[#b4913c] text-xs tracking-[0.4em] uppercase mb-6 font-['Montserrat',sans-serif]">
            Our Story
          </p>
          <h1 className="text-6xl md:text-7xl font-light leading-none mb-6">
            About{" "}
            <span className="text-[#b4913c] italic font-medium">SKNYC</span>
          </h1>
          <div className="w-20 h-px bg-[#b4913c] mx-auto mb-8" />
          <p className="text-white/70 text-lg font-['Montserrat',sans-serif] font-light max-w-2xl mx-auto leading-relaxed">
            Fifteen years. Fifty thousand rides. One unwavering standard. This
            is the story of how a single promise became New York City's most
            trusted name in luxury transportation.
          </p>
        </div>
      </section>

      {/* ── BREADCRUMBS ── */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center gap-2 text-sm font-['Montserrat',sans-serif] text-white/40">
          <Link href="/" className="hover:text-[#b4913c] transition-colors">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span className="text-[#b4913c]">About Us</span>
        </div>
      </div>

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

      {/* ── ORIGIN STORY ── */}
      <section className="py-28 px-4 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[#b4913c] text-xs tracking-[0.4em] uppercase mb-4 font-['Montserrat',sans-serif]">
              Where It All Began
            </p>
            <h2 className="text-4xl md:text-5xl font-light mb-6 leading-tight">
              A City That Never Sleeps
              <br />
              <span className="text-[#b4913c] italic">Deserves Better.</span>
            </h2>
            <div className="w-16 h-px bg-[#b4913c] mb-8" />
            <div className="space-y-5 text-white/65 font-['Montserrat',sans-serif] text-sm leading-relaxed font-light">
              <p>
                In 2009, our founder Marcus Reid stood outside JFK Terminal 4
                watching a client — a woman who had just flown fourteen hours
                from Tokyo for her daughter's wedding — wait forty minutes in
                the rain for a car that never came. He handed her his phone,
                his umbrella, and a promise.
              </p>
              <p>
                That night, he made a decision. New York City — a place that
                prides itself on having everything — deserved ground
                transportation worthy of its reputation. Not just a car and a
                driver, but an experience. Not just punctuality, but
                anticipation. Not just service, but care.
              </p>
              <p>
                He started with two vehicles, a secondhand suit, and a
                handwritten note in his wallet that read: <em>"No one waits in
                the rain."</em> Fifteen years later, that note still hangs
                framed in our dispatch office.
              </p>
            </div>
          </div>

          {/* Image collage */}
          <div className="relative h-[500px]">
            <img
              src="https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=800&q=80"
              alt="Luxury vehicle on NYC street"
              className="absolute top-0 right-0 w-3/4 h-72 object-cover border border-[#b4913c]/20"
            />
            <img
              src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&q=80"
              alt="New York City skyline"
              className="absolute bottom-0 left-0 w-2/3 h-64 object-cover border border-[#b4913c]/20"
            />
            {/* Gold accent block */}
            <div className="absolute bottom-16 right-4 bg-[#b4913c] px-6 py-4 text-[#07070d]">
              <p className="text-2xl font-light font-['Cormorant_Garamond',serif]">
                "No one waits
              </p>
              <p className="text-2xl font-medium italic font-['Cormorant_Garamond',serif]">
                in the rain."
              </p>
              <p className="text-xs font-['Montserrat',sans-serif] mt-1 opacity-70">
                — Marcus Reid, Founder
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── TIMELINE ── */}
      <section className="py-28 bg-[#09090f]">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-[#b4913c] text-xs tracking-[0.4em] uppercase mb-4 font-['Montserrat',sans-serif]">
              Fifteen Years of Excellence
            </p>
            <h2 className="text-4xl md:text-5xl font-light mb-4">Our Journey</h2>
            <div className="w-16 h-px bg-[#b4913c] mx-auto" />
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[80px] md:left-1/2 top-0 bottom-0 w-px bg-[#b4913c]/20" />

            <div className="space-y-12">
              {timeline.map((item, idx) => (
                <div
                  key={item.year}
                  className={`relative flex gap-8 items-start ${
                    idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Year bubble — mobile always left, desktop center */}
                  <div className="absolute left-[80px] md:left-1/2 -translate-x-1/2 w-14 h-14 bg-[#0d0d15] border border-[#b4913c]/50 flex items-center justify-center z-10">
                    <span className="text-[#b4913c] text-xs font-bold font-['Montserrat',sans-serif] tracking-wider">
                      {item.year}
                    </span>
                  </div>

                  {/* Content card */}
                  <div
                    className={`ml-[120px] md:ml-0 md:w-[calc(50%-40px)] p-6 border border-white/8 bg-white/[0.02] hover:border-[#b4913c]/30 transition-all duration-300 ${
                      idx % 2 === 0 ? "md:mr-[calc(50%+40px)]" : "md:ml-[calc(50%+40px)]"
                    }`}
                  >
                    <h3 className="text-xl mb-2 text-[#b4913c]">{item.title}</h3>
                    <p className="text-white/60 text-sm leading-relaxed font-['Montserrat',sans-serif] font-light">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className="py-28 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#b4913c] text-xs tracking-[0.4em] uppercase mb-4 font-['Montserrat',sans-serif]">
            What Drives Us
          </p>
          <h2 className="text-4xl md:text-5xl font-light mb-4">
            The SKNYC Standard
          </h2>
          <div className="w-16 h-px bg-[#b4913c] mx-auto" />
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {values.map((v) => (
            <div
              key={v.title}
              className="group p-8 border border-white/8 bg-white/[0.02] hover:border-[#b4913c]/40 hover:bg-[#b4913c]/5 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-0 group-hover:w-full h-px bg-gradient-to-r from-[#b4913c] to-transparent transition-all duration-500" />
              <div className="text-3xl mb-4">{v.icon}</div>
              <h3 className="text-xl mb-3 group-hover:text-[#b4913c] transition-colors duration-300">
                {v.title}
              </h3>
              <p className="text-white/55 text-sm leading-relaxed font-['Montserrat',sans-serif] font-light">
                {v.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── TEAM ── */}
      <section className="py-28 bg-[#09090f]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-[#b4913c] text-xs tracking-[0.4em] uppercase mb-4 font-['Montserrat',sans-serif]">
              The People Behind the Promise
            </p>
            <h2 className="text-4xl md:text-5xl font-light mb-4">
              Meet the Team
            </h2>
            <div className="w-16 h-px bg-[#b4913c] mx-auto" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member) => (
              <div
                key={member.name}
                className="group border border-white/8 bg-white/[0.02] hover:border-[#b4913c]/30 transition-all duration-300 overflow-hidden"
              >
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07070d] via-[#07070d]/20 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl mb-1 group-hover:text-[#b4913c] transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-[#b4913c] text-xs tracking-widest uppercase font-['Montserrat',sans-serif] mb-4">
                    {member.role}
                  </p>
                  <p className="text-white/55 text-sm leading-relaxed font-['Montserrat',sans-serif] font-light">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PHILOSOPHY QUOTE ── */}
      <section className="relative py-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1444723121867-7a241cacace9?w=1800&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-[#07070d]/88" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#07070d] via-transparent to-[#07070d]" />

        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <div className="text-[#b4913c] text-6xl font-light mb-6 opacity-40">"</div>
          <blockquote className="text-3xl md:text-4xl font-light leading-relaxed mb-8 text-white/90">
            Luxury isn't the vehicle. It's the certainty that someone
            thought of everything{" "}
            <span className="text-[#b4913c] italic">before you had to.</span>
          </blockquote>
          <div className="w-16 h-px bg-[#b4913c] mx-auto mb-6" />
          <p className="text-white/40 text-sm font-['Montserrat',sans-serif] tracking-widest uppercase">
            Marcus Reid — Founder, SKNYC Limo
          </p>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 bg-[#09090f]">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-light mb-4">
            Ready to Experience the Standard?
          </h2>
          <div className="w-16 h-px bg-[#b4913c] mx-auto mb-8" />
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/booking"
              className="px-8 py-3 bg-[#b4913c] text-[#07070d] font-bold uppercase tracking-widest text-sm hover:bg-[#caa84d] transition-all duration-300 font-['Montserrat',sans-serif]"
            >
              Book Your Ride
            </Link>
            <a
              href="tel:+19176904576"
              className="px-8 py-3 border border-[#b4913c]/50 text-[#b4913c] font-medium uppercase tracking-widest text-sm hover:border-[#b4913c] hover:bg-[#b4913c]/10 transition-all duration-300 font-['Montserrat',sans-serif]"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-[#05050a] border-t border-[#b4913c]/15">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            <div className="lg:col-span-1">
              <div className="mb-5">
                <span className="text-3xl font-light tracking-widest text-[#b4913c]">
                  SKNYC
                  <span className="text-white/40 text-lg"> LIMO</span>
                </span>
              </div>
              <p className="text-white/45 text-sm leading-relaxed font-['Montserrat',sans-serif] mb-6">
                New York City's premier chauffeur service. Luxury
                transportation for every occasion.
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

            <div>
              <h4 className="text-sm uppercase tracking-[0.3em] text-[#b4913c] mb-5 font-['Montserrat',sans-serif]">
                Services
              </h4>
              <ul className="space-y-2.5">
                {[
                  { title: "Airport Transfers", href: "/services/airport-transfer" },
                  { title: "Corporate Transportation", href: "/services/corporate" },
                  { title: "Wedding Limousine", href: "/services/wedding" },
                  { title: "Prom & Homecoming", href: "/services/prom" },
                  { title: "Point to Point", href: "/services/point-to-point" },
                  { title: "Hourly As Directed", href: "/services/hourly" },
                ].map((s) => (
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

            <div>
              <h4 className="text-sm uppercase tracking-[0.3em] text-[#b4913c] mb-5 font-['Montserrat',sans-serif]">
                Our Fleet
              </h4>
              <ul className="space-y-2.5">
                {[
                  { name: "Cadillac Escalade ESV", href: "/fleet/escalade-esv" },
                  { name: "Lincoln Stretch Limousine", href: "/fleet/lincoln-stretch" },
                  { name: "Mercedes-Benz Sprinter", href: "/fleet/sprinter" },
                  { name: "Rolls-Royce Ghost", href: "/fleet/rolls-royce" },
                  { name: "Party Bus", href: "/fleet/party-bus" },
                  { name: "BMW 7 Series", href: "/fleet/bmw-7" },
                ].map((v) => (
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
                    reservations@sknyclimo.com
                  </a>
                </li>
                <li className="leading-relaxed">
                  135 West 50th Street, Suite 1850
                  <br />
                  New York, NY 10020
                </li>
                <li className="text-emerald-400/80">Available 24/7 · 365 days/year</li>
              </ul>
            </div>
          </div>

          <div className="mt-14 pt-8 border-t border-white/8 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-white/25 text-xs font-['Montserrat',sans-serif]">
              © {new Date().getFullYear()} SKNYC Limo. All rights reserved. Designed by Nextgen Squad.
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