"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface SplitShowcaseProps {
  onOpenBooking: () => void;
}

const weddingImages = [
  {
    src: "/images/showcase-gusaba.webp",
    alt: "Luxury Rwandan Wedding and Gusaba",
    caption: "Traditional Gusaba Ceremony",
  },
  {
    src: "/images/hero-wedding.webp",
    alt: "Bespoke White Wedding Reception",
    caption: "Grand Reception Styling",
  },
];

const corporateImages = [
  {
    src: "/images/SPARK 20 LAUNCH I.jpg",
    alt: "TECNO Spark 20 Launch Main Stage",
    caption: "TECNO Spark 20 Launch Stage",
  },
  {
    src: "/images/SPARK 20 LAUNCH II.jpg",
    alt: "TECNO Spark 20 Lighting and Acoustics",
    caption: "Concert Lighting & Truss Rig",
  },
  {
    src: "/images/SPARK 20 LAUNCH III.jpg",
    alt: "TECNO Spark 20 Brand Experience",
    caption: "Executive Brand Activation",
  },
  {
    src: "/images/showcase-gala.webp",
    alt: "Corporate Gala and Executive Summit",
    caption: "Continental Summit Forum",
  },
];

export default function SplitShowcase({ onOpenBooking }: SplitShowcaseProps) {
  const [currentWed, setCurrentWed] = useState(0);
  const [currentCorp, setCurrentCorp] = useState(0);

  // Subtle auto-rotation for corporate photos
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentCorp((prev) => (prev + 1) % corporateImages.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  // Subtle auto-rotation for wedding photos
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentWed((prev) => (prev + 1) % weddingImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

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
              forums and tech launches, we manage every facet of production with obsessive care.
            </p>
          </div>

          <div
            id="weddings"
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center scroll-mt-24"
          >
            {/* Wedding Image Frame */}
            <div className="relative aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden group shadow-2xl">
              {weddingImages.map((img, idx) => (
                <div
                  key={idx}
                  className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                    idx === currentWed ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                  }`}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-3 left-4 text-white text-xs font-medium tracking-wide drop-shadow">
                    {img.caption}
                  </div>
                </div>
              ))}

              {/* Minimal dots inside photo */}
              <div className="absolute bottom-3 right-4 z-20 flex items-center gap-1.5">
                {weddingImages.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentWed(idx)}
                    className={`transition-all duration-300 rounded-full ${
                      idx === currentWed ? "w-5 h-1 bg-white" : "w-1.5 h-1 bg-white/40"
                    }`}
                    aria-label={`View wedding image ${idx + 1}`}
                  />
                ))}
              </div>
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
                Executive Summits & Flagship Launches
              </h3>
              <p className="text-xs sm:text-sm text-white/60 font-light leading-relaxed mb-6 sm:mb-10">
                Kigali is Africa&apos;s premier summit destination. We equip
                leading technology enterprises (including the TECNO Spark and Camon launch series),
                multinationals, and embassies with executive production capabilities that command respect.
              </p>

              <button
                onClick={onOpenBooking}
                className="self-start w-full sm:w-auto text-center text-xs sm:text-sm tracking-[0.1em] text-[#E5D1B1] border border-[#E5D1B1]/40 rounded-full px-8 py-3 hover:bg-[#E5D1B1] hover:text-[#1C422D] transition-all duration-300 active:scale-95"
              >
                Reserve Corporate Production
              </button>
            </div>

            {/* Corporate Image Frame with Spark 20 Launch Photos */}
            <div className="relative aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden group order-1 lg:order-2 shadow-2xl">
              {corporateImages.map((img, idx) => (
                <div
                  key={idx}
                  className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                    idx === currentCorp ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                  }`}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-3 left-4 text-white text-xs font-medium tracking-wide drop-shadow">
                    {img.caption}
                  </div>
                </div>
              ))}

              {/* Minimal dots inside photo */}
              <div className="absolute bottom-3 right-4 z-20 flex items-center gap-1.5">
                {corporateImages.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentCorp(idx)}
                    className={`transition-all duration-300 rounded-full ${
                      idx === currentCorp ? "w-5 h-1 bg-white" : "w-1.5 h-1 bg-white/40"
                    }`}
                    aria-label={`View corporate image ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
