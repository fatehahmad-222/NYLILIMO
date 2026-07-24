"use client";

import { useState, useEffect } from "react";

export default function ScrollToTopButton() {
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
  );
}