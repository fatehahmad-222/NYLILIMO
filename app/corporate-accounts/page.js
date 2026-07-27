"use client";

import ServiceLayout from "@/components/ServiceLayout";
import Link from "next/link";

export default function CorporateAccountsPage() {
  return (
    <ServiceLayout
      title="Corporate Accounts"
      description="Streamlined billing, monthly statements, and dedicated account managers for businesses and frequent travelers."
      breadcrumbs={[{ name: "Corporate Accounts" }]}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-light mb-4 font-['Cormorant_Garamond',serif]">Transportation Solutions for Business</h2>
            <div className="w-16 h-px bg-[#b8860b] mb-6" />
            <p className="text-[#6b6b6b] leading-relaxed mb-4 font-['Montserrat',sans-serif] text-[13px] font-light">
              NYLI Limo partners with businesses of all sizes to provide reliable,
              executive-level transportation. Our corporate accounts enjoy priority
              service, simplified billing, and dedicated account management.
            </p>
            <p className="text-[#6b6b6b] leading-relaxed font-['Montserrat',sans-serif] text-[13px] font-light">
              Whether you need daily executive transfers, event transportation,
              or occasional airport runs for clients — we customize a solution
              that fits your business needs and budget.
            </p>
          </div>
          <div className="bg-[#f9f8f6] p-8 border border-[#e8e6e3]">
            <h3 className="text-xl mb-5 text-[#b8860b] font-['Cormorant_Garamond',serif]">Corporate Benefits</h3>
            <ul className="space-y-3 text-[#6b6b6b] font-['Montserrat',sans-serif] text-[13px] font-light">
              <li className="flex items-center gap-3">
                <span className="text-[#b8860b]">·</span> Monthly consolidated invoicing
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#b8860b]">·</span> Dedicated account manager
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#b8860b]">·</span> Priority booking &amp; dispatch
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#b8860b]">·</span> Discounted corporate rates
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#b8860b]">·</span> Mobile app access for employees
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#b8860b]">·</span> Real-time trip tracking
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-2xl md:text-3xl font-light mb-6 font-['Cormorant_Garamond',serif]">Ready to Set Up a Corporate Account?</h3>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/contact"
              className="px-8 py-3 bg-[#b8860b] text-white font-['Montserrat',sans-serif] font-medium uppercase tracking-[0.15em] text-[12px] hover:bg-[#1a1a1a] transition-all duration-300"
            >
              Contact Sales
            </Link>
            <a
              href="tel:+16314524500"
              className="px-8 py-3 border border-[#1a1a1a] text-[#1a1a1a] font-['Montserrat',sans-serif] font-medium uppercase tracking-[0.15em] text-[12px] hover:border-[#b8860b] hover:text-[#b8860b] transition-all duration-300"
            >
              Call Now
            </a>
          </div>
        </div>
      </div>
    </ServiceLayout>
  );
}
