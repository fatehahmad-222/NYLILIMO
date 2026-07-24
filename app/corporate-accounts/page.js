"use client";

import ServiceLayout from "@/components/ServiceLayout";
import Link from "next/link";

export default function CorporateAccountsPage() {
  return (
    <ServiceLayout
      title="Corporate Accounts"
      description="Streamlined billing, monthly statements, and dedicated account managers for businesses and frequent travelers."
      heroImage="https://images.unsplash.com/photo-1556761175-4b46a572b786?w=1600&q=80"
      breadcrumbs={[{ name: "Corporate Accounts" }]}
    >
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-light mb-4">Transportation Solutions for Business</h2>
            <div className="w-16 h-px bg-[#cd7f32] mb-6" />
            <p className="text-white/70 leading-relaxed mb-4 font-['Montserrat',sans-serif]">
              SKNYC Limo partners with businesses of all sizes to provide reliable, 
              executive-level transportation. Our corporate accounts enjoy priority 
              service, simplified billing, and dedicated account management.
            </p>
            <p className="text-white/70 leading-relaxed font-['Montserrat',sans-serif]">
              Whether you need daily executive transfers, event transportation, 
              or occasional airport runs for clients — we customize a solution 
              that fits your business needs and budget.
            </p>
          </div>
          <div className="bg-[#191512] p-6 border border-[#cd7f32]/20">
            <h3 className="text-xl mb-4 text-[#cd7f32]">Corporate Benefits</h3>
            <ul className="space-y-3 text-white/70 font-['Montserrat',sans-serif]">
              <li className="flex items-center gap-2">✓ Monthly consolidated invoicing</li>
              <li className="flex items-center gap-2">✓ Dedicated account manager</li>
              <li className="flex items-center gap-2">✓ Priority booking & dispatch</li>
              <li className="flex items-center gap-2">✓ Discounted corporate rates</li>
              <li className="flex items-center gap-2">✓ Mobile app access for employees</li>
              <li className="flex items-center gap-2">✓ Real-time trip tracking</li>
            </ul>
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-light mb-6">Ready to Set Up a Corporate Account?</h3>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/contact"
              className="px-8 py-3 bg-[#cd7f32] text-[#0e0c0a] font-bold uppercase tracking-widest text-sm hover:bg-[#e09545] transition-all font-['Montserrat',sans-serif]"
            >
              Contact Sales
            </Link>
            <a
              href="tel:+19176904576"
              className="px-8 py-3 border border-[#cd7f32]/50 text-[#cd7f32] font-medium uppercase tracking-widest text-sm hover:border-[#cd7f32] hover:bg-[#cd7f32]/10 transition-all font-['Montserrat',sans-serif]"
            >
              Call Now
            </a>
          </div>
        </div>
      </div>
    </ServiceLayout>
  );
}