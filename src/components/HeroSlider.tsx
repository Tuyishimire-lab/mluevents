"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";

interface HeroSliderProps {
  onOpenBooking: () => void;
}

interface Slide {
  title: string;
  description: string;
  video?: string;
  image?: string;
  poster?: string;
}

const slides: Slide[] = [
  {
    title: "THE ART OF BESPOKE CELEBRATIONS",
    description:
      "Crafting extraordinary weddings, traditional Gusaba ceremonies, and milestone celebrations with flawless precision.",
    video: "/videos/WEEDING EVENT I.mp4",
    poster: "/images/hero-wedding.webp",
  },
  {
    title: "FLAGSHIP PRODUCT LAUNCHES & TECH SUMMITS",
    description:
      "Full-scale experiential staging, dynamic audiovisuals, and world-class production for high-profile brand reveals.",
    video: "/videos/CAMON 20 LAUNCH.mp4",
    poster: "/images/hero-corporate.webp",
  },
  {
    title: "TIMELESS ROMANCE & ELEVATED LUXURY",
    description:
      "Deeply personal, culturally rooted Rwandan celebrations interweaving modern luxury with sacred traditions.",
    video: "/videos/WEEDING EVENT.mp4",
    poster: "/images/showcase-gusaba.webp",
  },
  {
    title: "CONTINENTAL SUMMITS & PREMIER GALAS",
    description:
      "Equipping multinationals, corporations, and embassies with executive production capabilities that command respect.",
    video: "/videos/CAMON 19 LAUNCH.mp4",
    poster: "/images/showcase-gala.webp",
  },
  {
    title: "EXECUTIVE STAGE DESIGN & LIGHTING",
    description:
      "Precision concert-grade lighting, acoustic engineering, and high-impact stagecraft for premier enterprise showcases.",
    image: "/images/SPARK 20 LAUNCH I.jpg",
  },
];

export default function HeroSlider({ onOpenBooking }: HeroSliderProps) {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextSlide, 7000);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  useEffect(() => {
    videoRefs.current.forEach((vid, idx) => {
      if (!vid) return;
      if (idx === current) {
        vid.currentTime = 0;
        vid.play().catch(() => {});
      } else {
        vid.pause();
      }
    });
  }, [current]);

  return (
    <section
      className="relative w-full h-[100svh] min-h-[560px] flex items-end overflow-hidden bg-[#050708]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="MLU Events Hero Showcase"
    >
      {/* Background Media Layers */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
          }`}
        >
          {slide.video ? (
            <video
              ref={(el) => {
                videoRefs.current[index] = el;
              }}
              src={slide.video}
              poster={slide.poster}
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              className="w-full h-full object-cover object-center"
            />
          ) : (
            <Image
              src={slide.image || slide.poster || "/images/hero-corporate.webp"}
              alt={slide.title}
              fill
              priority={index === 0}
              className="object-cover object-center"
              sizes="100vw"
            />
          )}

          {/* Cinematic subtle gradients: open and clear in the middle, gentle shade in bottom-left for text */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#050708]/90 via-[#050708]/15 to-black/30 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050708]/85 via-transparent to-transparent pointer-events-none" />
        </div>
      ))}

      {/* Bottom Content Container */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12 pb-10 sm:pb-14 md:pb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        {/* Bottom-Left: Refined, Non-Obtrusive Title & CTA */}
        <div className="max-w-lg text-left">
          <h1 className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white tracking-tight mb-2 sm:mb-2.5 leading-tight drop-shadow-md">
            {slides[current].title}
          </h1>

          <p className="text-xs sm:text-sm text-white/80 font-light max-w-md leading-relaxed mb-4 sm:mb-5 drop-shadow">
            {slides[current].description}
          </p>

          <button
            onClick={onOpenBooking}
            className="text-[11px] sm:text-xs tracking-[0.15em] text-white border border-white/50 rounded-full px-6 sm:px-7 py-2.5 sm:py-3 hover:bg-white hover:text-[#050708] transition-all duration-300 uppercase active:scale-95 backdrop-blur-sm"
          >
            Discover More
          </button>
        </div>

        {/* Bottom-Right: Clean Minimalist Progress Dashes */}
        <div className="flex items-center gap-2 self-start md:self-end pb-1 sm:pb-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`transition-all duration-500 rounded-full ${
                idx === current
                  ? "w-8 sm:w-10 h-1 bg-white"
                  : "w-2.5 sm:w-3 h-1 bg-white/35 hover:bg-white/60"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
