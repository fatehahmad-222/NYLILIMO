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
            <div className="w-16 h-px bg-[#b4913c] mb-6" />
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
          <div className="bg-[#0d0d15] p-6 border border-[#b4913c]/20">
            <h3 className="text-xl mb-4 text-[#b4913c]">Corporate Benefits</h3>
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
              className="px-8 py-3 bg-[#b4913c] text-[#07070d] font-bold uppercase tracking-widest text-sm hover:bg-[#caa84d] transition-all font-['Montserrat',sans-serif]"
            >
              Contact Sales
            </Link>
            <a
              href="tel:+19176904576"
              className="px-8 py-3 border border-[#b4913c]/50 text-[#b4913c] font-medium uppercase tracking-widest text-sm hover:border-[#b4913c] hover:bg-[#b4913c]/10 transition-all font-['Montserrat',sans-serif]"
            >
              Call Now
            </a>
          </div>
        </div>
      </div>
    </ServiceLayout>
  );
}