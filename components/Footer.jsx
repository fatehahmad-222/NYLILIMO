"use client";

import Link from "next/link";

const services = [
  { title: "Airport Transfers", href: "/services/airport-transfer" },
  { title: "Corporate Transportation", href: "/services/corporate" },
  { title: "Wedding Limousine", href: "/services/wedding" },
  { title: "Prom & Homecoming", href: "/services/prom" },
  { title: "Point to Point", href: "/services/point-to-point" },
  { title: "Hourly As Directed", href: "/services/hourly" },
];

const vehicles = [
  { name: "Cadillac Escalade ESV", href: "/fleet/escalade-esv" },
  { name: "Lincoln Stretch Limousine", href: "/fleet/lincoln-stretch" },
  { name: "Mercedes-Benz Sprinter", href: "/fleet/sprinter" },
  { name: "Rolls-Royce Ghost", href: "/fleet/rolls-royce" },
  { name: "Party Bus", href: "/fleet/party-bus" },
  { name: "BMW 7 Series", href: "/fleet/bmw-7" },
];

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-block mb-5">
              <span className="text-white font-light text-2xl tracking-[0.15em] font-['Cormorant_Garamond',serif]">
                NYLI
              </span>
              <span className="text-white/30 font-light text-lg tracking-[0.1em] font-['Cormorant_Garamond',serif] ml-1">
                LIMO
              </span>
            </Link>
            <p className="text-white/30 text-[13px] leading-relaxed font-['Montserrat',sans-serif] mb-6 max-w-xs">
              New York City&apos;s premier chauffeur service. Luxury transportation for every occasion.
            </p>
            <div className="flex items-center gap-4">
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
                  className="w-9 h-9 border border-white/10 flex items-center justify-center text-white/30 hover:border-[#b8860b]/50 hover:text-[#b8860b] transition-all duration-300"
                >
                  {social.type === "instagram" ? (
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </svg>
                  ) : (
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d={social.path} />
                    </svg>
                  )}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h4 className="text-[10px] uppercase tracking-[0.2em] text-white/50 mb-5 font-['Montserrat',sans-serif] font-medium">
              Services
            </h4>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="text-white/30 text-[12px] font-['Montserrat',sans-serif] hover:text-[#b8860b] transition-colors duration-200"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Fleet */}
          <div className="lg:col-span-2">
            <h4 className="text-[10px] uppercase tracking-[0.2em] text-white/50 mb-5 font-['Montserrat',sans-serif] font-medium">
              Our Fleet
            </h4>
            <ul className="space-y-2.5">
              {vehicles.map((v) => (
                <li key={v.href}>
                  <Link
                    href={v.href}
                    className="text-white/30 text-[12px] font-['Montserrat',sans-serif] hover:text-[#b8860b] transition-colors duration-200"
                  >
                    {v.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h4 className="text-[10px] uppercase tracking-[0.2em] text-white/50 mb-5 font-['Montserrat',sans-serif] font-medium">
              Contact
            </h4>
            <ul className="space-y-3 text-white/30 text-[12px] font-['Montserrat',sans-serif]">
              <li>
                <a href="tel:+16314524500" className="hover:text-[#b8860b] transition-colors duration-200">
                  +1 631-452-4500
                </a>
              </li>
              <li>
                <a href="mailto:reservations@nylilimo.com" className="hover:text-[#b8860b] transition-colors duration-200">
                  reservations@nylilimo.com
                </a>
              </li>
              <li className="leading-relaxed">
                1421 Islip Ave STE 1037<br />
                Central Islip, NY 11722-3941<br />
                United States
              </li>
              <li className="text-[#b8860b]/70 text-[11px] mt-2">
                Available 24/7 · 365 days/year
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 pt-8 border-t border-white/5">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-white/15 text-[11px] font-['Montserrat',sans-serif]">
              © {new Date().getFullYear()} NYLI Limo. All rights reserved. Designed by Nextgen Squad.
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {["Privacy Policy", "Terms of Service", "Cancellation Policy"].map((link) => (
                <Link
                  key={link}
                  href={`/${link.toLowerCase().replace(/ /g, "-")}`}
                  className="text-white/15 text-[11px] hover:text-[#b8860b] transition-colors duration-200 font-['Montserrat',sans-serif]"
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
