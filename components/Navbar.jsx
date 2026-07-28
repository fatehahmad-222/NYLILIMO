"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const links = [
  { label: "Home", href: "/" },
  { label: "Fleet", href: "/fleet" },
  { label: "About", href: "/aboutus" },
  { label: "Contact", href: "/contact" },
];

const services = [
  { label: "Airport Transfer", href: "/services/airport-transfer" },
  { label: "Corporate", href: "/services/corporate" },
  { label: "Wedding", href: "/services/wedding" },
  { label: "Prom", href: "/services/prom" },
  { label: "Point to Point", href: "/services/point-to-point" },
  { label: "Hourly", href: "/services/hourly" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showServices, setShowServices] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navClass = "text-[12px] font-['Montserrat',sans-serif] font-medium uppercase tracking-[0.15em] transition-all duration-300";

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-[#0a0a0a]/95 backdrop-blur-md shadow-[0_1px_0_#1e1e1e]" : "bg-[#0a0a0a]"
      }`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <Link href="/" className="flex items-center gap-3 group shrink-0">
              <span className="text-[#f0f0f0] font-light text-xl lg:text-2xl tracking-[0.2em] font-['Cormorant_Garamond',serif] group-hover:text-[#8b1a1a] transition-colors duration-300">
                NYLI
              </span>
              <span className="w-px h-4 bg-[#1e1e1e]" />
              <span className="text-[#888888] font-light text-[10px] lg:text-[12px] tracking-[0.2em] uppercase hidden sm:block">
                NYC Limo
              </span>
            </Link>

            <div className="hidden lg:flex items-center gap-1">
              {links.map((l, i) => (
                <span key={l.href} className="flex items-center">
                  {i > 0 && <span className="w-1 h-1 rounded-full bg-[#333] mx-2" />}
                  <Link href={l.href} className={`${navClass} px-3 py-2 text-[#a0a0a0] hover:text-[#c41e1e]`}>
                    {l.label}
                  </Link>
                </span>
              ))}
              <span className="flex items-center">
                <span className="w-1 h-1 rounded-full bg-[#333] mx-2" />
                <div className="relative" onMouseEnter={() => setShowServices(true)} onMouseLeave={() => setShowServices(false)}>
                  <button className={`${navClass} px-3 py-2 text-[#a0a0a0] hover:text-[#c41e1e] flex items-center gap-1`}>
                    Services
                    <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                  </button>
                  {showServices && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 bg-[#111111] border border-[#1e1e1e] shadow-[0_8px_30px_rgba(0,0,0,0.6)] animate-fade-in">
                      <div className="p-2">
                        {services.map((s) => (
                          <Link key={s.href} href={s.href} className="block px-4 py-2.5 text-[12px] text-[#a0a0a0] font-['Montserrat',sans-serif] hover:text-[#c41e1e] hover:bg-white/[0.04] transition-all duration-200">{s.label}</Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </span>
            </div>

            <div className="hidden lg:flex items-center gap-5">
              <a href="tel:+16314524500" className={`${navClass} text-[#a0a0a0] hover:text-[#c41e1e]`}>
                +1 631-452-4500
              </a>
              <Link href="/booking" className="px-6 py-2.5 bg-[#8b1a1a] text-white text-[12px] font-medium uppercase tracking-[0.15em] hover:bg-white hover:text-[#0a0a0a] transition-all duration-300">
                Book Now
              </Link>
            </div>

            <button className="lg:hidden relative w-10 h-10 flex items-center justify-center" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menu">
              <div className="w-5 flex flex-col gap-1.5">
                <span className={`block h-[1.5px] bg-[#f0f0f0] transition-all duration-500 origin-center ${mobileOpen ? "rotate-45 translate-y-[3.5px]" : ""}`} />
                <span className={`block h-[1.5px] bg-[#f0f0f0] transition-all duration-500 ${mobileOpen ? "opacity-0" : ""}`} />
                <span className={`block h-[1.5px] bg-[#f0f0f0] transition-all duration-500 origin-center ${mobileOpen ? "-rotate-45 -translate-y-[3.5px]" : ""}`} />
              </div>
            </button>
          </div>
        </div>

        <div className={`lg:hidden transition-all duration-500 overflow-hidden ${mobileOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}>
          <div className="bg-[#111111] border-t border-[#1e1e1e] px-6 py-6 space-y-1">
            {[...links, { label: "Booking", href: "/booking" }].map((l) => (
              <Link key={l.href} href={l.href} className="block px-4 py-3 text-[#a0a0a0] font-['Montserrat',sans-serif] font-medium tracking-[0.1em] uppercase text-[13px] hover:text-[#c41e1e] transition-colors duration-300" onClick={() => setMobileOpen(false)}>
                {l.label}
              </Link>
            ))}
            <div className="pt-4 px-4 space-y-2">
              <a href="tel:+16314524500" className="block text-center py-3 border border-[#1e1e1e] text-[#a0a0a0] text-[12px] font-medium uppercase tracking-[0.1em] hover:border-[#8b1a1a] hover:text-[#8b1a1a] transition-all duration-300">
                +1 631-452-4500
              </a>
              <Link href="/booking" className="block text-center py-3 bg-[#8b1a1a] text-white text-[12px] font-medium uppercase tracking-[0.15em] hover:bg-white hover:text-[#0a0a0a] transition-all duration-300" onClick={() => setMobileOpen(false)}>
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden">
        <div className="flex">
          <a href="tel:+16314524500" className="flex-1 flex items-center justify-center gap-2 py-3 bg-[#111111] text-[#a0a0a0] text-[11px] uppercase tracking-[0.15em] font-medium hover:text-white transition-all duration-300 border-r border-[#1e1e1e]">
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
            Call Now
          </a>
          <Link href="/booking" className="flex-1 flex items-center justify-center gap-2 py-3 bg-[#8b1a1a] text-white text-[11px] uppercase tracking-[0.15em] font-medium hover:bg-white hover:text-[#0a0a0a] transition-all duration-300">
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
            </svg>
            Book Now
          </Link>
        </div>
      </div>
    </>
  );
}
