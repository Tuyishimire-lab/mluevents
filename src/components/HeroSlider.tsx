"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

interface HeroSliderProps {
  onOpenBooking: () => void;
}

const slides = [
  {
    title: "THE ART OF BESPOKE CELEBRATIONS",
    description:
      "Crafting extraordinary weddings, traditional ceremonies, and milestone celebrations with flawless precision.",
    image: "/images/hero-wedding.webp",
  },
  {
    title: "CONTINENTAL SUMMITS & CORPORATE GALAS",
    description:
      "World-class corporate gatherings, presidential forums, and executive galas with uncompromising alignment.",
    image: "/images/hero-corporate.webp",
  },
];

export default function HeroSlider({ onOpenBooking }: HeroSliderProps) {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextSlide, 7000);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  return (
    <section
      className="relative w-full h-[100svh] min-h-[500px] flex items-center justify-center overflow-hidden bg-[#050708]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="MLU Events Hero Showcase"
    >
      {/* Background Images */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            priority={index === 0}
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050708] via-[#050708]/40 to-black/50" />
        </div>
      ))}

      {/* Centered Content */}
      <div className="relative z-20 text-center flex flex-col items-center justify-center px-5 sm:px-6 w-full max-w-4xl">
        <h1 className="font-display text-[1.75rem] leading-[1.15] sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white tracking-tight mb-5 sm:mb-8">
          {slides[current].title}
        </h1>

        <p className="text-xs sm:text-sm md:text-base text-white/70 font-light max-w-md sm:max-w-xl leading-relaxed mb-8 sm:mb-12">
          {slides[current].description}
        </p>

        <button
          onClick={onOpenBooking}
          className="text-xs sm:text-sm tracking-[0.15em] text-white border border-white/50 rounded-full px-8 sm:px-10 py-3 sm:py-3.5 hover:bg-white hover:text-[#050708] transition-all duration-300 uppercase active:scale-95"
        >
          Discover More
        </button>
      </div>

      {/* Bottom progress dots */}
      <div className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 z-30 flex items-center gap-3">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`transition-all duration-500 rounded-full ${
              idx === current
                ? "w-10 h-1 bg-white"
                : "w-3 h-1 bg-white/30 hover:bg-white/50"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
