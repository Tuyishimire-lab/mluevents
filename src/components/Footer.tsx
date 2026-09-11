import Image from "next/image";

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#E5D1B1] py-12 sm:py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        {/* Row 1: Logo + Contact */}
        <div className="flex flex-col items-center gap-6 sm:gap-8 mb-8 sm:mb-12 md:flex-row md:justify-between">
          <div className="flex items-center gap-3">
            <div className="relative w-8 h-8 sm:w-9 sm:h-9">
              <Image
                src="/brand/mlu-logo-gold.png"
                alt="MLU Events"
                fill
                className="object-contain"
                sizes="36px"
              />
            </div>
            <span className="font-display text-base sm:text-lg font-bold tracking-[0.2em] text-[#1C422D] uppercase">
              MLU Events
            </span>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-8 text-xs text-[#1C422D]/60">
            <a href="tel:+250787742477" className="hover:text-[#1C422D] transition-colors">
              +250 787 742 477
            </a>
            <a href="mailto:mlueventsrw@gmail.com" className="hover:text-[#1C422D] transition-colors">
              mlueventsrw@gmail.com
            </a>
            <span>Kigali, Rwanda</span>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-[#1C422D]/15 mb-8 sm:mb-10" />

        {/* Row 2: Links + Social */}
        <div className="flex flex-col items-center gap-5 sm:gap-6 mb-8 sm:mb-10 sm:flex-row sm:justify-between">
          <div className="flex items-center gap-4 sm:gap-6 text-[11px] sm:text-xs text-[#1C422D]/60">
            <span className="hover:text-[#1C422D] cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-[#1C422D] cursor-pointer transition-colors">Terms</span>
            <span className="hover:text-[#1C422D] cursor-pointer transition-colors">Contact</span>
          </div>
          <div className="flex items-center gap-3 sm:gap-4">
            <span className="text-[10px] sm:text-xs tracking-[0.15em] text-[#1C422D]/50 uppercase">Follow Us</span>
            <a href="https://instagram.com/mluevents" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full border border-[#1C422D]/20 flex items-center justify-center text-[#1C422D]/50 hover:text-[#1C422D] hover:border-[#1C422D]/50 transition-all text-xs active:scale-90">
              IG
            </a>
            <a href="https://tiktok.com/@mluevents1" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full border border-[#1C422D]/20 flex items-center justify-center text-[#1C422D]/50 hover:text-[#1C422D] hover:border-[#1C422D]/50 transition-all text-xs active:scale-90">
              TK
            </a>
            <a href="https://wa.me/250787742477" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full border border-[#1C422D]/20 flex items-center justify-center text-[#1C422D]/50 hover:text-[#1C422D] hover:border-[#1C422D]/50 transition-all text-xs active:scale-90">
              WA
            </a>
          </div>
        </div>

        {/* Copyright */}
        <p className="text-center text-[10px] sm:text-[11px] text-[#1C422D]/40">
          &copy; {new Date().getFullYear()} MLU Events Ltd. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
