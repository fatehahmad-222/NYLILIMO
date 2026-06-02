"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const services = [
  { label: "Airport Transfer", href: "/services/airport-transfer" },
  { label: "Corporate Transportation", href: "/services/corporate" },
  { label: "Wedding Limousine", href: "/services/wedding" },
  { label: "Prom & Homecoming", href: "/services/prom" },
  { label: "Point to Point", href: "/services/point-to-point" },
  { label: "Hourly As Directed", href: "/services/hourly" },
  { label: "City Tours", href: "/services/city-tours" },
  { label: "Concert & Events", href: "/services/events" },
  { label: "Casino Trips", href: "/services/casino" },
  { label: "Sports Events", href: "/services/sports" },
  { label: "Birthday Packages", href: "/services/birthday" },
  { label: "Wine & Brewery Tours", href: "/services/wine-tours" },
];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Fleet", href: "/fleet" },
  { label: "Services", href: "/services", hasDropdown: true },
  { label: "About Us", href: "/aboutus" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0a0a0f]/95 backdrop-blur-md shadow-[0_2px_30px_rgba(180,145,60,0.15)]"
          : "bg-transparent"
      }`}
    >
      {/* Top bar */}
      <div className="bg-[#0d0d14] border-b border-[#b4913c]/20 py-1.5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          {/* Left: contact info */}
          <div className="flex items-center gap-2.5 text-[12px] text-white/60" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 300, letterSpacing: '0.02em' }}>
            <a href="tel:+19176904576" className="hover:text-[#b4913c] transition-colors duration-200">
              +1 917-690-4576
            </a>
            <span className="opacity-30">·</span>
            <a href="tel:+15164407666" className="hover:text-[#b4913c] transition-colors duration-200">
              +1 516-440-7666
            </a>
            <span className="opacity-30 hidden sm:block">|</span>
            <span className="hidden sm:block text-white/40">Available 24/7 · New York City</span>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-3">
            {/* Facebook */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-white/50 hover:text-[#b4913c] transition-colors duration-200"
            >
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
            {/* Instagram */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-white/50 hover:text-[#b4913c] transition-colors duration-200"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
            {/* Twitter / X */}
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="text-white/50 hover:text-[#b4913c] transition-colors duration-200"
            >
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <img
                src="https://res.cloudinary.com/dgz6utv5q/image/upload/v1780330763/SKNYC-removebg-preview_1_iojxyc.png"
                alt="SKNYC Limo Logo"
                className="h-20 w-auto object-contain pt-1.5"
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.nextSibling.style.display = "flex";
                }}
              />
              <div
                className="hidden h-14 w-40 items-center justify-center border border-[#b4913c]/40 rounded"
                style={{ display: "none" }}
              >
                <span className="text-[#b4913c] font-bold text-xl tracking-widest">
                  SKNYC
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.hasDropdown ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-white/80 hover:text-[#b4913c] transition-colors duration-200 tracking-wide uppercase">
                    {link.label}
                    <svg
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {servicesOpen && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-64 bg-[#0d0d14] border border-[#b4913c]/25 rounded-lg shadow-2xl overflow-hidden">
                      <div className="p-2">
                        {services.map((s) => (
                          <Link
                            key={s.href}
                            href={s.href}
                            className="block px-4 py-2.5 text-sm text-white/75 hover:text-[#b4913c] hover:bg-[#b4913c]/10 rounded-md transition-all duration-150 tracking-wide"
                          >
                            {s.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className="px-4 py-2 text-sm font-medium text-white/80 hover:text-[#b4913c] transition-colors duration-200 tracking-wide uppercase"
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          {/* CTA button */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/booking"
              className="px-6 py-2.5 bg-[#b4913c] text-[#0a0a0f] text-sm font-bold uppercase tracking-widest rounded hover:bg-[#caa84d] transition-all duration-200 shadow-[0_0_20px_rgba(180,145,60,0.3)] hover:shadow-[0_0_30px_rgba(180,145,60,0.5)]"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 flex flex-col gap-1.5">
              <span className={`block h-0.5 bg-[#b4913c] transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block h-0.5 bg-[#b4913c] transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 bg-[#b4913c] transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#0a0a0f]/98 backdrop-blur-md border-t border-[#b4913c]/20 pb-6">
          <div className="px-4 pt-4 space-y-1">
            {navLinks.map((link) =>
              link.hasDropdown ? (
                <div key={link.label}>
                  <button
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    className="w-full flex justify-between items-center px-4 py-3 text-white/80 font-medium tracking-wide uppercase text-sm"
                  >
                    {link.label}
                    <svg className={`w-4 h-4 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {mobileServicesOpen && (
                    <div className="pl-4 pb-2 space-y-1">
                      {services.map((s) => (
                        <Link
                          key={s.href}
                          href={s.href}
                          className="block px-4 py-2 text-sm text-white/60 hover:text-[#b4913c]"
                          onClick={() => setMobileOpen(false)}
                        >
                          {s.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className="block px-4 py-3 text-white/80 font-medium tracking-wide uppercase text-sm hover:text-[#b4913c]"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              )
            )}
            <div className="pt-4 px-4">
              <Link
                href="/booking"
                className="block text-center py-3 bg-[#b4913c] text-[#0a0a0f] font-bold uppercase tracking-widest rounded text-sm"
                onClick={() => setMobileOpen(false)}
              >
                Book Now
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}