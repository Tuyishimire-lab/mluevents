"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

interface NavbarProps {
  onOpenBooking: () => void;
}

export default function Navbar({ onOpenBooking }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#050708]/92 backdrop-blur-md py-3 md:py-4 border-b border-white/10"
          : "bg-transparent py-4 md:py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 flex items-center justify-between">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-2 sm:gap-3 group">
          <div className="relative w-8 h-8 md:w-10 md:h-10 transition-transform duration-300 group-hover:scale-105">
            <Image
              src="/brand/mlu-logo-white.png"
              alt="MLU Events"
              fill
              className="object-contain"
              sizes="40px"
              priority
            />
          </div>
          <span className="font-display text-base md:text-xl font-bold tracking-[0.2em] text-white uppercase leading-none">
            MLU
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-7 lg:gap-10">
          <Link
            href="#about"
            className="text-xs lg:text-sm tracking-[0.1em] text-white hover:text-[#E5D1B1] transition-colors uppercase font-medium drop-shadow-[0_1px_4px_rgba(0,0,0,0.85)]"
          >
            About
          </Link>
          <Link
            href="#services"
            className="text-xs lg:text-sm tracking-[0.1em] text-white hover:text-[#E5D1B1] transition-colors uppercase font-medium drop-shadow-[0_1px_4px_rgba(0,0,0,0.85)]"
          >
            Services
          </Link>
          <Link
            href="#work"
            className="text-xs lg:text-sm tracking-[0.1em] text-white hover:text-[#E5D1B1] transition-colors uppercase font-medium drop-shadow-[0_1px_4px_rgba(0,0,0,0.85)]"
          >
            Our Work
          </Link>
          <Link
            href="#approach"
            className="text-xs lg:text-sm tracking-[0.1em] text-white hover:text-[#E5D1B1] transition-colors uppercase font-medium drop-shadow-[0_1px_4px_rgba(0,0,0,0.85)]"
          >
            Our Approach
          </Link>
          <Link
            href="#why-mlu"
            className="text-xs lg:text-sm tracking-[0.1em] text-white hover:text-[#E5D1B1] transition-colors uppercase font-medium drop-shadow-[0_1px_4px_rgba(0,0,0,0.85)]"
          >
            Why MLU
          </Link>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
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

      {/* Mobile Fullscreen Drawer */}
      <div
        className={`md:hidden fixed inset-0 top-0 bg-[#050708] z-40 flex flex-col items-center justify-center gap-8 transition-all duration-300 ${
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

        <Link href="#about" onClick={() => setMobileMenuOpen(false)} className="text-xl tracking-[0.15em] text-white hover:text-[#E5D1B1] transition-colors uppercase">
          About
        </Link>
        <Link href="#services" onClick={() => setMobileMenuOpen(false)} className="text-xl tracking-[0.15em] text-white hover:text-[#E5D1B1] transition-colors uppercase">
          Services
        </Link>
        <Link href="#work" onClick={() => setMobileMenuOpen(false)} className="text-xl tracking-[0.15em] text-white hover:text-[#E5D1B1] transition-colors uppercase">
          Our Work
        </Link>
        <Link href="#approach" onClick={() => setMobileMenuOpen(false)} className="text-xl tracking-[0.15em] text-white hover:text-[#E5D1B1] transition-colors uppercase">
          Our Approach
        </Link>
        <Link href="#why-mlu" onClick={() => setMobileMenuOpen(false)} className="text-xl tracking-[0.15em] text-white hover:text-[#E5D1B1] transition-colors uppercase">
          Why MLU
        </Link>
        <button
          onClick={() => { setMobileMenuOpen(false); onOpenBooking(); }}
          className="mt-4 text-xs tracking-[0.1em] text-[#E5D1B1] border border-[#E5D1B1]/50 rounded-full px-10 py-3.5 hover:bg-[#E5D1B1] hover:text-[#050708] transition-all duration-300 uppercase font-medium cursor-pointer"
        >
          Contact
        </button>
      </div>
    </header>
  );
}
