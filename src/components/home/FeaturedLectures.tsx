"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import Container from "../ui/Container";
import { lectures, type Lecture } from "@/data/lectures";

export default function FeaturedLectures() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const getThumbnail = (videoId: string): string => {
    return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
  };

  return (
    <section className="relative overflow-hidden bg-white py-24 sm:py-28">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-16 top-20 h-72 w-72 rounded-full bg-[#F3E8FF] opacity-70 blur-3xl" />
        <div className="absolute right-0 bottom-10 h-72 w-72 rounded-full bg-[#FFF5D9] opacity-60 blur-3xl" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#D4A017]/30 to-transparent" />

        <svg className="absolute inset-0 h-full w-full opacity-[0.035] text-[#7C3AED]">
          <pattern
            id="lectures-grid"
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
          <rect width="100%" height="100%" fill="url(#lectures-grid)" />
        </svg>
      </div>

      <Container>
        <div className="relative z-10">
          {/* Heading */}
          <div className="mx-auto max-w-3xl text-center">

            <h2 className="mt-6 text-4xl font-semibold tracking-tight text-[#3B136B] sm:text-5xl lg:text-6xl">
              <span
                className={`inline-block transition-all duration-700 delay-100 ${
                  isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}
              >
                Featured Lectures
              </span>
            </h2>

            <p className="mt-5 text-base leading-7 text-[#6F618A] sm:text-lg sm:leading-8">
              <span
                className={`inline-block transition-all duration-700 delay-200 ${
                  isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}
              >
                Watch insightful, inspiring, and practical teachings designed
                to deepen understanding and strengthen faith.
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
          <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {lectures.map((lecture: Lecture, index) => {
              const imageSrc =
                lecture.platform === "youtube" && lecture.videoId
                  ? getThumbnail(lecture.videoId)
                  : lecture.thumbnail || "/fallback.jpg";

              return (
                <article
                  key={lecture.slug}
                  className="group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-[#EEE7FA] bg-white/90 shadow-[0_20px_50px_rgba(76,29,149,0.08)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-[#E8D7A8] hover:shadow-[0_24px_60px_rgba(76,29,149,0.12)]"
                  style={{
                    transform: isLoaded ? "translateY(0)" : "translateY(24px)",
                    opacity: isLoaded ? 1 : 0,
                    transition: `all 0.6s ease ${index * 100 + 250}ms`,
                  }}
                  onMouseEnter={() => setHoveredCard(lecture.slug)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  {/* subtle hover glow */}
                  <div className="absolute inset-0 rounded-[1.75rem] bg-[radial-gradient(circle_at_top_right,rgba(212,160,23,0.10),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(91,33,182,0.08),transparent_35%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  {/* Thumbnail */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#F7F3FF]">
                    <Image
                      src={imageSrc}
                      alt={lecture.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                      priority={index === 0}
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#1F0D36]/65 via-[#1F0D36]/10 to-transparent" />

                    {/* top chips */}
                    <div className="absolute left-4 top-4 rounded-full border border-white/20 bg-white/15 px-3 py-1.5 text-[11px] font-semibold text-white backdrop-blur-md">
                      Featured lecture
                    </div>

                    <div className="absolute right-4 top-4 rounded-full border border-white/20 bg-black/25 px-3 py-1.5 text-[11px] font-medium text-white backdrop-blur-md">
                      {lecture.duration}
                    </div>

                    {/* category */}
                    <div className="absolute bottom-4 left-4 rounded-full border border-white/20 bg-[#2B0F46]/45 px-3 py-1.5 text-[11px] font-medium text-white backdrop-blur-md">
                      {lecture.category}
                    </div>

                    {/* play button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-white/15 text-white shadow-lg backdrop-blur-md transition-all duration-300 group-hover:scale-110">
                        <svg
                          className="ml-0.5 h-5 w-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative flex flex-1 flex-col p-5 sm:p-6">
                    <div className="mb-4 flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#F3E7BF] bg-[#FFF9EC] text-sm font-semibold text-[#C89B3C] shadow-sm">
                        {lecture.speaker?.charAt(0) || "S"}
                      </div>

                      <div>
                        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#C89B3C]">
                          Speaker
                        </p>
                        <p className="text-sm font-medium text-[#6F618A]">
                          {lecture.speaker}
                        </p>
                      </div>
                    </div>

                    <h3 className="text-xl font-semibold leading-8 text-[#3B136B] transition-colors duration-300 group-hover:text-[#4C1D95]">
                      {lecture.title}
                    </h3>

                    <p className="mt-3 line-clamp-3 text-sm leading-7 text-[#6F618A]">
                      {lecture.desc || "No description available."}
                    </p>

                    <div className="mt-6 flex items-center justify-between gap-3">
                      <Link
                        href={`/lectures/${lecture.slug}`}
                        className="inline-flex items-center gap-2 rounded-2xl bg-[#4C1D95] px-4 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#3B136B]"
                      >
                        <span>Watch Lecture</span>
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
                      </Link>

                      <span className="text-xs font-medium text-[#8C7AAE]">
                        {lecture.platform === "youtube" ? "YouTube" : "Video"}
                      </span>
                    </div>

                    <div className="mt-5 h-1.5 w-full overflow-hidden rounded-full bg-[#F3EDF9]">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-[#5B21B6] via-[#7C3AED] to-[#D4A017] transition-all duration-700"
                        style={{
                          width:
                            hoveredCard === lecture.slug ? "100%" : "28%",
                        }}
                      />
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {/* CTA */}
          <div
            className={`mt-12 text-center transition-all duration-700 delay-700 ${
              isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <Link
              href="/lectures"
              className="inline-flex items-center gap-2 rounded-2xl border border-[#E9DDFD] bg-white px-6 py-3.5 text-sm font-semibold text-[#4C1D95] transition-all duration-300 hover:border-[#D4A017]/50 hover:text-[#5B21B6] hover:shadow-sm"
            >
              <span>View All Lectures</span>
              <svg
                className="h-5 w-5"
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
      </Container>
    </section>
  );
}