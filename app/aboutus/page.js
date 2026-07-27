import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

/* ── STORY DATA ───────────────────────────────────────── */

const timeline = [
  {
    year: "2009",
    title: "Founded in Manhattan",
    desc: "NYLI Limo was born from a single promise: that New York City deserved a limousine service as relentless, refined, and ambitious as the city itself. Our founder, a former luxury hotel concierge who spent a decade curating VIP experiences, launched with two vehicles and an obsession with punctuality.",
  },
  {
    year: "2012",
    title: "Corporate Contracts & Growth",
    desc: "Word spread through Midtown boardrooms. Within three years, Fortune 500 companies and law firms retained NYLI as their exclusive ground transport partner. We expanded our fleet to 15 vehicles and opened a dedicated corporate accounts division.",
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
    desc: "Today NYLI operates the most sophisticated private fleet in the New York metropolitan area. We've served celebrities, heads of state, brides, students heading to prom, and executives closing billion-dollar deals. The vehicle changes. The standard never does.",
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
    bio: "Former VIP concierge at The Plaza Hotel. 20+ years in luxury hospitality. Built NYLI from two cars and an unshakeable belief that ground transportation could be an experience, not just a transaction.",
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
    bio: "17 years behind the wheel for heads of state, A-list entertainers, and C-suite executives. James wrote our 47-point White Glove Standard and personally trains every chauffeur who joins the NYLI family.",
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
    <main className="bg-white text-[#1a1a1a] font-['Montserrat',sans-serif] overflow-x-hidden">
      <Navbar />

      {/* ── HERO ── */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 border-b border-[#e8e6e3]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-2 text-[11px] text-[#999999] mb-8">
            <Link href="/" className="hover:text-[#b8860b] transition-colors duration-200">
              Home
            </Link>
            <span className="text-[#e8e6e3]">/</span>
            <span className="text-[#b8860b]">About Us</span>
          </div>

          <span className="inline-block text-[10px] uppercase tracking-[0.3em] text-[#b8860b] font-medium mb-4">
            Our Story
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-['Cormorant_Garamond',serif] font-light leading-none mb-6">
            About{" "}
            <span className="italic">NYLI</span>
          </h1>
          <div className="w-8 h-px bg-[#b8860b] mx-auto my-6" />
          <p className="text-[#6b6b6b] text-sm font-light max-w-xl mx-auto leading-relaxed">
            Fifteen years. Fifty thousand rides. One unwavering standard. This
            is the story of how a single promise became New York City&apos;s most
            trusted name in luxury transportation.
          </p>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="border-b border-[#e8e6e3]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
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

      {/* ── ORIGIN STORY ── */}
      <section className="py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#b8860b] font-medium">
                Where It All Began
              </span>
              <h2 className="text-3xl md:text-4xl font-['Cormorant_Garamond',serif] font-light mt-4 mb-6 leading-tight">
                A City That Never Sleeps
                <br />
                <span className="italic">Deserves Better.</span>
              </h2>
              <div className="space-y-5 text-[#6b6b6b] text-[13px] leading-relaxed font-light">
                <p>
                  In 2009, our founder Marcus Reid stood outside JFK Terminal 4
                  watching a client — a woman who had just flown fourteen hours
                  from Tokyo for her daughter&apos;s wedding — wait forty minutes in
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
                  handwritten note in his wallet that read: <em>&quot;No one waits in
                  the rain.&quot;</em> Fifteen years later, that note still hangs
                  framed in our dispatch office.
                </p>
              </div>
            </div>

            {/* Image collage */}
            <div className="relative h-[500px]">
              <img
                src="https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=800&q=80"
                alt="Luxury vehicle on NYC street"
                className="absolute top-0 right-0 w-3/4 h-72 object-cover border border-[#e8e6e3]"
              />
              <img
                src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&q=80"
                alt="New York City skyline"
                className="absolute bottom-0 left-0 w-2/3 h-64 object-cover border border-[#e8e6e3]"
              />
              {/* Quote block */}
              <div className="absolute bottom-16 right-4 bg-[#1a1a1a] px-6 py-5">
                <p className="text-xl font-['Cormorant_Garamond',serif] text-white font-light">
                  &quot;No one waits
                </p>
                <p className="text-xl font-['Cormorant_Garamond',serif] text-white font-light italic">
                  in the rain.&quot;
                </p>
                <p className="text-[10px] mt-2 text-white/40">
                  — Marcus Reid, Founder
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TIMELINE ── */}
      <section className="py-24 lg:py-32 bg-[#f9f8f6]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#b8860b] font-medium">
              Fifteen Years of Excellence
            </span>
            <h2 className="text-3xl md:text-4xl font-['Cormorant_Garamond',serif] font-light mt-4 mb-6">
              Our Journey
            </h2>
            <div className="w-8 h-px bg-[#b8860b] mx-auto" />
          </div>

          <div className="space-y-0">
            {timeline.map((item, idx) => (
              <div
                key={item.year}
                className="flex gap-8 py-8 border-b border-[#e8e6e3] last:border-0"
              >
                <div className="w-16 shrink-0">
                  <span className="text-[#b8860b] text-[11px] font-medium tracking-wider">
                    {item.year}
                  </span>
                </div>
                <div>
                  <h3 className="text-lg font-['Cormorant_Garamond',serif] mb-2 text-[#1a1a1a]">{item.title}</h3>
                  <p className="text-[#6b6b6b] text-[12px] leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className="py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#b8860b] font-medium">
              What Drives Us
            </span>
            <h2 className="text-3xl md:text-4xl font-['Cormorant_Garamond',serif] font-light mt-4 mb-6">
              The NYLI Standard
            </h2>
            <div className="w-8 h-px bg-[#b8860b] mx-auto" />
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                className="p-8 border border-[#e8e6e3] hover:border-[#b8860b]/30 transition-all duration-300"
              >
                <h3 className="text-lg font-['Cormorant_Garamond',serif] mb-3 text-[#1a1a1a]">
                  {v.title}
                </h3>
                <p className="text-[#6b6b6b] text-[12px] leading-relaxed font-light">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TEAM ── */}
      <section className="py-24 lg:py-32 bg-[#f9f8f6]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#b8860b] font-medium">
              The People Behind the Promise
            </span>
            <h2 className="text-3xl md:text-4xl font-['Cormorant_Garamond',serif] font-light mt-4 mb-6">
              Meet the Team
            </h2>
            <div className="w-8 h-px bg-[#b8860b] mx-auto" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member) => (
              <div
                key={member.name}
                className="bg-white border border-[#e8e6e3] overflow-hidden"
              >
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-['Cormorant_Garamond',serif] mb-1 text-[#1a1a1a]">
                    {member.name}
                  </h3>
                  <p className="text-[#b8860b] text-[10px] tracking-[0.2em] uppercase font-medium mb-4">
                    {member.role}
                  </p>
                  <p className="text-[#6b6b6b] text-[12px] leading-relaxed font-light">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PHILOSOPHY QUOTE ── */}
      <section className="py-24 lg:py-32">
        <div className="max-w-3xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="text-[#b8860b] text-5xl font-['Cormorant_Garamond',serif] font-light mb-6 opacity-30">&ldquo;</div>
          <blockquote className="text-2xl md:text-3xl font-['Cormorant_Garamond',serif] font-light leading-relaxed mb-8 text-[#1a1a1a]">
            Luxury isn&apos;t the vehicle. It&apos;s the certainty that someone
            thought of everything{" "}
            <span className="italic">before you had to.</span>
          </blockquote>
          <div className="w-8 h-px bg-[#b8860b] mx-auto mb-6" />
          <p className="text-[#999999] text-[10px] tracking-[0.2em] uppercase font-medium">
            Marcus Reid — Founder, NYLI Limo
          </p>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 lg:py-28 bg-[#f9f8f6]">
        <div className="max-w-3xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#b8860b] font-medium">
            Ready When You Are
          </span>
          <h2 className="text-3xl md:text-4xl font-['Cormorant_Garamond',serif] font-light mt-4 mb-8">
            Ready to Experience <span className="italic">the Standard?</span>
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/booking"
              className="inline-flex items-center justify-center px-8 py-3 bg-[#1a1a1a] text-white font-medium uppercase tracking-[0.15em] text-[11px] hover:bg-[#b8860b] transition-all duration-300"
            >
              Book Your Ride
            </Link>
            <a
              href="tel:+16314524500"
              className="inline-flex items-center justify-center px-8 py-3 border border-[#1a1a1a] text-[#1a1a1a] font-medium uppercase tracking-[0.15em] text-[11px] hover:border-[#b8860b] hover:text-[#b8860b] transition-all duration-300"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
