"use client";

import Image from "next/image";

interface EcosystemGridProps {
  onOpenBooking: () => void;
}

export default function EcosystemGrid({ onOpenBooking }: EcosystemGridProps) {
  const ecosystemItems = [
    {
      title: "Fashion & Imishanana Atelier",
      image: "/images/service-fashion.webp",
      description:
        "Handcrafted traditional Imishanana, couture bridal gowns, and bespoke groom's tuxedos.",
    },
    {
      title: "Cinema & Photography Studio",
      image: "/images/service-cinema.webp",
      description:
        "Cinema-grade film crews capturing the emotional crescendo of every event.",
    },
    {
      title: "Gourmet Outside Catering",
      image: "/images/service-catering.webp",
      description:
        "Michelin-inspired culinary experiences and sommelier beverage pairings.",
    },
    {
      title: "Architectural Venue Collection",
      image: "/images/service-venue.webp",
      description:
        "Curated MLU pavilions and hillside event spaces designed for intimate occasions.",
    },
  ];

  return (
    <section id="ecosystem" className="py-16 sm:py-24 md:py-44 bg-[#1C422D] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-20 md:mb-28">
          <h2 className="font-display text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-4 sm:mb-6">
            The Growing Ecosystem
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-white/50 font-light max-w-xl mx-auto leading-relaxed px-2">
            Expanding beyond event planning into a fully integrated luxury
            ecosystem. Everything under one trusted brand.
          </p>
        </div>

        {/* 4-Item Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mb-16 sm:mb-24">
          {ecosystemItems.map((item, idx) => (
            <div key={idx} className="group transition-transform duration-300 hover:-translate-y-1">
              <div className="relative aspect-[3/4] sm:aspect-[4/3] rounded-lg sm:rounded-xl overflow-hidden mb-3 sm:mb-6">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <h3 className="font-display text-sm sm:text-lg font-bold text-white mb-1 sm:mb-2 group-hover:text-[#E5D1B1] transition-colors leading-tight">
                {item.title}
              </h3>
              <p className="text-[10px] sm:text-xs text-white/50 leading-relaxed font-light hidden sm:block">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center px-2">
          <h4 className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4">
            Ready to create something unforgettable?
          </h4>
          <p className="text-xs sm:text-sm text-white/50 font-light mb-6 sm:mb-8">
            Connect with our creative directors in Kigali.
          </p>
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto text-xs sm:text-sm tracking-[0.1em] text-[#E5D1B1] border border-[#E5D1B1]/40 rounded-full px-10 py-3 sm:py-3.5 hover:bg-[#E5D1B1] hover:text-[#1C422D] transition-all duration-300 active:scale-95"
          >
            Start Your Consultation
          </button>
        </div>
      </div>
    </section>
  );
}
