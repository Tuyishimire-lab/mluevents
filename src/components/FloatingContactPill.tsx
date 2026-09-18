"use client";

import { useState, useEffect } from "react";

interface FloatingContactPillProps {
  onOpenBooking: () => void;
}

export default function FloatingContactPill({ onOpenBooking }: FloatingContactPillProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show once scrolled past the hero section
      setVisible(window.scrollY > 380);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-40 transition-all duration-500 transform ${
        visible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-6 pointer-events-none"
      }`}
    >
      <div className="flex items-center bg-[#050708]/90 backdrop-blur-xl border border-[#E5D1B1]/40 rounded-full p-1.5 shadow-[0_12px_36px_rgba(0,0,0,0.65)] hover:border-[#E5D1B1]/70 transition-all duration-300 group">
        {/* WhatsApp Direct Action */}
        <a
          href="https://wa.me/250787742477"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-[#1C422D] hover:bg-[#25573B] text-white rounded-full px-3.5 sm:px-4 py-2 text-xs font-semibold tracking-wider transition-all duration-300 shadow-md shadow-[#1C422D]/40 active:scale-95"
          aria-label="Direct WhatsApp Inquiry"
        >
          {/* WhatsApp SVG Icon */}
          <svg
            className="w-4 h-4 fill-current text-white shrink-0"
            viewBox="0 0 24 24"
          >
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.634.072-1.815-.417-1.464-.607-2.42-2.096-2.493-2.193-.073-.097-.597-.796-.597-1.517s.379-1.077.514-1.223c.135-.146.295-.182.393-.182.099 0 .197.001.283.006.09.004.21-.034.328.25.123.295.42 1.025.457 1.1.037.075.061.163.011.261-.05.097-.075.158-.15.244-.075.086-.157.192-.224.257-.075.073-.153.153-.066.302.087.149.387.639.83 1.033.57.506 1.05.663 1.199.737.149.074.237.065.326-.038.089-.103.381-.444.483-.596.102-.152.204-.127.343-.075.139.052.883.416 1.035.492.152.076.254.113.291.178.037.065.037.378-.107.783z" />
            <path d="M12 2C6.48 2 2 6.48 2 12c0 1.94.55 3.75 1.51 5.28L2 22l4.89-1.47C8.36 21.48 10.12 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18.25c-1.63 0-3.17-.47-4.49-1.28l-.32-.2-2.9 0.77.78-2.83-.21-.34c-.9-1.42-1.39-3.08-1.39-4.87 0-4.69 3.81-8.5 8.53-8.5 4.71 0 8.5 3.81 8.5 8.5 0 4.69-3.79 8.42-8.5 8.42z" />
          </svg>
          <span className="hidden xs:inline sm:inline">WhatsApp</span>
        </a>

        {/* Divider */}
        <div className="h-4 w-px bg-white/20 mx-1.5" />

        {/* Booking Consultation Action */}
        <button
          onClick={onOpenBooking}
          className="text-xs font-semibold tracking-wider text-[#E5D1B1] hover:text-white px-3 sm:px-3.5 py-2 uppercase transition-colors duration-200 cursor-pointer flex items-center gap-1.5 active:scale-95"
          aria-label="Open Event Consultation Form"
        >
          <span>Plan Event</span>
          <span className="text-[10px] text-[#E5D1B1]">→</span>
        </button>
      </div>
    </div>
  );
}
