import ServiceLayout from "@/components/ServiceLayout";
import Link from "next/link";

const fleetVehicles = [
  {
    name: "Cadillac Escalade ESV",
    category: "SUV",
    capacity: "6 Passengers",
    image: "https://res.cloudinary.com/dgz6utv5q/image/upload/v1780417498/suv_lcvxgv.jpg",
    features: ["Premium Leather", "Privacy Partition", "Tinted Windows", "USB Charging"],
    description: "The ultimate luxury SUV for executive travel and group transportation."
  },
  {
    name: "Lincoln Stretch Limousine",
    category: "Stretch Limo",
    capacity: "10 Passengers",
    image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&q=80",
    features: ["Full Bar", "LED Mood Lighting", "Premium Sound", "Privacy Partition"],
    description: "Classic stretch limousine perfect for weddings, proms, and special events."
  },
  {
    name: "Mercedes-Benz Sprinter",
    category: "Luxury Van",
    capacity: "14 Passengers",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    features: ["Captain Chairs", "WiFi Enabled", "USB Charging", "Climate Control"],
    description: "Spacious luxury van ideal for group airport transfers and corporate events."
  },
  {
    name: "Rolls-Royce Ghost",
    category: "Ultra Luxury",
    capacity: "3 Passengers",
    image: "https://images.unsplash.com/photo-1563720223185-11003d516935?w=800&q=80",
    features: ["White Glove Service", "Starlight Headliner", "Champagne Service", "Massage Seats"],
    description: "The pinnacle of automotive luxury for VIPs and special occasions."
  },
  {
    name: "Party Bus",
    category: "Party Bus",
    capacity: "20 Passengers",
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&q=80",
    features: ["Dance Floor", "LED System", "Multiple Screens", "Sound System"],
    description: "Rolling party venue for birthdays, bachelor/bachelorette parties, and celebrations."
  },
  {
    name: "BMW 7 Series",
    category: "Executive Sedan",
    capacity: "3 Passengers",
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80",
    features: ["Executive Comfort", "Privacy Glass", "Wireless Charging", "Ambient Lighting"],
    description: "Sophisticated executive sedan for business travelers and VIPs."
  },
  {
    name: "Mercedes S-Class",
    category: "Executive Sedan",
    capacity: "3 Passengers",
    image: "https://images.unsplash.com/photo-1621135802920-133df287f89c?w=800&q=80",
    features: ["Massage Seats", "Executive Package", "Burmester Sound", "Privacy Curtains"],
    description: "The gold standard in executive transportation."
  },
  {
    name: "Chrysler Pacifica",
    category: "Luxury Minivan",
    capacity: "6 Passengers",
    image: "https://res.cloudinary.com/dgz6utv5q/image/upload/v1780417536/minivan_pqwokk.jpg",
    features: ["Family Friendly", "DVD Entertainment", "Stow 'n Go Seating", "USB Charging"],
    description: "Perfect for family airport transfers and group outings."
  }
];

export default function FleetPage() {
  return (
    <ServiceLayout
      title="Our Luxury Fleet"
      description="From executive sedans to stretch limousines — our meticulously maintained fleet covers every occasion."
      heroImage="https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=1600&q=80"
      breadcrumbs={[{ name: "Fleet" }]}
    >
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {fleetVehicles.map((vehicle) => (
            <Link key={vehicle.name} href={`/fleet/${vehicle.name.toLowerCase().replace(/ /g, '-')}`} className="group border border-white/8 hover:border-[#cd7f32]/40 transition-all overflow-hidden">
              <div className="relative h-64 overflow-hidden">
                <img src={vehicle.image} alt={vehicle.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-4 right-4 bg-[#cd7f32] text-[#0e0c0a] px-3 py-1 text-xs font-bold uppercase">{vehicle.category}</div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl group-hover:text-[#cd7f32] transition-colors">{vehicle.name}</h3>
                  <span className="text-white/40 text-sm">{vehicle.capacity}</span>
                </div>
                <p className="text-white/60 text-sm mb-4 font-['Montserrat',sans-serif]">{vehicle.description}</p>
                <div className="flex flex-wrap gap-2">
                  {vehicle.features.map((f) => (
                    <span key={f} className="text-xs text-[#cd7f32]/70 border border-[#cd7f32]/25 px-2 py-1">{f}</span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </ServiceLayout>
  );
}