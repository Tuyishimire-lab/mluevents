"use client";

import FadeIn from "@/components/FadeIn";

const approachSteps = [
  {
    step: "01",
    title: "DISCOVER",
    description: "We understand your vision, needs, expectations and objectives.",
  },
  {
    step: "02",
    title: "DESIGN",
    description: "We develop an event concept around your occasion and identity.",
  },
  {
    step: "03",
    title: "PLAN",
    description: "We coordinate the details, logistics, timelines and partners.",
  },
  {
    step: "04",
    title: "EXECUTE",
    description: "We professionally manage the event from preparation to completion.",
  },
  {
    step: "05",
    title: "EXPERIENCE",
    description: "You enjoy the moments that matter while we manage the details.",
  },
];

export default function OurApproach() {
  return (
    <section id="approach" className="py-24 sm:py-32 md:py-36 bg-[#F7F3EC] border-b border-[#E5D1B1]/30 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        {/* Section Header */}
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24">
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#1C422D] font-semibold mb-3 block">
              Our Approach
            </span>
            <h2 className="font-display text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#050708] tracking-tight mb-4 leading-tight">
              From Vision to Experience.
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-[#555555] font-light leading-relaxed">
              A disciplined, thoughtful methodology ensuring that every celebration and corporate gathering is executed without compromise.
            </p>
          </div>
        </FadeIn>

        {/* 5 Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
          {approachSteps.map((item, idx) => (
            <FadeIn key={idx} delay={idx * 100}>
              <div className="h-full p-6 sm:p-7 rounded-2xl bg-white border border-[#E5D1B1]/70 hover:border-[#1C422D]/40 transition-all duration-300 flex flex-col justify-between group shadow-sm hover:shadow-md">
                <div>
                  <span className="font-display text-2xl sm:text-3xl font-bold text-[#1C422D] block mb-4 group-hover:scale-110 transition-transform origin-left">
                    {item.step}
                  </span>
                  <h3 className="font-display text-sm sm:text-base font-bold text-[#050708] mb-2.5 tracking-wider uppercase group-hover:text-[#1C422D] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#666666] font-light leading-relaxed">
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
