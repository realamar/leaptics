"use client";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-white dark:bg-black text-gray-900 dark:text-white font-sans">
      {/* Hero Section */}
      <section className="px-6 py-20 text-center max-w-5xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          Leaptics — Elevate Your Digital Presence
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
          We help brands grow with powerful campaigns, design, and performance marketing.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition"
        >
          Get a Free Consultation
        </Link>
      </section>

      {/* Services */}
      <section className="bg-gray-50 dark:bg-neutral-900 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-12">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "SEO Optimization", desc: "Improve rankings and visibility with tailored SEO strategies." },
              { title: "PPC Advertising", desc: "Maximize ROI with smart Google & Meta ad campaigns." },
              { title: "Social Media", desc: "Grow and engage your audience across all platforms." },
              { title: "Web Design", desc: "High-converting websites that look and perform great." },
              { title: "Email Marketing", desc: "Drive engagement with beautiful, automated emails." },
              { title: "Content Strategy", desc: "Stand out with smart, effective content marketing." },
            ].map((s, i) => (
              <div
                key={i}
                className="bg-white dark:bg-black border border-gray-200 dark:border-neutral-700 p-6 rounded-xl shadow hover:shadow-lg transition"
              >
                <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6">Trusted by forward-thinking brands</h2>
          <div className="flex flex-wrap justify-center gap-6 grayscale opacity-70">
            {["client1.svg", "client2.svg", "client3.svg"].map((logo, i) => (
              <Image key={i} src={`/${logo}`} alt="Client Logo" width={100} height={50} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-100 dark:bg-neutral-800 py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-10">What Our Clients Say</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: "Nandan Bajgain",
                text: "Leaptics helped us triple our leads in 3 months!",
              },
              {
                name: "Aswin Karthick",
                text: "Our brand looks 10x more professional since working with Leaptics.",
              },
            ].map((t, i) => (
              <div
                key={i}
                className="bg-white dark:bg-black border border-gray-200 dark:border-neutral-700 p-6 rounded-xl shadow-sm"
              >
                <p className="text-gray-700 dark:text-gray-300 italic">“{t.text}”</p>
                <p className="text-sm font-semibold mt-4 text-right">— {t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 text-center text-sm text-gray-500 dark:text-gray-600">
        &copy; {new Date().getFullYear()} Leaptics. All rights reserved.
      </footer>
    </main>
  );
}
