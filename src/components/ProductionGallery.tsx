import Image from "next/image";

interface ProductionGalleryProps {
  onOpenBooking: () => void;
}

const portfolioItems = [
  {
    title: "TECNO Spark 20 Launch",
    category: "Corporate Tech Launch",
    image: "/images/SPARK 20 LAUNCH I.jpg",
    span: "col-span-1 md:col-span-2 lg:col-span-2",
  },
  {
    title: "Traditional Gusaba Ceremony",
    category: "Weddings & Social",
    image: "/images/showcase-gusaba.webp",
    span: "col-span-1 md:col-span-1 lg:col-span-1",
  },
  {
    title: "Stagecraft & Concert Lighting",
    category: "Corporate Production",
    image: "/images/SPARK 20 LAUNCH II.jpg",
    span: "col-span-1 md:col-span-1 lg:col-span-1",
  },
  {
    title: "Bespoke Wedding Reception",
    category: "Weddings & Celebrations",
    image: "/images/hero-wedding.webp",
    span: "col-span-1 md:col-span-1 lg:col-span-1",
  },
  {
    title: "Interactive Brand Activation",
    category: "TECNO Spark 20 Experience",
    image: "/images/SPARK 20 LAUNCH III.jpg",
    span: "col-span-1 md:col-span-1 lg:col-span-1",
  },
  {
    title: "Executive Summits & Galas",
    category: "Continental Business Forums",
    image: "/images/showcase-gala.webp",
    span: "col-span-1 md:col-span-2 lg:col-span-2",
  },
];

export default function ProductionGallery({ onOpenBooking }: ProductionGalleryProps) {
  return (
    <section id="portfolio" className="py-20 sm:py-28 md:py-36 bg-[#050708] border-t border-white/5 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#E5D1B1] font-semibold mb-3 block">
              Portfolio & Visual Record
            </span>
            <h2 className="font-display text-2xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
              Selected Productions
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-white/60 font-light max-w-md leading-relaxed">
            A glimpse into our recent executions from high-profile technology launches and
            continental forums to intimate, culturally rooted Rwandan weddings.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 sm:gap-6">
          {portfolioItems.map((item, idx) => (
            <div
              key={idx}
              className={`relative aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden group bg-white/5 border border-white/10 ${item.span}`}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 right-4 z-10">
                <span className="text-[10px] uppercase tracking-wider text-[#E5D1B1] font-semibold mb-1 block">
                  {item.category}
                </span>
                <h3 className="font-display text-sm sm:text-base md:text-lg font-bold text-white">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 sm:mt-16 text-center">
          <button
            onClick={onOpenBooking}
            className="text-xs sm:text-sm tracking-[0.15em] text-[#E5D1B1] border border-[#E5D1B1]/40 rounded-full px-8 py-3.5 hover:bg-[#E5D1B1] hover:text-[#050708] transition-all duration-300 uppercase active:scale-95"
          >
            Inquire For Your Event
          </button>
        </div>
      </div>
    </section>
  );
}
