import Link from "next/link";

export default function BlogDetailPage({ params }) {
  const { slug } = params;

  /* ─── In a real project you would fetch this from your CMS / MDX ─── */
  const post = {
    title: "Understanding Faith in the Modern World",
    category: "Faith",
    author: "Admin",
    published: "January 2026",
    readTime: "5 min read",
  };

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
      <section className="relative pt-32 pb-12 text-center sm:pt-36 sm:pb-16">
        <div className="mx-auto max-w-3xl px-6">
          {/* Breadcrumb */}
          <nav className="mb-8 flex items-center justify-center gap-2 text-sm text-[#8C7AAE]">
            <Link href="/" className="transition hover:text-[#4C1D95]">Home</Link>
            <span>/</span>
            <Link href="/blog" className="transition hover:text-[#4C1D95]">Blog</Link>
            <span>/</span>
            <span className="font-medium text-[#4C1D95]">{post.category}</span>
          </nav>

          {/* Category + read time */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <span className="rounded-full border border-[#EEE7FA] bg-[#FAF7FF] px-3 py-1.5 text-xs font-semibold text-[#5B21B6]">
              {post.category}
            </span>
            <span className="flex items-center gap-1.5 text-xs text-[#8C7AAE]">
              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {post.readTime}
            </span>
          </div>

          <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight text-[#3B136B] sm:text-5xl">
            {post.title}
          </h1>

          {/* Author row */}
          <div className="mt-6 flex items-center justify-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#F3E7BF] bg-[#FFF9EC] text-sm font-bold text-[#C89B3C]">
              A
            </div>
            <div className="text-left">
              <p className="text-sm font-semibold text-[#3B136B]">{post.author}</p>
              <p className="text-xs text-[#8C7AAE]">Published {post.published}</p>
            </div>
          </div>

          {/* Divider */}
          <div className="mt-8 flex justify-center">
            <div className="flex items-center gap-2">
              <div className="h-[2px] w-10 bg-gradient-to-r from-transparent to-[#5B21B6]/40 sm:w-14" />
              <div className="h-2 w-2 rounded-full bg-[#D4A017]" />
              <div className="h-[2px] w-10 bg-gradient-to-l from-transparent to-[#5B21B6]/40 sm:w-14" />
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURE IMAGE ── */}
      <section className="relative pb-14">
        <div className="mx-auto max-w-5xl px-6 sm:px-8">
          <div className="relative">
            <div className="absolute -inset-4 rounded-[2.5rem] bg-[radial-gradient(circle_at_top_left,rgba(91,33,182,0.10),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(212,160,23,0.14),transparent_40%)] blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-[#E9DDFD] bg-gradient-to-br from-[#F7F3FF] via-[#FAF8FF] to-[#FFF9EC] shadow-[0_25px_80px_rgba(76,29,149,0.10)]">
              <div className="flex h-64 items-center justify-center md:h-96">
                {/* Decorative geometric */}
                <div className="opacity-10">
                  <svg className="h-40 w-40 text-[#4C1D95]" viewBox="0 0 100 100" fill="none">
                    <path d="M50 5L95 50L50 95L5 50Z" stroke="currentColor" strokeWidth="1" />
                    <path d="M50 20L80 50L50 80L20 50Z" stroke="currentColor" strokeWidth="1" />
                    <circle cx="50" cy="50" r="18" stroke="currentColor" strokeWidth="1" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTENT ── */}
      <section className="relative pb-24">
        <div className="mx-auto max-w-3xl px-6 sm:px-8">
          <div className="rounded-[1.75rem] border border-[#EEE7FA] bg-white/90 p-8 shadow-[0_20px_50px_rgba(76,29,149,0.08)] backdrop-blur-xl sm:p-10">
            <article className="space-y-6 text-base leading-8 text-[#6F618A]">

              <p>
                This is where your blog content will go. You can write long-form articles here
                that provide value, clarity, and insight to your audience.
              </p>

              <h2 className="mt-8 text-2xl font-semibold text-[#3B136B]">
                Understanding the Topic
              </h2>

              <p>
                Expand deeply into the subject. This section should educate, inspire,
                and guide readers with real substance — rooted in authentic scholarship
                and practical wisdom for everyday life.
              </p>

              {/* Blockquote */}
              <blockquote className="relative my-8 overflow-hidden rounded-2xl border border-[#F0E2B6] bg-[#FFFDF7] px-7 py-6">
                <div className="absolute left-0 top-0 h-full w-1 rounded-l-2xl bg-gradient-to-b from-[#D4A017] to-[#C89B3C]" />
                <p className="font-arabic text-xl leading-9 text-[#3B136B]" dir="rtl">
                  إِنَّمَا الْأَعْمَالُ بِالنِّيَّاتِ
                </p>
                <p className="mt-3 text-sm italic leading-7 text-[#6F618A]">
                  "Actions are only by intentions, and every person will have only what they intended."
                </p>
                <p className="mt-2 text-xs font-semibold text-[#C89B3C]">Sahih al-Bukhari</p>
              </blockquote>

              <h2 className="mt-8 text-2xl font-semibold text-[#3B136B]">
                Practical Takeaways
              </h2>

              {/* List */}
              <ul className="space-y-3">
                {[
                  "Anchor your actions in sincere intention — niyyah precedes everything.",
                  "Consistency in small deeds is more beloved than large deeds performed rarely.",
                  "Seek knowledge that leads to action and transforms your character.",
                ].map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[#F0E2B6] bg-[#FFF9EC] text-xs font-bold text-[#C89B3C]">
                      {i + 1}
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <p>
                Conclude with clarity and a strong takeaway that leaves the reader thinking, reflecting, and motivated to act on what they have learned.
              </p>

              {/* Closing ayah */}
              <div className="mt-8 rounded-2xl border border-[#E9DDFD] bg-[#FAF7FF] px-6 py-5 text-center">
                <p className="font-arabic text-2xl leading-10 text-[#3B136B]" dir="rtl">
                  وَقُل رَّبِّ زِدْنِي عِلْمًا
                </p>
                <p className="mt-3 text-sm italic text-[#6F618A]">
                  "And say: My Lord, increase me in knowledge."
                </p>
                <p className="mt-2 text-xs font-semibold text-[#C89B3C]">Surah Ta-Ha 20:114</p>
              </div>
            </article>
          </div>

          {/* Author card */}
          <div className="mt-6 flex items-center gap-4 rounded-[1.75rem] border border-[#EEE7FA] bg-white/85 p-6 shadow-[0_20px_50px_rgba(76,29,149,0.08)] backdrop-blur-xl">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-[#F3E7BF] bg-[#FFF9EC] text-lg font-bold text-[#C89B3C]">
              A
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.20em] text-[#C89B3C]">Written by</p>
              <p className="mt-1 font-semibold text-[#3B136B]">{post.author}</p>
              <p className="text-xs text-[#8C7AAE]">Sibgahtullah Islamic Foundation</p>
            </div>
          </div>

          {/* Share row */}
          <div className="mt-4 flex items-center justify-between rounded-[1.75rem] border border-[#EEE7FA] bg-white/85 p-5 shadow-[0_20px_50px_rgba(76,29,149,0.08)] backdrop-blur-xl sm:px-7">
            <p className="text-sm font-medium text-[#6F618A]">Share this article</p>
            <div className="flex gap-2">
              {[
                {
                  label: "X",
                  icon: (
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  ),
                },
                {
                  label: "WhatsApp",
                  icon: (
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                  ),
                },
                {
                  label: "Copy",
                  icon: (
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                    </svg>
                  ),
                },
              ].map((btn) => (
                <button
                  key={btn.label}
                  className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#EEE7FA] bg-white text-[#7A63A8] transition-all hover:-translate-y-0.5 hover:border-[#E9D59C] hover:text-[#4C1D95] hover:shadow-sm"
                  aria-label={btn.label}
                >
                  {btn.icon}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative pb-24">
        <div className="mx-auto max-w-3xl px-6 text-center sm:px-8">
          <div className="relative overflow-hidden rounded-[2rem] border border-[#E9DDFD] bg-[linear-gradient(135deg,#FAF7FF_0%,#FFFDF7_50%,#F7F3FF_100%)] p-10 shadow-[0_25px_80px_rgba(76,29,149,0.10)] sm:p-14">
            <div className="pointer-events-none absolute -left-10 -top-10 h-40 w-40 rounded-full bg-[#F3E8FF] opacity-60 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-[#FFF5D9] opacity-60 blur-3xl" />

            <div className="relative">
              <h2 className="text-3xl font-semibold tracking-tight text-[#3B136B] sm:text-4xl">
                Want More Insights Like This?
              </h2>
              <p className="mx-auto mt-4 max-w-md text-base leading-7 text-[#6F618A]">
                Explore more articles and deepen your understanding of faith, knowledge, and purpose.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                <Link
                  href="/blog"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#4C1D95] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_14px_30px_rgba(76,29,149,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#3B136B]"
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                  </svg>
                  Back to Blog
                </Link>
                <Link
                  href="/lectures"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-[#E9DDFD] bg-white px-6 py-3.5 text-sm font-semibold text-[#4C1D95] transition-all duration-300 hover:border-[#D4A017]/50 hover:text-[#5B21B6] hover:shadow-sm"
                >
                  Explore Lectures
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}