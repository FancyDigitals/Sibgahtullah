"use client";

import { useState, useRef, useEffect } from "react";

export default function FeaturedVideo() {
  const [currentLang, setCurrentLang] = useState("en");
  const [showTranscript, setShowTranscript] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handlePlayClick = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const switchLang = (code, e) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    const tracks = videoRef.current.textTracks;
    for (let i = 0; i < tracks.length; i++) {
      tracks[i].mode = "disabled";
    }
    const track = [...tracks].find((t) => t.language === code);
    if (track) track.mode = "showing";
    setCurrentLang(code);
  };

  const languages = [
    { code: "en", label: "EN" },
    { code: "ha", label: "HA" },
    { code: "yo", label: "YO" },
    { code: "ig", label: "IG" },
  ];

  const infoCards = [
    {
      emoji: "👨‍🏫",
      label: "Speaker",
      value: "Imam Abdul-Wajuud Abdul-Lateef Adeleke",
    },
    { emoji: "📖", label: "Topic", value: "Spiritual Growth" },
    { emoji: "🎬", label: "Series", value: "Foundations of Faith" },
  ];

  return (
    <section className="relative overflow-hidden bg-white py-24 sm:py-28">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-[#F3E8FF] opacity-70 blur-3xl" />
        <div className="absolute bottom-10 right-0 h-72 w-72 rounded-full bg-[#FFF5D9] opacity-60 blur-3xl" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#D4A017]/30 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6 sm:px-8">
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
            Watch and reflect
          </div>

          <h2 className="mt-6 text-4xl font-semibold tracking-tight text-[#3B136B] sm:text-5xl lg:text-6xl">
            <span
              className={`inline-block transition-all duration-700 delay-100 ${
                isLoaded
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
            >
              Featured Lecture
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
              A powerful session that inspires knowledge, strengthens faith, and
              guides transformation.
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

        {/* Video Frame */}
        <div
          className={`mx-auto mt-12 max-w-5xl transition-all duration-700 delay-400 sm:mt-16 ${
            isLoaded
              ? "translate-y-0 opacity-100 scale-100"
              : "translate-y-8 opacity-0 scale-95"
          }`}
        >
          <div className="relative">
            <div className="absolute -inset-5 rounded-[2.5rem] bg-[radial-gradient(circle_at_top_left,rgba(91,33,182,0.12),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(212,160,23,0.16),transparent_35%)] blur-2xl" />

            <div className="relative rounded-[2rem] border border-[#E9DDFD] bg-white/85 p-3 shadow-[0_25px_80px_rgba(76,29,149,0.14)] backdrop-blur-xl">
              {/* Frame bar */}
              <div className="flex items-center gap-2 px-2 pb-3">
                <span className="h-2.5 w-2.5 rounded-full bg-[#E9DDFD]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#F3E8FF]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#F6E7B8]" />
                <span className="ml-auto text-xs font-medium text-[#8C7AAE]">
                  Featured Session
                </span>
              </div>

              <div className="relative aspect-video overflow-hidden rounded-[1.5rem] bg-[#F7F3FF]">
                {/* Thumbnail overlay */}
                {!isPlaying && (
                  <div
                    className="absolute inset-0 z-20 cursor-pointer"
                    onClick={handlePlayClick}
                  >
                    <video
                      className="h-full w-full object-cover"
                      muted
                      playsInline
                      preload="metadata"
                    >
                      <source src="/videos/featured2.mp4" type="video/mp4" />
                    </video>

                    <div className="absolute inset-0 bg-gradient-to-t from-[#1F0D36]/70 via-[#1F0D36]/15 to-transparent" />

                    {/* Play button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative">
                        <div className="absolute inset-0 h-20 w-20 animate-ping rounded-full bg-white/20 md:h-24 md:w-24" />
                        <button className="relative flex h-20 w-20 items-center justify-center rounded-full border border-white/30 bg-white/20 shadow-2xl backdrop-blur-md transition-transform duration-300 hover:scale-110 active:scale-95 md:h-24 md:w-24">
                          <svg
                            className="ml-1 h-8 w-8 text-white md:h-10 md:w-10"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </button>
                      </div>
                    </div>

                    {/* Bottom info */}
                    <div className="absolute bottom-4 left-4 right-20 z-30 sm:bottom-6 sm:left-6">
                      <h3 className="line-clamp-2 text-lg font-semibold text-white sm:text-2xl">
                        The Path to Spiritual Enlightenment
                      </h3>
                      <p className="mt-1 line-clamp-1 text-sm text-white/70">
                        A comprehensive guide to strengthening your faith
                      </p>
                    </div>

                    {/* Top actions */}
                    <div className="absolute left-4 top-4 z-30 flex gap-2 sm:left-6 sm:top-6">
                      <button className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/25 text-white backdrop-blur-md transition hover:bg-black/40">
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
                            d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                          />
                        </svg>
                      </button>
                      <button className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/25 text-white backdrop-blur-md transition hover:bg-black/40">
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
                            d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                )}

                {/* Language switcher */}
                <div className="absolute bottom-4 right-4 z-30 flex gap-1.5 rounded-full border border-white/20 bg-black/30 px-2.5 py-1.5 backdrop-blur-md sm:bottom-6 sm:right-6">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={(e) => switchLang(lang.code, e)}
                      className={`rounded-full px-2.5 py-1 text-[11px] font-semibold transition ${
                        currentLang === lang.code
                          ? "bg-white text-[#3B136B]"
                          : "text-white/80 hover:bg-white/10"
                      }`}
                    >
                      {lang.label}
                    </button>
                  ))}
                </div>

                {/* Main video */}
                <video
                  ref={videoRef}
                  className="h-full w-full object-cover"
                  playsInline
                  preload="metadata"
                  controls={isPlaying}
                >
                  <source src="/videos/featured2.mp4" type="video/mp4" />
                  <track
                    src="/subtitles/sibgahtullah.en.vtt"
                    kind="subtitles"
                    srcLang="en"
                    label="English"
                    default
                  />
                  <track
                    src="/subtitles/sibgahtullah.ha.vtt"
                    kind="subtitles"
                    srcLang="ha"
                    label="Hausa"
                  />
                  <track
                    src="/subtitles/sibgahtullah.yo.vtt"
                    kind="subtitles"
                    srcLang="yo"
                    label="Yoruba"
                  />
                  <track
                    src="/subtitles/sibgahtullah.ig.vtt"
                    kind="subtitles"
                    srcLang="ig"
                    label="Igbo"
                  />
                </video>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div
          className={`mt-8 flex flex-col justify-center gap-3 sm:flex-row sm:mt-10 transition-all duration-700 delay-500 ${
            isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <button
            onClick={() => {
              const link = document.createElement("a");
              link.href = "/videos/featured2.mp4";
              link.download = "featured-lecture.mp4";
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }}
            className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#4C1D95] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_14px_30px_rgba(76,29,149,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#3B136B]"
          >
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
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
            <span>Download</span>
          </button>

          <button
            onClick={async () => {
              const shareData = {
                title: "Featured Lecture",
                text: "Watch this powerful lecture",
                url: window.location.href,
              };
              try {
                if (navigator.share) {
                  await navigator.share(shareData);
                } else {
                  await navigator.clipboard.writeText(shareData.url);
                  alert("Link copied to clipboard!");
                }
              } catch (err) {
                console.log("Share failed:", err);
              }
            }}
            className="inline-flex items-center justify-center gap-2 rounded-2xl border border-[#E9DDFD] bg-white px-6 py-3.5 text-sm font-semibold text-[#4C1D95] transition-all duration-300 hover:border-[#D4A017]/50 hover:text-[#5B21B6] hover:shadow-sm"
          >
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
                d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
              />
            </svg>
            <span>Share</span>
          </button>

          <button
            onClick={() => setShowTranscript(true)}
            className="inline-flex items-center justify-center gap-2 rounded-2xl border border-[#E9DDFD] bg-white px-6 py-3.5 text-sm font-semibold text-[#4C1D95] transition-all duration-300 hover:border-[#D4A017]/50 hover:text-[#5B21B6] hover:shadow-sm"
          >
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
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
              />
            </svg>
            <span>Transcript</span>
          </button>
        </div>

        {/* Info Cards */}
        <div
          className={`mt-10 transition-all duration-700 delay-600 sm:mt-14 ${
            isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div className="grid gap-4 sm:grid-cols-3">
            {infoCards.map((card) => (
              <div
                key={card.label}
                className="group flex items-center gap-4 rounded-[1.75rem] border border-[#EEE7FA] bg-white/85 p-5 shadow-[0_12px_30px_rgba(76,29,149,0.06)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#E8D7A8] hover:shadow-[0_16px_40px_rgba(76,29,149,0.10)]"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-[#F3E7BF] bg-[#FFF9EC] text-2xl shadow-sm">
                  {card.emoji}
                </div>
                <div className="min-w-0">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#C89B3C]">
                    {card.label}
                  </p>
                  <p className="mt-1 truncate text-sm font-semibold text-[#3B136B]">
                    {card.value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Transcript Modal */}
      {showTranscript && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#2B0F46]/20 p-6 backdrop-blur-sm">
          <div className="relative w-full max-w-2xl rounded-[2rem] border border-[#E9DDFD] bg-white p-8 shadow-[0_30px_80px_rgba(76,29,149,0.18)]">
            <button
              onClick={() => setShowTranscript(false)}
              className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full border border-[#F1EAFB] text-[#7A63A8] transition-colors hover:text-[#4C1D95]"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#F0E2B6] bg-[#FFF9EC] text-xl shadow-sm">
                📝
              </div>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#C89B3C]">
                  Full text
                </p>
                <h3 className="text-xl font-semibold text-[#3B136B]">
                  Transcript
                </h3>
              </div>
            </div>

            <div className="mt-6 max-h-[55vh] space-y-4 overflow-y-auto text-sm leading-7 text-[#6F618A]">
              <p>
                In this lecture, we explore the path to spiritual
                enlightenment...
              </p>
              <p>
                True growth begins when you align your heart with purpose...
              </p>
              <p>
                Faith is not just belief, it is action and consistency...
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}