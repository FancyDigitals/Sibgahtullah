"use client";

import Link from "next/link";
import { useState } from "react";

/* ─── Icons ─── */

const SearchIcon = () => (
  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
  </svg>
);

const ClockIcon = () => (
  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const UserIcon = () => (
  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
  </svg>
);

const ArrowIcon = () => (
  <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
);

const EmptyIcon = () => (
  <svg className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-8.25a2.25 2.25 0 00-2.25-2.25H8.25A2.25 2.25 0 006 6v12a2.25 2.25 0 002.25 2.25h8.25A2.25 2.25 0 0018.75 18V7.5m-9 3h4.5m-4.5 3h4.5m-4.5 3h3" />
  </svg>
);

/* ─── Category colour map ─── */
const categoryColors = {
  Faith: "bg-[#EEE7FA] text-[#5B21B6]",
  Knowledge: "bg-[#FFF9EC] text-[#C89B3C]",
  Spirituality: "bg-[#EFF6FF] text-[#2563EB]",
  Guidance: "bg-[#F0FDF4] text-[#16A34A]",
  Purpose: "bg-[#FFF1F2] text-[#BE123C]",
};

const defaultCat = "bg-[#FAF8FF] text-[#7C3AED]";

/* ─── Page ─── */

export default function BlogPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const posts = [
    { slug: "understanding-modern-faith", title: "Understanding Faith in the Modern World", desc: "How to stay grounded in faith while navigating today's fast-paced society.", category: "Faith", author: "Admin", readTime: "5 min read" },
    { slug: "seeking-knowledge", title: "The Importance of Seeking Knowledge", desc: "Why knowledge is the foundation of growth and transformation.", category: "Knowledge", author: "Admin", readTime: "6 min read" },
    { slug: "spiritual-discipline", title: "Building Spiritual Discipline", desc: "Simple habits that strengthen your relationship with Allah daily.", category: "Spirituality", author: "Admin", readTime: "4 min read" },
    { slug: "clarity-in-confusion", title: "Finding Clarity in Times of Confusion", desc: "How to stay guided when faced with uncertainty.", category: "Guidance", author: "Admin", readTime: "5 min read" },
    { slug: "purpose-driven-life", title: "Living a Purpose-Driven Life", desc: "Understanding your role and responsibility as a Muslim.", category: "Purpose", author: "Admin", readTime: "7 min read" },
    { slug: "strengthening-iman", title: "Strengthening Your Iman", desc: "Practical ways to build and maintain strong faith.", category: "Faith", author: "Admin", readTime: "5 min read" },
  ];

  const categories = ["All", ...Array.from(new Set(posts.map((p) => p.category)))];

  const filtered = posts.filter((p) => {
    const matchSearch =
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.desc.toLowerCase().includes(search.toLowerCase());
    const matchCat = activeCategory === "All" || p.category === activeCategory;
    return matchSearch && matchCat;
  });

  return (
    <main className="relative overflow-hidden bg-white text-[#3B136B]">
      {/* Ambient */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-[#F3E8FF] opacity-70 blur-3xl" />
        <div className="absolute bottom-40 right-0 h-80 w-80 rounded-full bg-[#FFF5D9] opacity-60 blur-3xl" />
        <svg className="absolute inset-0 h-full w-full opacity-[0.03] text-[#7C3AED]">
          <pattern id="blog-grid" width="50" height="50" patternUnits="userSpaceOnUse">
            <path d="M 50 0 L 0 0 0 50" fill="none" stroke="currentColor" strokeWidth="1" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#blog-grid)" />
        </svg>
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#D4A017]/30 to-transparent" />
      </div>

      {/* ── HERO ── */}
      <section className="relative pt-32 pb-14 text-center sm:pt-36 sm:pb-16">
        <div className="mx-auto max-w-4xl px-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#E9DDFD] bg-[#FAF7FF] px-4 py-2 text-sm font-medium text-[#6B21A8] shadow-sm">
            <span className="h-2 w-2 rounded-full bg-[#D4A017]" />
            Reflections for the modern Muslim
          </div>

          <h1 className="mt-6 text-5xl font-semibold tracking-tight text-[#3B136B] sm:text-6xl lg:text-7xl">
            Articles & Insights
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-[#6F618A] sm:text-lg sm:leading-8">
            Explore knowledge, reflections, and guidance for modern life — rooted in authentic Islamic scholarship.
          </p>

          <div className="mt-8 flex justify-center">
            <div className="flex items-center gap-2">
              <div className="h-[2px] w-10 bg-gradient-to-r from-transparent to-[#5B21B6]/40 sm:w-14" />
              <div className="h-2 w-2 rounded-full bg-[#D4A017]" />
              <div className="h-[2px] w-10 bg-gradient-to-l from-transparent to-[#5B21B6]/40 sm:w-14" />
            </div>
          </div>
        </div>
      </section>

      {/* ── SEARCH + FILTERS ── */}
      <section className="relative pb-12">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="flex flex-col items-center gap-5 md:flex-row md:justify-between">
            {/* Search */}
            <div className="relative w-full md:w-80">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#B8A5D5]">
                <SearchIcon />
              </span>
              <input
                type="text"
                placeholder="Search articles..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full rounded-2xl border border-[#E9DDFD] bg-white py-3 pl-11 pr-4 text-sm text-[#3B136B] placeholder-[#B8A5D5] outline-none transition-all focus:border-[#7C3AED] focus:shadow-[0_0_0_3px_rgba(124,58,237,0.08)]"
              />
            </div>

            {/* Category pills */}
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
                    activeCategory === cat
                      ? "bg-[#4C1D95] text-white shadow-[0_8px_20px_rgba(76,29,149,0.20)]"
                      : "border border-[#EEE7FA] bg-white text-[#6F618A] hover:border-[#7C3AED] hover:text-[#4C1D95]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Results count */}
          <p className="mt-5 text-sm text-[#8C7AAE]">
            Showing{" "}
            <span className="font-semibold text-[#4C1D95]">{filtered.length}</span>{" "}
            article{filtered.length !== 1 ? "s" : ""}
            {activeCategory !== "All" && (
              <span> in <span className="font-medium text-[#D4A017]">{activeCategory}</span></span>
            )}
          </p>
        </div>
      </section>

      {/* ── GRID ── */}
      <section className="relative pb-32">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          {filtered.length === 0 ? (
            <div className="py-24 text-center">
              <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-3xl border border-[#EEE7FA] bg-[#FAF8FF] text-[#8C7AAE]">
                <EmptyIcon />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-[#3B136B]">No articles found</h3>
              <p className="mt-2 text-sm text-[#6F618A]">Try adjusting your search or category filter.</p>
              <button
                onClick={() => { setSearch(""); setActiveCategory("All"); }}
                className="mt-5 inline-flex items-center gap-2 rounded-2xl border border-[#E9DDFD] bg-white px-5 py-2.5 text-sm font-semibold text-[#4C1D95] transition hover:border-[#D4A017]/50 hover:shadow-sm"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {filtered.map((post, index) => (
                <Link key={post.slug} href={`/blog/${post.slug}`}>
                  <article
                    className="group relative flex h-full cursor-pointer flex-col overflow-hidden rounded-[1.75rem] border border-[#EEE7FA] bg-white/85 shadow-[0_20px_50px_rgba(76,29,149,0.08)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-[#E8D7A8] hover:shadow-[0_24px_60px_rgba(76,29,149,0.12)]"
                    style={{
                      opacity: 1,
                      transitionDelay: `${index * 60}ms`,
                    }}
                  >
                    {/* subtle glow */}
                    <div className="absolute inset-0 rounded-[1.75rem] bg-[radial-gradient(circle_at_top_right,rgba(212,160,23,0.10),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(91,33,182,0.08),transparent_35%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                    {/* Thumbnail placeholder */}
                    <div className="relative h-48 overflow-hidden bg-gradient-to-br from-[#F7F3FF] via-[#FAF8FF] to-[#FFF9EC]">
                      {/* decorative geometric */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-10">
                        <svg className="h-32 w-32 text-[#4C1D95]" viewBox="0 0 100 100" fill="none">
                          <path d="M50 5L95 50L50 95L5 50Z" stroke="currentColor" strokeWidth="1" />
                          <path d="M50 20L80 50L50 80L20 50Z" stroke="currentColor" strokeWidth="1" />
                          <circle cx="50" cy="50" r="15" stroke="currentColor" strokeWidth="1" />
                        </svg>
                      </div>

                      <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-transparent" />

                      {/* Category badge */}
                      <div className="absolute left-4 bottom-4">
                        <span className={`rounded-full px-3 py-1.5 text-[11px] font-semibold ${categoryColors[post.category] || defaultCat}`}>
                          {post.category}
                        </span>
                      </div>

                      {/* Read time badge */}
                      <div className="absolute right-4 top-4 flex items-center gap-1.5 rounded-full border border-white/50 bg-white/70 px-3 py-1.5 text-[11px] font-medium text-[#6F618A] backdrop-blur-sm">
                        <ClockIcon />
                        {post.readTime}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="relative flex flex-1 flex-col p-6">
                      <h3 className="text-lg font-semibold leading-7 text-[#3B136B] transition-colors duration-300 group-hover:text-[#4C1D95]">
                        {post.title}
                      </h3>

                      <p className="mt-3 flex-1 text-sm leading-7 text-[#6F618A] line-clamp-3">
                        {post.desc}
                      </p>

                      <div className="mt-5 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="flex h-7 w-7 items-center justify-center rounded-full border border-[#F3E7BF] bg-[#FFF9EC] text-[#C89B3C]">
                            <UserIcon />
                          </div>
                          <span className="text-xs font-medium text-[#8C7AAE]">{post.author}</span>
                        </div>

                        <span className="flex items-center gap-1 text-xs font-semibold text-[#7C3AED] transition-colors group-hover:text-[#4C1D95]">
                          Read more
                          <ArrowIcon />
                        </span>
                      </div>

                      {/* progress bar */}
                      <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-[#F3EDF9]">
                        <div className="h-full w-0 rounded-full bg-gradient-to-r from-[#5B21B6] via-[#7C3AED] to-[#D4A017] transition-all duration-700 group-hover:w-1/3" />
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}