"use client";

import Image from "next/image";

interface SplitShowcaseProps {
  onOpenBooking: () => void;
}

export default function SplitShowcase({ onOpenBooking }: SplitShowcaseProps) {
  return (
    <section className="relative scroll-mt-20">
      {/* WEDDINGS: Champagne Section */}
      <div className="bg-[#E5D1B1] py-16 sm:py-24 md:py-44">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
          {/* Section Heading */}
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-20 md:mb-28">
            <h2 className="font-display text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#1C422D] tracking-tight mb-4 sm:mb-6">
              Signature Event Productions
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-[#1C422D]/60 font-light leading-relaxed px-2">
              From intimate traditional Rwandan ceremonies to continental business
              forums, we manage every facet of production with obsessive care.
            </p>
          </div>

          <div
            id="weddings"
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center scroll-mt-24"
          >
            {/* Image */}
            <div className="relative aspect-[4/3] sm:aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden group">
              <Image
                src="/images/showcase-gusaba.webp"
                alt="Luxury Rwandan Wedding and Gusaba"
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col justify-center">
              <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-[#1C422D]/50 mb-3 sm:mb-4">
                Weddings & Social
              </span>
              <h3 className="font-display text-xl sm:text-2xl md:text-4xl font-bold text-[#1C422D] mb-4 sm:mb-6 leading-tight">
                Bespoke Weddings & Traditional Gusaba
              </h3>
              <p className="text-xs sm:text-sm text-[#1C422D]/65 font-light leading-relaxed mb-6 sm:mb-10">
                We produce deeply personal, culturally rooted celebrations that
                interweave modern luxury with Rwandan heritage. Meticulous
                planning, white-glove coordination, and art-directed styling are
                woven into every detail.
              </p>

              <button
                onClick={onOpenBooking}
                className="self-start w-full sm:w-auto text-center text-xs sm:text-sm tracking-[0.1em] text-[#1C422D] border border-[#1C422D]/40 rounded-full px-8 py-3 hover:bg-[#1C422D] hover:text-[#E5D1B1] transition-all duration-300 active:scale-95"
              >
                Plan Your Wedding
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* CORPORATE: Deep Green Section */}
      <div className="bg-[#1C422D] py-16 sm:py-24 md:py-44">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
          <div
            id="corporate"
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center scroll-mt-24"
          >
            {/* Content */}
            <div className="flex flex-col justify-center order-2 lg:order-1">
              <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-[#E5D1B1]/50 mb-3 sm:mb-4">
                Corporate Affairs
              </span>
              <h3 className="font-display text-xl sm:text-2xl md:text-4xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                Executive Summits & Institutional Galas
              </h3>
              <p className="text-xs sm:text-sm text-white/60 font-light leading-relaxed mb-6 sm:mb-10">
                Kigali is Africa&apos;s premier summit destination. We equip
                corporations, multinationals, and embassies with executive
                production capabilities, delivering high-level forums that command
                respect.
              </p>

              <button
                onClick={onOpenBooking}
                className="self-start w-full sm:w-auto text-center text-xs sm:text-sm tracking-[0.1em] text-[#E5D1B1] border border-[#E5D1B1]/40 rounded-full px-8 py-3 hover:bg-[#E5D1B1] hover:text-[#1C422D] transition-all duration-300 active:scale-95"
              >
                Reserve Corporate Production
              </button>
            </div>

            {/* Image */}
            <div className="relative aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden group order-1 lg:order-2">
              <Image
                src="/images/showcase-gala.webp"
                alt="Corporate Gala and Executive Summit"
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
