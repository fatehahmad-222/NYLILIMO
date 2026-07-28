"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-[#1e1e1e] py-16 lg:py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-10 mb-12">
          <Link href="/" className="group">
            <span className="text-white text-2xl tracking-[0.25em] font-light font-['Cormorant_Garamond',serif] group-hover:text-[#8b1a1a] transition-colors duration-300">
              NYLI
            </span>
            <span className="text-[#555555] text-lg tracking-[0.1em] font-light font-['Cormorant_Garamond',serif] ml-1">
              LIMO
            </span>
          </Link>

          <div className="flex flex-wrap justify-center gap-8">
            {[
              { label: "Fleet", href: "/fleet" },
              { label: "Services", href: "/#services" },
              { label: "About", href: "/aboutus" },
              { label: "Contact", href: "/contact" },
              { label: "Book", href: "/booking" },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="text-[#555555] text-[11px] uppercase tracking-[0.2em] font-medium hover:text-[#8b1a1a] transition-colors duration-300">
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 pt-8 border-t border-[#1e1e1e]">
          <div className="flex gap-6">
            {[
              { label: "Facebook", path: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" },
              { label: "Instagram", type: "instagram" },
              { label: "Twitter", path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" },
            ].map((s) => (
              <a key={s.label} href={`https://${s.label.toLowerCase()}.com/nylilimo`} target="_blank" rel="noopener noreferrer" aria-label={s.label} className="text-[#555555] hover:text-[#8b1a1a] transition-colors duration-300">
                {s.type === "instagram" ? (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
                ) : (
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d={s.path} /></svg>
                )}
              </a>
            ))}
            <a href="tel:+16314524500" className="text-[#555555] text-[11px] font-['Montserrat',sans-serif] hover:text-[#8b1a1a] transition-colors duration-300 hidden sm:block">
              +1 631-452-4500
            </a>
          </div>
          <p className="text-[#333333] text-[10px] tracking-[0.05em]">
            © {new Date().getFullYear()} NYLI Limo
          </p>
        </div>
      </div>
    </footer>
  );
}
