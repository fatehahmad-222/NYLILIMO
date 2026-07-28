"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ServiceLayout({ children, title, description, bgImage }) {
  return (
    <main className="font-['Montserrat',sans-serif] overflow-x-hidden bg-[#0a0a0a] text-[#e5e5e5]">
      <Navbar />

      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#111111] to-[#0a0a0a]" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#8b1a1a]/5 to-transparent" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-['Cormorant_Garamond',serif] font-light text-white mt-6 mb-6 leading-tight">
            {title}
          </h1>
          {description && (
            <p className="text-[#555555] text-sm font-light max-w-xl mx-auto leading-relaxed">{description}</p>
          )}
        </div>
        {bgImage && (
          <div className="absolute inset-0 -z-10">
            <img src={bgImage} alt="" className="w-full h-full object-cover opacity-10" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0a0a0a]/80 to-[#0a0a0a]" />
          </div>
        )}
      </section>

      <section className="pb-20 lg:pb-28">
        <div className="max-w-5xl mx-auto px-6">
          {children}
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-[#111111] border-t border-[#1e1e1e]">
        <div className="max-w-3xl mx-auto text-center px-6">
          <h2 className="text-3xl font-['Cormorant_Garamond',serif] font-light text-white mb-4">Ready to Ride?</h2>
          <p className="text-[#555555] text-[12px] font-light mb-8">Book online or call us for a custom quote.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/booking" className="px-8 py-3 bg-[#8b1a1a] text-white text-[11px] font-medium uppercase tracking-[0.2em] hover:bg-white hover:text-[#0a0a0a] transition-all duration-500">
              Book Now
            </Link>
            <a href="tel:+16314524500" className="px-8 py-3 border border-white/20 text-white text-[11px] font-medium uppercase tracking-[0.2em] hover:border-[#8b1a1a] hover:text-[#8b1a1a] transition-all duration-500">
              +1 631-452-4500
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
