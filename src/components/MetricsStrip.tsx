import FadeIn from "@/components/FadeIn";

export default function MetricsStrip() {
  const metrics = [
    { value: "100%", label: "Seamless Execution" },
    { value: "02", label: "Active Divisions" },
    { value: "04", label: "Ecosystem Expansions" },
    { value: "KGL", label: "Kigali Based" },
  ];

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-[#F7F3EC] border-y border-[#E5D1B1]/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 md:gap-16">
          {metrics.map((m, idx) => (
            <FadeIn key={idx} delay={idx * 100}>
              <div className="text-center">
                <span className="font-display text-3xl sm:text-5xl md:text-6xl font-bold text-[#1C422D] tracking-tight block">
                  {m.value}
                </span>
                <span className="text-[11px] sm:text-xs tracking-[0.18em] text-[#444444] uppercase mt-2 sm:mt-3 font-medium block">
                  {m.label}
                </span>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
