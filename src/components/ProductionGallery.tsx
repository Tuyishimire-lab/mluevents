"use client";

import { useState } from "react";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import ProjectMediaModal, { PortfolioProjectData } from "@/components/ProjectMediaModal";

interface ProductionGalleryProps {
  onOpenBooking: () => void;
}

const portfolioProjects: PortfolioProjectData[] = [
  {
    title: "TECNO Camon 20 Launch",
    meta: "Product Launch | Kigali, Rwanda |",
    image: "/images/camon-20-launch.jpg",
    media: [
      {
        type: "video",
        src: "/videos/CAMON 20 LAUNCH.mp4",
        caption: "Flagship Concert Stagecraft & Product Reveal Reel",
        poster: "/images/camon-20-launch.jpg",
      },
    ],
  },
  {
    title: "Traditional Gusaba Ceremony",
    meta: "Traditional Ceremony | Kigali, Rwanda |",
    image: "/images/showcase-gusaba.webp",
    media: [
      {
        type: "video",
        src: "/videos/WEEDING EVENT.mp4",
        caption: "Cultural Celebration, Grand Entrance & Live Atmosphere",
        poster: "/images/showcase-gusaba.webp",
      },
      {
        type: "image",
        src: "/images/showcase-gusaba.webp",
        caption: "Art-Directed Cultural Stage & Imigongo Floral Decor",
      },
    ],
  },
  {
    title: "TECNO Camon 19 Launch",
    meta: "Stage & Lighting | Kigali, Rwanda |",
    image: "/images/camon-19-stage.jpg",
    media: [
      {
        type: "video",
        src: "/videos/CAMON 19 LAUNCH.mp4",
        caption: "Acoustic Engineering & Dynamic Concert Truss Rig",
        poster: "/images/camon-19-stage.jpg",
      },
    ],
  },
  {
    title: "Bespoke Wedding Reception",
    meta: "Luxury Wedding | Kigali, Rwanda |",
    image: "/images/wedding-reception.jpg",
    media: [
      {
        type: "video",
        src: "/videos/WEEDING EVENT I.mp4",
        caption: "Couture Matrimonial Gala & Grand Reception",
        poster: "/images/wedding-reception.jpg",
      },
    ],
  },
  {
    title: "TECNO Spark 20 Launch",
    meta: "Brand Activation | Kigali, Rwanda |",
    image: "/images/SPARK 20 LAUNCH I.jpg",
    media: [
      {
        type: "image",
        src: "/images/SPARK 20 LAUNCH I.jpg",
        caption: "TECNO Spark 20 Product Reveal & Football Experience Booth",
      },
      {
        type: "image",
        src: "/images/SPARK 20 LAUNCH II.jpg",
        caption: "TECNO Spark 20 Stage Lighting, Seating & Tech Showcase",
      },
      {
        type: "image",
        src: "/images/SPARK 20 LAUNCH III.jpg",
        caption: "Auditorium Stagecraft, Stop At Nothing Branding & Panel Discussion",
      },
    ],
  },
  {
    title: "Continental Summit Gala",
    meta: "Executive Summit | Kigali, Rwanda |",
    image: "/images/showcase-gala.webp",
    media: [
      {
        type: "image",
        src: "/images/showcase-gala.webp",
        caption: "Presidential Gala Reception at Kigali Convention Centre",
      },
      {
        type: "image",
        src: "/images/hero-corporate.webp",
        caption: "International Delegation Stage & Lighting Capabilities",
      },
    ],
  },
];

// Aggregated Showcase for "View All Work" button
const allWorkProject: PortfolioProjectData = {
  title: "MLU Event Highlights & Video Reels",
  meta: "Featured Productions | Kigali, Rwanda",
  image: "/images/camon-20-launch.jpg",
  media: [
    {
      type: "video",
      src: "/videos/CAMON 20 LAUNCH.mp4",
      caption: "TECNO Camon 20 Launch: Concert Stagecraft & Product Reveal Reel",
      poster: "/images/camon-20-launch.jpg",
    },
    {
      type: "video",
      src: "/videos/CAMON 19 LAUNCH.mp4",
      caption: "TECNO Camon 19 Launch: Keynote & Concert Truss Production",
      poster: "/images/camon-19-stage.jpg",
    },
    {
      type: "video",
      src: "/videos/WEEDING EVENT.mp4",
      caption: "Traditional Gusaba Ceremony & Cultural Gala Reel",
      poster: "/images/showcase-gusaba.webp",
    },
    {
      type: "video",
      src: "/videos/WEEDING EVENT I.mp4",
      caption: "Luxury Matrimonial Gala & Wedding Reception Reel",
      poster: "/images/wedding-reception.jpg",
    },
    {
      type: "image",
      src: "/images/SPARK 20 LAUNCH I.jpg",
      caption: "TECNO Spark 20 Launch Experience & Stage Setup",
    },
    {
      type: "image",
      src: "/images/showcase-gala.webp",
      caption: "Continental Summit Gala at Kigali Convention Centre",
    },
  ],
};

export default function ProductionGallery({ onOpenBooking }: ProductionGalleryProps) {
  const [activeModalProject, setActiveModalProject] = useState<PortfolioProjectData | null>(null);

  return (
    <>
      <section id="work" className="py-24 sm:py-32 md:py-36 bg-[#050708] border-b border-white/10 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
          {/* Header */}
          <FadeIn>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20 gap-6">
              <div>
                <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#E5D1B1] font-semibold mb-3 block">
                  Our Work
                </span>
                <h2 className="font-display text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
                  Bringing Ideas to Life.
                </h2>
              </div>
              <p className="text-sm sm:text-base text-white/70 font-light max-w-md leading-relaxed">
                A showcase of concept, craft and flawless execution across Rwanda.
              </p>
            </div>
          </FadeIn>

          {/* 6 Completed Events Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {portfolioProjects.map((item, idx) => (
              <FadeIn key={idx} delay={idx * 100}>
                <div
                  onClick={() => setActiveModalProject(item)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === "Enter" && setActiveModalProject(item)}
                  className="group rounded-2xl overflow-hidden bg-white/[0.02] border border-white/10 hover:border-[#E5D1B1]/50 transition-all duration-500 flex flex-col h-full shadow-lg cursor-pointer"
                  title="Click to view event videos and photos"
                >
                  {/* Image: clean, sharp and bright without dark gradient */}
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>

                  {/* Body: sleek, minimalist, visual-first */}
                  <div className="p-5 sm:p-6 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-[#E5D1B1] font-semibold mb-1 block">
                        {item.meta}
                      </span>
                      <h3 className="font-display text-base sm:text-lg font-bold text-white group-hover:text-[#E5D1B1] transition-colors leading-snug">
                        {item.title}
                      </h3>
                    </div>
                    <div className="w-8 h-8 rounded-full border border-white/15 group-hover:border-[#E5D1B1] flex items-center justify-center text-white/50 group-hover:text-[#E5D1B1] transition-colors shrink-0 ml-3">
                      <svg className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Bottom CTAs: Plan Your Event (Booking Form) & View All Work (Media Showcase) */}
          <FadeIn>
            <div className="mt-14 sm:mt-18 text-center flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={onOpenBooking}
                className="text-xs sm:text-sm tracking-[0.15em] text-white bg-[#1C422D] border border-[#1C422D] font-semibold rounded-full px-9 py-3.5 hover:bg-[#25573B] hover:border-[#25573B] transition-all duration-300 uppercase active:scale-95 shadow-lg shadow-[#1C422D]/20 cursor-pointer"
              >
                Plan Your Event
              </button>
              <button
                onClick={() => setActiveModalProject(allWorkProject)}
                className="text-xs sm:text-sm tracking-[0.15em] text-[#E5D1B1] border border-[#E5D1B1]/40 rounded-full px-9 py-3.5 hover:bg-[#E5D1B1] hover:text-[#050708] transition-all duration-300 uppercase active:scale-95 cursor-pointer font-medium flex items-center gap-2"
              >
                <span>View All Work</span>
                <span className="text-xs">▶</span>
              </button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Interactive Project Video & Photo Modal */}
      <ProjectMediaModal
        project={activeModalProject}
        isOpen={!!activeModalProject}
        onClose={() => setActiveModalProject(null)}
        onOpenBooking={onOpenBooking}
      />
    </>
  );
}
