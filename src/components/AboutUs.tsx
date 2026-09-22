"use client";

import FadeIn from "@/components/FadeIn";

export default function AboutUs() {
  return (
    <section id="about" className="py-24 sm:py-32 md:py-36 bg-white border-b border-[#E5D1B1]/30 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        {/* Section Header */}
        <FadeIn>
          <div className="max-w-3xl mb-12 sm:mb-16">
            <h2 className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#1C422D] font-semibold mb-4 sm:mb-6 block">
              About Us
            </h2>
            <p className="text-base sm:text-lg text-[#444444] font-light leading-relaxed">
              MLU Events Ltd is an event planning and management company dedicated to designing and delivering premium weddings, social celebrations and corporate events.
              We work closely with each client to understand their vision and translate it into an event that reflects their story, their brand and their standards.
              Built on quality and trust, MLU is continuously expanding its capabilities toward a fully integrated events experience.
            </p>
          </div>
        </FadeIn>

        {/* Vision & Mission Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          {/* Vision */}
          <FadeIn delay={100}>
            <div className="h-full p-8 sm:p-10 md:p-12 rounded-2xl bg-[#FBF9F5] border border-[#E5D1B1]/60 hover:border-[#1C422D]/40 transition-all duration-300 flex flex-col justify-between group shadow-sm">
              <div>
                <div className="w-12 h-12 rounded-full bg-[#1C422D] flex items-center justify-center text-white mb-6 sm:mb-8 shadow-sm">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-[#1C422D] font-semibold mb-2 block">
                  Our Vision
                </span>
                <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-[#050708] mb-4 leading-tight group-hover:text-[#1C422D] transition-colors">
                  Setting the Standard for Exceptional Events.
                </h3>
                <p className="text-sm sm:text-base text-[#555555] font-light leading-relaxed">
                  To become the leading premium event planning company in the region, recognized as the trusted name behind the most memorable weddings, social gatherings and corporate experiences.
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Mission */}
          <FadeIn delay={200}>
            <div className="h-full p-8 sm:p-10 md:p-12 rounded-2xl bg-[#FBF9F5] border border-[#E5D1B1]/60 hover:border-[#1C422D]/40 transition-all duration-300 flex flex-col justify-between group shadow-sm">
              <div>
                <div className="w-12 h-12 rounded-full bg-[#1C422D] flex items-center justify-center text-white mb-6 sm:mb-8 shadow-sm">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-[#1C422D] font-semibold mb-2 block">
                  Our Mission
                </span>
                <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-[#050708] mb-4 leading-tight group-hover:text-[#1C422D] transition-colors">
                  Turning Vision Into Experience.
                </h3>
                <p className="text-sm sm:text-base text-[#555555] font-light leading-relaxed">
                  To deliver premium, thoughtfully planned events that exceed expectations combining professionalism, creativity and attention to detail at every stage, while continuously expanding the services offered under the MLU Events brand.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
