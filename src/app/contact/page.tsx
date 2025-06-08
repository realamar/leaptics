"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import CalendlyModal from "@/components/CalendlyModal";

// ✅ Fix: Declare hbspt type globally for TypeScript
declare global {
  interface Window {
    hbspt: any;
    Calendly: any;
  }
}

export default function ContactPage() {
  const formRef = useRef<HTMLDivElement>(null);
  const [formCreated, setFormCreated] = useState(false);
  const [calendlyUrl, setCalendlyUrl] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (formCreated || !formRef.current) return;

    const renderForm = () => {
      if (formRef.current?.querySelector("form")) return;

      window.hbspt?.forms.create({
        region: "na1",
        portalId: "243001961",
        formId: "d545016a-8905-4864-ba04-f69d583c6c2b",
        target: "#hubspotForm",
        onFormSubmitted: () => {
          // ✅ Extract user name/email from form input
          const name = (formRef.current?.querySelector('input[name="firstname"]') as HTMLInputElement)?.value ?? "";
          const email = (formRef.current?.querySelector('input[name="email"]') as HTMLInputElement)?.value ?? "";

          const calendly = `https://calendly.com/algoonity/free-consultation?name=${encodeURIComponent(
            name
          )}&email=${encodeURIComponent(email)}`;

          setCalendlyUrl(calendly);
        },
      });

      setFormCreated(true);
    };

    if (window.hbspt) {
      renderForm();
    } else {
      const script = document.createElement("script");
      script.src = "https://js.hsforms.net/forms/v2.js";
      script.async = true;
      script.onload = renderForm;
      document.body.appendChild(script);
    }
  }, [formCreated]);

  return (
    <main className="min-h-screen bg-white text-gray-900 px-6 py-20 relative">
      {/* ❌ Close Button */}
      <button
        onClick={() => router.push("/")}
        className="absolute top-4 right-6 text-3xl text-gray-400 hover:text-black z-50"
        aria-label="Close"
      >
        &times;
      </button>

      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-center">
          Get in Touch with Leaptics
        </h1>
        <p className="text-center text-gray-600 mb-10">
          Fill out the form below and we’ll connect with you shortly.
        </p>

        {/* ✅ HubSpot Form */}
        <div id="hubspotForm" ref={formRef}></div>
      </div>

      {/* ✅ Calendly Popup Modal */}
      {calendlyUrl && (
        <CalendlyModal
          url={calendlyUrl}
          onClose={() => setCalendlyUrl("")}
        />
      )}
    </main>
  );
}
