"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";

interface HeroSliderProps {
  onOpenBooking: () => void;
}

interface Slide {
  video?: string;
  image?: string;
  poster?: string;
  alt: string;
}

const slides: Slide[] = [
  {
    video: "/videos/WEEDING EVENT I.mp4",
    poster: "/images/hero-wedding.webp",
    alt: "Luxury Wedding Celebration and Ceremony",
  },
  {
    video: "/videos/CAMON 20 LAUNCH.mp4",
    poster: "/images/hero-corporate.webp",
    alt: "Corporate Tech Launch and Summit",
  },
  {
    video: "/videos/WEEDING EVENT.mp4",
    poster: "/images/showcase-gusaba.webp",
    alt: "Bespoke Rwandan Wedding and Cultural Ceremony",
  },
  {
    video: "/videos/CAMON 19 LAUNCH.mp4",
    poster: "/images/showcase-gala.webp",
    alt: "Executive Gala and Continental Summit",
  },
  {
    image: "/images/SPARK 20 LAUNCH I.jpg",
    alt: "Executive Stagecraft, Concert Lighting and Truss Rig",
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
    const interval = setInterval(nextSlide, 7500);
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
      id="home"
      className="relative w-full h-[100svh] min-h-[580px] flex items-end overflow-hidden bg-[#050708]"
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
              alt={slide.alt}
              fill
              priority={index === 0}
              className="object-cover object-center"
              sizes="100vw"
            />
          )}

          {/* Clean media presentation: no dark gradients covering edges */}
        </div>
      ))}

      {/* Bottom Content Container */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12 pb-12 sm:pb-16 md:pb-20 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        {/* Bottom-Left: Refined Master Brand Title & CTAs */}
        <div className="max-w-2xl text-left">
          <h1 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-3 sm:mb-4 leading-[1.15] drop-shadow-[0_2px_16px_rgba(0,0,0,0.9)]">
            Exceptional Events. Thoughtfully Designed. Seamlessly Delivered.
          </h1>

          <p className="text-xs sm:text-sm md:text-base text-white font-medium max-w-xl leading-relaxed mb-6 sm:mb-8 drop-shadow-[0_1px_10px_rgba(0,0,0,0.9)]">
            Premium event planning and management for weddings, social celebrations and corporate experiences.
          </p>

          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            <button
              onClick={onOpenBooking}
              className="text-[11px] sm:text-xs tracking-[0.15em] font-semibold text-white bg-[#1C422D] border border-[#1C422D] rounded-full px-7 sm:px-8 py-3 sm:py-3.5 hover:bg-[#25573B] hover:border-[#25573B] transition-all duration-300 uppercase active:scale-95 shadow-lg shadow-black/20 cursor-pointer"
            >
              Plan Your Event
            </button>

            <a
              href="#work"
              className="text-[11px] sm:text-xs tracking-[0.15em] font-medium text-white border border-white/40 rounded-full px-7 sm:px-8 py-3 sm:py-3.5 hover:bg-white/10 hover:border-white transition-all duration-300 uppercase active:scale-95 backdrop-blur-sm inline-flex items-center justify-center cursor-pointer"
            >
              View Our Work
            </a>
          </div>
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
