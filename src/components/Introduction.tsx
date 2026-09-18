"use client";

import Link from "next/link";
import FadeIn from "@/components/FadeIn";

export default function Introduction() {
  return (
    <section className="py-24 sm:py-32 md:py-36 bg-white border-b border-[#E5D1B1]/30 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-12 text-center">
        <FadeIn>
          <h2 className="font-display text-2xl sm:text-4xl md:text-5xl lg:text-[54px] xl:text-6xl font-bold text-[#050708] tracking-tight mb-6 sm:mb-8 leading-tight lg:whitespace-nowrap">
            More Than an Event, an Experience.
          </h2>

          <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-[#444444] font-light leading-relaxed mb-8 sm:mb-10">
            MLU Events Ltd creates meaningful and memorable experiences through professional event planning and management.
            From intimate celebrations to significant corporate occasions, we combine creativity, precision and genuine care to bring each client's vision to life.

          </p>

          <div>
            <Link
              href="#about"
              className="inline-flex items-center justify-center text-xs sm:text-sm tracking-[0.15em] text-white bg-[#1C422D] border border-[#1C422D] rounded-full px-8 sm:px-10 py-3.5 sm:py-4 hover:bg-[#25573B] hover:border-[#25573B] transition-all duration-300 uppercase active:scale-95 font-medium shadow-md shadow-[#1C422D]/10"
            >
              Discover MLU
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
