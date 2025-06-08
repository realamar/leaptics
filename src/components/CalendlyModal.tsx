"use client";

import { useEffect } from "react";

interface CalendlyModalProps {
  url: string;
  onClose: () => void;
}

export default function CalendlyModal({ url, onClose }: CalendlyModalProps) {
  useEffect(() => {
    const openCalendly = () => {
        console.log("Calendly available?", !!window.Calendly);


      if (window.Calendly) {
        window.Calendly.initPopupWidget({ url });
      } else {
        setTimeout(openCalendly, 100); // Retry until Calendly is available
      }
    };

    openCalendly();

    // Auto-cleanup after closing
    const closeListener = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.closest(".calendly-close-overlay") ||
        target.closest(".calendly-popup-close")
      ) {
        onClose();
      }
    };

    document.addEventListener("click", closeListener);

    return () => {
      document.removeEventListener("click", closeListener);
      document.querySelector(".calendly-overlay")?.remove();
    };
  }, [url, onClose]);

  return null;
}
