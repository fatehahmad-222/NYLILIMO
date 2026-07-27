"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function ServiceLayout({
  title,
  description,
  heroImage,
  children,
  breadcrumbs = [],
}) {
  return (
    <main className="bg-white text-[#1a1a1a] font-['Montserrat',sans-serif] overflow-x-hidden">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 border-b border-[#e8e6e3]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Breadcrumbs */}
          <div className="flex items-center justify-center gap-2 text-[11px] text-[#999999] mb-8">
            <Link href="/" className="hover:text-[#b8860b] transition-colors duration-200">
              Home
            </Link>
            {breadcrumbs.map((crumb, idx) => (
              <span key={idx} className="flex items-center gap-2">
                <span className="text-[#e8e6e3]">/</span>
                {crumb.href ? (
                  <Link href={crumb.href} className="hover:text-[#b8860b] transition-colors duration-200">
                    {crumb.name}
                  </Link>
                ) : (
                  <span className="text-[#b8860b]">{crumb.name}</span>
                )}
              </span>
            ))}
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-['Cormorant_Garamond',serif] font-light mb-4 leading-tight">{title}</h1>
          <div className="w-8 h-px bg-[#b8860b] mx-auto my-6" />
          <p className="text-[#6b6b6b] text-sm font-light leading-relaxed max-w-xl mx-auto">
            {description}
          </p>
        </div>
      </section>

      {/* Content */}
      {children}

      {/* CTA */}
      <section className="py-24 lg:py-28 bg-[#f9f8f6]">
        <div className="max-w-3xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#b8860b] font-medium">
            Ready When You Are
          </span>
          <h2 className="text-3xl md:text-4xl font-['Cormorant_Garamond',serif] font-light mt-4 mb-8">
            Ready to Experience <span className="italic">Luxury?</span>
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
