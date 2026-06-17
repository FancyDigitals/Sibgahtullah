"use client";

import { useEffect, useState } from "react";

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
    },
    {
      category: "Hadith",
      quote:
        "The best among you are those who learn the Qur'an and teach it.",
      source: "Sahih al-Bukhari",
    },
    {
      category: "Reflection",
      quote:
        "Knowledge is not merely information. It is light that transforms the heart.",
      source: "Islamic Reflection",
    },
  ];

  return (
    <section className="relative py-24 bg-dark overflow-hidden">
      {/* Subtle geometric pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <svg className="w-full h-full">
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
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <div
          className={`text-center transition-all duration-700 ${
            isLoaded
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-xs uppercase tracking-[0.25em] text-gray-500">
            Weekly Inspiration
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-gold">
            Words that nourish the heart.
          </h2>

          <p className="mt-6 max-w-2xl mx-auto text-gray-400 leading-relaxed">
            Beneficial reminders from the Qur'an, Sunnah, and Islamic
            scholarship to inspire faith, knowledge, and character.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {inspirations.map((item, index) => (
            <div
              key={index}
              className="bg-primary border border-gray-800 rounded-2xl p-10 flex flex-col justify-between hover:border-gold/30 hover:-translate-y-1 transition-all duration-500"
              style={{
                transform: isLoaded ? "translateY(0)" : "translateY(30px)",
                opacity: isLoaded ? 1 : 0,
                transition: `all .7s ease ${300 + index * 150}ms`,
              }}
            >
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
                  {item.category}
                </p>

                <p className="mt-8 text-xl leading-relaxed text-gray-200 font-medium">
                  "{item.quote}"
                </p>
              </div>

              <div className="mt-10 pt-6 border-t border-gray-800">
                <p className="text-sm text-gold">{item.source}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}