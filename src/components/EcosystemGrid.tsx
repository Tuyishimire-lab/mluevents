"use client";

import Image from "next/image";
import FadeIn from "@/components/FadeIn";

const growthItems = [
  {
    title: "FASHION",
    status: "In Development",
    description: "Traditional and contemporary wedding fashion.",
    image: "/images/growth-fashion.png",
  },
  {
    title: "PHOTO & VIDEO STUDIO",
    status: "In Development",
    description: "Professional event photography and videography.",
    image: "/images/growth-photography.jpg",
  },
  {
    title: "OUTSIDE CATERING",
    status: "In Development",
    description: "Catering solutions for private and corporate occasions.",
    image: "/images/growth-catering.png",
  },
  {
    title: "VENUE RENTAL",
    status: "In Development",
    description: "Selected venue solutions for different events and occasions.",
    image: "/images/growth-venue.png",
  },
];

export default function EcosystemGrid() {
  return (
    <section id="growth" className="py-24 sm:py-32 md:py-36 bg-[#F7F3EC] border-b border-[#E5D1B1]/30 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        {/* Section Header */}
        <FadeIn>
          <div className="text-center max-w-5xl xl:max-w-6xl mx-auto mb-16 sm:mb-24">
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#1C422D] font-semibold mb-3 block">
              Our Growth
            </span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-[40px] xl:text-[48px] font-bold text-[#050708] tracking-tight mb-4 leading-tight lg:whitespace-nowrap">
              Building a Complete Events Experience.
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-[#555555] font-light leading-relaxed max-w-2xl mx-auto">
              Progressively expanding to bring complementary services under one trusted brand.
            </p>
          </div>
        </FadeIn>

        {/* 4-Item Grid with In Development badges */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {growthItems.map((item, idx) => (
            <FadeIn key={idx} delay={idx * 100}>
              <div className="group rounded-2xl overflow-hidden bg-white border border-[#E5D1B1]/70 hover:border-[#1C422D]/40 transition-all duration-300 flex flex-col h-full shadow-sm hover:shadow-md">
                {/* Image */}
                <div className="relative aspect-square overflow-hidden bg-[#0A0D0B]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>

                {/* Body: Status Badge, Title and small description */}
                <div className="p-5 sm:p-6 flex flex-col justify-between flex-grow">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="inline-flex items-center gap-1.5 bg-[#1C422D] text-white text-[9px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full shadow-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#E5D1B1] animate-pulse" />
                        {item.status}
                      </span>
                    </div>
                    <h3 className="font-display text-sm sm:text-base font-bold text-[#050708] group-hover:text-[#1C422D] transition-colors tracking-wide mb-1.5">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#666666] font-light leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
