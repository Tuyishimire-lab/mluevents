import ClientShell from "@/components/ClientShell";
import MetricsStrip from "@/components/MetricsStrip";
import BrandMorals from "@/components/BrandMorals";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050708] text-[#E4E6E7]">
      <ClientShell>
        {/* These components are server-rendered HTML */}
        <MetricsStrip />
      </ClientShell>

      {/* Fully static server components */}
      <BrandMorals />

      <Footer />
    </main>
  );
}
