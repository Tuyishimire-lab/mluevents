"use client";

import FadeIn from "@/components/FadeIn";

const testimonials = [
  {
    quote:
      "MLU Events took our flagship product launch to a level of excellence we hadn't seen before in Kigali. The stage engineering, lighting, and timeline execution were flawless.",
    author: "Enterprise Client",
    role: "Flagship Product Launch",
    location: "Kigali Convention Centre",
  },
  {
    quote:
      "Our traditional Gusaba and wedding celebration were executed with such genuine care and deep respect for Rwandan heritage. Every single guest was blown away by the elegance.",
    author: "Private Couple",
    role: "Traditional Gusaba & Wedding Gala",
    location: "Kigali, Rwanda",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 sm:py-32 md:py-36 bg-[#1C422D] border-b border-black/10 scroll-mt-20 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        {/* Section Header */}
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#E5D1B1] font-semibold mb-3 block">
              Testimonials
            </span>
            <h2 className="font-display text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-4 leading-tight">
              Trusted to Deliver.
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-white/80 font-light leading-relaxed">
              Real experiences from the people and organisations we&apos;ve served across corporate forums and bespoke celebrations.
            </p>
          </div>
        </FadeIn>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 max-w-5xl mx-auto">
          {testimonials.map((item, idx) => (
            <FadeIn key={idx} delay={idx * 150}>
              <div className="h-full p-8 sm:p-10 rounded-2xl bg-white/[0.07] border border-[#E5D1B1]/30 hover:border-[#E5D1B1]/60 transition-all duration-300 flex flex-col justify-between shadow-xl backdrop-blur-sm">
                <div>
                  <div className="text-[#E5D1B1] mb-6">
                    <svg className="w-8 h-8 opacity-90" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>
                  <p className="text-sm sm:text-base text-white/95 font-light leading-relaxed italic mb-8">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>

                <div className="pt-6 border-t border-white/15">
                  <h4 className="font-display text-base font-bold text-white">
                    {item.author}
                  </h4>
                  <p className="text-xs text-[#E5D1B1] font-medium tracking-wide mt-1">
                    {item.role} • <span className="text-white/60">{item.location}</span>
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
