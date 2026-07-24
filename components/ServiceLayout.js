"use client";

import Navbar from "@/components/Navbar";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function ServiceLayout({ 
  title, 
  description, 
  heroImage, 
  children,
  breadcrumbs = []
}) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="bg-[#0e0c0a] text-white font-['Cormorant_Garamond',serif] overflow-x-hidden">
      <div><Navbar /></div>
      
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-start justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0e0c0a]/65 via-[#0e0c0a]/30 to-[#0e0c0a]/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-[#0e0c0a]/30" />
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto" style={{ paddingTop: '160px' }}>
          <h1 className="text-5xl md:text-7xl font-light mb-4 drop-shadow-lg">{title}</h1>
          <div className="w-20 h-px bg-[#cd7f32] mx-auto mb-6" />
          <p className="text-white/80 text-lg font-['Montserrat',sans-serif] max-w-2xl mx-auto drop-shadow-md">
            {description}
          </p>
        </div>
      </section>

      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center gap-2 text-sm font-['Montserrat',sans-serif] text-white/40">
          <Link href="/" className="hover:text-[#cd7f32] transition-colors">Home</Link>
          {breadcrumbs.map((crumb, idx) => (
            <span key={idx}>
              <span className="mx-2">/</span>
              {crumb.href ? (
                <Link href={crumb.href} className="hover:text-[#cd7f32] transition-colors">
                  {crumb.name}
                </Link>
              ) : (
                <span className="text-[#cd7f32]">{crumb.name}</span>
              )}
            </span>
          ))}
        </div>
      </div>

      {/* Main Content */}
      {children}

      {/* CTA Section */}
      <section className="py-20 bg-[#13110e]">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-light mb-4">Ready to Experience Luxury?</h2>
          <div className="w-16 h-px bg-[#cd7f32] mx-auto mb-8" />
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/booking"
              className="px-8 py-3 bg-[#cd7f32] text-[#0e0c0a] font-bold uppercase tracking-widest text-sm hover:bg-[#e09545] transition-all duration-300 font-['Montserrat',sans-serif]"
            >
              Book Your Ride
            </Link>
            <a
              href="tel:+19176904576"
              className="px-8 py-3 border border-[#cd7f32]/50 text-[#cd7f32] font-medium uppercase tracking-widest text-sm hover:border-[#cd7f32] hover:bg-[#cd7f32]/10 transition-all duration-300 font-['Montserrat',sans-serif]"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <FooterComponent />

      {/* Scroll to Top Button — bottom left */}
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        style={{
          position: "fixed",
          bottom: "2rem",
          right: "2rem",
          zIndex: 50,
          opacity: visible ? 1 : 0,
          pointerEvents: visible ? "auto" : "none",
          transition: "opacity 0.3s ease, transform 0.3s ease, background-color 0.2s ease",
          transform: visible ? "translateY(0)" : "translateY(12px)",
          width: "44px",
          height: "44px",
          border: "1px solid rgba(205, 127, 50, 0.5)",
          background: "rgba(14, 12, 10, 0.85)",
          backdropFilter: "blur(8px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
        }}
        onMouseEnter={e => {
          e.currentTarget.style.borderColor = "#cd7f32";
          e.currentTarget.style.background = "rgba(205, 127, 50, 0.12)";
        }}
        onMouseLeave={e => {
          e.currentTarget.style.borderColor = "rgba(205, 127, 50, 0.5)";
          e.currentTarget.style.background = "rgba(14, 12, 10, 0.85)";
        }}
      >
        {/* Up arrow SVG */}
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 13V3M8 3L3 8M8 3L13 8"
            stroke="#cd7f32"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </main>
  );
}

function FooterComponent() {
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

  return (
    <footer className="bg-[#0a0806] border-t border-[#cd7f32]/15">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-1">
            <div className="mb-5">
              <span className="text-3xl font-light tracking-widest text-[#cd7f32]">
                SKNYC
                <span className="text-white/40 text-lg"> LIMO</span>
              </span>
            </div>
            <p className="text-white/45 text-sm leading-relaxed font-['Montserrat',sans-serif] mb-6">
              New York City's premier chauffeur service. Luxury transportation for every occasion.
            </p>
            <div className="flex gap-3">
              {["facebook", "instagram", "twitter"].map((social) => (
                <a
                  key={social}
                  href={`https://${social}.com/sknyclimo`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 border border-white/15 flex items-center justify-center text-white/40 hover:border-[#cd7f32]/50 hover:text-[#cd7f32] transition-all duration-200 capitalize text-xs font-['Montserrat',sans-serif]"
                >
                  {social[0].toUpperCase()}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm uppercase tracking-[0.3em] text-[#cd7f32] mb-5 font-['Montserrat',sans-serif]">
              Services
            </h4>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="text-white/45 text-sm font-['Montserrat',sans-serif] hover:text-[#cd7f32] transition-colors">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm uppercase tracking-[0.3em] text-[#cd7f32] mb-5 font-['Montserrat',sans-serif]">
              Our Fleet
            </h4>
            <ul className="space-y-2.5">
              {vehicles.map((v) => (
                <li key={v.href}>
                  <Link href={v.href} className="text-white/45 text-sm font-['Montserrat',sans-serif] hover:text-[#cd7f32] transition-colors">
                    {v.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm uppercase tracking-[0.3em] text-[#cd7f32] mb-5 font-['Montserrat',sans-serif]">
              Contact
            </h4>
            <ul className="space-y-3 text-white/45 text-sm font-['Montserrat',sans-serif]">
              <li>
                <a href="tel:+19176904576" className="hover:text-[#cd7f32] transition-colors">
                  +1 917-690-4576
                </a>
              </li>
              <li>
                <a href="tel:+15164407666" className="hover:text-[#cd7f32] transition-colors">
                  +1 516-440-7666
                </a>
              </li>
              <li>
                <a href="mailto:reservations@sknyclimo.com" className="hover:text-[#cd7f32] transition-colors">
                  reservations@sknyclimo.com
                </a>
              </li>
              <li className="leading-relaxed">
                1421 Islip Ave STE 1037<br />
                Central Islip, NY 11722-3941<br />
                United States
              </li>
              <li className="text-emerald-400/80">
                Available 24/7 · 365 days/year
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/25 text-xs font-['Montserrat',sans-serif]">
            © {new Date().getFullYear()} SKNYC Limo. All rights reserved. Designed by Nextgen Squad.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service", "Cancellation Policy"].map((link) => (
              <Link
                key={link}
                href={`/${link.toLowerCase().replace(/ /g, "-")}`}
                className="text-white/25 text-xs hover:text-[#cd7f32] transition-colors font-['Montserrat',sans-serif]"
              >
                {link}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}