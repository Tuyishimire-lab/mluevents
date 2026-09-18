"use client";

import Image from "next/image";
import Link from "next/link";

interface FooterProps {
  onOpenBooking?: () => void;
}

export default function Footer({ onOpenBooking }: FooterProps) {
  return (
    <footer id="contact" className="bg-[#050708] border-t border-white/10 pt-16 sm:pt-20 md:pt-24 pb-12 text-[#E4E6E7] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 sm:gap-12 mb-16 sm:mb-20">
          {/* Column 1 & 2: Brand Profile */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6 group">
              <div className="relative w-28 sm:w-36 h-8 sm:h-10 transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/brand/mlu-logo-white-lockup.png"
                  alt="MLU Events"
                  fill
                  className="object-contain object-left"
                  sizes="(max-width: 640px) 112px, 144px"
                />
              </div>
            </Link>
            <p className="text-xs sm:text-sm text-white/60 font-light max-w-sm leading-relaxed mb-6">
              Exceptional Events. Thoughtfully Designed. Seamlessly Delivered.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://wa.me/250787742477"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] tracking-wider uppercase text-white bg-[#1C422D] border border-[#1C422D] rounded-full px-5 py-2.5 hover:bg-[#25573B] transition-all font-medium inline-flex items-center gap-2"
              >
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Column 3: Explore */}
          <div>
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-[#E5D1B1] font-semibold mb-4 sm:mb-5 block">
              Explore
            </span>
            <ul className="space-y-2.5 text-xs text-white/70 font-light">
              <li>
                <Link href="#home" className="hover:text-[#E5D1B1] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-[#E5D1B1] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-[#E5D1B1] transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="#work" className="hover:text-[#E5D1B1] transition-colors">
                  Our Work
                </Link>
              </li>
              <li>
                <Link href="#approach" className="hover:text-[#E5D1B1] transition-colors">
                  Our Approach
                </Link>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenBooking}
                  className="hover:text-[#E5D1B1] transition-colors cursor-pointer text-left"
                >
                  Contact & Inquiries
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Services & Developing */}
          <div>
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-[#E5D1B1] font-semibold mb-4 sm:mb-5 block">
              Services
            </span>
            <ul className="space-y-2.5 text-xs text-white/70 font-light mb-6">
              <li>
                <Link href="#services" className="hover:text-[#E5D1B1] transition-colors">
                  Social Events
                </Link>
              </li>
              <li>
                <Link href="#corporate" className="hover:text-[#E5D1B1] transition-colors">
                  Corporate Events
                </Link>
              </li>
            </ul>

            <span className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-semibold mb-3 block">
              Developing
            </span>
            <ul className="space-y-2 text-[11px] text-white/50 font-light">
              <li>Fashion Atelier</li>
              <li>Photo & Video Studio</li>
              <li>Outside Catering</li>
              <li>Venue Rental</li>
            </ul>
          </div>

          {/* Column 5: Connect */}
          <div>
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-[#E5D1B1] font-semibold mb-4 sm:mb-5 block">
              Connect
            </span>
            <div className="space-y-3 text-xs text-white/70 font-light">
              <p>Kigali, Rwanda</p>
              <p>
                <a href="tel:+250787742477" className="hover:text-[#E5D1B1] transition-colors">
                  +250 787 742 477
                </a>
              </p>
              <p>
                <a href="mailto:mlueventsrw@gmail.com" className="hover:text-[#E5D1B1] transition-colors">
                  mlueventsrw@gmail.com
                </a>
              </p>
              <div className="flex items-center gap-3 pt-2">
                <a
                  href="https://instagram.com/mluevents"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#E5D1B1] transition-colors"
                >
                  Instagram
                </a>
                <span className="text-white/20">•</span>
                <a
                  href="https://tiktok.com/@mluevents1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#E5D1B1] transition-colors"
                >
                  TikTok
                </a>
                <span className="text-white/20">•</span>
                <a
                  href="https://wa.me/250787742477"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#E5D1B1] transition-colors"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/10 mb-8" />

        {/* Bottom Legal Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-white/40">
          <p>© 2026 MLU Events Ltd. All Rights Reserved.</p>
          <div className="flex items-center gap-4">
            <span className="hover:text-white transition-colors cursor-pointer">Privacy Policy</span>
            <span>•</span>
            <span className="hover:text-white transition-colors cursor-pointer">Terms & Conditions</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
