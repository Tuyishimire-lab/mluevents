"use client";

import Image from "next/image";
import FadeIn from "@/components/FadeIn";

export default function BrandMorals() {
  const morals = [
    {
      letter: "M",
      title: "MODERN",
      description:
        "Every stage, ambiance, and production setup incorporates sleek architectural trends, intelligent lighting, and modern spatial design.",
    },
    {
      letter: "L",
      title: "LUXURY",
      description:
        "From custom couture table settings to bespoke floral architecture, white-glove coordination, and seamless guest hospitality.",
    },
    {
      letter: "U",
      title: "UNIQUE",
      description:
        "We listen intently to your personal legacy or corporate milestone, handcrafting a concept that reflects your distinctive story.",
    },
  ];

  return (
    <section id="morals" className="py-16 sm:py-24 md:py-44 bg-[#050708]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12">
        {/* Section Header */}
        <FadeIn>
          <div className="text-center mb-12 sm:mb-20 md:mb-28">
            <h2 className="font-display text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-4 sm:mb-6">
              Three Morals. One Distinction.
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-white/50 font-light max-w-xl mx-auto leading-relaxed px-2">
              Rooted in Rwandan pride and global luxury standards, MLU Events was
              founded on three immovable pillars.
            </p>
          </div>
        </FadeIn>

        {/* 3 Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-12 md:gap-16 mb-16 sm:mb-28">
          {morals.map((item, idx) => (
            <FadeIn key={idx} delay={idx * 150}>
              <div className="text-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#1C422D] flex items-center justify-center text-2xl sm:text-3xl font-bold font-display text-[#E5D1B1] mx-auto mb-5 sm:mb-8">
                  {item.letter}
                </div>
                <h3 className="font-display text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4 tracking-wide">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-white/50 leading-relaxed font-light">
                  {item.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Heritage Box */}
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto">
            <div className="relative w-24 h-24 sm:w-36 sm:h-36 mx-auto mb-6 sm:mb-10">
              <Image
                src="/brand/mlu-logo-gold.png"
                alt="MLU Stacked Logo"
                fill
                className="object-contain"
                sizes="144px"
              />
            </div>
            <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 sm:mb-6">
              The Geometric Imigongo Heritage
            </h3>
            <p className="text-xs sm:text-sm text-white/50 leading-relaxed font-light px-2">
              Each of the three handmade elements in the MLU insignia was
              intentionally sculpted to reflect the ancient geometry of Rwandan
              Imigongo art, a modern tribute to our roots translated for the
              world stage.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
