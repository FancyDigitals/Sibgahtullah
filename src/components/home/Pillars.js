"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Pillars() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const pillars = [
    {
      title: "Knowledge",
      desc: "Rooted in authentic Islamic teachings and guided by clarity, depth, and understanding.",
      icon: "📚",
    },
    {
      title: "Faith",
      desc: "Strengthening spiritual connection, sincerity, and unwavering belief in every season of life.",
      icon: "🕌",
    },
    {
      title: "Community",
      desc: "Building a united and compassionate Muslim community with meaningful local and global impact.",
      icon: "👥",
    },
    {
      title: "Transformation",
      desc: "Empowering individuals to grow in character, lead with purpose, and influence the world for good.",
      icon: "✨",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white py-24 sm:py-28">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-[#F3E8FF] opacity-70 blur-3xl" />
        <div className="absolute right-0 bottom-10 h-72 w-72 rounded-full bg-[#FFF5D9] opacity-60 blur-3xl" />

        <svg className="absolute inset-0 h-full w-full opacity-[0.04] text-[#7C3AED]">
          <pattern
            id="pillars-grid"
            width="42"
            height="42"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 42 0 L 0 0 0 42"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
            />
          </pattern>
          <rect width="100%" height="100%" fill="url(#pillars-grid)" />
        </svg>

        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#D4A017]/30 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">

          <h2 className="mt-6 text-4xl font-semibold tracking-tight text-[#3B136B] sm:text-5xl lg:text-6xl">
            <span
              className={`inline-block transition-all duration-700 delay-100 ${
                isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
            >
              Our Core Pillars
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-[#6F618A] sm:text-lg sm:leading-8">
            <span
              className={`inline-block transition-all duration-700 delay-200 ${
                isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
            >
              The foundation of everything we do is built on principles that
              nurture faith, deepen understanding, and inspire meaningful lives.
            </span>
          </p>

          <div
            className={`mt-8 flex justify-center transition-all duration-700 delay-300 ${
              isLoaded ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
            }`}
          >
            <div className="flex items-center gap-2">
              <div className="h-[2px] w-10 bg-gradient-to-r from-transparent to-[#5B21B6]/40 sm:w-14" />
              <div className="h-2 w-2 rounded-full bg-[#D4A017]" />
              <div className="h-[2px] w-10 bg-gradient-to-l from-transparent to-[#5B21B6]/40 sm:w-14" />
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {pillars.map((pillar, index) => (
            <div
              key={pillar.title}
              className="group relative rounded-[1.75rem] border border-[#EEE7FA] bg-white/85 p-6 shadow-[0_20px_50px_rgba(76,29,149,0.08)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-[#E8D7A8] hover:shadow-[0_24px_60px_rgba(76,29,149,0.12)]"
              style={{
                transform: isLoaded ? "translateY(0)" : "translateY(28px)",
                opacity: isLoaded ? 1 : 0,
                transition: `all 0.6s ease ${index * 100 + 250}ms`,
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* subtle glow */}
              <div className="absolute inset-0 rounded-[1.75rem] bg-[radial-gradient(circle_at_top_right,rgba(212,160,23,0.10),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(91,33,182,0.08),transparent_35%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              {/* number */}
              <div className="absolute right-5 top-5 flex h-8 w-8 items-center justify-center rounded-full border border-[#F2E8D0] bg-[#FFF9EC] text-xs font-semibold text-[#C89B3C]">
                0{index + 1}
              </div>

              {/* icon */}
              <div className="relative mb-5 flex h-16 w-16 items-center justify-center rounded-2xl border border-[#F1EAFB] bg-gradient-to-br from-[#FAF7FF] via-white to-[#FFF8EA] text-3xl shadow-sm transition-all duration-300 group-hover:scale-105 group-hover:rotate-2">
                {pillar.icon}
              </div>

              <h3 className="relative text-xl font-semibold text-[#3B136B]">
                {pillar.title}
              </h3>

              <p className="relative mt-3 text-sm leading-7 text-[#6F618A]">
                {pillar.desc}
              </p>

              {/* progress */}
              <div className="relative mt-6 h-1.5 w-full overflow-hidden rounded-full bg-[#F3EDF9]">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-[#5B21B6] via-[#7C3AED] to-[#D4A017] transition-all duration-700"
                  style={{ width: hoveredIndex === index ? "100%" : "28%" }}
                />
              </div>

              {/* footer */}
              <div className="relative mt-5 flex items-center gap-2 text-sm font-medium text-[#7C3AED] opacity-80 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#4C1D95]">
                <span>Learn more</span>
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className={`mt-12 text-center transition-all duration-700 delay-700 ${
            isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <Link
            href="/about"
            className="inline-flex items-center gap-2 rounded-2xl bg-[#4C1D95] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_14px_30px_rgba(76,29,149,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#3B136B]"
          >
            <span>Discover Our Mission</span>
            <svg
              className="h-5 w-5 transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}