"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ServiceLayout({ children, title, description, bgImage }) {
  return (
    <main className="font-['Work_Sans',sans-serif] overflow-x-hidden bg-[#F6F0E2] text-[#18110D]">
      <Navbar />

      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-[#18110D]">
        <div className="absolute inset-0 bg-gradient-to-b from-[#18110D] via-[#18110D]/95 to-[#18110D]" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#7C0F1E]/15 to-transparent" />
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-[#7C0F1E]/10 blur-3xl rounded-full" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <span className="inline-block text-[11px] tracking-[0.38em] text-[#C79A3C] font-semibold uppercase">
            NYLI Limo
          </span>
          <h1 className="font-['Cormorant_Garamond',serif] font-light leading-[0.88] text-[56px] md:text-[96px] lg:text-[128px] my-6 text-[#F6F0E2]">
            {title}
          </h1>
          {description && (
            <p className="text-[#F6F0E2]/75 text-base font-light max-w-xl mx-auto leading-relaxed">
              {description}
            </p>
          )}
        </div>
        {bgImage && (
          <div className="absolute inset-0 -z-10">
            <img src={bgImage} alt="" className="w-full h-full object-cover opacity-10" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#18110D] via-[#18110D]/80 to-[#18110D]" />
          </div>
        )}
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-5xl mx-auto px-6">
          {children}
        </div>
      </section>

      <section className="bg-[#4A0812] py-20 lg:py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block text-[11px] tracking-[0.38em] text-[#C79A3C] font-semibold uppercase">Ready When You Are</span>
          <h2 className="font-['Cormorant_Garamond',serif] font-light text-4xl my-4 text-[#F6F0E2]">
            Ready to <span className="italic text-[#E6C878]">Ride?</span>
          </h2>
          <p className="text-[#F6F0E2]/60 text-sm mb-8">Book online or call us for a custom quote.</p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/booking"
              className="inline-flex items-center gap-2 px-11 py-4 bg-[#C79A3C] text-[#4A0812] text-[12px] font-bold uppercase tracking-[0.2em] transition-all duration-300 hover:bg-[#E6C878] hover:-translate-y-1"
            >
              Book Now
            </Link>
            <a
              href="tel:+16314524500"
              className="inline-flex items-center gap-2 px-11 py-4 border border-white/40 text-[#F6F0E2] text-[12px] font-semibold uppercase tracking-[0.2em] hover:border-[#C79A3C] hover:text-[#E6C878] transition-all duration-300"
            >
              +1 631-452-4500
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
