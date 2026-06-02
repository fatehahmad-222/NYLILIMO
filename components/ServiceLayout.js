"use client";

import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function ServiceLayout({ 
  title, 
  description, 
  heroImage, 
  children,
  breadcrumbs = []
}) {
  return (
    
    <main className="bg-[#07070d] text-white font-['Cormorant_Garamond',serif] overflow-x-hidden">
      <div><Navbar /></div>
      
      {/* Hero Section - With padding to clear the fixed navbar */}
      <section className="relative min-h-[600px] flex items-start justify-center overflow-hidden ">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#07070d]/80 via-[#07070d]/60 to-[#07070d]" />
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-[#07070d]/40" />
        
        {/* Content - Add padding-top to clear the navbar (top bar ~40px + main navbar ~80px = 120px total) */}
          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto" style={{ paddingTop: '160px' }}>          <h1 className="text-5xl md:text-7xl font-light mb-4 drop-shadow-lg ">{title}</h1>
          <div className="w-20 h-px bg-[#b4913c] mx-auto mb-6" />
          <p className="text-white/80 text-lg font-['Montserrat',sans-serif] max-w-2xl mx-auto drop-shadow-md">
            {description}
          </p>
        </div>
      </section>

      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center gap-2 text-sm font-['Montserrat',sans-serif] text-white/40">
          <Link href="/" className="hover:text-[#b4913c] transition-colors">Home</Link>
          {breadcrumbs.map((crumb, idx) => (
            <span key={idx}>
              <span className="mx-2">/</span>
              {crumb.href ? (
                <Link href={crumb.href} className="hover:text-[#b4913c] transition-colors">
                  {crumb.name}
                </Link>
              ) : (
                <span className="text-[#b4913c]">{crumb.name}</span>
              )}
            </span>
          ))}
        </div>
      </div>

      {/* Main Content */}
      {children}

      {/* CTA Section */}
      <section className="py-20 bg-[#09090f]">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-light mb-4">Ready to Experience Luxury?</h2>
          <div className="w-16 h-px bg-[#b4913c] mx-auto mb-8" />
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/booking"
              className="px-8 py-3 bg-[#b4913c] text-[#07070d] font-bold uppercase tracking-widest text-sm hover:bg-[#caa84d] transition-all duration-300 font-['Montserrat',sans-serif]"
            >
              Book Your Ride
            </Link>
            <a
              href="tel:+19176904576"
              className="px-8 py-3 border border-[#b4913c]/50 text-[#b4913c] font-medium uppercase tracking-widest text-sm hover:border-[#b4913c] hover:bg-[#b4913c]/10 transition-all duration-300 font-['Montserrat',sans-serif]"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <FooterComponent />
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
    <footer className="bg-[#05050a] border-t border-[#b4913c]/15">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-1">
            <div className="mb-5">
              <span className="text-3xl font-light tracking-widest text-[#b4913c]">
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
                  className="w-9 h-9 border border-white/15 flex items-center justify-center text-white/40 hover:border-[#b4913c]/50 hover:text-[#b4913c] transition-all duration-200 capitalize text-xs font-['Montserrat',sans-serif]"
                >
                  {social[0].toUpperCase()}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm uppercase tracking-[0.3em] text-[#b4913c] mb-5 font-['Montserrat',sans-serif]">
              Services
            </h4>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="text-white/45 text-sm font-['Montserrat',sans-serif] hover:text-[#b4913c] transition-colors">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm uppercase tracking-[0.3em] text-[#b4913c] mb-5 font-['Montserrat',sans-serif]">
              Our Fleet
            </h4>
            <ul className="space-y-2.5">
              {vehicles.map((v) => (
                <li key={v.href}>
                  <Link href={v.href} className="text-white/45 text-sm font-['Montserrat',sans-serif] hover:text-[#b4913c] transition-colors">
                    {v.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm uppercase tracking-[0.3em] text-[#b4913c] mb-5 font-['Montserrat',sans-serif]">
              Contact
            </h4>
            <ul className="space-y-3 text-white/45 text-sm font-['Montserrat',sans-serif]">
              <li>
                <a href="tel:+19176904576" className="hover:text-[#b4913c] transition-colors">
                  +1 917-690-4576
                </a>
              </li>
              <li>
                <a href="tel:+15164407666" className="hover:text-[#b4913c] transition-colors">
                  +1 516-440-7666
                </a>
              </li>
              <li>
                <a href="mailto:reservations@sknyclimo.com" className="hover:text-[#b4913c] transition-colors">
                  reservations@sknyclimo.com
                </a>
              </li>
              <li className="leading-relaxed">
                135 West 50th Street, Suite 1850<br />
                New York, NY 10020
              </li>
              <li className="text-emerald-400/80">
                Available 24/7 · 365 days/year
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/25 text-xs font-['Montserrat',sans-serif]">
            © {new Date().getFullYear()} SKNYC Limo. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service", "Cancellation Policy"].map((link) => (
              <Link
                key={link}
                href={`/${link.toLowerCase().replace(/ /g, "-")}`}
                className="text-white/25 text-xs hover:text-[#b4913c] transition-colors font-['Montserrat',sans-serif]"
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