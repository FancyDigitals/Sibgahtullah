"use client";

import { useState, useRef, useEffect } from "react";
import { useParams } from "next/navigation";
import { lectures } from "@/data/lectures";
import Link from "next/link";

/* ─── Icons ─── */

const PlayIcon = () => (
  <svg className="ml-1 h-7 w-7 text-white" fill="currentColor" viewBox="0 0 24 24">
    <path d="M8 5v14l11-7z" />
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

const TagIcon = () => (
  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6z" />
  </svg>
);

const CalendarIcon = () => (
  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
  </svg>
);

const ArrowLeftIcon = () => (
  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
  </svg>
);

const ShareIcon = () => (
  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
  </svg>
);

const SubtitleIcon = () => (
  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
  </svg>
);

const YoutubeIcon = () => (
  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

/* ─── Language config ─── */

const languages = [
  { code: "en", label: "EN", name: "English" },
  { code: "ha", label: "HA", name: "Hausa" },
  { code: "yo", label: "YO", name: "Yoruba" },
  { code: "ig", label: "IG", name: "Igbo" },
];

/* ─── Local video player with subtitle switching ─── */

function LocalVideoPlayer({ videoUrl, slug }) {
  const videoRef = useRef(null);
  const [currentLang, setCurrentLang] = useState("en");
  const [isPlaying, setIsPlaying] = useState(false);

  const switchLang = (code, e) => {
    if (e) e.stopPropagation();
    if (!videoRef.current) return;
    const tracks = videoRef.current.textTracks;
    for (let i = 0; i < tracks.length; i++) {
      tracks[i].mode = "disabled";
    }
    const track = [...tracks].find((t) => t.language === code);
    if (track) track.mode = "showing";
    setCurrentLang(code);
  };

  const handlePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="relative aspect-video overflow-hidden rounded-[1.5rem] bg-[#F7F3FF]">
      {/* Thumbnail overlay */}
      {!isPlaying && (
        <div
          className="absolute inset-0 z-20 cursor-pointer"
          onClick={handlePlay}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-[#1F0D36]/70 via-[#1F0D36]/15 to-transparent" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
              <div className="absolute inset-0 h-20 w-20 animate-ping rounded-full bg-white/15" />
              <button className="relative flex h-20 w-20 items-center justify-center rounded-full border border-white/30 bg-white/20 shadow-2xl backdrop-blur-md transition-transform duration-300 hover:scale-110">
                <PlayIcon />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Language switcher — always visible */}
      <div className="absolute bottom-4 right-4 z-30 flex gap-1.5 rounded-full border border-white/20 bg-black/30 px-2.5 py-1.5 backdrop-blur-md">
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={(e) => switchLang(lang.code, e)}
            title={lang.name}
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

      {/* Video element */}
      <video
        ref={videoRef}
        className="h-full w-full object-cover"
        playsInline
        preload="metadata"
        controls={isPlaying}
        onEnded={() => setIsPlaying(false)}
      >
        <source src={videoUrl} type="video/mp4" />
        <track
          src={`/subtitles/${slug}.en.vtt`}
          kind="subtitles"
          srcLang="en"
          label="English"
          default
        />
        <track
          src={`/subtitles/${slug}.ha.vtt`}
          kind="subtitles"
          srcLang="ha"
          label="Hausa"
        />
        <track
          src={`/subtitles/${slug}.yo.vtt`}
          kind="subtitles"
          srcLang="yo"
          label="Yoruba"
        />
        <track
          src={`/subtitles/${slug}.ig.vtt`}
          kind="subtitles"
          srcLang="ig"
          label="Igbo"
        />
      </video>
    </div>
  );
}

/* ─── YouTube player with language switcher ─── */

function YoutubePlayer({ videoId }) {
  const [play, setPlay] = useState(false);
  const [currentLang, setCurrentLang] = useState("en");

  /* 
    YouTube auto-captions:
    - ?cc_load_policy=1 forces captions on
    - &cc_lang_pref=LANG sets preferred language
    - YouTube will auto-translate if the video has auto-captions enabled
    - If the video has manual captions in specific languages those take priority
  */
  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&cc_load_policy=1&cc_lang_pref=${currentLang}&hl=${currentLang}&rel=0`;

  const thumbnail = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

  const switchLang = (code) => {
    setCurrentLang(code);
    /* If already playing we force a re-render via key by toggling play */
    if (play) {
      setPlay(false);
      setTimeout(() => setPlay(true), 50);
    }
  };

  return (
    <div className="relative aspect-video overflow-hidden rounded-[1.5rem] bg-[#F7F3FF]">
      {/* Thumbnail */}
      {!play && (
        <div
          className="absolute inset-0 z-20 cursor-pointer"
          onClick={() => setPlay(true)}
        >
          <img
            src={thumbnail}
            alt="Lecture thumbnail"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1F0D36]/70 via-[#1F0D36]/15 to-transparent" />

          {/* Play button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
              <div className="absolute inset-0 h-20 w-20 animate-ping rounded-full bg-white/15" />
              <button className="relative flex h-20 w-20 items-center justify-center rounded-full border border-white/30 bg-white/20 shadow-2xl backdrop-blur-md transition-transform duration-300 hover:scale-110">
                <PlayIcon />
              </button>
            </div>
          </div>

          {/* YouTube badge */}
          <div className="absolute left-4 top-4 flex items-center gap-1.5 rounded-full border border-white/20 bg-black/30 px-3 py-1.5 text-[11px] font-medium text-white backdrop-blur-md">
            <YoutubeIcon />
            YouTube
          </div>

          {/* Language pre-selector */}
          <div className="absolute bottom-4 left-4 z-30">
            <div className="flex items-center gap-1.5 rounded-full border border-white/20 bg-black/30 px-2.5 py-1.5 text-[11px] text-white/70 backdrop-blur-md">
              <SubtitleIcon />
              <span className="mr-1 font-medium">Subtitles:</span>
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={(e) => {
                    e.stopPropagation();
                    switchLang(lang.code);
                  }}
                  title={lang.name}
                  className={`rounded-full px-2.5 py-1 font-semibold transition ${
                    currentLang === lang.code
                      ? "bg-white text-[#3B136B]"
                      : "hover:bg-white/10"
                  }`}
                >
                  {lang.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* iFrame — key forces full remount when lang changes */}
      {play && (
        <iframe
          key={`${videoId}-${currentLang}`}
          className="h-full w-full"
          src={embedUrl}
          title="Lecture Video"
          allow="autoplay; encrypted-media; fullscreen"
          allowFullScreen
        />
      )}

      {/* Language switcher overlay when playing */}
      {play && (
        <div className="absolute bottom-16 right-4 z-30 flex gap-1.5 rounded-full border border-white/20 bg-black/30 px-2.5 py-1.5 backdrop-blur-md">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => switchLang(lang.code)}
              title={lang.name}
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
      )}
    </div>
  );
}

/* ─── Page ─── */

export default function LectureDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const lecture = lectures.find((l) => l.slug === slug);

  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const url = window.location.href;
    try {
      if (navigator.share) {
        await navigator.share({ title: lecture?.title, url });
      } else {
        await navigator.clipboard.writeText(url);
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      }
    } catch (err) {
      console.log("Share failed", err);
    }
  };

  /* ── Not found ── */
  if (!lecture) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-white px-6">
        <div className="text-center">
          <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-3xl border border-[#EEE7FA] bg-[#FAF8FF] text-[#8C7AAE]">
            <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
            </svg>
          </div>
          <h2 className="mt-6 text-2xl font-semibold text-[#3B136B]">
            Lecture not found
          </h2>
          <p className="mt-2 text-sm text-[#6F618A]">
            This lecture may have been moved or removed.
          </p>
          <Link
            href="/lectures"
            className="mt-6 inline-flex items-center gap-2 rounded-2xl bg-[#4C1D95] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#3B136B]"
          >
            <ArrowLeftIcon />
            Back to Lectures
          </Link>
        </div>
      </main>
    );
  }

  const metaItems = [
    { icon: <UserIcon />, label: lecture.speaker },
    { icon: <ClockIcon />, label: lecture.duration },
    { icon: <TagIcon />, label: lecture.category },
    { icon: <CalendarIcon />, label: "2026" },
  ];

  return (
    <main className="relative overflow-hidden bg-white text-[#3B136B]">
      {/* Ambient background */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-[#F3E8FF] opacity-70 blur-3xl" />
        <div className="absolute bottom-40 right-0 h-72 w-72 rounded-full bg-[#FFF5D9] opacity-60 blur-3xl" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#D4A017]/30 to-transparent" />
      </div>

      {/* ── HERO ── */}
      <section className="relative pt-32 pb-10 text-center sm:pt-36 sm:pb-14">
        <div className="mx-auto max-w-4xl px-6">
          <Link
            href="/lectures"
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#E9DDFD] bg-[#FAF7FF] px-4 py-2 text-sm font-medium text-[#6B21A8] shadow-sm transition hover:border-[#D4A017]/50"
          >
            <ArrowLeftIcon />
            Back to Lectures
          </Link>

          <div className="inline-flex items-center gap-2 rounded-full border border-[#E9DDFD] bg-[#FAF7FF] px-4 py-2 text-sm font-medium text-[#6B21A8] shadow-sm ml-3">
            <span className="h-2 w-2 rounded-full bg-[#D4A017]" />
            {lecture.category}
          </div>

          <h1 className="mt-6 text-3xl font-semibold leading-tight tracking-tight text-[#3B136B] sm:text-4xl md:text-5xl">
            {lecture.title}
          </h1>

          {/* Meta row */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            {metaItems.map((item, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-1.5 rounded-full border border-[#EEE7FA] bg-[#FAF8FF] px-3 py-1.5 text-xs font-medium text-[#6F618A]"
              >
                <span className="text-[#C89B3C]">{item.icon}</span>
                {item.label}
              </span>
            ))}
          </div>

          {/* Share */}
          <button
            onClick={handleShare}
            className="mt-5 inline-flex items-center gap-2 rounded-full border border-[#EEE7FA] bg-white px-4 py-2 text-xs font-medium text-[#6F618A] transition hover:border-[#E9D59C] hover:text-[#4C1D95]"
          >
            <ShareIcon />
            {copied ? "Link copied!" : "Share this lecture"}
          </button>
        </div>
      </section>

      {/* ── VIDEO ── */}
      <section className="relative pb-16">
        <div className="mx-auto max-w-5xl px-6">
          <div className="relative">
            <div className="absolute -inset-5 rounded-[2.5rem] bg-[radial-gradient(circle_at_top_left,rgba(91,33,182,0.12),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(212,160,23,0.16),transparent_35%)] blur-2xl" />

            <div className="relative rounded-[2rem] border border-[#E9DDFD] bg-white/85 p-3 shadow-[0_25px_80px_rgba(76,29,149,0.14)] backdrop-blur-xl">
              {/* Frame bar */}
              <div className="flex items-center gap-2 px-2 pb-3">
                <span className="h-2.5 w-2.5 rounded-full bg-[#E9DDFD]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#F3E8FF]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#F6E7B8]" />
                <span className="ml-auto flex items-center gap-1.5 text-xs font-medium text-[#8C7AAE]">
                  <SubtitleIcon />
                  Multi-language subtitles
                </span>
              </div>

              {lecture.platform === "local" ? (
                <LocalVideoPlayer videoUrl={lecture.videoUrl} slug={slug} />
              ) : (
                <YoutubePlayer videoId={lecture.videoId} />
              )}
            </div>
          </div>

          {/* Subtitle note */}
          <div className="mt-4 flex items-start gap-2 rounded-2xl border border-[#E9DDFD] bg-[#FAF7FF] px-4 py-3">
            <SubtitleIcon />
            <p className="text-xs leading-6 text-[#6F618A]">
              <span className="font-semibold text-[#4C1D95]">
                Multi-language subtitles available.
              </span>{" "}
              Select{" "}
              <span className="font-medium text-[#C89B3C]">EN · HA · YO · IG</span>{" "}
              from the language switcher on the video.
              {lecture.platform === "youtube" && (
                <span>
                  {" "}YouTube will auto-translate captions if the video supports it —
                  switch language before or during playback.
                </span>
              )}
            </p>
          </div>
        </div>
      </section>

      {/* ── CONTENT ── */}
      <section className="relative pb-24">
        <div className="mx-auto max-w-4xl px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_280px]">
            {/* Main content */}
            <div className="rounded-[1.75rem] border border-[#EEE7FA] bg-white/85 p-7 shadow-[0_20px_50px_rgba(76,29,149,0.08)] backdrop-blur-xl sm:p-8">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#C89B3C]">
                About this Lecture
              </p>
              <h2 className="mt-3 text-2xl font-semibold text-[#3B136B]">
                {lecture.title}
              </h2>

              <p className="mt-5 text-base leading-8 text-[#6F618A]">
                {lecture.desc ||
                  "This lecture explores key insights into faith, knowledge, and personal development. Tune in to gain a deeper understanding of Islamic principles and their practical applications in everyday life."}
              </p>

              {/* Progress bar decorative */}
              <div className="mt-8 h-1.5 w-full overflow-hidden rounded-full bg-[#F3EDF9]">
                <div className="h-full w-2/3 rounded-full bg-gradient-to-r from-[#5B21B6] via-[#7C3AED] to-[#D4A017]" />
              </div>
              <p className="mt-2 text-xs text-[#8C7AAE]">Knowledge retention indicator</p>
            </div>

            {/* Sidebar */}
            <div className="space-y-4">
              {/* Details card */}
              <div className="rounded-[1.75rem] border border-[#EEE7FA] bg-white/85 p-6 shadow-[0_20px_50px_rgba(76,29,149,0.08)] backdrop-blur-xl">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#C89B3C]">
                  Lecture Details
                </p>

                <div className="mt-5 space-y-4">
                  {[
                    { icon: <UserIcon />, label: "Speaker", value: lecture.speaker },
                    { icon: <ClockIcon />, label: "Duration", value: lecture.duration },
                    { icon: <TagIcon />, label: "Category", value: lecture.category },
                    { icon: <CalendarIcon />, label: "Published", value: "2026" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center gap-3">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-[#F3E7BF] bg-[#FFF9EC] text-[#C89B3C]">
                        {item.icon}
                      </span>
                      <div>
                        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#B8A5D5]">
                          {item.label}
                        </p>
                        <p className="text-sm font-medium text-[#3B136B]">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Language card */}
              <div className="rounded-[1.75rem] border border-[#EEE7FA] bg-white/85 p-6 shadow-[0_20px_50px_rgba(76,29,149,0.08)] backdrop-blur-xl">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#C89B3C]">
                  Available Subtitles
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {languages.map((lang) => (
                    <span
                      key={lang.code}
                      className="rounded-full border border-[#EEE7FA] bg-[#FAF8FF] px-3 py-1.5 text-xs font-semibold text-[#4C1D95]"
                    >
                      {lang.name}
                    </span>
                  ))}
                </div>
                <p className="mt-4 text-xs leading-6 text-[#8C7AAE]">
                  Use the language switcher on the video player to change subtitle language.
                </p>
              </div>

              {/* Back CTA */}
              <Link
                href="/lectures"
                className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-[#E9DDFD] bg-white px-5 py-3.5 text-sm font-semibold text-[#4C1D95] transition-all hover:border-[#D4A017]/50 hover:shadow-sm"
              >
                <ArrowLeftIcon />
                All Lectures
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}