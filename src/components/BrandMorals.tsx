"use client";

import Image from "next/image";
import FadeIn from "@/components/FadeIn";

const pillars = [
  {
    title: "EXCELLENCE",
    description: "High standards in every stage of the event experience.",
    icon: "01",
  },
  {
    title: "MODERNITY",
    description: "Contemporary ideas, design and approaches.",
    icon: "02",
  },
  {
    title: "LUXURY",
    description: "Refinement, quality and elevated experiences.",
    icon: "03",
  },
  {
    title: "UNIQUENESS",
    description: "Events designed around each client's individual vision.",
    icon: "04",
  },
  {
    title: "CLIENT CARE",
    description: "Close communication and genuine attention to every client.",
    icon: "05",
  },
  {
    title: "INTEGRITY",
    description: "Honesty, transparency, accountability and trust.",
    icon: "06",
  },
  {
    title: "CREATIVITY",
    description: "Ideas transformed into distinctive experiences.",
    icon: "07",
  },
  {
    title: "GROWTH",
    description: "Continuous development of our capabilities and services.",
    icon: "08",
  },
];

export default function BrandMorals() {
  return (
    <section id="why-mlu" className="py-24 sm:py-32 md:py-36 bg-white border-b border-[#E5D1B1]/30 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        {/* Section Header */}
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24">
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#1C422D] font-semibold mb-3 block">
              Why MLU
            </span>
            <h2 className="font-display text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#050708] tracking-tight mb-4 leading-tight">
              What Defines Us.
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-[#555555] font-light leading-relaxed">
              Rooted in Rwandan pride and global luxury standards, MLU Events was founded on immovable core principles.
            </p>
          </div>
        </FadeIn>

        {/* 8 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mb-20 sm:mb-28">
          {pillars.map((item, idx) => (
            <FadeIn key={idx} delay={idx * 50}>
              <div className="h-full p-6 sm:p-8 rounded-2xl bg-[#FBF9F5] border border-[#E5D1B1]/70 hover:border-[#1C422D]/40 transition-all duration-300 flex flex-col justify-between group shadow-sm hover:shadow-md">
                <div>
                  <span className="text-xs font-mono font-bold text-[#1C422D] mb-3 block">
                    {item.icon}
                  </span>
                  <h3 className="font-display text-base sm:text-lg font-bold text-[#050708] mb-2.5 tracking-wider uppercase group-hover:text-[#1C422D] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#666666] leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Heritage Box */}
        <FadeIn>
          <div id="morals" className="max-w-3xl mx-auto text-center p-8 sm:p-12 rounded-3xl bg-[#F7F3EC] border border-[#E5D1B1] shadow-sm scroll-mt-24">
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-6 rounded-full bg-[#1C422D] p-3 shadow-md flex items-center justify-center">
              <div className="relative w-full h-full">
                <Image
                  src="/brand/mlu-logo-white.png"
                  alt="MLU Insignia"
                  fill
                  className="object-contain"
                  sizes="80px"
                />
              </div>
            </div>
            <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-[#050708] mb-4">
              The Geometric Imigongo Heritage
            </h3>
            <p className="text-sm sm:text-base text-[#555555] leading-relaxed font-light px-2">
              Each of the handmade elements in the MLU insignia was intentionally sculpted to reflect the ancient geometry of Rwandan Imigongo art, a modern tribute to our heritage translated for the world stage.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
