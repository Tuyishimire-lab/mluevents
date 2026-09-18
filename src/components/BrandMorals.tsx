"use client";

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
    description: "Every event is distinctive and memorable.",
    icon: "04",
  },
  {
    title: "DETAIL-ORIENTED",
    description: "Perfection is built from thoughtful execution.",
    icon: "05",
  },
  {
    title: "INNOVATION",
    description: "Creative concepts and forward-thinking solutions.",
    icon: "06",
  },
  {
    title: "AUTHENTICITY",
    description: "True to client identity and cultural roots.",
    icon: "07",
  },
  {
    title: "SEAMLESS EXECUTION",
    description: "Flawless organization behind the scenes.",
    icon: "08",
  },
];

export default function BrandMorals() {
  return (
    <section id="why-mlu" className="py-24 sm:py-32 md:py-36 bg-white border-b border-[#E5D1B1]/30 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        {/* Section Header */}
        <FadeIn>
          <div className="text-center max-w-5xl xl:max-w-6xl mx-auto mb-16 sm:mb-24">
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#1C422D] font-semibold mb-3 block">
              Why MLU
            </span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-[40px] xl:text-[48px] font-bold text-[#050708] tracking-tight mb-4 leading-tight lg:whitespace-nowrap">
              What Defines Us.
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-[#555555] font-light leading-relaxed max-w-2xl mx-auto">
              Rooted in Rwandan pride and global luxury standards, MLU Events was founded on immovable core principles.
            </p>
          </div>
        </FadeIn>

        {/* 8 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
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
      </div>
    </section>
  );
}
