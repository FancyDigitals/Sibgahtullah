"use client";

import { lectures } from "@/data/lectures";
import Link from "next/link";
import { useState, useEffect } from "react";

/* ─── Icons ─── */

const SearchIcon = () => (
  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
  </svg>
);

const GridIcon = () => (
  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
  </svg>
);

const ListIcon = () => (
  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

const ClockIcon = () => (
  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const UserIcon = () => (
  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
  </svg>
);

const PlayIcon = ({ className = "h-6 w-6" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M8 5v14l11-7z" />
  </svg>
);

const YoutubeIcon = () => (
  <svg className="h-4 w-4 text-red-500" fill="currentColor" viewBox="0 0 24 24">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

const TikTokIcon = () => (
  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.17 8.17 0 004.78 1.52V6.73a4.85 4.85 0 01-1.01-.04z" />
  </svg>
);

const StarIcon = () => (
  <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" />
  </svg>
);

const BellIcon = () => (
  <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
  </svg>
);

const EmptySearchIcon = () => (
  <svg className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
  </svg>
);

const ArrowIcon = ({ className = "h-5 w-5" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
);

/* ─── Page ─── */

export default function LecturesPage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const getThumbnail = (videoId: string): string =>
    `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

  const categories = ["All Categories", "Faith", "Knowledge", "Spirituality"];

  const filteredLectures = lectures.filter((lecture) => {
    const matchesSearch =
      lecture.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lecture.desc.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lecture.speaker.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All Categories" ||
      lecture.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <main className="relative overflow-hidden bg-white text-[#3B136B]">
      {/* Ambient background */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-[#F3E8FF] opacity-70 blur-3xl" />
        <div className="absolute bottom-40 right-0 h-96 w-96 rounded-full bg-[#FFF5D9] opacity-60 blur-3xl" />
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F3E8FF] opacity-20 blur-3xl" />

        <svg className="absolute inset-0 h-full w-full opacity-[0.03] text-[#7C3AED]">
          <pattern id="lec-grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="1" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#lec-grid)" />
        </svg>

        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#D4A017]/30 to-transparent" />
      </div>

      {/* ── HERO ── */}
      <section className="relative pt-32 pb-16 text-center sm:pt-36 sm:pb-20">
        <div className="mx-auto max-w-4xl px-6">

          <h1 className="mt-6 text-5xl font-semibold tracking-tight text-[#3B136B] sm:text-6xl lg:text-7xl">
            <span
              className={`inline-block transition-all duration-700 delay-100 ${
                isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
            >
              Lectures
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-[#6F618A] sm:text-lg sm:leading-8">
            <span
              className={`inline-block transition-all duration-700 delay-200 ${
                isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
            >
              Explore powerful teachings designed to inspire knowledge and
              strengthen faith.
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
      </section>

      {/* ── SEARCH + FILTER ── */}
      <section className="relative pb-10">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            {/* Search */}
            <div className="relative w-full md:w-80">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#B8A5D5]">
                <SearchIcon />
              </span>
              <input
                type="text"
                placeholder="Search lectures…"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full rounded-2xl border border-[#E9DDFD] bg-white py-3 pl-11 pr-4 text-sm text-[#3B136B] placeholder-[#B8A5D5] outline-none transition-all focus:border-[#7C3AED] focus:shadow-[0_0_0_3px_rgba(124,58,237,0.08)]"
              />
            </div>

            <div className="flex flex-wrap items-center gap-3">
              {/* Category pills — desktop */}
              <div className="hidden flex-wrap gap-2 lg:flex">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
                      selectedCategory === cat
                        ? "bg-[#4C1D95] text-white shadow-[0_8px_20px_rgba(76,29,149,0.20)]"
                        : "border border-[#EEE7FA] bg-white text-[#6F618A] hover:border-[#7C3AED] hover:text-[#4C1D95]"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Category select — mobile */}
              <select
                className="rounded-2xl border border-[#E9DDFD] bg-white px-4 py-3 text-sm text-[#3B136B] outline-none focus:border-[#7C3AED] lg:hidden"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map((cat) => (
                  <option key={cat}>{cat}</option>
                ))}
              </select>

              {/* View toggle */}
              <div className="flex overflow-hidden rounded-xl border border-[#EEE7FA] bg-white">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`px-3 py-2.5 transition-all duration-200 ${
                    viewMode === "grid"
                      ? "bg-[#4C1D95] text-white"
                      : "text-[#8C7AAE] hover:text-[#4C1D95]"
                  }`}
                >
                  <GridIcon />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`px-3 py-2.5 transition-all duration-200 ${
                    viewMode === "list"
                      ? "bg-[#4C1D95] text-white"
                      : "text-[#8C7AAE] hover:text-[#4C1D95]"
                  }`}
                >
                  <ListIcon />
                </button>
              </div>
            </div>
          </div>

          {/* Results count */}
          <p className="mt-5 text-sm text-[#8C7AAE]">
            Showing{" "}
            <span className="font-semibold text-[#4C1D95]">
              {filteredLectures.length}
            </span>{" "}
            lectures
            {selectedCategory !== "All Categories" && (
              <span>
                {" "}in{" "}
                <span className="font-medium text-[#D4A017]">
                  {selectedCategory}
                </span>
              </span>
            )}
          </p>
        </div>
      </section>

      {/* ── GRID ── */}
      <section className="relative pb-24">
        <div
          className={`mx-auto max-w-6xl px-6 ${
            viewMode === "grid"
              ? "grid gap-6 md:grid-cols-2 xl:grid-cols-3"
              : "flex flex-col gap-4"
          }`}
        >
          {filteredLectures.map((lecture, index) => {
            const imageSrc =
              lecture.platform === "youtube" && lecture.videoId
                ? getThumbnail(lecture.videoId)
                : lecture.thumbnail || "/fallback.jpg";

            return (
              <Link key={lecture.slug} href={`/lectures/${lecture.slug}`}>
                <article
                  className={`group relative flex cursor-pointer overflow-hidden rounded-[1.75rem] border border-[#EEE7FA] bg-white/85 shadow-[0_20px_50px_rgba(76,29,149,0.08)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-[#E8D7A8] hover:shadow-[0_24px_60px_rgba(76,29,149,0.12)] ${
                    viewMode === "list" ? "flex-row" : "flex-col"
                  }`}
                  style={{
                    transform: isLoaded ? "translateY(0)" : "translateY(20px)",
                    opacity: isLoaded ? 1 : 0,
                    transition: `all 0.5s ease ${index * 80}ms`,
                  }}
                >
                  {/* subtle glow */}
                  <div className="absolute inset-0 rounded-[1.75rem] bg-[radial-gradient(circle_at_top_right,rgba(212,160,23,0.10),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(91,33,182,0.08),transparent_35%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  {/* Thumbnail */}
                  <div
                    className={`relative overflow-hidden bg-[#F7F3FF] ${
                      viewMode === "list"
                        ? "h-full w-48 shrink-0 sm:w-64"
                        : "aspect-[16/10]"
                    }`}
                  >
                    <img
                      src={imageSrc}
                      alt={lecture.title}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#1F0D36]/65 via-[#1F0D36]/10 to-transparent" />

                    {/* Platform badge */}
                    <div className="absolute left-3 top-3 flex items-center gap-1.5 rounded-full border border-white/20 bg-black/30 px-2.5 py-1.5 text-[11px] font-medium text-white backdrop-blur-md">
                      {lecture.platform === "youtube" ? (
                        <>
                          <YoutubeIcon />
                          YouTube
                        </>
                      ) : (
                        <>
                          <TikTokIcon />
                          TikTok
                        </>
                      )}
                    </div>

                    {/* Duration badge */}
                    <div className="absolute right-3 top-3 rounded-full border border-white/20 bg-black/30 px-2.5 py-1.5 text-[11px] font-medium text-white backdrop-blur-md">
                      {lecture.duration}
                    </div>

                    {/* Category badge */}
                    <div className="absolute bottom-3 left-3 rounded-full border border-white/20 bg-[#2B0F46]/45 px-3 py-1.5 text-[11px] font-medium text-white backdrop-blur-md">
                      {lecture.category}
                    </div>

                    {/* Play overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/30 bg-white/20 shadow-2xl backdrop-blur-md transition-transform duration-300 group-hover:scale-110">
                        <PlayIcon className="ml-1 h-6 w-6 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative flex flex-1 flex-col p-5 sm:p-6">
                    <h3 className="text-lg font-semibold text-[#3B136B] transition-colors duration-300 group-hover:text-[#4C1D95]">
                      {lecture.title}
                    </h3>

                    <p className="mt-2 line-clamp-2 text-sm leading-7 text-[#6F618A]">
                      {lecture.desc}
                    </p>

                    <div className="mt-4 flex items-center justify-between text-xs text-[#8C7AAE]">
                      <span className="flex items-center gap-2">
                        <span className="flex h-7 w-7 items-center justify-center rounded-full border border-[#F3E7BF] bg-[#FFF9EC] text-[#C89B3C]">
                          <UserIcon />
                        </span>
                        {lecture.speaker}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <ClockIcon />
                        {lecture.duration}
                      </span>
                    </div>

                    <div className="relative mt-4 h-1.5 w-full overflow-hidden rounded-full bg-[#F3EDF9]">
                      <div className="h-full w-0 rounded-full bg-gradient-to-r from-[#5B21B6] via-[#7C3AED] to-[#D4A017] transition-all duration-700 group-hover:w-1/3" />
                    </div>
                  </div>
                </article>
              </Link>
            );
          })}
        </div>

        {/* Empty state */}
        {filteredLectures.length === 0 && (
          <div className="py-24 text-center">
            <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-3xl border border-[#EEE7FA] bg-[#FAF8FF] text-[#8C7AAE]">
              <EmptySearchIcon />
            </div>
            <h3 className="mt-6 text-xl font-semibold text-[#3B136B]">
              No lectures found
            </h3>
            <p className="mt-2 text-sm text-[#6F618A]">
              Try adjusting your search or filter criteria.
            </p>
            <button
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("All Categories");
              }}
              className="mt-5 inline-flex items-center gap-2 rounded-2xl border border-[#E9DDFD] bg-white px-5 py-2.5 text-sm font-semibold text-[#4C1D95] transition-all hover:border-[#D4A017]/50 hover:shadow-sm"
            >
              Clear Filters
            </button>
          </div>
        )}
      </section>

      {/* ── FEATURED SERIES ── */}
      <section className="relative pb-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="relative overflow-hidden rounded-[2rem] border border-[#E9DDFD] bg-[linear-gradient(135deg,#FAF7FF_0%,#FFFDF7_50%,#F7F3FF_100%)] p-8 shadow-[0_25px_80px_rgba(76,29,149,0.10)] sm:p-12">
            <div className="pointer-events-none absolute -left-10 -top-10 h-40 w-40 rounded-full bg-[#F3E8FF] opacity-70 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-[#FFF5D9] opacity-70 blur-3xl" />

            <div className="relative flex flex-col items-center gap-8 md:flex-row">
              <div className="flex-1">
                <div className="inline-flex items-center gap-1.5 rounded-full border border-[#F0E2B6] bg-[#FFF9EC] px-3 py-1.5 text-xs font-semibold text-[#C89B3C]">
                  <StarIcon />
                  Featured Series
                </div>

                <h3 className="mt-4 text-2xl font-semibold text-[#3B136B] sm:text-3xl">
                  Foundations of Faith
                </h3>

                <p className="mt-4 max-w-lg text-sm leading-7 text-[#6F618A]">
                  A comprehensive 10-part series covering the essential aspects
                  of Islamic belief and practice. Perfect for beginners and
                  those seeking to strengthen their foundation.
                </p>

                <div className="mt-6 flex flex-wrap items-center gap-4">
                  <button className="inline-flex items-center gap-2 rounded-2xl bg-[#4C1D95] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_14px_30px_rgba(76,29,149,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#3B136B]">
                    <PlayIcon className="h-5 w-5" />
                    Start Series
                  </button>
                  <span className="text-sm text-[#8C7AAE]">
                    10 Episodes · 3.5 Hours
                  </span>
                </div>
              </div>

              {/* Thumbnail */}
              <div className="relative w-full overflow-hidden rounded-2xl border border-[#E9DDFD] shadow-[0_20px_50px_rgba(76,29,149,0.12)] md:w-80">
                <div className="aspect-video">
                  <img
                    src="https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg"
                    alt="Featured Series"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1F0D36]/65 via-transparent to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/30 bg-white/20 text-white shadow-xl backdrop-blur-md transition-transform duration-300 hover:scale-110">
                      <PlayIcon className="ml-1 h-5 w-5" />
                    </div>
                  </div>
                  <div className="absolute bottom-3 left-3 right-3 flex items-center gap-3">
                    <span className="rounded-full border border-white/20 bg-black/35 px-3 py-1.5 text-[11px] font-medium text-white backdrop-blur-md">
                      Watch Trailer
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SUBSCRIBE CTA ── */}
      <section className="relative pb-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="relative overflow-hidden rounded-[2rem] border border-[#E9DDFD] bg-white p-8 shadow-[0_25px_80px_rgba(76,29,149,0.08)] text-center sm:p-12">
            <div className="pointer-events-none absolute -left-10 top-0 h-40 w-40 rounded-full bg-[#F3E8FF] opacity-60 blur-3xl" />
            <div className="pointer-events-none absolute -right-10 bottom-0 h-40 w-40 rounded-full bg-[#FFF5D9] opacity-60 blur-3xl" />

            <div className="relative">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-3xl border border-[#F0E2B6] bg-[#FFF9EC] text-[#C89B3C] shadow-sm">
                <BellIcon />
              </div>

              <h3 className="mt-6 text-2xl font-semibold text-[#3B136B]">
                Never Miss a Lecture
              </h3>

              <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-[#6F618A]">
                Subscribe to get notified when new lectures are published.
              </p>

              <div className="mx-auto mt-7 flex max-w-md flex-col gap-3 sm:flex-row">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 rounded-2xl border border-[#E9DDFD] bg-white px-5 py-3.5 text-sm text-[#3B136B] placeholder-[#B8A5D5] outline-none transition-all focus:border-[#7C3AED] focus:shadow-[0_0_0_3px_rgba(124,58,237,0.08)]"
                />
                <button className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#4C1D95] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_14px_30px_rgba(76,29,149,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#3B136B]">
                  Subscribe
                  <ArrowIcon className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}