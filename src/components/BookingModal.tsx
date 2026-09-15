"use client";

import { useState } from "react";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "Luxury Wedding & Gusaba",
    date: "",
    notes: "",
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  const inputClass =
    "w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl bg-[#FAF8F5] border border-[#E5D1B1] text-[#050708] placeholder-[#888888] focus:border-[#1C422D] focus:outline-none transition-colors text-sm";

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/60 backdrop-blur-sm overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full sm:max-w-lg rounded-t-2xl sm:rounded-2xl bg-white border-t sm:border border-[#E5D1B1] p-6 sm:p-8 md:p-10 shadow-2xl sm:my-8 max-h-[90vh] overflow-y-auto text-[#050708]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drag handle on mobile */}
        <div className="sm:hidden w-10 h-1 rounded-full bg-black/20 mx-auto mb-4" />

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-5 sm:right-5 text-[#888888] hover:text-[#050708] transition-colors p-1 cursor-pointer"
          aria-label="Close modal"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {!submitted ? (
          <div>
            <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-[#050708] mb-1.5 sm:mb-2 pr-8">
              Plan Your Event
            </h3>
            <p className="text-xs sm:text-sm text-[#666666] mb-5 sm:mb-8">
              Share your vision. We&apos;ll respond within 24 hours.
            </p>

            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <input
                  type="text"
                  required
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className={inputClass}
                />
                <input
                  type="tel"
                  required
                  placeholder="Phone (WhatsApp)"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className={inputClass}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <input
                  type="email"
                  required
                  placeholder="Email address"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={inputClass}
                />
                <input
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className={inputClass}
                />
              </div>

              <select
                value={formData.eventType}
                onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                className={inputClass}
              >
                <option value="Luxury Wedding & Gusaba">Luxury Wedding & Gusaba</option>
                <option value="Corporate Summit / Conference">Corporate Summit / Conference</option>
                <option value="Product / Brand Launch">Product / Brand Launch</option>
                <option value="Private Gala / Anniversary">Private Gala / Anniversary</option>
              </select>

              <textarea
                rows={3}
                placeholder="Tell us about your vision..."
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className={`${inputClass} resize-none`}
              />

              <button
                type="submit"
                className="w-full text-xs sm:text-sm tracking-[0.1em] text-white bg-[#1C422D] border border-[#1C422D] rounded-full py-3.5 hover:bg-[#25573B] transition-all duration-300 uppercase mt-1 sm:mt-2 active:scale-[0.98] font-semibold cursor-pointer shadow-md shadow-[#1C422D]/10"
              >
                Submit Inquiry
              </button>
            </form>
          </div>
        ) : (
          <div className="text-center py-4 sm:py-6">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#1C422D] mx-auto flex items-center justify-center text-white mb-5 sm:mb-6 shadow-md">
              <svg className="w-7 h-7 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="font-display text-xl sm:text-2xl font-bold text-[#050708] mb-2 sm:mb-3">
              Inquiry Received
            </h3>
            <p className="text-xs sm:text-sm text-[#555555] max-w-sm mx-auto mb-6 sm:mb-8">
              Thank you, <strong className="text-[#050708]">{formData.name}</strong>.
              We&apos;ll contact you at {formData.phone} within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={`https://wa.me/250787742477?text=Hello%20MLU%20Events,%20my%20name%20is%20${encodeURIComponent(formData.name)}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs sm:text-sm tracking-[0.1em] text-white bg-[#1C422D] rounded-full px-6 py-2.5 sm:py-3 hover:bg-[#25573B] transition-all duration-300 inline-block text-center active:scale-95 font-medium"
              >
                Chat on WhatsApp
              </a>
              <button
                onClick={handleReset}
                className="text-xs sm:text-sm tracking-[0.1em] text-[#050708] border border-black/20 rounded-full px-6 py-2.5 sm:py-3 hover:bg-[#FAF8F5] transition-all duration-300 active:scale-95 cursor-pointer font-medium"
              >
                Done
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
