"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

/* ─── Icons ─── */

const BookIcon = ({ className = "h-6 w-6" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
  </svg>
);

const MosqueIcon = ({ className = "h-6 w-6" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c-2.5 2.5-4 5-4 7.5A4 4 0 0012 14.5a4 4 0 004-4C16 8 14.5 5.5 12 3zM4 21V12m16 9V12M2 21h20M8 21v-4a4 4 0 018 0v4" />
  </svg>
);

const ScaleIcon = ({ className = "h-6 w-6" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z" />
  </svg>
);

const SparklesIcon = ({ className = "h-6 w-6" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
  </svg>
);

const BoltIcon = ({ className = "h-7 w-7" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);

const EyeIcon = ({ className = "h-7 w-7" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
  </svg>
);

const QuoteIcon = ({ className = "h-8 w-8" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M7.2 6C4.9 7.4 3.8 9.4 3.8 12.1c0 3 1.9 5.3 4.9 5.3 1.9 0 3.3-1.3 3.3-3.1 0-1.7-1.2-2.9-2.8-2.9-.4 0-.8.1-1.1.2.3-1.4 1.2-2.7 2.7-3.9L7.2 6zm9 0c-2.3 1.4-3.4 3.4-3.4 6.1 0 3 1.9 5.3 4.9 5.3 1.9 0 3.3-1.3 3.3-3.1 0-1.7-1.2-2.9-2.8-2.9-.4 0-.8.1-1.1.2.3-1.4 1.2-2.7 2.7-3.9L16.2 6z" />
  </svg>
);

const ArrowIcon = ({ className = "h-5 w-5" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
);

/* Social Icons */
const FacebookIcon = () => (
  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const InstagramIcon = () => (
  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const YoutubeIcon = () => (
  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

const TikTokIcon = () => (
  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.17 8.17 0 004.78 1.52V6.73a4.85 4.85 0 01-1.01-.04z" />
  </svg>
);

/* ─── Component ─── */

export default function AboutPage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const values = [
    { name: "Knowledge", icon: <BookIcon />, description: "Rooted in authentic sources and scholarship." },
    { name: "Faith", icon: <MosqueIcon />, description: "Strengthening spiritual bonds with Allah." },
    { name: "Integrity", icon: <ScaleIcon />, description: "Truth and sincerity in every action." },
    { name: "Impact", icon: <SparklesIcon />, description: "Transforming lives and communities." },
  ];

  const leaders = [
    {
      id: 1,
      name: "Sheikh Muneerudeen Salahudeen (AR-RIYAADY)",
      position: "Spiritual Father/The Mudir of ZamZam Arabic School",
      image: "/team/sheikh.jpg",
      socials: { facebook: "#", instagram: "#", youtube: "#", tiktok: "#" },
    },
    {
      id: 2,
      name: "Imam Abdul-Wajuud Abdul-Lateef Adeleke (AL-WAJUUDY)",
      position: "Founder",
      image: "/team/imam.jpg",
      socials: { facebook: "#", instagram: "#", youtube: "#", tiktok: "#" },
    },
    {
      id: 3,
      name: "MuhammedBashir Ismail (FANCY)",
      position: "Brand Manager",
      image: "/team/fancy.jpg",
      socials: { facebook: "#", instagram: "#", youtube: "#", tiktok: "#" },
    },
  ];

  const socialIcons = { facebook: <FacebookIcon />, instagram: <InstagramIcon />, youtube: <YoutubeIcon />, tiktok: <TikTokIcon /> };

  return (
    <main className="relative overflow-hidden bg-white text-[#3B136B]">
      {/* Ambient */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-[#F3E8FF] opacity-70 blur-3xl" />
        <div className="absolute bottom-40 right-0 h-80 w-80 rounded-full bg-[#FFF5D9] opacity-60 blur-3xl" />
        <svg className="absolute inset-0 h-full w-full opacity-[0.03] text-[#7C3AED]">
          <pattern id="about-grid" width="50" height="50" patternUnits="userSpaceOnUse">
            <path d="M 50 0 L 0 0 0 50" fill="none" stroke="currentColor" strokeWidth="1" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#about-grid)" />
        </svg>
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#D4A017]/30 to-transparent" />
      </div>

      {/* ── HERO ── */}
      <section className="relative pt-32 pb-16 text-center sm:pt-36 sm:pb-20">
        <div className="mx-auto max-w-4xl px-6">
          <div className={`inline-flex items-center gap-2 rounded-full border border-[#E9DDFD] bg-[#FAF7FF] px-4 py-2 text-sm font-medium text-[#6B21A8] shadow-sm transition-all duration-700 ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`}>
            <span className="h-2 w-2 rounded-full bg-[#D4A017]" />
            Established 2020
          </div>

          <h1 className="mt-6 text-5xl font-semibold tracking-tight text-[#3B136B] sm:text-6xl lg:text-7xl">
            <span className={`inline-block transition-all duration-700 delay-100 ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
              About Us
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-[#6F618A] sm:text-lg sm:leading-8">
            <span className={`inline-block transition-all duration-700 delay-200 ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
              A foundation built on knowledge, faith, and transformation bridging timeless Islamic teachings with modern understanding.
            </span>
          </p>

          <div className={`mt-8 flex justify-center transition-all duration-700 delay-300 ${isLoaded ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"}`}>
            <div className="flex items-center gap-2">
              <div className="h-[2px] w-10 bg-gradient-to-r from-transparent to-[#5B21B6]/40 sm:w-14" />
              <div className="h-2 w-2 rounded-full bg-[#D4A017]" />
              <div className="h-[2px] w-10 bg-gradient-to-l from-transparent to-[#5B21B6]/40 sm:w-14" />
            </div>
          </div>
        </div>
      </section>

      {/* ── OUR STORY ── */}
      <section className="relative py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#E9DDFD] bg-[#FAF7FF] px-4 py-2 text-sm font-medium text-[#6B21A8] shadow-sm">
                <span className="h-2 w-2 rounded-full bg-[#D4A017]" />
                Our Journey
              </div>

              <h2 className="mt-6 text-4xl font-semibold tracking-tight text-[#3B136B] sm:text-5xl">
                Our Story
              </h2>

              <p className="mt-6 text-base leading-7 text-[#6F618A] sm:text-lg sm:leading-8">
                Sibgahtullah Islamic Foundation was established to bridge the gap between authentic Islamic teachings and the realities of the modern world.
              </p>

              <p className="mt-4 text-base leading-7 text-[#7B6B98]">
                In a time of confusion and misinformation, we provide clarity, structure, and guidance rooted in truth and understanding.
              </p>

              {/* Timeline */}
              <div className="mt-10 space-y-5">
                {[
                  { year: "2020", event: "Foundation Established", desc: "Started with a vision for accessible Islamic education." },
                  { year: "2024", event: "National Expansion", desc: "Grew across multiple cities with growing community impact." },
                ].map((item) => (
                  <div key={item.year} className="group flex items-start gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-[#F0E2B6] bg-[#FFF9EC] text-lg font-bold text-[#C89B3C] shadow-sm transition-transform group-hover:scale-105">
                      {item.year}
                    </div>
                    <div>
                      <p className="font-semibold text-[#3B136B]">{item.event}</p>
                      <p className="mt-1 text-sm text-[#6F618A]">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quote card */}
            <div className="relative">
              <div className="absolute -inset-5 rounded-[2.5rem] bg-[radial-gradient(circle_at_top_left,rgba(91,33,182,0.12),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(212,160,23,0.16),transparent_35%)] blur-2xl" />
              <div className="relative rounded-[2rem] border border-[#E9DDFD] bg-white/90 p-8 shadow-[0_25px_80px_rgba(76,29,149,0.10)] backdrop-blur-xl sm:p-10">
                <div className="text-[#E7DDF7]">
                  <QuoteIcon />
                </div>
                <p className="mt-4 text-xl font-medium italic leading-9 text-[#3B136B]">
                  "ot just teaching knowledgeWe are n. We are shaping minds, strengthening faith, and building a future for the Ummah."
                </p>
                <div className="mt-8 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#F0E2B6] bg-[#FFF9EC] text-sm font-bold text-[#C89B3C]">
                    S
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#3B136B]">Sibgahtullah Foundation</p>
                    <p className="text-xs text-[#8C7AAE]">Core Philosophy</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOUNDER SPOTLIGHT ── */}
      <section className="relative py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="relative overflow-hidden rounded-[2rem] border border-[#E9DDFD] bg-[linear-gradient(135deg,#FAF7FF_0%,#FFFDF7_50%,#F7F3FF_100%)] shadow-[0_25px_80px_rgba(76,29,149,0.10)]">
            <div className="pointer-events-none absolute -left-10 -top-10 h-40 w-40 rounded-full bg-[#F3E8FF] opacity-70 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-[#FFF5D9] opacity-70 blur-3xl" />

            <div className="relative grid items-center gap-10 p-8 sm:p-12 lg:grid-cols-[320px_1fr] lg:gap-14">
              {/* Founder image */}
              <div className="relative mx-auto w-full max-w-[320px]">
                <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-[#E9DDFD] via-transparent to-[#FFF5D9] blur-xl opacity-60" />
                <div className="relative overflow-hidden rounded-[1.75rem] border border-[#E9DDFD] bg-white shadow-[0_20px_50px_rgba(76,29,149,0.12)]">
                  <div className="aspect-[3/4] bg-[#F7F3FF]">
                    <Image
                      src="/team/imam.jpg"
                      alt="Imam Abdul-Wajuud Abdul-Lateef Adeleke"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Founder content */}
              <div>
                <div className="inline-flex items-center gap-1.5 rounded-full border border-[#F0E2B6] bg-[#FFF9EC] px-3 py-1.5 text-xs font-semibold text-[#C89B3C]">
                  <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" />
                  </svg>
                  Founder
                </div>

                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#3B136B] sm:text-4xl">
  Imam Abdul-Wajuud Abdul-Lateef Adeleke
</h2>
<p className="mt-1 text-sm font-medium text-[#C89B3C]">AL-WAJUUDY</p>

<p className="mt-6 text-base leading-8 text-[#6F618A]">
  <b>Imam Abdul-Wajuud</b> is an Islamic scholar, educator, community leader, and passionate advocate for accessible Islamic knowledge. He is the founder of Sibgahtullah Islamic Foundation, established to promote authentic Islamic learning, spiritual development, mentorship, and positive community engagement.
</p>

<p className="mt-4 text-base leading-8 text-[#7B6B98]">
  His educational journey includes Florence Day School, Divine Commando College, and extensive Arabic and Islamic studies at <b>Zamzam Islamic Academy</b>, where he completed his Idadiyyah and Thanawiyyah programmes under the guidance of its Mudir, <b>As-Sheikh (Dr.) Munirudeen Arriyaady Salahudeen.</b> He is currently a final-year B.Sc. (Ed.) Chemistry Education student at <b>Lagos State University of Education (LASUED)</b> and serves as the Head of the Dawah Mission at <b>NASFAT Ojo Branch.</b>
</p>

<p className="mt-4 text-base leading-8 text-[#7B6B98]">
  <b>Imam Abdul-Wajuud</b> has a strong passion for podcasts, educational and Islamic interviews, and Islamic lectures. He has featured on several Islamic television and podcast platforms, engaging audiences on Islamic knowledge, spirituality, contemporary issues, and matters affecting society. Beyond scholarship and Dawah, he has developed intermediate graphic design skills, learned shoemaking between 2018 and 2020, and continues to expand his digital and technology skills through <b>Fancy Digitals Academy</b> in Lagos.
</p>

<div className="mt-8 grid gap-4 sm:grid-cols-3">
  {[
    { label: "Educative & Islamic Interviews/Contents", value: "100+" },
    { label: "Lectures Delivered", value: "200+" },
    { label: "Podcast Sessions", value: "10+" },
  ].map((stat) => (
    <div
      key={stat.label}
      className="rounded-2xl border border-[#F1EAFB] bg-white/80 p-4 text-center"
    >
      <p className="text-2xl font-bold text-[#4C1D95]">{stat.value}</p>
      <p className="mt-1 text-xs text-[#8C7AAE]">{stat.label}</p>
    </div>
  ))}
</div>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Link href="/lectures" className="inline-flex items-center gap-2 rounded-2xl bg-[#4C1D95] px-5 py-3 text-sm font-semibold text-white shadow-[0_14px_30px_rgba(76,29,149,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#3B136B]">
                    Watch Lectures
                    <ArrowIcon className="h-4 w-4" />
                  </Link>
                  <Link href="/contact" className="inline-flex items-center gap-2 rounded-2xl border border-[#E9DDFD] bg-white px-5 py-3 text-sm font-semibold text-[#4C1D95] transition-all hover:border-[#D4A017]/50 hover:shadow-sm">
                    Get in Touch
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MISSION & VISION ── */}
      <section className="relative py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="grid gap-6 md:grid-cols-2">
            {[
              { title: "Our Mission", icon: <BoltIcon />, desc: "To provide authentic Islamic knowledge, empower individuals, and nurture a generation grounded in faith, purpose, and clarity." },
              { title: "Our Vision", icon: <EyeIcon />, desc: "To become a globally recognized Islamic institution that transforms lives and impacts societies through knowledge, guidance, and action." },
            ].map((item) => (
              <div key={item.title} className="group rounded-[1.75rem] border border-[#EEE7FA] bg-white/85 p-8 shadow-[0_20px_50px_rgba(76,29,149,0.08)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-[#E8D7A8] hover:shadow-[0_24px_60px_rgba(76,29,149,0.12)]">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-[#F1EAFB] bg-gradient-to-br from-[#FAF7FF] via-white to-[#FFF8EA] text-[#5B21B6] shadow-sm transition-all duration-300 group-hover:scale-105 group-hover:rotate-2">
                  {item.icon}
                </div>
                <h3 className="mt-6 text-xl font-semibold text-[#3B136B]">{item.title}</h3>
                <p className="mt-4 text-base leading-8 text-[#6F618A]">{item.desc}</p>
                <div className="mt-6 h-1.5 w-full overflow-hidden rounded-full bg-[#F3EDF9]">
                  <div className="h-full w-2/3 rounded-full bg-gradient-to-r from-[#5B21B6] via-[#7C3AED] to-[#D4A017]" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CORE VALUES ── */}
      <section className="relative py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#E9DDFD] bg-[#FAF7FF] px-4 py-2 text-sm font-medium text-[#6B21A8] shadow-sm">
              <span className="h-2 w-2 rounded-full bg-[#D4A017]" />
              What drives us
            </div>
            <h2 className="mt-6 text-4xl font-semibold tracking-tight text-[#3B136B] sm:text-5xl">Our Values</h2>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {values.map((v, index) => (
              <div
                key={v.name}
                className="group rounded-[1.75rem] border border-[#EEE7FA] bg-white/85 p-7 shadow-[0_20px_50px_rgba(76,29,149,0.08)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-[#E8D7A8] hover:shadow-[0_24px_60px_rgba(76,29,149,0.12)]"
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#F1EAFB] bg-gradient-to-br from-[#FAF7FF] via-white to-[#FFF8EA] text-[#5B21B6] shadow-sm transition-all duration-300 group-hover:scale-105 group-hover:rotate-2">
                  {v.icon}
                </div>
                <h3 className="mt-5 text-lg font-semibold text-[#3B136B]">{v.name}</h3>
                <p className="mt-2 text-sm leading-7 text-[#6F618A]">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LEADERSHIP ── */}
      <section className="relative py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#E9DDFD] bg-[#FAF7FF] px-4 py-2 text-sm font-medium text-[#6B21A8] shadow-sm">
              <span className="h-2 w-2 rounded-full bg-[#D4A017]" />
              Our Team
            </div>
            <h2 className="mt-6 text-4xl font-semibold tracking-tight text-[#3B136B] sm:text-5xl">Leadership</h2>
            <p className="mt-5 text-base leading-7 text-[#6F618A]">Guided by knowledge, driven by purpose.</p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {leaders.map((leader) => (
              <div key={leader.id} className="group rounded-[1.75rem] border border-[#EEE7FA] bg-white/85 p-6 shadow-[0_20px_50px_rgba(76,29,149,0.08)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-[#E8D7A8] hover:shadow-[0_24px_60px_rgba(76,29,149,0.12)]">
                <div className="relative aspect-square overflow-hidden rounded-2xl bg-[#F7F3FF]">
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <h3 className="mt-5 text-lg font-semibold text-[#3B136B]">{leader.name}</h3>
                <p className="mt-1 text-sm text-[#C89B3C]">{leader.position}</p>

                <div className="mt-4 flex gap-2">
                  {Object.entries(leader.socials).map(([platform, url]) => (
                    <a
                      key={platform}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#EEE7FA] bg-white text-[#7A63A8] shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#E9D59C] hover:text-[#4C1D95] hover:shadow-md"
                    >
                      {socialIcons[platform]}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative py-24">
        <div className="mx-auto max-w-4xl px-6 text-center sm:px-8">
          <div className="relative overflow-hidden rounded-[2rem] border border-[#E9DDFD] bg-[linear-gradient(135deg,#FAF7FF_0%,#FFFDF7_50%,#F7F3FF_100%)] p-10 shadow-[0_25px_80px_rgba(76,29,149,0.10)] sm:p-14">
            <div className="pointer-events-none absolute -left-10 -top-10 h-40 w-40 rounded-full bg-[#F3E8FF] opacity-60 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-[#FFF5D9] opacity-60 blur-3xl" />

            <div className="relative">
              <h2 className="text-3xl font-semibold tracking-tight text-[#3B136B] sm:text-4xl">
                Be Part of the Journey
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-base leading-7 text-[#6F618A]">
                Join us in spreading knowledge and building a stronger, more connected Ummah.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                <Link href="/sponsorship" className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#4C1D95] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_14px_30px_rgba(76,29,149,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#3B136B]">
                  Get Involved
                  <ArrowIcon className="h-4 w-4" />
                </Link>
                <Link href="/contact" className="inline-flex items-center justify-center rounded-2xl border border-[#E9DDFD] bg-white px-6 py-3.5 text-sm font-semibold text-[#4C1D95] transition-all duration-300 hover:border-[#D4A017]/50 hover:text-[#5B21B6] hover:shadow-sm">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}