"use client";

import FadeIn from "@/components/FadeIn";

interface WhoWeServeProps {
  onOpenBooking: () => void;
}

export default function WhoWeServe({ onOpenBooking }: WhoWeServeProps) {
  return (
    <section id="who-we-serve" className="py-24 sm:py-32 md:py-36 bg-white border-b border-[#E5D1B1]/30 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        {/* Section Header */}
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24">
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#1C422D] font-semibold mb-3 block">
              Who We Serve
            </span>
            <h2 className="font-display text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#050708] tracking-tight mb-4 leading-tight">
              Created for People and Brands That Expect More.
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-[#555555] font-light leading-relaxed">
              High standards for lifetime milestones and international corporate forums.
            </p>
          </div>
        </FadeIn>

        {/* Dual Target Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
          {/* Individuals */}
          <FadeIn delay={100}>
            <div className="h-full p-8 sm:p-10 md:p-12 rounded-2xl bg-[#FBF9F5] border border-[#E5D1B1]/70 hover:border-[#1C422D]/40 transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-md">
              <div>
                <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-[#1C422D] font-semibold mb-2 block">
                  Individuals
                </span>
                <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-[#050708] mb-4">
                  Weddings & Social Celebrations
                </h3>
                <p className="text-sm sm:text-base text-[#666666] font-light leading-relaxed mb-8">
                  Bespoke aesthetic design, seamless coordination and stress-free celebration management.
                </p>
              </div>

              <div>
                <button
                  onClick={onOpenBooking}
                  className="w-full sm:w-auto text-xs sm:text-sm tracking-[0.15em] text-white bg-[#1C422D] border border-[#1C422D] font-semibold rounded-full px-8 py-3.5 hover:bg-[#25573B] hover:border-[#25573B] transition-all duration-300 uppercase active:scale-95 cursor-pointer shadow-md shadow-[#1C422D]/10"
                >
                  Plan Your Celebration
                </button>
              </div>
            </div>
          </FadeIn>

          {/* Businesses */}
          <FadeIn delay={200}>
            <div className="h-full p-8 sm:p-10 md:p-12 rounded-2xl bg-[#FBF9F5] border border-[#E5D1B1]/70 hover:border-[#1C422D]/40 transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-md">
              <div>
                <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-[#1C422D] font-semibold mb-2 block">
                  Businesses
                </span>
                <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-[#050708] mb-4">
                  Corporate Experiences
                </h3>
                <p className="text-sm sm:text-base text-[#666666] font-light leading-relaxed mb-8">
                  High-impact conferences, product launches, galas and executive brand experiences.
                </p>
              </div>

              <div>
                <button
                  onClick={onOpenBooking}
                  className="w-full sm:w-auto text-xs sm:text-sm tracking-[0.15em] text-[#050708] border border-[#1C422D]/40 rounded-full px-8 py-3.5 hover:bg-[#1C422D] hover:text-white transition-all duration-300 uppercase active:scale-95 cursor-pointer font-medium"
                >
                  Plan Your Corporate Event
                </button>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
