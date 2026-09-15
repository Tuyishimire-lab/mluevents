"use client";

import FadeIn from "@/components/FadeIn";

interface FinalCTAProps {
  onOpenBooking: () => void;
}

export default function FinalCTA({ onOpenBooking }: FinalCTAProps) {
  return (
    <section className="py-24 sm:py-32 md:py-36 bg-white relative overflow-hidden text-[#050708] border-t border-[#E5D1B1]/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-12 text-center relative z-10">
        <FadeIn>
          <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#1C422D] font-semibold mb-4 block">
            Start Your Journey
          </span>

          <h2 className="font-display text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#050708] tracking-tight mb-6 leading-tight">
            Your Vision Deserves an Exceptional Experience.
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-[#555555] font-light max-w-2xl mx-auto leading-relaxed mb-10 sm:mb-12">
            From weddings and social celebrations to corporate events, MLU Events brings together creativity, planning and professional execution to create experiences that matter.
          </p>

          <button
            onClick={onOpenBooking}
            className="text-xs sm:text-sm tracking-[0.15em] text-white bg-[#1C422D] border border-[#1C422D] font-bold rounded-full px-10 py-4 hover:bg-[#25573B] hover:border-[#25573B] transition-all duration-300 uppercase active:scale-95 shadow-xl shadow-[#1C422D]/15 cursor-pointer"
          >
            Plan Your Event
          </button>
        </FadeIn>
      </div>
    </section>
  );
}
