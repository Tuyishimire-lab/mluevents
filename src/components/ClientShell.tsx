"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSlider from "@/components/HeroSlider";
import SplitShowcase from "@/components/SplitShowcase";
import ProductionGallery from "@/components/ProductionGallery";
import WhoWeServe from "@/components/WhoWeServe";
import EcosystemGrid from "@/components/EcosystemGrid";
import PartnerShowcase from "@/components/PartnerShowcase";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import FloatingContactPill from "@/components/FloatingContactPill";

export default function ClientShell({
  children,
}: {
  children: {
    introAndAbout: React.ReactNode;
    approachAndMorals: React.ReactNode;
    testimonials: React.ReactNode;
  };
}) {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <>
      <Navbar onOpenBooking={() => setIsBookingOpen(true)} />
      
      {/* 01. Hero */}
      <HeroSlider onOpenBooking={() => setIsBookingOpen(true)} />

      {/* 01. Introduction, Metrics & 02. About Us */}
      {children.introAndAbout}

      {/* 03. Our Services (Social & Corporate with Dropdowns) */}
      <SplitShowcase onOpenBooking={() => setIsBookingOpen(true)} />

      {/* 04. Our Work (6 Projects) */}
      <ProductionGallery onOpenBooking={() => setIsBookingOpen(true)} />

      {/* 05. Our Approach & 06. Why MLU */}
      {children.approachAndMorals}

      {/* 07. Who We Serve */}
      <WhoWeServe onOpenBooking={() => setIsBookingOpen(true)} />

      {/* 08. Our Growth (In Development) */}
      <EcosystemGrid />

      {/* 09. Testimonials */}
      {children.testimonials}

      {/* 10. Partner Showcase */}
      <PartnerShowcase onOpenBooking={() => setIsBookingOpen(true)} />

      {/* 11. Final CTA */}
      <FinalCTA onOpenBooking={() => setIsBookingOpen(true)} />

      {/* 12. Footer */}
      <Footer onOpenBooking={() => setIsBookingOpen(true)} />

      {/* 10. Contact / Inquiry Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />

      {/* Floating Quick Action Concierge Pill */}
      <FloatingContactPill onOpenBooking={() => setIsBookingOpen(true)} />
    </>
  );
}
