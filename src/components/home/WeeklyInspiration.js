"use client";

import { useEffect, useState } from "react";

const BookOpenIcon = ({ className = "h-5 w-5" }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.6}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
    />
  </svg>
);

const DocumentIcon = ({ className = "h-5 w-5" }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.6}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M19.5 14.25v-8.25a2.25 2.25 0 00-2.25-2.25H8.25A2.25 2.25 0 006 6v12a2.25 2.25 0 002.25 2.25h8.25A2.25 2.25 0 0018.75 18V7.5m-9 3h4.5m-4.5 3h4.5m-4.5 3h3"
    />
  </svg>
);

const SparklesIcon = ({ className = "h-5 w-5" }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.6}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z"
    />
  </svg>
);

const QuoteIcon = ({ className = "h-6 w-6" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M7.2 6C4.9 7.4 3.8 9.4 3.8 12.1c0 3 1.9 5.3 4.9 5.3 1.9 0 3.3-1.3 3.3-3.1 0-1.7-1.2-2.9-2.8-2.9-.4 0-.8.1-1.1.2.3-1.4 1.2-2.7 2.7-3.9L7.2 6zm9 0c-2.3 1.4-3.4 3.4-3.4 6.1 0 3 1.9 5.3 4.9 5.3 1.9 0 3.3-1.3 3.3-3.1 0-1.7-1.2-2.9-2.8-2.9-.4 0-.8.1-1.1.2.3-1.4 1.2-2.7 2.7-3.9L16.2 6z" />
  </svg>
);

export default function WeeklyInspiration() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const inspirations = [
    {
      category: "Qur'an",
      quote:
        "And whoever relies upon Allah, then He is sufficient for him.",
      source: "Surah At-Talaq 65:3",
      icon: <BookOpenIcon />,
    },
    {
      category: "Hadith",
      quote:
        "The best among you are those who learn the Qur'an and teach it.",
      source: "Sahih al-Bukhari",
      icon: <DocumentIcon />,
    },
    {
      category: "Reflection",
      quote:
        "Knowledge is not merely information. It is light that transforms the heart.",
      source: "Islamic Reflection",
      icon: <SparklesIcon />,
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white py-24 sm:py-28">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-[#F3E8FF] opacity-70 blur-3xl" />
        <div className="absolute bottom-10 right-0 h-72 w-72 rounded-full bg-[#FFF5D9] opacity-60 blur-3xl" />

        <svg className="absolute inset-0 h-full w-full opacity-[0.03] text-[#7C3AED]">
          <pattern
            id="inspiration-pattern"
            width="80"
            height="80"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M40 0 L80 40 L40 80 L0 40 Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
            />
          </pattern>
          <rect width="100%" height="100%" fill="url(#inspiration-pattern)" />
        </svg>

        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#D4A017]/30 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8">
        {/* Header */}
        <div
          className={`mx-auto max-w-3xl text-center transition-all duration-700 ${
            isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-[#E9DDFD] bg-[#FAF7FF] px-4 py-2 text-sm font-medium text-[#6B21A8] shadow-sm">
            <span className="h-2 w-2 rounded-full bg-[#D4A017]" />
            Weekly Inspiration
          </div>

          <h2 className="mt-6 text-4xl font-semibold tracking-tight text-[#3B136B] sm:text-5xl lg:text-6xl">
            Words that nourish the heart.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#6F618A] sm:text-lg sm:leading-8">
            Beneficial reminders from the Qur'an, Sunnah, and Islamic
            reflection to inspire faith, knowledge, and character.
          </p>

          <div className="mt-8 flex justify-center">
            <div className="flex items-center gap-2">
              <div className="h-[2px] w-10 bg-gradient-to-r from-transparent to-[#5B21B6]/40 sm:w-14" />
              <div className="h-2 w-2 rounded-full bg-[#D4A017]" />
              <div className="h-[2px] w-10 bg-gradient-to-l from-transparent to-[#5B21B6]/40 sm:w-14" />
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {inspirations.map((item, index) => (
            <article
              key={item.category}
              className="group relative flex h-full flex-col justify-between rounded-[1.75rem] border border-[#EEE7FA] bg-white/85 p-7 shadow-[0_20px_50px_rgba(76,29,149,0.08)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-[#E8D7A8] hover:shadow-[0_24px_60px_rgba(76,29,149,0.12)] sm:p-8"
              style={{
                transform: isLoaded ? "translateY(0)" : "translateY(30px)",
                opacity: isLoaded ? 1 : 0,
                transition: `all .7s ease ${300 + index * 150}ms`,
              }}
            >
              {/* subtle glow */}
              <div className="absolute inset-0 rounded-[1.75rem] bg-[radial-gradient(circle_at_top_right,rgba(212,160,23,0.10),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(91,33,182,0.08),transparent_35%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="relative">
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#F1EAFB] bg-gradient-to-br from-[#FAF7FF] via-white to-[#FFF8EA] text-[#5B21B6] shadow-sm">
                    {item.icon}
                  </div>

                  <div className="text-[#E7DDF7] transition-colors duration-300 group-hover:text-[#D8C7F3]">
                    <QuoteIcon className="h-8 w-8" />
                  </div>
                </div>

                <p className="mt-6 text-xs font-semibold uppercase tracking-[0.22em] text-[#C89B3C]">
                  {item.category}
                </p>

                <p className="mt-6 text-lg leading-8 text-[#3B136B] sm:text-xl">
                  “{item.quote}”
                </p>
              </div>

              <div className="relative mt-10 border-t border-[#F1EAFB] pt-6">
                <p className="text-sm font-medium text-[#6F618A]">
                  {item.source}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}