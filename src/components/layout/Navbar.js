"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Lectures", href: "/lectures" },
  { name: "Events", href: "/events" },
  { name: "Blog", href: "/blog" },
  { name: "Help", href: "/help" },
  { name: "Contact", href: "/contact" },
];

const linkDescriptions = {
  Home: "Welcome and latest updates",
  About: "Our story and mission",
  Lectures: "Talks and teachings",
  Events: "Programs and gatherings",
  Blog: "Articles and reflections",
  Help: "FAQs and support",
  Contact: "Reach out to our team",
};

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const isActive = (href) =>
    pathname === href || (href !== "/" && pathname.startsWith(href));

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-40 px-3 pt-3 sm:px-5 sm:pt-4">
        <div
          className={`mx-auto max-w-7xl rounded-2xl border transition-all duration-300 ${
            scrolled
              ? "border-[#E9DDFD] bg-white/90 shadow-[0_18px_50px_rgba(76,29,149,0.12)] backdrop-blur-2xl"
              : "border-white/80 bg-white/75 shadow-[0_10px_35px_rgba(76,29,149,0.06)] backdrop-blur-xl"
          }`}
        >
          <nav className="flex h-16 items-center justify-between gap-3 px-4 sm:h-20 sm:px-6">
            {/* Logo */}
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="group relative z-10 flex items-center gap-3"
            >
              <div className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-2xl border border-[#F0E2B6] bg-gradient-to-br from-white via-[#FCF8ED] to-[#F7F1FF] shadow-[0_8px_24px_rgba(212,160,23,0.18)] transition-transform duration-300 group-hover:scale-[1.03]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,160,23,0.18),transparent_38%),radial-gradient(circle_at_bottom_left,rgba(91,33,182,0.12),transparent_40%)]" />
                <Image
                  src="/logo1.png"
                  alt="Sibgahtullah Islamic Foundation"
                  width={34}
                  height={34}
                  className="relative z-10 object-contain"
                />
              </div>

              <div className="hidden min-[420px]:block">
                <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#C89B3C]">
                  Sibgahtullah
                </p>
                <p className="text-sm font-bold tracking-tight text-[#3B136B] sm:text-base">
                  Islamic Foundation
                </p>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden items-center rounded-full border border-[#EEE7FA] bg-[#FAF8FF]/90 p-1 shadow-sm lg:flex">
              {navLinks.map((link) => {
                const active = isActive(link.href);

                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`group relative rounded-full px-4 py-2.5 text-sm font-medium transition-all duration-300 xl:px-5 ${
                      active
                        ? "bg-white text-[#4C1D95] shadow-[0_8px_20px_rgba(91,33,182,0.10)]"
                        : "text-[#6F618A] hover:bg-white/80 hover:text-[#4C1D95]"
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      {link.name}
                      {active && (
                        <span className="h-1.5 w-1.5 rounded-full bg-[#D4A017]" />
                      )}
                    </span>

                    <span
                      className={`absolute bottom-1 left-4 right-4 h-0.5 rounded-full bg-gradient-to-r from-[#5B21B6] to-[#D4A017] transition-transform duration-300 ${
                        active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                      }`}
                    />
                  </Link>
                );
              })}
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-3">
              <Link
                href="/sponsorship"
                className="hidden sm:inline-flex items-center gap-2 rounded-full border border-[#E9D59C] bg-gradient-to-r from-[#FFF8E7] to-[#FFF1C9] px-5 py-2.5 text-sm font-semibold text-[#6C4A00] shadow-[0_12px_28px_rgba(212,160,23,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_34px_rgba(212,160,23,0.24)]"
              >
                <span>Become a Sponsor</span>
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>

              {/* Mobile menu button */}
              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
                aria-expanded={isOpen}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#E9DDFD] bg-white text-[#4C1D95] shadow-sm transition-all duration-300 hover:border-[#E9D59C] hover:text-[#D4A017] lg:hidden"
              >
                <div className="flex h-5 w-5 flex-col justify-between">
                  <span
                    className={`h-0.5 w-full rounded-full bg-current transition-all duration-300 ${
                      isOpen ? "translate-y-[9px] rotate-45" : ""
                    }`}
                  />
                  <span
                    className={`h-0.5 w-full rounded-full bg-current transition-all duration-300 ${
                      isOpen ? "opacity-0" : ""
                    }`}
                  />
                  <span
                    className={`h-0.5 w-full rounded-full bg-current transition-all duration-300 ${
                      isOpen ? "-translate-y-[9px] -rotate-45" : ""
                    }`}
                  />
                </div>
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-50 bg-[#2B0F46]/15 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile drawer */}
      <aside
        className={`fixed right-0 top-0 z-[60] h-screen w-full max-w-sm border-l border-[#EEE2C2] bg-white/95 shadow-[0_20px_60px_rgba(76,29,149,0.18)] backdrop-blur-2xl transition-transform duration-300 lg:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col">
          {/* Drawer header */}
          <div className="flex items-center justify-between border-b border-[#F1EAFB] px-5 py-5">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-[#F0E2B6] bg-gradient-to-br from-white via-[#FCF8ED] to-[#F7F1FF] shadow-[0_8px_20px_rgba(212,160,23,0.15)]">
                <Image
                  src="/logo1.png"
                  alt="Sibgahtullah Islamic Foundation"
                  width={30}
                  height={30}
                  className="object-contain"
                />
              </div>

              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#C89B3C]">
                  Navigation
                </p>
                <p className="text-sm font-bold text-[#3B136B]">
                  Explore the site
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#F1EAFB] text-[#7A63A8] transition-colors hover:text-[#4C1D95]"
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
          </div>

          {/* Mobile links */}
          <nav className="flex-1 overflow-y-auto px-5 py-6">
            <div className="space-y-2">
              {navLinks.map((link, index) => {
                const active = isActive(link.href);

                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`group flex items-center justify-between rounded-2xl border px-4 py-4 transition-all duration-300 ${
                      active
                        ? "border-[#E7DAFF] bg-[#F7F3FF] text-[#4C1D95] shadow-[0_10px_30px_rgba(91,33,182,0.08)]"
                        : "border-transparent bg-white text-[#6F618A] hover:border-[#F0E8FB] hover:bg-[#FAF8FF] hover:text-[#4C1D95]"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <span
                        className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold ${
                          active
                            ? "bg-white text-[#D4A017] shadow-sm"
                            : "bg-[#FAF6E8] text-[#C89B3C]"
                        }`}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <div>
                        <p className="text-base font-semibold">{link.name}</p>
                        <p className="text-xs text-[#9A8BB8]">
                          {linkDescriptions[link.name]}
                        </p>
                      </div>
                    </div>

                    <svg
                      className={`h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 ${
                        active ? "text-[#D4A017]" : "text-[#CAB7E8]"
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                );
              })}
            </div>
          </nav>

          {/* Drawer footer */}
          <div className="border-t border-[#F1EAFB] p-5">
            <div className="rounded-3xl border border-[#F0E2B6] bg-[linear-gradient(135deg,#FFFDF8_0%,#FAF6FF_100%)] p-5 shadow-[0_15px_35px_rgba(76,29,149,0.06)]">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#C89B3C]">
                Support the mission
              </p>
              <h3 className="mt-2 text-lg font-semibold text-[#3B136B]">
                Help us grow the impact
              </h3>
              <p className="mt-1 text-sm leading-6 text-[#7B6B98]">
                Your sponsorship helps lectures, events, and community programs
                reach more people.
              </p>

              <Link
                href="/sponsorship"
                onClick={() => setIsOpen(false)}
                className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[#4C1D95] px-4 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#3B136B]"
              >
                <span>Become a Sponsor</span>
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}