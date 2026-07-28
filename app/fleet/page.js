import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Our Fleet | NYLI Limo - Luxury Vehicles NYC",
  description: "Explore NYLI Limo's fleet: Rolls-Royce Ghost, Cadillac Escalade, Lincoln Stretch Limousine, Mercedes Sprinter, BMW 7 Series & more.",
};

const fleet = [
  {
    name: "Rolls-Royce Ghost",
    category: "Ultra Luxury",
    capacity: "3",
    suit: "VIP transfers · Red carpet · Executive summit",
    image: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=1200&q=80",
    specs: ["6.6L V12", "563 hp", "Starlight Headliner", "Massage Seats"],
    highlight: true,
  },
  {
    name: "Cadillac Escalade ESV",
    category: "SUV",
    capacity: "6",
    suit: "Corporate travel · Group airport · Night out",
    image: "https://images.unsplash.com/photo-1683778547049-8d969766b441?w=1200&q=80",
    specs: ["Premium Leather", "Privacy Partition", "Tinted Windows", "USB Charging"],
    highlight: false,
  },
  {
    name: "Lincoln Stretch Limousine",
    category: "Stretch Limo",
    capacity: "10",
    suit: "Weddings · Proms · Bachelor parties",
    image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=1200&q=80",
    specs: ["Full Bar", "LED Mood Lighting", "Premium Sound", "Privacy Partition"],
    highlight: false,
  },
  {
    name: "Mercedes-Benz Sprinter",
    category: "Luxury Van",
    capacity: "14",
    suit: "Airport groups · Corporate events · Teams",
    image: "https://images.unsplash.com/photo-1578557904035-f68542b3770e?w=1200&q=80",
    specs: ["Captain Chairs", "WiFi", "USB Charging", "Climate Control"],
    highlight: false,
  },
  {
    name: "BMW 7 Series",
    category: "Executive Sedan",
    capacity: "3",
    suit: "Business travel · Solo executive · Client pickup",
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=1200&q=80",
    specs: ["Executive Comfort", "Privacy Glass", "Wireless Charging", "Ambient Lighting"],
    highlight: false,
  },
  {
    name: "Mercedes S-Class",
    category: "Executive Sedan",
    capacity: "3",
    suit: "VIP transport · Luxury commutes · Airport",
    image: "https://images.unsplash.com/photo-1621135802920-133df287f89c?w=1200&q=80",
    specs: ["Massage Seats", "Burmester Sound", "Privacy Curtains", "Executive Pkg"],
    highlight: false,
  },
  {
    name: "Party Bus",
    category: "Party Bus",
    capacity: "20",
    suit: "Birthdays · Celebrations · Group events",
    image: "https://images.unsplash.com/photo-1764717727512-226b456d928a?w=1200&q=80",
    specs: ["Dance Floor", "LED System", "Multiple Screens", "Pro Sound"],
    highlight: false,
  },
  {
    name: "Chrysler Pacifica",
    category: "Luxury Minivan",
    capacity: "6",
    suit: "Family travel · Group outings · Airport",
    image: "https://images.unsplash.com/photo-1623371857133-6d5552bbdc13?w=1200&q=80",
    specs: ["Family Friendly", "DVD Entertainment", "Stow 'n Go", "USB Charging"],
    highlight: false,
  },
];

export default function FleetPage() {
  return (
    <main className="font-['Montserrat',sans-serif] overflow-x-hidden bg-[#0a0a0a] text-[#e5e5e5]">
      <Navbar />

      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#111111] to-[#0a0a0a]" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#8b1a1a]/5 to-transparent" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <span className="text-[10px] tracking-[0.4em] text-[#8b1a1a] font-medium uppercase">The Fleet</span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-['Cormorant_Garamond',serif] font-light text-white mt-6 mb-6 leading-tight">
            Choose Your<br /><span className="italic">Ride.</span>
          </h1>
          <p className="text-[#555555] text-sm font-light max-w-xl mx-auto leading-relaxed">
            Every vehicle in our fleet is meticulously maintained, detailed before every ride, and driven by a white-glove-trained chauffeur.
          </p>
        </div>
      </section>

      {fleet.map((v, idx) => (
        <section key={v.name} className={`${v.highlight ? "bg-[#111111]" : "bg-[#0a0a0a]"} ${idx === fleet.length - 1 ? "" : "border-b border-[#1e1e1e]"}`}>
          <div className={`max-w-7xl mx-auto px-6 py-16 lg:py-20 ${v.highlight ? "lg:py-28" : ""}`}>
            <div className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${idx % 2 === 1 ? "lg:grid-flow-dense" : ""}`}>
              <div className={idx % 2 === 1 ? "lg:col-start-2" : ""}>
                <span className="text-[9px] tracking-[0.3em] text-[#8b1a1a] font-medium uppercase">{v.category}</span>
                <h2 className={`font-['Cormorant_Garamond',serif] text-white mt-2 mb-4 ${v.highlight ? "text-4xl md:text-5xl" : "text-3xl md:text-4xl"}`}>
                  {v.name}
                </h2>
                <div className={`flex gap-6 mb-5 ${v.highlight ? "mb-8" : ""}`}>
                  <div className="flex items-center gap-2 text-[#555555] text-[12px]">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" /></svg>
                    Up to {v.capacity} passengers
                  </div>
                </div>
                <p className="text-[#555555] text-[13px] font-light leading-relaxed mb-4">
                  <span className="text-[#888888]">Best for:</span> {v.suit}
                </p>
                <div className={`flex flex-wrap gap-2 ${v.highlight ? "mb-10" : "mb-8"}`}>
                  {v.specs.map((s) => (
                    <span key={s} className="text-[9px] text-[#8b1a1a] border border-[#8b1a1a]/20 px-2.5 py-1 tracking-wider">{s}</span>
                  ))}
                </div>
                <Link href="/booking" className={`inline-flex items-center justify-center gap-2 text-[11px] font-medium uppercase tracking-[0.2em] transition-all duration-300 ${v.highlight ? "px-8 py-3.5 bg-[#8b1a1a] text-white hover:bg-white hover:text-[#0a0a0a]" : "text-[#8b1a1a] hover:text-white"}`}>
                  Book This Vehicle →
                </Link>
              </div>
              <div className={`relative ${v.highlight ? "lg:-my-28" : ""}`}>
                <div className={`aspect-[4/3] overflow-hidden bg-[#111111] ${v.highlight ? "border border-[#1e1e1e]" : ""}`}>
                  <img src={v.image} alt={v.name} className="w-full h-full object-cover hover:scale-105 transition-all duration-1000" />
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="py-20 lg:py-24 bg-[#8b1a1a]">
        <div className="max-w-3xl mx-auto text-center px-6">
          <h2 className="text-3xl md:text-4xl font-['Cormorant_Garamond',serif] font-light text-white mb-6 leading-tight">Not Sure Which Vehicle?</h2>
          <p className="text-white/70 text-[13px] font-light mb-8 max-w-sm mx-auto">Call us. We&apos;ll match you with the perfect ride for your occasion.</p>
          <a href="tel:+16314524500" className="inline-flex items-center gap-2 px-10 py-3.5 bg-[#0a0a0a] text-white text-[11px] font-medium uppercase tracking-[0.2em] hover:bg-white hover:text-[#0a0a0a] transition-all duration-500">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>
            +1 631-452-4500
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
