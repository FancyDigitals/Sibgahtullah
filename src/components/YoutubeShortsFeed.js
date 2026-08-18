"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

/* ─── Icons ─── */

const PlayIcon = () => (
  <svg className="ml-1 h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
    <path d="M8 5v14l11-7z" />
  </svg>
);

const PauseIcon = () => (
  <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
    <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
  </svg>
);

const MuteIcon = () => (
  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M16.5 12A4.5 4.5 0 0014 7.97v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51A8.796 8.796 0 0021 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06A8.99 8.99 0 0017.73 19l2 2L21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
  </svg>
);

const UnmuteIcon = () => (
  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3A4.5 4.5 0 0014 7.97v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
  </svg>
);

const ShareIcon = () => (
  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
  </svg>
);

const YoutubeIcon = () => (
  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

const ChevronUpIcon = () => (
  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
  </svg>
);

const ChevronDownIcon = () => (
  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
  </svg>
);

const LoaderIcon = () => (
  <svg className="h-8 w-8 animate-spin" fill="none" viewBox="0 0 24 24">
    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
  </svg>
);

/* ─── Single Short Card ─── */

function ShortCard({ short, isActive, isMuted, onMuteToggle }) {
  const iframeRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [copied, setCopied] = useState(false);

  const embedUrl = `https://www.youtube.com/embed/${short.videoId}?autoplay=${isActive && playing ? 1 : 0}&mute=${isMuted ? 1 : 0}&loop=1&playlist=${short.videoId}&controls=0&rel=0&modestbranding=1`;

  const handleShare = async () => {
    const url = `https://www.youtube.com/shorts/${short.videoId}`;
    try {
      if (navigator.share) {
        await navigator.share({ title: short.title, url });
      } else {
        await navigator.clipboard.writeText(url);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="relative flex h-full w-full items-center justify-center">
      {/* Video frame */}
      <div className="relative aspect-[9/16] h-full max-h-[calc(100vh-160px)] overflow-hidden rounded-[2rem] border border-[#E9DDFD] bg-[#F7F3FF] shadow-[0_25px_80px_rgba(76,29,149,0.14)]">
        {isActive && playing ? (
          <iframe
            ref={iframeRef}
            key={`${short.videoId}-${isMuted}`}
            src={embedUrl}
            className="absolute inset-0 h-full w-full"
            allow="autoplay; encrypted-media"
            allowFullScreen
            title={short.title}
          />
        ) : (
          <>
            <img
              src={`https://img.youtube.com/vi/${short.videoId}/hqdefault.jpg`}
              alt={short.title}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1F0D36]/70 via-transparent to-transparent" />
          </>
        )}

        {/* Play button overlay when not playing */}
        {(!isActive || !playing) && (
          <button
            onClick={() => setPlaying(true)}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 h-20 w-20 animate-ping rounded-full bg-white/15" />
              <div className="flex h-20 w-20 items-center justify-center rounded-full border border-white/30 bg-white/20 text-white shadow-2xl backdrop-blur-md transition-transform hover:scale-110">
                <PlayIcon />
              </div>
            </div>
          </button>
        )}

        {/* Bottom info overlay */}
        <div className="absolute bottom-0 left-0 right-14 p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#D4A017]">
            Sibgahtullah
          </p>
          <p className="mt-1.5 line-clamp-2 text-base font-semibold text-white leading-6">
            {short.title}
          </p>
          {short.viewCount && (
            <p className="mt-1 text-xs text-white/60">
              {Number(short.viewCount).toLocaleString()} views
            </p>
          )}
        </div>

        {/* Top frame bar */}
        <div className="absolute left-3 top-3 flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#E9DDFD]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#F3E8FF]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#F6E7B8]" />
        </div>
      </div>

      {/* Right action buttons */}
      <div className="absolute right-0 bottom-16 flex flex-col items-center gap-4 sm:right-2">
        {/* Mute toggle */}
        <button
          onClick={onMuteToggle}
          className="flex h-12 w-12 items-center justify-center rounded-full border border-[#EEE7FA] bg-white text-[#4C1D95] shadow-[0_8px_24px_rgba(76,29,149,0.12)] transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(76,29,149,0.16)]"
        >
          {isMuted ? <MuteIcon /> : <UnmuteIcon />}
        </button>

        {/* Share */}
        <button
          onClick={handleShare}
          className="flex h-12 w-12 items-center justify-center rounded-full border border-[#EEE7FA] bg-white text-[#4C1D95] shadow-[0_8px_24px_rgba(76,29,149,0.12)] transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(76,29,149,0.16)]"
        >
          <ShareIcon />
        </button>

        {/* Open on YouTube */}
        <a
          href={`https://www.youtube.com/shorts/${short.videoId}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-12 w-12 items-center justify-center rounded-full border border-[#EEE7FA] bg-white text-red-500 shadow-[0_8px_24px_rgba(76,29,149,0.12)] transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(76,29,149,0.16)]"
        >
          <YoutubeIcon />
        </a>

        {/* Copied toast */}
        {copied && (
          <span className="rounded-full bg-[#4C1D95] px-3 py-1.5 text-[11px] font-medium text-white shadow-lg">
            Copied!
          </span>
        )}
      </div>
    </div>
  );
}

/* ─── Main Feed ─── */

export default function YoutubeShortsFeed() {
  const [shorts, setShorts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(false);

  const API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;
  const CHANNEL_ID = process.env.NEXT_PUBLIC_YOUTUBE_CHANNEL_ID;

  useEffect(() => {
    fetchShorts();
  }, []);

  async function fetchShorts() {
    try {
      setLoading(true);

      /* Step 1 — get channel uploads playlist */
      const channelRes = await fetch(
        `https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=${CHANNEL_ID}&key=${API_KEY}`
      );
      const channelData = await channelRes.json();
      const uploadsId = channelData.items?.[0]?.contentDetails?.relatedPlaylists?.uploads;

      if (!uploadsId) throw new Error("Could not find uploads playlist.");

      /* Step 2 — get recent videos */
      const playlistRes = await fetch(
        `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${uploadsId}&maxResults=20&key=${API_KEY}`
      );
      const playlistData = await playlistRes.json();
      const videoIds = playlistData.items?.map((i) => i.snippet.resourceId.videoId).join(",");

      /* Step 3 — filter by duration < 60s (Shorts) */
      const detailsRes = await fetch(
        `https://www.googleapis.com/youtube/v3/videos?part=contentDetails,snippet,statistics&id=${videoIds}&key=${API_KEY}`
      );
      const detailsData = await detailsRes.json();

      const shortsOnly = detailsData.items?.filter((v) => {
        const dur = v.contentDetails.duration;
        /* ISO 8601 — PT#M#S. Shorts are <= 60s */
        const match = dur.match(/PT(?:(\d+)M)?(?:(\d+)S)?/);
        const mins = parseInt(match?.[1] || "0");
        const secs = parseInt(match?.[2] || "0");
        return mins === 0 && secs <= 60;
      }).map((v) => ({
        videoId: v.id,
        title: v.snippet.title,
        viewCount: v.statistics.viewCount,
        publishedAt: v.snippet.publishedAt,
      }));

      setShorts(shortsOnly || []);
    } catch (err) {
      console.error(err);
      setError("Could not load Shorts. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  const goUp = () => setActiveIndex((i) => Math.max(0, i - 1));
  const goDown = () => setActiveIndex((i) => Math.min(shorts.length - 1, i + 1));

  /* Keyboard navigation */
  useEffect(() => {
    const handler = (e) => {
      if (e.key === "ArrowUp") goUp();
      if (e.key === "ArrowDown") goDown();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [shorts.length]);

  return (
    <section className="relative overflow-hidden bg-white py-24 sm:py-28">
      {/* Ambient */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-[#F3E8FF] opacity-70 blur-3xl" />
        <div className="absolute bottom-10 right-0 h-72 w-72 rounded-full bg-[#FFF5D9] opacity-60 blur-3xl" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#D4A017]/30 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mt-6 text-4xl font-semibold tracking-tight text-[#3B136B] sm:text-5xl lg:text-6xl">
            Shorts Feed
          </h2>
          <p className="mt-5 text-base leading-7 text-[#6F618A] sm:text-lg sm:leading-8">
            Quick Islamic reminders and reflections from our YouTube channel. Use arrow keys or buttons to navigate.
          </p>
          <div className="mt-8 flex justify-center">
            <div className="flex items-center gap-2">
              <div className="h-[2px] w-10 bg-gradient-to-r from-transparent to-[#5B21B6]/40 sm:w-14" />
              <div className="h-2 w-2 rounded-full bg-[#D4A017]" />
              <div className="h-[2px] w-10 bg-gradient-to-l from-transparent to-[#5B21B6]/40 sm:w-14" />
            </div>
          </div>
        </div>

        {/* Feed */}
        <div className="mt-14 flex flex-col items-center">
          {loading && (
            <div className="flex flex-col items-center gap-4 py-24 text-[#8C7AAE]">
              <LoaderIcon />
              <p className="text-sm">Loading Shorts...</p>
            </div>
          )}

          {error && (
            <div className="py-16 text-center">
              <p className="text-sm text-[#6F618A]">{error}</p>
              <button
                onClick={fetchShorts}
                className="mt-4 rounded-2xl bg-[#4C1D95] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#3B136B]"
              >
                Retry
              </button>
            </div>
          )}

          {!loading && !error && shorts.length === 0 && (
            <div className="py-16 text-center">
              <p className="text-sm text-[#6F618A]">No Shorts found on this channel yet.</p>
            </div>
          )}

          {!loading && !error && shorts.length > 0 && (
            <div className="flex w-full max-w-sm flex-col items-center gap-6">
              {/* Counter */}
              <p className="text-sm font-medium text-[#8C7AAE]">
                {activeIndex + 1} / {shorts.length}
              </p>

              {/* Card */}
              <div className="relative w-full" style={{ height: "calc(100svh - 260px)", minHeight: 480, maxHeight: 780 }}>
                <ShortCard
                  key={shorts[activeIndex].videoId}
                  short={shorts[activeIndex]}
                  isActive={true}
                  isMuted={isMuted}
                  onMuteToggle={() => setIsMuted((m) => !m)}
                />
              </div>

              {/* Navigation */}
              <div className="flex items-center gap-4">
                <button
                  onClick={goUp}
                  disabled={activeIndex === 0}
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-[#EEE7FA] bg-white text-[#4C1D95] shadow-sm transition-all hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-30"
                >
                  <ChevronUpIcon />
                </button>

                {/* Dot indicators */}
                <div className="flex gap-1.5">
                  {shorts.slice(0, Math.min(shorts.length, 7)).map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveIndex(i)}
                      className={`rounded-full transition-all duration-300 ${
                        i === activeIndex
                          ? "h-2.5 w-6 bg-[#4C1D95]"
                          : "h-2.5 w-2.5 bg-[#E9DDFD] hover:bg-[#C4B5FD]"
                      }`}
                    />
                  ))}
                </div>

                <button
                  onClick={goDown}
                  disabled={activeIndex === shorts.length - 1}
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-[#EEE7FA] bg-white text-[#4C1D95] shadow-sm transition-all hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-30"
                >
                  <ChevronDownIcon />
                </button>
              </div>

              {/* View all on YouTube */}
              <a
                href={`https://www.youtube.com/channel/${CHANNEL_ID}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl border border-[#E9DDFD] bg-white px-5 py-3 text-sm font-semibold text-[#4C1D95] transition-all hover:border-[#D4A017]/50 hover:shadow-sm"
              >
                <YoutubeIcon />
                View all on YouTube
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}