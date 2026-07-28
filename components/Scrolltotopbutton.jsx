"use client";

import { useState, useEffect } from "react";

export default function Scrolltotopbutton() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    function handle() {
      setShow(window.scrollY > 400);
    }
    window.addEventListener("scroll", handle, { passive: true });
    return () => window.removeEventListener("scroll", handle);
  }, []);

  if (!show) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      area-label="Scroll to top"
      className="fixed bottom-6 right-6 z-50 p-3 bg-[#8b1a1a] text-white shadow-lg hover:bg-white hover:text-[#0a0a0a] transition-all duration-300"
    >
      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
      </svg>
    </button>
  );
}
