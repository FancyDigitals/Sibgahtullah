"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const BookIcon = () => (
  <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
  </svg>
);

const SparkleIcon = () => (
  <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
  </svg>
);

const HandshakeIcon = () => (
  <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
  </svg>
);

export default function Programs() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const programs = [
    {
      title: "Educational Programs",
      desc: "Structured learning designed to deepen Islamic knowledge through authentic, accessible, and engaging content.",
      icon: <BookIcon />,
      features: ["Online Courses", "Live Sessions", "Study Circles"],
    },
    {
      title: "Youth Development",
      desc: "Empowering the next generation with faith, discipline, character, and a clear sense of purpose.",
      icon: <SparkleIcon />,
      features: ["Mentorship", "Leadership", "Workshops"],
    },
    {
      title: "Community Outreach",
      desc: "Extending knowledge, care, and support to communities both locally and across the globe.",
      icon: <HandshakeIcon />,
      features: ["Local Events", "Charity Drives", "Partnerships"],
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white py-24 sm:py-28">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-[#F3E8FF] opacity-70 blur-3xl" />
        <div className="absolute bottom-10 right-0 h-72 w-72 rounded-full bg-[#FFF5D9] opacity-60 blur-3xl" />
        <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F3E8FF] opacity-30 blur-3xl" />

        <svg className="absolute inset-0 h-full w-full opacity-[0.035] text-[#7C3AED]">
          <pattern
            id="programs-grid"
            width="50"
            height="50"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 50 0 L 0 0 0 50"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
            />
          </pattern>
          <rect width="100%" height="100%" fill="url(#programs-grid)" />
        </svg>

        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#D4A017]/30 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <div
            className={`inline-flex items-center gap-2 rounded-full border border-[#E9DDFD] bg-[#FAF7FF] px-4 py-2 text-sm font-medium text-[#6B21A8] shadow-sm transition-all duration-700 ${
              isLoaded
                ? "translate-y-0 opacity-100"
                : "translate-y-6 opacity-0"
            }`}
          >
            <span className="h-2 w-2 rounded-full bg-[#D4A017]" />
            Building lives through purpose
          </div>

          <h2 className="mt-6 text-4xl font-semibold tracking-tight text-[#3B136B] sm:text-5xl lg:text-6xl">
            <span
              className={`inline-block transition-all duration-700 delay-100 ${
                isLoaded
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
            >
              Our Programs
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-[#6F618A] sm:text-lg sm:leading-8">
            <span
              className={`inline-block transition-all duration-700 delay-200 ${
                isLoaded
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
            >
              We are committed to building knowledge, strengthening faith, and
              making a lasting impact on people and communities.
            </span>
          </p>

          <div
            className={`mt-8 flex justify-center transition-all duration-700 delay-300 ${
              isLoaded ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
            }`}
          >
            <div className="flex items-center gap-2">
              <div className="h-[2px] w-10 bg-gradient-to-r from-transparent to-[#5B21B6]/40 sm:w-14" />
              <div className="flex gap-1.5">
                <div className="h-1.5 w-1.5 rounded-full bg-[#5B21B6]/50" />
                <div className="h-1.5 w-1.5 rounded-full bg-[#D4A017]" />
                <div className="h-1.5 w-1.5 rounded-full bg-[#5B21B6]/50" />
              </div>
              <div className="h-[2px] w-10 bg-gradient-to-l from-transparent to-[#5B21B6]/40 sm:w-14" />
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {programs.map((program, index) => (
            <div
              key={program.title}
              className="group relative flex flex-col rounded-[1.75rem] border border-[#EEE7FA] bg-white/85 p-7 shadow-[0_20px_50px_rgba(76,29,149,0.08)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-[#E8D7A8] hover:shadow-[0_24px_60px_rgba(76,29,149,0.12)] sm:p-8"
              style={{
                transform: isLoaded ? "translateY(0)" : "translateY(28px)",
                opacity: isLoaded ? 1 : 0,
                transition: `all 0.6s ease ${index * 150 + 250}ms`,
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* subtle glow */}
              <div className="absolute inset-0 rounded-[1.75rem] bg-[radial-gradient(circle_at_top_right,rgba(212,160,23,0.10),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(91,33,182,0.08),transparent_35%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              {/* large background number */}
              <span className="pointer-events-none absolute bottom-6 right-6 select-none text-7xl font-bold text-[#F3EDF9] transition-colors duration-300 group-hover:text-[#EDE5FA] sm:text-8xl">
                0{index + 1}
              </span>

              {/* icon */}
              <div className="relative mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-[#F1EAFB] bg-gradient-to-br from-[#FAF7FF] via-white to-[#FFF8EA] text-[#5B21B6] shadow-sm transition-all duration-300 group-hover:scale-105 group-hover:rotate-2">
                {program.icon}
              </div>

              <h3 className="relative text-xl font-semibold text-[#3B136B]">
                {program.title}
              </h3>

              <p className="relative mt-3 flex-1 text-sm leading-7 text-[#6F618A]">
                {program.desc}
              </p>

              {/* feature tags */}
              <div className="relative mt-5 flex flex-wrap gap-2">
                {program.features.map((feature, fIndex) => (
                  <span
                    key={feature}
                    className="rounded-full border border-[#EEE7FA] bg-[#FAF8FF] px-3 py-1.5 text-xs font-medium text-[#7C3AED] transition-all duration-300 group-hover:border-[#E8D7A8] group-hover:bg-[#FFFDF7] group-hover:text-[#5B21B6]"
                    style={{ transitionDelay: `${fIndex * 50}ms` }}
                  >
                    {feature}
                  </span>
                ))}
              </div>

              {/* progress bar */}
              <div className="relative mt-6 h-1.5 w-full overflow-hidden rounded-full bg-[#F3EDF9]">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-[#5B21B6] via-[#7C3AED] to-[#D4A017] transition-all duration-700"
                  style={{
                    width: hoveredIndex === index ? "100%" : "28%",
                  }}
                />
              </div>

              {/* hover footer */}
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
          className={`mt-14 text-center transition-all duration-700 delay-700 ${
            isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <Link
            href="/programs"
            className="inline-flex items-center gap-2 rounded-2xl bg-[#4C1D95] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_14px_30px_rgba(76,29,149,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#3B136B]"
          >
            <span>Explore All Programs</span>
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