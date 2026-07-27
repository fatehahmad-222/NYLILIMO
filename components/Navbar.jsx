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
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-[0_1px_0_#e8e6e3]"
          : "bg-white"
      }`}
    >
      {/* Top bar */}
      <div className="border-b border-[#e8e6e3]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-9">
            <div
              className="flex items-center gap-3 text-[11px] text-[#999999]"
              style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 400, letterSpacing: '0.04em' }}
            >
              <a href="tel:+16314524500" className="hover:text-[#b8860b] transition-colors duration-300">
                +1 631-452-4500
              </a>
              <span className="w-px h-3 bg-[#e8e6e3]" />
              <span className="hidden sm:inline">Available 24/7 · New York City</span>
            </div>
            <div className="flex items-center gap-5">
              {[
                { label: "Facebook", path: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" },
                { label: "Instagram", type: "instagram" },
                { label: "Twitter", path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={`https://${social.label.toLowerCase()}.com/nylilimo`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="text-[#cccccc] hover:text-[#b8860b] transition-colors duration-300"
                >
                  {social.type === "instagram" ? (
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </svg>
                  ) : (
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                      <path d={social.path} />
                    </svg>
                  )}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-[#1a1a1a] font-light text-2xl lg:text-3xl tracking-[0.15em] font-['Cormorant_Garamond',serif]">
              NYLI
            </span>
            <span className="text-[#999999] font-light text-lg tracking-[0.1em] font-['Cormorant_Garamond',serif]">
              LIMO
            </span>
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
                  <button className="flex items-center gap-1.5 px-4 py-2 text-[12px] font-['Montserrat',sans-serif] font-medium text-[#6b6b6b] hover:text-[#1a1a1a] transition-colors duration-300 tracking-[0.1em] uppercase">
                    {link.label}
                    <svg
                      className={`w-3 h-3 transition-transform duration-300 ${servicesOpen ? "rotate-180" : ""}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {servicesOpen && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 bg-white border border-[#e8e6e3] shadow-[0_8px_30px_rgba(0,0,0,0.06)] overflow-hidden">
                      <div className="p-3">
                        {services.map((s) => (
                          <Link
                            key={s.href}
                            href={s.href}
                            className="block px-4 py-2.5 text-[12px] text-[#6b6b6b] font-['Montserrat',sans-serif] hover:text-[#b8860b] hover:bg-[#f9f8f6] transition-all duration-200"
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
                  className="px-4 py-2 text-[12px] font-['Montserrat',sans-serif] font-medium text-[#6b6b6b] hover:text-[#1a1a1a] transition-colors duration-300 tracking-[0.1em] uppercase"
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center">
            <Link
              href="/booking"
              className="px-7 py-2.5 text-[11px] font-['Montserrat',sans-serif] font-medium uppercase tracking-[0.15em] text-white bg-[#1a1a1a] hover:bg-[#b8860b] transition-all duration-300"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden relative w-10 h-10 flex items-center justify-center"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-5 flex flex-col gap-1.5">
              <span
                className={`block h-[1px] bg-[#1a1a1a] transition-all duration-500 origin-center ${
                  mobileOpen ? "rotate-45 translate-y-[3.5px]" : ""
                }`}
              />
              <span
                className={`block h-[1px] bg-[#1a1a1a] transition-all duration-500 ${
                  mobileOpen ? "opacity-0 scale-0" : ""
                }`}
              />
              <span
                className={`block h-[1px] bg-[#1a1a1a] transition-all duration-500 origin-center ${
                  mobileOpen ? "-rotate-45 -translate-y-[3.5px]" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden transition-all duration-500 overflow-hidden ${
          mobileOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white border-t border-[#e8e6e3]">
          <div className="px-4 py-6 space-y-1">
            {navLinks.map((link) =>
              link.hasDropdown ? (
                <div key={link.label}>
                  <button
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    className="w-full flex justify-between items-center px-4 py-3 text-[#6b6b6b] font-['Montserrat',sans-serif] font-medium tracking-[0.1em] uppercase text-[12px]"
                  >
                    {link.label}
                    <svg
                      className={`w-3.5 h-3.5 transition-transform duration-300 ${
                        mobileServicesOpen ? "rotate-180" : ""
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div
                    className={`transition-all duration-300 overflow-hidden ${
                      mobileServicesOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="pl-4 pb-2 space-y-0.5">
                      {services.map((s) => (
                        <Link
                          key={s.href}
                          href={s.href}
                          className="block px-4 py-2 text-[12px] text-[#999999] font-['Montserrat',sans-serif] hover:text-[#b8860b]"
                          onClick={() => setMobileOpen(false)}
                        >
                          {s.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className="block px-4 py-3 text-[#6b6b6b] font-['Montserrat',sans-serif] font-medium tracking-[0.1em] uppercase text-[12px] hover:text-[#1a1a1a] transition-colors duration-300"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              )
            )}
            <div className="pt-4 px-4">
              <Link
                href="/booking"
                className="block text-center py-3 bg-[#1a1a1a] text-white font-['Montserrat',sans-serif] font-medium uppercase tracking-[0.15em] text-[11px] hover:bg-[#b8860b] transition-all duration-300"
                onClick={() => setMobileOpen(false)}
              >
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
