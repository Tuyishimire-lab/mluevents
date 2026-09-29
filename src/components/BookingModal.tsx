"use client";

import { useState } from "react";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "Luxury Wedding & Gusaba",
    date: "",
    notes: "",
  });

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to submit inquiry. Please try again.");
      }

      setSubmitted(true);

      // Auto-launch WhatsApp directly with the pre-filled inquiry
      try {
        const opened = window.open(whatsappUrl, "_blank");
        // If window.open was blocked by a strict popup blocker, redirect fallback
        if (!opened || opened.closed || typeof opened.closed === "undefined") {
          window.location.href = whatsappUrl;
        }
      } catch (openErr) {
        console.warn("Auto-redirect notice:", openErr);
      }
    } catch (err: unknown) {
      console.error("Inquiry submission error:", err);
      setErrorMessage(
        err instanceof Error
          ? err.message
          : "An unexpected error occurred. Please try again or reach out on WhatsApp."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setErrorMessage("");
    onClose();
  };

  const whatsappMessage = encodeURIComponent(
    `Hello MLU Events! I just submitted an inquiry on your website.\n\n` +
      `• Client Name: ${formData.name}\n` +
      `• Event Category: ${formData.eventType}\n` +
      `• Target Date: ${formData.date || "To be confirmed"}\n` +
      `• Phone / WhatsApp: ${formData.phone}\n` +
      `• Email: ${formData.email}` +
      (formData.notes ? `\n• Event Vision: ${formData.notes}` : "") +
      `\n\nLooking forward to speaking with the MLU planning team!`
  );

  const whatsappUrl = `https://wa.me/250787742477?text=${whatsappMessage}`;

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
              Share your vision. Our event management team will review and respond within 24 hours.
            </p>

            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
              {errorMessage && (
                <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center justify-between gap-2">
                  <span>{errorMessage}</span>
                  <a
                    href="https://wa.me/250787742477"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline font-semibold shrink-0"
                  >
                    Open WhatsApp
                  </a>
                </div>
              )}

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
                <option value="Luxury Wedding & Gusaba">Luxury Wedding &amp; Gusaba</option>
                <option value="Corporate Summit / Conference">Corporate Summit / Conference</option>
                <option value="Product / Brand Launch">Product / Brand Launch</option>
                <option value="Private Gala / Anniversary">Private Gala / Anniversary</option>
              </select>

              <textarea
                rows={3}
                placeholder="Tell us about your vision (guest count, venue, decor style)..."
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className={`${inputClass} resize-none`}
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 text-xs sm:text-sm tracking-[0.1em] text-white bg-[#1C422D] border border-[#1C422D] rounded-full py-3.5 hover:bg-[#25573B] transition-all duration-300 uppercase mt-1 sm:mt-2 active:scale-[0.98] font-semibold cursor-pointer shadow-md shadow-[#1C422D]/10 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    <span>Transmitting Inquiry...</span>
                  </>
                ) : (
                  <span>Submit Inquiry</span>
                )}
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
              Inquiry Received!
            </h3>
            <p className="text-xs sm:text-sm text-[#555555] max-w-sm mx-auto mb-3 leading-relaxed">
              Thank you, <strong className="text-[#050708]">{formData.name}</strong>.
              Your event brief has been delivered to our planning inbox.
            </p>
            <p className="text-xs text-[#1C422D] font-medium bg-[#1C422D]/10 rounded-lg py-2.5 px-3.5 max-w-sm mx-auto mb-6">
              WhatsApp is opening with your inquiry pre-filled. Tap below to chat directly with our team:
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto text-xs sm:text-sm tracking-[0.05em] text-white bg-[#1C422D] hover:bg-[#25573B] rounded-full px-6 py-3 transition-all duration-300 inline-flex items-center justify-center gap-2 active:scale-95 font-semibold shadow-md shadow-[#1C422D]/15"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.275.072.376-.044c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.099.824zm-3.394-10.416c-4.991 0-9.047 4.056-9.047 9.048 0 1.597.417 3.155 1.209 4.526l-1.282 4.686 4.796-1.258c1.32.72 2.809 1.098 4.324 1.098 4.992 0 9.049-4.056 9.049-9.048 0-4.993-4.057-9.052-9.049-9.052zm0 16.297c-1.356 0-2.684-.365-3.844-1.054l-.275-.164-2.855.749.761-2.784-.179-.286c-.754-1.201-1.153-2.585-1.153-4.008 0-4.004 3.258-7.262 7.265-7.262 4.008 0 7.267 3.258 7.267 7.262 0 4.005-3.259 7.263-7.267 7.263z" />
                </svg>
                <span>Chat on WhatsApp</span>
              </a>
              <button
                onClick={handleReset}
                className="w-full sm:w-auto text-xs sm:text-sm tracking-[0.05em] text-[#050708] border border-black/20 rounded-full px-6 py-3 hover:bg-[#FAF8F5] transition-all duration-300 active:scale-95 cursor-pointer font-medium"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
