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
      {/* Background Media Layers with Lazy-Loading */}
      {slides.map((slide, index) => {
        const shouldLoadVideo = index === current || index === (current + 1) % slides.length;
        return (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === current ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
            }`}
          >
            {slide.video ? (
              shouldLoadVideo ? (
                <video
                  ref={(el) => {
                    videoRefs.current[index] = el;
                  }}
                  src={slide.video}
                  poster={slide.poster}
                  autoPlay={index === current}
                  loop
                  muted
                  playsInline
                  preload={index === current ? "auto" : "metadata"}
                  className="w-full h-full object-cover object-center"
                />
              ) : (
                slide.poster && (
                  <Image
                    src={slide.poster}
                    alt={slide.alt}
                    fill
                    className="object-cover object-center"
                    sizes="100vw"
                  />
                )
              )
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
          </div>
        );
      })}

      {/* Subtle top contrast gradient for navbar clarity and video watermark masking */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-28 sm:h-36 bg-gradient-to-b from-[#050708]/95 via-[#050708]/60 to-transparent z-10" />

      {/* Subtle bottom contrast gradient only for bottom text legibility */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-56 sm:h-64 bg-gradient-to-t from-black/85 via-black/40 to-transparent z-10" />

      {/* Bottom Content Container - Stacked full-width horizontal single lines */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12 pb-6 sm:pb-8 md:pb-10 flex flex-col gap-3.5 sm:gap-4">
        {/* Heading: One straight horizontal sentence */}
        <div className="w-full">
          <h1 className="font-display text-xl sm:text-2xl md:text-3xl lg:text-[34px] xl:text-[40px] font-bold text-white tracking-tight leading-tight drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)] whitespace-normal md:whitespace-nowrap">
            Exceptional Events. Thoughtfully Designed. Seamlessly Delivered.
          </h1>
        </div>

        {/* Descriptive Paragraph: One straight horizontal sentence */}
        <div className="w-full">
          <p className="text-xs sm:text-sm md:text-[15px] text-white/90 font-normal leading-relaxed drop-shadow-[0_1px_8px_rgba(0,0,0,0.95)] border-l-2 border-[#E5D1B1]/80 pl-3 sm:pl-3.5 whitespace-normal md:whitespace-nowrap">
            Premium event planning and management for weddings, social celebrations and corporate experiences.
          </p>
        </div>

        {/* Bottom Action Bar: CTAs on Left, Slide Dots on Right */}
        <div className="flex items-center justify-between gap-4 pt-2 border-t border-white/15">
          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            <button
              onClick={onOpenBooking}
              className="text-[11px] sm:text-xs tracking-[0.15em] font-semibold text-white bg-[#1C422D] border border-[#1C422D] rounded-full px-6 sm:px-7 py-2.5 sm:py-3 hover:bg-[#25573B] hover:border-[#25573B] transition-all duration-300 uppercase active:scale-95 shadow-lg shadow-black/20 cursor-pointer"
            >
              Plan Your Event
            </button>

            <a
              href="#work"
              className="text-[11px] sm:text-xs tracking-[0.15em] font-medium text-white border border-white/40 rounded-full px-6 sm:px-7 py-2.5 sm:py-3 hover:bg-white/10 hover:border-white transition-all duration-300 uppercase active:scale-95 backdrop-blur-sm inline-flex items-center justify-center cursor-pointer"
            >
              View Our Work
            </a>
          </div>

          {/* Clean Minimalist Progress Dashes */}
          <div className="flex items-center gap-2">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`transition-all duration-500 rounded-full cursor-pointer ${
                  idx === current
                    ? "w-7 sm:w-10 h-1 bg-white"
                    : "w-2 sm:w-2.5 h-1 bg-white/35 hover:bg-white/60"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
