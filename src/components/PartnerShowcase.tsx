"use client";

import Image from "next/image";
import FadeIn from "@/components/FadeIn";

interface PartnerShowcaseProps {
  onOpenBooking?: () => void;
}

export default function PartnerShowcase({ onOpenBooking }: PartnerShowcaseProps = {}) {
  return (
    <section
      id="partners"
      className="py-16 sm:py-24 bg-[#050708] border-t border-b border-white/10 relative overflow-hidden text-white scroll-mt-20"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-12 relative z-10 text-center">
        <FadeIn>
          {/* Kicker: TRUSTED BY (Bold) */}
          <span className="text-xs sm:text-sm uppercase tracking-[0.25em] text-[#2E8555] font-bold mb-3 block">
            TRUSTED BY
          </span>

          {/* Heading: Our Clients & Partners (BESTIGIA - Regular) */}
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight mb-8 sm:mb-10 leading-tight">
            Our Clients &amp; Partners
          </h2>

          {/* Partner Logo: TECNO */}
          <div className="flex justify-center items-center">
            <div className="relative w-48 sm:w-60 md:w-72 h-12 sm:h-14 md:h-16 transition-transform duration-300 hover:scale-105">
              <Image
                src="/brand/partners/tecno-white.png"
                alt="TECNO Mobile"
                fill
                className="object-contain"
                sizes="(max-width: 640px) 192px, (max-width: 768px) 240px, 288px"
                priority
              />
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
