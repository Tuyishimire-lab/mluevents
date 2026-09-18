"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface SplitShowcaseProps {
  onOpenBooking: () => void;
}

const weddingImages = [
  {
    src: "/images/showcase-gusaba.webp",
    alt: "Luxury Rwandan Wedding and Gusaba",
    caption: "Traditional Gusaba Ceremony",
  },
  {
    src: "/images/hero-wedding.webp",
    alt: "Bespoke White Wedding Reception",
    caption: "Grand Reception Styling",
  },
];

const corporateImages = [
  {
    src: "/images/SPARK 20 LAUNCH I.jpg",
    alt: "TECNO Spark 20 Launch Main Stage",
    caption: "TECNO Spark 20 Launch Stage",
  },
  {
    src: "/images/SPARK 20 LAUNCH II.jpg",
    alt: "TECNO Spark 20 Lighting and Acoustics",
    caption: "Concert Lighting & Truss Rig",
  },
  {
    src: "/images/SPARK 20 LAUNCH III.jpg",
    alt: "TECNO Spark 20 Brand Experience",
    caption: "Executive Brand Activation",
  },
  {
    src: "/images/showcase-gala.webp",
    alt: "Corporate Gala and Executive Summit",
    caption: "Continental Summit Forum",
  },
];

const socialServices = [
  "Weddings",
  "Traditional ceremonies",
  "Engagements",
  "Birthdays",
  "Anniversaries",
  "Private celebrations",
  "Special occasions",
];

const corporateServices = [
  "Product launches",
  "Service launches",
  "Campaign launches",
  "Conferences",
  "Exhibitions",
  "Corporate celebrations",
  "Brand experiences",
];

export default function SplitShowcase({ onOpenBooking }: SplitShowcaseProps) {
  const [currentWed, setCurrentWed] = useState(0);
  const [currentCorp, setCurrentCorp] = useState(0);
  const [socialDropdownOpen, setSocialDropdownOpen] = useState(false);
  const [corpDropdownOpen, setCorpDropdownOpen] = useState(false);
  const [activeDepartment, setActiveDepartment] = useState<"social" | "corporate">("social");

  // Sync with URL hash if linked from navbar
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash;
      if (hash === "#corporate" || hash === "#corporate-events") {
        setActiveDepartment("corporate");
      } else if (hash === "#social-events" || hash === "#weddings") {
        setActiveDepartment("social");
      }
    };
    handleHash();
    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, []);

  // Subtle auto-rotation for corporate photos
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentCorp((prev) => (prev + 1) % corporateImages.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  // Subtle auto-rotation for wedding photos
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentWed((prev) => (prev + 1) % weddingImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="services" className="relative scroll-mt-20">
      {/* Hidden anchor targets for direct navbar deep-linking */}
      <div id="social-events" className="absolute -top-24 pointer-events-none" />
      <div id="corporate-events" className="absolute -top-24 pointer-events-none" />

      {/* Dynamic Background Department Showcase */}
      <div
        className={`py-20 sm:py-28 md:py-32 border-b border-[#E5D1B1]/30 transition-colors duration-500 ${
          activeDepartment === "social" ? "bg-[#F7F3EC]" : "bg-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
          {/* Section Heading */}
          <div className="text-center max-w-5xl xl:max-w-6xl mx-auto mb-10 sm:mb-12">
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#1C422D] font-semibold mb-3 block">
              Our Services
            </span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-[40px] xl:text-[48px] font-bold text-[#050708] tracking-tight mb-4 lg:whitespace-nowrap">
              Two Core Departments. One Exceptional Standard.
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-[#555555] font-light leading-relaxed max-w-2xl mx-auto px-2">
              Bespoke social celebrations and high-impact corporate affairs, executed with uncompromising precision.
            </p>
          </div>

          {/* Department Tab Switcher */}
          <div className="flex justify-center mb-12 sm:mb-16">
            <div className="inline-flex p-1.5 rounded-full bg-[#050708]/6 border border-[#050708]/12 backdrop-blur-sm">
              <button
                type="button"
                onClick={() => setActiveDepartment("social")}
                className={`flex items-center gap-2 px-5 sm:px-7 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                  activeDepartment === "social"
                    ? "bg-[#1C422D] text-white shadow-md shadow-[#1C422D]/30"
                    : "text-[#555555] hover:text-[#050708]"
                }`}
              >
                <span>Social Celebrations</span>
                <span
                  className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${
                    activeDepartment === "social" ? "bg-white/20 text-white" : "bg-black/5 text-[#555555]"
                  }`}
                >
                  {socialServices.length}
                </span>
              </button>
              <button
                type="button"
                onClick={() => setActiveDepartment("corporate")}
                className={`flex items-center gap-2 px-5 sm:px-7 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                  activeDepartment === "corporate"
                    ? "bg-[#050708] text-white shadow-md shadow-black/30"
                    : "text-[#555555] hover:text-[#050708]"
                }`}
              >
                <span>Corporate Events</span>
                <span
                  className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${
                    activeDepartment === "corporate" ? "bg-white/20 text-white" : "bg-black/5 text-[#555555]"
                  }`}
                >
                  {corporateServices.length}
                </span>
              </button>
            </div>
          </div>

          {/* Department Content: Social Celebrations */}
          {activeDepartment === "social" ? (
            <div
              id="weddings"
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center animate-fadeIn"
            >
              {/* Wedding Image Frame */}
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden group shadow-lg">
                {weddingImages.map((img, idx) => (
                  <div
                    key={idx}
                    className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                      idx === currentWed ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                    }`}
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute bottom-3 left-4 z-20 text-white text-[11px] font-medium tracking-wide bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full">
                      {img.caption}
                    </div>
                  </div>
                ))}

                {/* Minimal dots inside photo */}
                <div className="absolute bottom-3 right-4 z-20 flex items-center gap-1.5">
                  {weddingImages.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentWed(idx)}
                      className={`transition-all duration-300 rounded-full ${
                        idx === currentWed ? "w-5 h-1 bg-white" : "w-1.5 h-1 bg-white/40"
                      }`}
                      aria-label={`View wedding image ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col justify-center">
                <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-[#1C422D] font-semibold mb-2">
                  Social Celebrations Department
                </span>
                <h3 className="font-display text-xl sm:text-2xl md:text-4xl font-bold text-[#050708] mb-4 leading-tight">
                  Celebrations Designed Around You.
                </h3>
                <p className="text-sm sm:text-base text-[#555555] font-light leading-relaxed mb-6">
                  Tailored planning and styling for weddings and milestone celebrations.
                </p>

                {/* Clean Minimalist Editorial Accordion */}
                <div className="my-6 border-y border-[#E5D1B1] py-1">
                  <button
                    type="button"
                    onClick={() => setSocialDropdownOpen(!socialDropdownOpen)}
                    className="flex items-center justify-between w-full py-3 text-left group cursor-pointer transition-colors"
                    aria-expanded={socialDropdownOpen}
                  >
                    <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#050708] group-hover:text-[#1C422D] transition-colors flex items-center gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#1C422D]" />
                      Included Social Services
                      <span className="text-[10px] sm:text-xs font-mono text-[#1C422D] font-medium bg-[#1C422D]/10 px-2 py-0.5 rounded-full">
                        {socialServices.length}
                      </span>
                    </span>
                    <div className="flex items-center gap-1.5 text-xs font-medium text-[#1C422D]">
                      <span className="text-[11px] uppercase tracking-wider">
                        {socialDropdownOpen ? "Close" : "View"}
                      </span>
                      <svg
                        className={`w-3.5 h-3.5 transition-transform duration-300 ${
                          socialDropdownOpen ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>

                  {socialDropdownOpen && (
                    <div className="pt-2 pb-4 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5 text-xs sm:text-sm text-[#444444] animate-fadeIn border-t border-[#E5D1B1]/50 mt-1">
                      {socialServices.map((service, i) => (
                        <div key={i} className="flex items-center gap-2.5 py-0.5">
                          <span className="w-1 h-1 rounded-full bg-[#1C422D]" />
                          <span className="font-light tracking-wide text-[#333333]">{service}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="flex flex-wrap items-center gap-3.5">
                  <button
                    onClick={onOpenBooking}
                    className="w-full sm:w-auto text-center text-xs sm:text-sm tracking-[0.1em] text-white bg-[#1C422D] border border-[#1C422D] rounded-full px-8 py-3.5 hover:bg-[#25573B] hover:border-[#25573B] transition-all duration-300 active:scale-95 font-medium cursor-pointer shadow-md shadow-[#1C422D]/10"
                  >
                    Plan Social Event
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveDepartment("corporate")}
                    className="w-full sm:w-auto text-center text-xs sm:text-sm tracking-[0.1em] text-[#1C422D] border border-[#1C422D]/40 rounded-full px-7 py-3.5 hover:bg-[#1C422D]/10 transition-all duration-300 font-medium inline-flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <span>Switch to Corporate</span>
                    <span>→</span>
                  </button>
                </div>
              </div>
            </div>
          ) : (
            /* Department Content: Corporate Events */
            <div
              id="corporate"
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center animate-fadeIn"
            >
              {/* Content */}
              <div className="flex flex-col justify-center order-2 lg:order-1">
                <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-[#1C422D] font-semibold mb-2">
                  Corporate Events Department
                </span>
                <h3 className="font-display text-xl sm:text-2xl md:text-4xl font-bold text-[#050708] mb-4 leading-tight">
                  Professional Events. Purposeful Experiences.
                </h3>
                <p className="text-sm sm:text-base text-[#555555] font-light leading-relaxed mb-6">
                  Strategic event management and technical production for forward-thinking brands.
                </p>

                {/* Clean Minimalist Editorial Accordion */}
                <div className="my-6 border-y border-black/10 py-1">
                  <button
                    type="button"
                    onClick={() => setCorpDropdownOpen(!corpDropdownOpen)}
                    className="flex items-center justify-between w-full py-3 text-left group cursor-pointer transition-colors"
                    aria-expanded={corpDropdownOpen}
                  >
                    <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#050708] group-hover:text-[#1C422D] transition-colors flex items-center gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#1C422D]" />
                      Included Corporate Services
                      <span className="text-[10px] sm:text-xs font-mono text-[#1C422D] font-medium bg-[#1C422D]/10 px-2 py-0.5 rounded-full">
                        {corporateServices.length}
                      </span>
                    </span>
                    <div className="flex items-center gap-1.5 text-xs font-medium text-[#1C422D]">
                      <span className="text-[11px] uppercase tracking-wider">
                        {corpDropdownOpen ? "Close" : "View"}
                      </span>
                      <svg
                        className={`w-3.5 h-3.5 transition-transform duration-300 ${
                          corpDropdownOpen ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>

                  {corpDropdownOpen && (
                    <div className="pt-2 pb-4 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5 text-xs sm:text-sm text-[#444444] animate-fadeIn border-t border-black/5 mt-1">
                      {corporateServices.map((service, i) => (
                        <div key={i} className="flex items-center gap-2.5 py-0.5">
                          <span className="w-1 h-1 rounded-full bg-[#1C422D]" />
                          <span className="font-light tracking-wide text-[#333333]">{service}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="flex flex-wrap items-center gap-3.5">
                  <button
                    onClick={onOpenBooking}
                    className="w-full sm:w-auto text-center text-xs sm:text-sm tracking-[0.1em] text-white bg-[#1C422D] border border-[#1C422D] rounded-full px-8 py-3.5 hover:bg-[#25573B] hover:border-[#25573B] transition-all duration-300 active:scale-95 font-medium cursor-pointer shadow-md shadow-[#1C422D]/10"
                  >
                    Plan Corporate Event
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveDepartment("social")}
                    className="w-full sm:w-auto text-center text-xs sm:text-sm tracking-[0.1em] text-[#050708] border border-black/25 rounded-full px-7 py-3.5 hover:bg-black/5 transition-all duration-300 font-medium inline-flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <span>Switch to Social</span>
                    <span>→</span>
                  </button>
                </div>
              </div>

              {/* Corporate Image Frame */}
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden group order-1 lg:order-2 shadow-lg">
                {corporateImages.map((img, idx) => (
                  <div
                    key={idx}
                    className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                      idx === currentCorp ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                    }`}
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute bottom-3 left-4 z-20 text-white text-[11px] font-medium tracking-wide bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full">
                      {img.caption}
                    </div>
                  </div>
                ))}

                {/* Minimal dots inside photo */}
                <div className="absolute bottom-3 right-4 z-20 flex items-center gap-1.5">
                  {corporateImages.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentCorp(idx)}
                      className={`transition-all duration-300 rounded-full ${
                        idx === currentCorp ? "w-5 h-1 bg-white" : "w-1.5 h-1 bg-white/40"
                      }`}
                      aria-label={`View corporate image ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
