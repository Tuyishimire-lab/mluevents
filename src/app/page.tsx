import ClientShell from "@/components/ClientShell";
import Introduction from "@/components/Introduction";
import MetricsStrip from "@/components/MetricsStrip";
import AboutUs from "@/components/AboutUs";
import OurApproach from "@/components/OurApproach";
import BrandMorals from "@/components/BrandMorals";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-[#050708]">
      <ClientShell>
        {{
          introAndAbout: (
            <>
              <Introduction />
              <MetricsStrip />
              <AboutUs />
            </>
          ),
          approachAndMorals: (
            <>
              <OurApproach />
              <BrandMorals />
            </>
          ),
          testimonials: <Testimonials />,
        }}
      </ClientShell>
    </main>
  );
}
