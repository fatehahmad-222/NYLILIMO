import ServiceLayout from "@/components/ServiceLayout";

export default function ChauffeursPage() {
  return (
    <ServiceLayout
      title="Professional Chauffeurs"
      description="Every driver is background-checked, licensed, and trained in VIP hospitality protocols."
      heroImage="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=1600&q=80"
      breadcrumbs={[
        { name: "About", href: "/about" },
        { name: "Professional Chauffeurs" }
      ]}
    >
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-light mb-6">The SKNYC Chauffeur Standard</h2>
          <p className="text-white/70 leading-relaxed mb-6 font-['Montserrat',sans-serif]">
            Our chauffeurs are the heart of SKNYC Limo. Each driver undergoes rigorous 
            screening, training, and certification before ever getting behind the wheel 
            of a client vehicle. We don't just hire drivers — we train hospitality 
            professionals who happen to drive.
          </p>
          
          <h3 className="text-2xl font-light mt-10 mb-4">Our Selection Process</h3>
          <div className="space-y-4 mb-10">
            {[
              "Background check and driving record review",
              "In-person interview and personality assessment",
              "Defensive driving certification",
              "VIP etiquette and protocol training",
              "Vehicle familiarization and safety inspection",
              "Ongoing performance reviews and retraining"
            ].map((step, idx) => (
              <div key={idx} className="flex items-center gap-4 p-4 border-l-2 border-[#b4913c] bg-white/[0.02]">
                <span className="text-[#b4913c] font-bold">{idx + 1}</span>
                <span className="text-white/70">{step}</span>
              </div>
            ))}
          </div>

          <div className="bg-[#b4913c]/10 p-6 border-l-4 border-[#b4913c]">
            <p className="text-white/80 italic font-['Montserrat',sans-serif]">
              "SKNYC chauffeurs are the most professional I've experienced. 
              From the crisp uniform to the door-to-door service, every detail 
              is perfect."
            </p>
            <p className="text-[#b4913c] mt-3 text-sm">— Regular Client</p>
          </div>
        </div>
      </div>
    </ServiceLayout>
  );
}