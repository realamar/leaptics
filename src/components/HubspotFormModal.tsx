"use client";

import { useEffect, useRef } from "react";

export default function HubspotFormModal({ onClose }: { onClose: () => void }) {
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hasForm = formRef.current?.querySelector("form");
    if (!hasForm && window.hbspt) {
      window.hbspt.forms.create({
        region: "na1",
        portalId: "YOUR_PORTAL_ID", // Replace with your portalId
        formId: "YOUR_FORM_ID",     // Replace with your formId
        target: "#hubspotPopupForm",
        onFormSubmitted: () => {
          setTimeout(onClose, 1000);
        },
      });
    } else if (!window.hbspt) {
      const script = document.createElement("script");
      script.src = "https://js.hsforms.net/forms/v2.js";
      script.async = true;
      script.onload = () => {
        if (window.hbspt && formRef.current?.children.length === 0) {
          window.hbspt.forms.create({
            region: "na1",
            portalId: "243001961",
            formId: "d545016a-8905-4864-ba04-f69d583c6c2b",
            target: "#hubspotPopupForm",
            onFormSubmitted: () => {
              setTimeout(onClose, 1000);
            },
          });
        }
      };
      document.body.appendChild(script);
    }
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center">
      <div className="relative bg-white w-[95vw] max-w-2xl max-h-[90vh] rounded-lg shadow-lg overflow-hidden">
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-gray-700 hover:text-black text-2xl z-10"
        >
          &times;
        </button>
        <div
          id="hubspotPopupForm"
          ref={formRef}
          className="overflow-y-auto p-6 h-full max-h-[90vh]"
        />
      </div>
    </div>
  );
}
