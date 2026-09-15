"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSlider from "@/components/HeroSlider";
import SplitShowcase from "@/components/SplitShowcase";
import ProductionGallery from "@/components/ProductionGallery";
import EcosystemGrid from "@/components/EcosystemGrid";
import BookingModal from "@/components/BookingModal";

/**
 * Thin client wrapper that only manages the booking modal state.
 * All non-interactive components (MetricsStrip, BrandMorals, Footer)
 * are rendered by the parent Server Component page.tsx.
 */
export default function ClientShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <>
      <Navbar onOpenBooking={() => setIsBookingOpen(true)} />
      <HeroSlider onOpenBooking={() => setIsBookingOpen(true)} />

      {/* Server-rendered children (MetricsStrip, etc.) injected here */}
      {children}

      <SplitShowcase onOpenBooking={() => setIsBookingOpen(true)} />

      <ProductionGallery onOpenBooking={() => setIsBookingOpen(true)} />

      <EcosystemGrid onOpenBooking={() => setIsBookingOpen(true)} />

      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
    </>
  );
}
