"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

interface NavbarProps {
  onOpenBooking: () => void;
}

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

export default function Navbar({ onOpenBooking }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<"social" | "corporate" | null>(null);

  // Mobile accordions
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileSocialOpen, setMobileSocialOpen] = useState(true);
  const [mobileCorpOpen, setMobileCorpOpen] = useState(true);

  const dropdownRef = useRef<HTMLDivElement>(null);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Scrollspy active section detection
      const sections = ["about", "services", "work", "approach", "why-mlu"];
      const scrollPos = window.scrollY + 140;
      let currentSection = "";
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            currentSection = id;
            break;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Handle outside click and escape key to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesDropdownOpen(false);
        setActiveSubmenu(null);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setServicesDropdownOpen(false);
        setActiveSubmenu(null);
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
    };
  }, []);

  const handleMouseEnter = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }
    setServicesDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setServicesDropdownOpen(false);
      setActiveSubmenu(null);
    }, 200);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#050708]/94 backdrop-blur-md py-3 md:py-4 border-b border-white/10"
            : "bg-transparent py-4 md:py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 flex items-center justify-between">
          {/* Brand */}
          <Link href="/" className="flex items-center group">
            <div className="relative w-24 sm:w-28 md:w-32 h-7 sm:h-8 md:h-[33px] transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/brand/mlu-logo-white-lockup.png"
                alt="MLU Events"
                fill
                className="object-contain"
                sizes="(max-width: 640px) 96px, 128px"
                priority
              />
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-9 font-display">
            <Link
              href="#about"
              className={`relative py-1 text-xs lg:text-sm tracking-[0.1em] transition-colors uppercase font-medium drop-shadow-[0_1px_4px_rgba(0,0,0,0.85)] ${
                activeSection === "about" ? "text-[#E5D1B1]" : "text-white hover:text-[#E5D1B1]"
              }`}
            >
              <span>About</span>
              {activeSection === "about" && (
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#E5D1B1] shadow-[0_0_8px_#E5D1B1]" />
              )}
            </Link>

            {/* Services Dropdown (Simple Nested Dropdown Menu) */}
            <div
              ref={dropdownRef}
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div className="flex items-center gap-1.5 py-1">
                <Link
                  href="#services"
                  onClick={() => {
                    setServicesDropdownOpen(false);
                    setActiveSubmenu(null);
                  }}
                  className={`relative text-xs lg:text-sm tracking-[0.1em] transition-colors uppercase font-medium drop-shadow-[0_1px_4px_rgba(0,0,0,0.85)] flex items-center gap-1.5 ${
                    servicesDropdownOpen || activeSection === "services"
                      ? "text-[#E5D1B1]"
                      : "text-white hover:text-[#E5D1B1]"
                  }`}
                >
                  <span>Services</span>
                  <svg
                    className={`w-3.5 h-3.5 transition-transform duration-300 ${
                      servicesDropdownOpen ? "rotate-180 text-[#E5D1B1]" : "text-white/70"
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                  {activeSection === "services" && !servicesDropdownOpen && (
                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#E5D1B1] shadow-[0_0_8px_#E5D1B1]" />
                  )}
                </Link>
              </div>

              {/* Level 1 Dropdown Menu */}
              <div
                className={`absolute top-full left-0 pt-1.5 transition-all duration-200 z-50 ${
                  servicesDropdownOpen
                    ? "opacity-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 -translate-y-1 pointer-events-none"
                }`}
              >
                <div className="bg-[#050708]/85 backdrop-blur-2xl border border-white/15 rounded-xl py-1.5 w-52 shadow-[0_20px_50px_rgba(0,0,0,0.85)]">
                  {/* Category 1: Social Events */}
                  <div
                    className="relative group/social"
                    onMouseEnter={() => setActiveSubmenu("social")}
                  >
                    <Link
                      href="#social-events"
                      onClick={() => {
                        setServicesDropdownOpen(false);
                        setActiveSubmenu(null);
                      }}
                      className="flex items-center justify-between px-4 py-2.5 text-xs text-white hover:text-[#E5D1B1] hover:bg-white/10 transition-colors uppercase font-medium tracking-wider"
                    >
                      <span className="drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)]">Social Events</span>
                      <svg
                        className="w-3.5 h-3.5 text-white/70 group-hover/social:text-[#E5D1B1] group-hover/social:translate-x-0.5 transition-all"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>

                    {/* Level 2 Flyout Submenu: Social Sub-services */}
                    <div
                      className={`absolute left-full top-0 pl-1 w-56 z-50 transition-all duration-150 ${
                        activeSubmenu === "social"
                          ? "opacity-100 translate-x-0 pointer-events-auto block"
                          : "opacity-0 -translate-x-1 pointer-events-none hidden group-hover/social:block group-hover/social:opacity-100 group-hover/social:pointer-events-auto"
                      }`}
                    >
                      <div className="bg-[#050708]/85 backdrop-blur-2xl border border-white/15 rounded-xl py-1.5 shadow-[0_20px_50px_rgba(0,0,0,0.85)]">
                        {socialServices.map((service, idx) => (
                          <Link
                            key={idx}
                            href="#social-events"
                            onClick={() => {
                              setServicesDropdownOpen(false);
                              setActiveSubmenu(null);
                            }}
                            className="block px-4 py-2 text-xs text-white hover:text-[#E5D1B1] hover:bg-white/10 transition-colors font-medium tracking-wide whitespace-nowrap drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)]"
                          >
                            {service}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Category 2: Corporate Events */}
                  <div
                    className="relative group/corp"
                    onMouseEnter={() => setActiveSubmenu("corporate")}
                  >
                    <Link
                      href="#corporate"
                      onClick={() => {
                        setServicesDropdownOpen(false);
                        setActiveSubmenu(null);
                      }}
                      className="flex items-center justify-between px-4 py-2.5 text-xs text-white hover:text-[#E5D1B1] hover:bg-white/10 transition-colors uppercase font-medium tracking-wider"
                    >
                      <span className="drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)]">Corporate Events</span>
                      <svg
                        className="w-3.5 h-3.5 text-white/70 group-hover/corp:text-[#E5D1B1] group-hover/corp:translate-x-0.5 transition-all"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>

                    {/* Level 2 Flyout Submenu: Corporate Sub-services */}
                    <div
                      className={`absolute left-full top-0 pl-1 w-56 z-50 transition-all duration-150 ${
                        activeSubmenu === "corporate"
                          ? "opacity-100 translate-x-0 pointer-events-auto block"
                          : "opacity-0 -translate-x-1 pointer-events-none hidden group-hover/corp:block group-hover/corp:opacity-100 group-hover/corp:pointer-events-auto"
                      }`}
                    >
                      <div className="bg-[#050708]/85 backdrop-blur-2xl border border-white/15 rounded-xl py-1.5 shadow-[0_20px_50px_rgba(0,0,0,0.85)]">
                        {corporateServices.map((service, idx) => (
                          <Link
                            key={idx}
                            href="#corporate"
                            onClick={() => {
                              setServicesDropdownOpen(false);
                              setActiveSubmenu(null);
                            }}
                            className="block px-4 py-2 text-xs text-white hover:text-[#E5D1B1] hover:bg-white/10 transition-colors font-medium tracking-wide whitespace-nowrap drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)]"
                          >
                            {service}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Link
              href="#work"
              className={`relative py-1 text-xs lg:text-sm tracking-[0.1em] transition-colors uppercase font-medium drop-shadow-[0_1px_4px_rgba(0,0,0,0.85)] ${
                activeSection === "work" ? "text-[#E5D1B1]" : "text-white hover:text-[#E5D1B1]"
              }`}
            >
              <span>Our Work</span>
              {activeSection === "work" && (
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#E5D1B1] shadow-[0_0_8px_#E5D1B1]" />
              )}
            </Link>
            <Link
              href="#approach"
              className={`relative py-1 text-xs lg:text-sm tracking-[0.1em] transition-colors uppercase font-medium drop-shadow-[0_1px_4px_rgba(0,0,0,0.85)] ${
                activeSection === "approach" ? "text-[#E5D1B1]" : "text-white hover:text-[#E5D1B1]"
              }`}
            >
              <span>Our Approach</span>
              {activeSection === "approach" && (
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#E5D1B1] shadow-[0_0_8px_#E5D1B1]" />
              )}
            </Link>
            <Link
              href="#why-mlu"
              className={`relative py-1 text-xs lg:text-sm tracking-[0.1em] transition-colors uppercase font-medium drop-shadow-[0_1px_4px_rgba(0,0,0,0.85)] ${
                activeSection === "why-mlu" ? "text-[#E5D1B1]" : "text-white hover:text-[#E5D1B1]"
              }`}
            >
              <span>Why MLU</span>
              {activeSection === "why-mlu" && (
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#E5D1B1] shadow-[0_0_8px_#E5D1B1]" />
              )}
            </Link>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block font-display">
            <button
              onClick={onOpenBooking}
              className="text-xs lg:text-sm tracking-[0.1em] text-[#E5D1B1] border border-[#E5D1B1]/50 rounded-full px-6 py-2 hover:bg-[#E5D1B1] hover:text-[#050708] transition-all duration-300 uppercase font-medium cursor-pointer"
            >
              Contact
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-white hover:text-[#E5D1B1] transition-colors cursor-pointer"
            aria-label="Toggle Navigation"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 8h16M4 16h16" />
              )}
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Fullscreen Drawer */}
      <div
        className={`md:hidden fixed inset-0 w-full h-full min-h-screen bg-[#050708] z-[60] flex flex-col items-center justify-start overflow-y-auto px-6 py-20 gap-6 transition-all duration-300 font-display ${
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Close button inside drawer */}
        <button
          onClick={() => setMobileMenuOpen(false)}
          className="absolute top-5 right-5 p-2 text-white/60 hover:text-white"
          aria-label="Close menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <Link
          href="#about"
          onClick={() => setMobileMenuOpen(false)}
          className="text-lg tracking-[0.15em] text-white hover:text-[#E5D1B1] transition-colors uppercase font-medium"
        >
          About
        </Link>

        {/* Mobile Services Nested Accordion */}
        <div className="w-full max-w-xs flex flex-col items-center">
          <button
            type="button"
            onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
            className="flex items-center justify-center gap-2 text-lg tracking-[0.15em] text-white hover:text-[#E5D1B1] transition-colors uppercase font-medium cursor-pointer"
          >
            <span>Services</span>
            <svg
              className={`w-4 h-4 text-[#E5D1B1] transition-transform duration-300 ${
                mobileServicesOpen ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {mobileServicesOpen && (
            <div className="mt-3 w-full border-t border-b border-white/10 py-3 text-left space-y-3">
              {/* Category 1: Social Events */}
              <div>
                <button
                  type="button"
                  onClick={() => setMobileSocialOpen(!mobileSocialOpen)}
                  className="w-full flex items-center justify-between text-xs uppercase tracking-[0.15em] text-white hover:text-[#E5D1B1] font-semibold py-1.5 transition-colors"
                >
                  <span>Social Events</span>
                  <svg
                    className={`w-3 h-3 text-[#E5D1B1] transition-transform duration-200 ${
                      mobileSocialOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {mobileSocialOpen && (
                  <div className="flex flex-col gap-1.5 pl-3 pt-1 border-l border-white/10 mt-1">
                    {socialServices.map((service, idx) => (
                      <Link
                        key={idx}
                        href="#social-events"
                        onClick={() => {
                          setMobileMenuOpen(false);
                          setMobileServicesOpen(false);
                        }}
                        className="text-xs text-white/70 hover:text-[#E5D1B1] py-0.5 tracking-wide font-light transition-colors"
                      >
                        {service}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Category 2: Corporate Events */}
              <div>
                <button
                  type="button"
                  onClick={() => setMobileCorpOpen(!mobileCorpOpen)}
                  className="w-full flex items-center justify-between text-xs uppercase tracking-[0.15em] text-white hover:text-[#E5D1B1] font-semibold py-1.5 transition-colors"
                >
                  <span>Corporate Events</span>
                  <svg
                    className={`w-3 h-3 text-[#E5D1B1] transition-transform duration-200 ${
                      mobileCorpOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {mobileCorpOpen && (
                  <div className="flex flex-col gap-1.5 pl-3 pt-1 border-l border-white/10 mt-1">
                    {corporateServices.map((service, idx) => (
                      <Link
                        key={idx}
                        href="#corporate"
                        onClick={() => {
                          setMobileMenuOpen(false);
                          setMobileServicesOpen(false);
                        }}
                        className="text-xs text-white/70 hover:text-[#E5D1B1] py-0.5 tracking-wide font-light transition-colors"
                      >
                        {service}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        <Link
          href="#work"
          onClick={() => setMobileMenuOpen(false)}
          className="text-lg tracking-[0.15em] text-white hover:text-[#E5D1B1] transition-colors uppercase font-medium"
        >
          Our Work
        </Link>
        <Link
          href="#approach"
          onClick={() => setMobileMenuOpen(false)}
          className="text-lg tracking-[0.15em] text-white hover:text-[#E5D1B1] transition-colors uppercase font-medium"
        >
          Our Approach
        </Link>
        <Link
          href="#why-mlu"
          onClick={() => setMobileMenuOpen(false)}
          className="text-lg tracking-[0.15em] text-white hover:text-[#E5D1B1] transition-colors uppercase font-medium"
        >
          Why MLU
        </Link>

        <button
          onClick={() => {
            setMobileMenuOpen(false);
            onOpenBooking();
          }}
          className="mt-2 text-xs tracking-[0.1em] text-[#E5D1B1] border border-[#E5D1B1]/50 rounded-full px-10 py-3.5 hover:bg-[#E5D1B1] hover:text-[#050708] transition-all duration-300 uppercase font-medium cursor-pointer"
        >
          Contact
        </button>
      </div>
    </>
  );
}
