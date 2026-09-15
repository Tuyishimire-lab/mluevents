"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export interface ProjectMediaItem {
  type: "video" | "image";
  src: string;
  caption: string;
  poster?: string;
}

export interface PortfolioProjectData {
  title: string;
  meta: string;
  image: string;
  media: ProjectMediaItem[];
}

interface ProjectMediaModalProps {
  project: PortfolioProjectData | null;
  isOpen: boolean;
  onClose: () => void;
  onOpenBooking: () => void;
}

export default function ProjectMediaModal({
  project,
  isOpen,
  onClose,
  onOpenBooking,
}: ProjectMediaModalProps) {
  const [activeMediaIndex, setActiveMediaIndex] = useState(0);

  // Reset to first media item whenever a new project is opened
  useEffect(() => {
    if (isOpen) {
      setActiveMediaIndex(0);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen, project]);

  // Handle ESC and Arrow keys
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (!project) return;
      if (e.key === "ArrowRight") {
        setActiveMediaIndex((prev) => (prev + 1) % project.media.length);
      }
      if (e.key === "ArrowLeft") {
        setActiveMediaIndex((prev) => (prev - 1 + project.media.length) % project.media.length);
      }
    };
    if (isOpen) window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose, project]);

  if (!isOpen || !project) return null;

  const currentItem = project.media[activeMediaIndex] || {
    type: "image",
    src: project.image,
    caption: project.title,
  };

  const handlePrev = () => {
    setActiveMediaIndex((prev) => (prev - 1 + project.media.length) % project.media.length);
  };

  const handleNext = () => {
    setActiveMediaIndex((prev) => (prev + 1) % project.media.length);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/95 backdrop-blur-lg animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full max-w-6xl h-[92vh] sm:h-[94vh] bg-[#050708] border border-white/15 rounded-3xl overflow-hidden shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Floating Top Header Badge */}
        <div className="absolute top-3 left-4 sm:top-5 sm:left-6 z-30 pointer-events-auto bg-black/75 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-white/15 shadow-xl max-w-[80%] sm:max-w-md">
          <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-[#E5D1B1] font-semibold block mb-0.5">
            {project.meta}
          </span>
          <h3 className="font-display text-sm sm:text-lg font-bold text-white leading-tight truncate">
            {project.title}
          </h3>
        </div>

        {/* Floating Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-4 sm:top-5 sm:right-6 z-40 w-10 h-10 rounded-full bg-black/75 backdrop-blur-md hover:bg-white/20 text-white/90 hover:text-white border border-white/15 flex items-center justify-center transition-all cursor-pointer shadow-xl"
          aria-label="Close media preview"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Main Media Viewport: Expansive & Visual-First */}
        <div className="relative flex-grow w-full h-full bg-black flex items-center justify-center overflow-hidden">
          {currentItem.type === "video" ? (
            <video
              key={currentItem.src}
              src={currentItem.src}
              controls
              autoPlay
              playsInline
              className="w-full h-full object-contain"
            />
          ) : (
            <div className="relative w-full h-full">
              <Image
                src={currentItem.src}
                alt={currentItem.caption || project.title}
                fill
                className="object-contain"
                sizes="(max-width: 1400px) 100vw, 1400px"
                priority
              />
            </div>
          )}

          {/* Navigation Arrows for Multi-Item Projects */}
          {project.media.length > 1 && (
            <>
              <button
                onClick={handlePrev}
                className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/65 backdrop-blur-md text-white/85 hover:text-white hover:bg-black/90 border border-white/20 flex items-center justify-center transition-all cursor-pointer shadow-xl group"
                aria-label="Previous item"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6 transition-transform group-hover:-translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={handleNext}
                className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/65 backdrop-blur-md text-white/85 hover:text-white hover:bg-black/90 border border-white/20 flex items-center justify-center transition-all cursor-pointer shadow-xl group"
                aria-label="Next item"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}

          {/* Floating Caption Badge */}
          {currentItem.caption && (
            <div className="absolute bottom-3 left-4 sm:left-6 z-20 bg-black/80 backdrop-blur-md px-4 py-2 rounded-full border border-white/15 text-[11px] sm:text-xs text-white/95 font-medium shadow-lg max-w-[85%] truncate">
              {currentItem.caption}
            </div>
          )}
        </div>

        {/* Bottom Control & Thumbnail Reel */}
        <div className="px-4 sm:px-6 py-3.5 bg-[#050708] border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 shrink-0">
          {/* Media Switcher Thumbnails: Zero Vertical Scrollbar */}
          <div className="flex items-center gap-2.5 overflow-x-auto overflow-y-hidden max-w-full py-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            {project.media.map((item, idx) => (
              <button
                key={idx}
                onClick={() => setActiveMediaIndex(idx)}
                className={`relative w-16 h-11 sm:w-20 sm:h-13 rounded-xl overflow-hidden border-2 transition-all shrink-0 cursor-pointer shadow-sm ${
                  idx === activeMediaIndex
                    ? "border-[#E5D1B1] scale-105 shadow-md shadow-[#E5D1B1]/30 opacity-100"
                    : "border-white/15 opacity-55 hover:opacity-90 hover:border-white/40"
                }`}
                aria-label={`View media ${idx + 1}`}
              >
                {item.type === "video" ? (
                  <div className="w-full h-full bg-black/60 flex items-center justify-center relative">
                    <Image
                      src={item.poster || project.image}
                      alt={item.caption}
                      fill
                      className="object-cover opacity-60"
                      sizes="80px"
                    />
                    <div className="relative z-10 w-5 h-5 rounded-full bg-[#1C422D] flex items-center justify-center text-white text-[9px] shadow-sm">
                      ▶
                    </div>
                  </div>
                ) : (
                  <Image
                    src={item.src}
                    alt={item.caption}
                    fill
                    className="object-cover"
                    sizes="80px"
                  />
                )}
              </button>
            ))}
          </div>

          {/* Action Button: Direct to Booking Form */}
          <div className="w-full sm:w-auto flex justify-end shrink-0">
            <button
              onClick={() => {
                onClose();
                onOpenBooking();
              }}
              className="w-full sm:w-auto text-xs sm:text-sm tracking-[0.12em] font-semibold text-white bg-[#1C422D] border border-[#1C422D] rounded-full px-7 py-2.5 sm:py-3 hover:bg-[#25573B] transition-all uppercase active:scale-95 cursor-pointer shadow-lg shadow-[#1C422D]/20"
            >
              Plan An Event Like This
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
