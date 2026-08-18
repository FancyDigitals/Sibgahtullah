"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

/* ─── Icons ─── */

const SpinnerIcon = () => (
  <svg className="h-4 w-4 animate-spin" fill="none" viewBox="0 0 24 24">
    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
  </svg>
);

const CheckIcon = () => (
  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

const CheckCircleIcon = () => (
  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const LockIcon = () => (
  <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
  </svg>
);

const MailIcon = () => (
  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const PhoneIcon = () => (
  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

const ArrowUpIcon = () => (
  <svg className="h-5 w-5 transition-transform group-hover:-translate-y-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
  </svg>
);

/* ─── Component ─── */

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribeStatus, setSubscribeStatus] = useState("idle");

  const handleSubscribe = async (e) => {
    e.preventDefault();
    setSubscribeStatus("loading");
    setTimeout(() => {
      setSubscribeStatus("success");
      setEmail("");
      setTimeout(() => setSubscribeStatus("idle"), 3000);
    }, 1500);
  };

  const currentYear = new Date().getFullYear();

  const footerLinks = {
    explore: [
      { name: "Home", href: "/" },
      { name: "About Us", href: "/about" },
      { name: "Lectures", href: "/lectures" },
      { name: "Events", href: "/events" },
      { name: "Blog", href: "/blog" },
      { name: "Contact", href: "/contact" },
    ],
    resources: [
      { name: "Articles & Insights", href: "/articles" },
      { name: "Programs", href: "/programs" },
      { name: "Community", href: "/community" },
      { name: "FAQs", href: "/help" },
      { name: "Support Us", href: "/sponsorship" },
      { name: "Donate", href: "/donate" },
    ],
    legal: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
      { name: "Cookie Policy", href: "/cookies" },
      { name: "Disclaimer", href: "/disclaimer" },
    ],
  };

  const socialLinks = [
    {
      name: "YouTube",
      href: "#",
      icon: (
        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      ),
    },
    {
      name: "X (Twitter)",
      href: "#",
      icon: (
        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
    {
      name: "Instagram",
      href: "#",
      icon: (
        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
    },
    {
      name: "Facebook",
      href: "#",
      icon: (
        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
    },
    {
      name: "WhatsApp",
      href: "#",
      icon: (
        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="relative overflow-hidden border-t border-[#EEE7FA] bg-white">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-[#F3E8FF] opacity-50 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-[#FFF5D9] opacity-50 blur-3xl" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#D4A017]/30 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 pb-8 pt-16 sm:px-6">
        {/* Top grid */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-12">

          {/* Brand */}
          <div className="lg:col-span-4">
            <Link href="/" className="group inline-flex items-center gap-3">
              <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl border border-[#F0E2B6] bg-gradient-to-br from-white via-[#FCF8ED] to-[#F7F1FF] shadow-[0_8px_24px_rgba(212,160,23,0.15)] transition-transform duration-300 group-hover:scale-[1.03]">
                <Image
                  src="/logo1.png"
                  alt="Sibgahtullah Islamic Foundation"
                  width={38}
                  height={38}
                  className="object-contain"
                />
              </div>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#C89B3C]">
                  Sibgahtullah
                </p>
                <p className="text-base font-bold text-[#3B136B]">
                  Islamic Foundation
                </p>
              </div>
            </Link>

            <p className="mt-5 text-sm leading-7 text-[#6F618A]">
              A modern Islamic foundation merging timeless revelation with
              contemporary knowledge for global impact. Building bridges between
              faith and reason.
            </p>

            {/* Social links */}
            <div className="mt-6">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#C89B3C]">
                Connect with us
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#EEE7FA] bg-white text-[#7A63A8] shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#E9D59C] hover:text-[#4C1D95] hover:shadow-md"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Explore */}
          <div className="lg:col-span-2">
            <h3 className="flex items-center gap-2 text-sm font-bold text-[#3B136B] sm:text-base">
              <span className="h-5 w-1 rounded-full bg-[#D4A017]" />
              Explore
            </h3>
            <ul className="mt-5 space-y-3">
              {footerLinks.explore.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-2 text-sm text-[#6F618A] transition-colors duration-300 hover:text-[#4C1D95]"
                  >
                    <span className="h-0.5 w-0 rounded-full bg-[#D4A017] transition-all duration-300 group-hover:w-4" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="lg:col-span-2">
            <h3 className="flex items-center gap-2 text-sm font-bold text-[#3B136B] sm:text-base">
              <span className="h-5 w-1 rounded-full bg-[#D4A017]" />
              Resources
            </h3>
            <ul className="mt-5 space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-2 text-sm text-[#6F618A] transition-colors duration-300 hover:text-[#4C1D95]"
                  >
                    <span className="h-0.5 w-0 rounded-full bg-[#D4A017] transition-all duration-300 group-hover:w-4" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter + Contact */}
          <div className="lg:col-span-4">
            <h3 className="flex items-center gap-2 text-sm font-bold text-[#3B136B] sm:text-base">
              <span className="h-5 w-1 rounded-full bg-[#D4A017]" />
              Stay Updated
            </h3>

            <p className="mt-4 text-sm leading-7 text-[#6F618A]">
              Subscribe to receive the latest lectures, events, and Islamic
              insights directly to your inbox.
            </p>

            <form onSubmit={handleSubscribe} className="mt-4 space-y-3">
              <div className="flex flex-col gap-2 sm:flex-row">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  disabled={subscribeStatus === "loading"}
                  className="flex-1 rounded-2xl border border-[#E9DDFD] bg-white px-4 py-3 text-sm text-[#3B136B] placeholder-[#B8A5D5] outline-none transition-all focus:border-[#7C3AED] focus:shadow-[0_0_0_3px_rgba(124,58,237,0.08)] disabled:opacity-50"
                />
                <button
                  type="submit"
                  disabled={subscribeStatus === "loading"}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#4C1D95] px-5 py-3 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(76,29,149,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#3B136B] disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {subscribeStatus === "loading" ? (
                    <><SpinnerIcon /> Joining…</>
                  ) : subscribeStatus === "success" ? (
                    <><CheckIcon /> Subscribed!</>
                  ) : (
                    "Subscribe"
                  )}
                </button>
              </div>

              {subscribeStatus === "success" && (
                <p className="flex items-center gap-2 text-xs text-emerald-600">
                  <CheckCircleIcon />
                  Thank you for subscribing!
                </p>
              )}

              <p className="flex items-center gap-1.5 text-xs text-[#8C7AAE]">
                <LockIcon />
                We respect your privacy. Unsubscribe anytime.
              </p>
            </form>

            {/* Quick contact */}
            <div className="mt-6 space-y-3 border-t border-[#F1EAFB] pt-6">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#C89B3C]">
                Quick Contact
              </p>

              <a
                href="mailto:info@sibgahtullah.com.ng"
                className="group flex items-center gap-2.5 text-sm text-[#6F618A] transition-colors hover:text-[#4C1D95]"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-xl border border-[#EEE7FA] bg-white text-[#7A63A8] shadow-sm transition-all group-hover:border-[#E9D59C] group-hover:text-[#4C1D95]">
                  <MailIcon />
                </span>
                info@sibgahtullah.com.ng
              </a>

              <a
                href="tel:+2349072404901"
                className="group flex items-center gap-2.5 text-sm text-[#6F618A] transition-colors hover:text-[#4C1D95]"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-xl border border-[#EEE7FA] bg-white text-[#7A63A8] shadow-sm transition-all group-hover:border-[#E9D59C] group-hover:text-[#4C1D95]">
                  <PhoneIcon />
                </span>
                +234 907 240 4901
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="relative my-10">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-[#EEE7FA]" />
          </div>
          <div className="relative flex justify-center">
            <span className="bg-white px-4">
              <div className="h-2 w-2 rounded-full bg-[#D4A017]" />
            </span>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-5 md:flex-row">
          <div className="text-center md:text-left">
            <p className="text-sm text-[#8C7AAE]">
              © {currentYear}{" "}
              <span className="font-semibold text-[#3B136B]">
                SIBGAHTULLAH
              </span>
              . All rights reserved.
            </p>
            <p className="mt-1 text-xs text-[#B8A5D5]">
              Built with care for the Ummah
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-x-5 gap-y-2">
            {footerLinks.legal.map((link, index) => (
              <span key={link.name} className="flex items-center gap-5">
                <Link
                  href={link.href}
                  className="text-sm text-[#8C7AAE] transition-colors duration-300 hover:text-[#4C1D95]"
                >
                  {link.name}
                </Link>
                {index < footerLinks.legal.length - 1 && (
                  <span className="text-[#D8C7F3]">·</span>
                )}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Gold accent bottom line */}
      <div className="h-1 bg-gradient-to-r from-transparent via-[#D4A017]/50 to-transparent" />

      {/* Back to top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
        className="group fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-[#E9DDFD] bg-white text-[#4C1D95] shadow-[0_12px_30px_rgba(76,29,149,0.15)] transition-all duration-300 hover:-translate-y-1 hover:border-[#D4A017]/50 hover:shadow-[0_16px_36px_rgba(76,29,149,0.20)]"
      >
        <ArrowUpIcon />
      </button>
    </footer>
  );
}