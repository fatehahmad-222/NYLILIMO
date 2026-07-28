import ServiceLayout from "@/components/ServiceLayout";

export default function ChauffeursPage() {
  return (
    <ServiceLayout
      title="Professional Chauffeurs"
      description="Every driver is background-checked, licensed, and trained in VIP hospitality protocols."
      breadcrumbs={[
        { name: "About", href: "/about" },
        { name: "Professional Chauffeurs" }
      ]}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light mb-6 font-['Cormorant_Garamond',serif]">The NYLI Chauffeur Standard</h2>
          <div className="w-16 h-px bg-[#C79A3C] mb-8" />
          <p className="text-[#847863] leading-relaxed mb-6 font-['Work_Sans',sans-serif] text-[13px] font-light">
            Our chauffeurs are the heart of NYLI Limo. Each driver undergoes rigorous
            screening, training, and certification before ever getting behind the wheel
            of a client vehicle. We don&apos;t just hire drivers — we train hospitality
            professionals who happen to drive.
          </p>

          <h3 className="text-2xl font-light mt-10 mb-6 font-['Cormorant_Garamond',serif]">Our Selection Process</h3>
          <div className="space-y-4 mb-10">
            {[
              "Background check and driving record review",
              "In-person interview and personality assessment",
              "Defensive driving certification",
              "VIP etiquette and protocol training",
              "Vehicle familiarization and safety inspection",
              "Ongoing performance reviews and retraining"
            ].map((step, idx) => (
              <div key={idx} className="flex items-center gap-4 p-4 border-l-2 border-[#C79A3C] bg-[#EDE7DB]">
                <span className="text-[#C79A3C] font-bold text-sm">{idx + 1}</span>
                <span className="text-[#847863] text-[13px] font-['Work_Sans',sans-serif] font-light">{step}</span>
              </div>
            ))}
          </div>

          <div className="bg-[#EDE7DB] p-6 lg:p-8 border-l-2 border-[#C79A3C]">
            <p className="text-[#847863] italic font-['Work_Sans',sans-serif] text-[13px] leading-relaxed font-light">
              &quot;NYLI chauffeurs are the most professional I&apos;ve experienced.
              From the crisp uniform to the door-to-door service, every detail
              is perfect.&quot;
            </p>
            <p className="text-[#C79A3C] mt-4 text-[11px] font-['Work_Sans',sans-serif] tracking-wider uppercase">— Regular Client</p>
          </div>
        </div>
      </div>
    </ServiceLayout>
  );
}
