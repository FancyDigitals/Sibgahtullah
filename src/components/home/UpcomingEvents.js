"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Container from "../ui/Container";

/* ─── SVG Icon Components ─── */

const CalendarIcon = ({ className = "h-5 w-5" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
  </svg>
);

const BookOpenIcon = ({ className = "h-5 w-5" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
  </svg>
);

const MicrophoneIcon = ({ className = "h-5 w-5" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
  </svg>
);

const UsersIcon = ({ className = "h-5 w-5" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
  </svg>
);

const MapPinIcon = ({ className = "h-3.5 w-3.5" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
  </svg>
);

const ClockIcon = ({ className = "h-3.5 w-3.5" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const UserIcon = ({ className = "h-3.5 w-3.5" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
  </svg>
);

const StarIcon = ({ className = "h-3.5 w-3.5" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" />
  </svg>
);

const BellIcon = ({ className = "h-7 w-7" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
  </svg>
);

const ArrowIcon = ({ className = "h-4 w-4" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
);

const EmptyCalendarIcon = ({ className = "h-16 w-16" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
  </svg>
);

/* ─── Component ─── */

export default function UpcomingEvents() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeFilter, setActiveFilter] = useState("all");

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const events = [
    {
      id: 1,
      title: "Understanding The Quran",
      location: "Islamic Center",
      city: "London, UK",
      date: "Dec 15, 2024",
      time: "7:00 PM",
      day: "15",
      month: "DEC",
      type: "lecture",
      speaker: "Ustadh Ahmad",
      spots: 45,
      featured: true,
    },
    {
      id: 2,
      title: "Youth Conference 2024",
      location: "Grand Hall",
      city: "Manchester, UK",
      date: "Dec 22, 2024",
      time: "10:00 AM",
      day: "22",
      month: "DEC",
      type: "conference",
      speaker: "Multiple Speakers",
      spots: 200,
      featured: false,
    },
    {
      id: 3,
      title: "Family Day Gathering",
      location: "Community Park",
      city: "Birmingham, UK",
      date: "Dec 28, 2024",
      time: "12:00 PM",
      day: "28",
      month: "DEC",
      type: "gathering",
      speaker: "Community Event",
      spots: 150,
      featured: false,
    },
  ];

  const filters = [
    { id: "all", label: "All Events", icon: <CalendarIcon className="h-4 w-4" /> },
    { id: "lecture", label: "Lectures", icon: <BookOpenIcon className="h-4 w-4" /> },
    { id: "conference", label: "Conferences", icon: <MicrophoneIcon className="h-4 w-4" /> },
    { id: "gathering", label: "Gatherings", icon: <UsersIcon className="h-4 w-4" /> },
  ];

  const filteredEvents =
    activeFilter === "all"
      ? events
      : events.filter((e) => e.type === activeFilter);

  return (
    <section className="relative overflow-hidden bg-white py-24 sm:py-28">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-[#F3E8FF] opacity-70 blur-3xl" />
        <div className="absolute bottom-10 right-0 h-72 w-72 rounded-full bg-[#FFF5D9] opacity-60 blur-3xl" />
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-[#F3E8FF] opacity-40 blur-3xl" />

        <svg className="absolute inset-0 h-full w-full opacity-[0.035] text-[#7C3AED]">
          <pattern id="events-dots" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="20" cy="20" r="1" fill="currentColor" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#events-dots)" />
        </svg>

        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#D4A017]/30 to-transparent" />
      </div>

      <Container>
        <div className="relative z-10">
          {/* Heading */}
          <div className="mx-auto max-w-3xl text-center">

            <h2 className="mt-6 text-4xl font-semibold tracking-tight text-[#3B136B] sm:text-5xl lg:text-6xl">
              <span
                className={`inline-block transition-all duration-700 delay-100 ${
                  isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}
              >
                Upcoming Events
              </span>
            </h2>

            <p className="mt-5 text-base leading-7 text-[#6F618A] sm:text-lg sm:leading-8">
              <span
                className={`inline-block transition-all duration-700 delay-200 ${
                  isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}
              >
                Join gatherings, lectures, and community events near you — where
                faith meets fellowship.
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

          {/* Filters */}
          <div
            className={`mb-12 mt-10 transition-all duration-700 delay-100 ${
              isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <div className="flex justify-center">
              <div className="inline-flex flex-wrap justify-center gap-2 rounded-2xl border border-[#EEE7FA] bg-[#FAF8FF]/90 p-1.5 shadow-sm">
                {filters.map((filter) => (
                  <button
                    key={filter.id}
                    onClick={() => setActiveFilter(filter.id)}
                    className={`flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium transition-all duration-300 ${
                      activeFilter === filter.id
                        ? "bg-[#4C1D95] text-white shadow-[0_8px_20px_rgba(76,29,149,0.20)]"
                        : "text-[#6F618A] hover:bg-white hover:text-[#4C1D95]"
                    }`}
                  >
                    {filter.icon}
                    <span className="hidden sm:inline">{filter.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Events Grid */}
          <div className="grid gap-6 md:grid-cols-3">
            {filteredEvents.map((event, index) => (
              <article
                key={event.id}
                className={`group relative flex flex-col overflow-hidden rounded-[1.75rem] border border-[#EEE7FA] bg-white/85 shadow-[0_20px_50px_rgba(76,29,149,0.08)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-[#E8D7A8] hover:shadow-[0_24px_60px_rgba(76,29,149,0.12)] ${
                  event.featured ? "md:col-span-2" : ""
                }`}
                style={{
                  transform: isLoaded ? "translateY(0)" : "translateY(24px)",
                  opacity: isLoaded ? 1 : 0,
                  transition: `all 0.5s ease ${index * 100}ms`,
                }}
              >
                {/* subtle glow */}
                <div className="absolute inset-0 rounded-[1.75rem] bg-[radial-gradient(circle_at_top_right,rgba(212,160,23,0.10),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(91,33,182,0.08),transparent_35%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="relative flex flex-1 flex-col p-6 sm:p-7">
                  {/* Featured badge */}
                  {event.featured && (
                    <div className="mb-5 inline-flex w-fit items-center gap-1.5 rounded-full border border-[#F0E2B6] bg-[#FFF9EC] px-3 py-1.5 text-xs font-semibold text-[#C89B3C]">
                      <StarIcon className="h-3.5 w-3.5" />
                      Featured Event
                    </div>
                  )}

                  <div className={`flex gap-5 ${event.featured ? "flex-col sm:flex-row sm:items-start" : "flex-col"}`}>
                    {/* Date box */}
                    <div className="flex shrink-0 items-center gap-4 sm:flex-col sm:items-center sm:gap-0">
                      <div className="flex h-20 w-20 flex-col items-center justify-center rounded-2xl border border-[#F1EAFB] bg-gradient-to-br from-[#FAF7FF] via-white to-[#FFF8EA] shadow-sm transition-all duration-300 group-hover:scale-105 group-hover:rotate-1">
                        <span className="text-2xl font-bold leading-none text-[#3B136B]">
                          {event.day}
                        </span>
                        <span className="mt-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#C89B3C]">
                          {event.month}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-[#3B136B] transition-colors duration-300 group-hover:text-[#4C1D95]">
                        {event.title}
                      </h3>

                      <p className="mt-1 text-sm text-[#8C7AAE]">
                        {event.location} · {event.date}
                      </p>

                      {/* Detail tags */}
                      <div className="mt-4 flex flex-wrap gap-2">
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-[#EEE7FA] bg-[#FAF8FF] px-3 py-1.5 text-xs font-medium text-[#6F618A]">
                          <MapPinIcon />
                          {event.city}
                        </span>
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-[#EEE7FA] bg-[#FAF8FF] px-3 py-1.5 text-xs font-medium text-[#6F618A]">
                          <ClockIcon />
                          {event.time}
                        </span>
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-[#F5E7BE] bg-[#FFFDF7] px-3 py-1.5 text-xs font-medium text-[#C89B3C]">
                          <UserIcon />
                          {event.speaker}
                        </span>
                      </div>

                      {/* Spots */}
                      <div className="mt-5">
                        <div className="mb-2 flex items-center justify-between text-xs text-[#8C7AAE]">
                          <span>{event.spots} spots remaining</span>
                          <span className="font-medium text-[#5B21B6]">
                            {Math.round((event.spots / 200) * 100)}% available
                          </span>
                        </div>
                        <div className="h-1.5 w-full overflow-hidden rounded-full bg-[#F3EDF9]">
                          <div
                            className="h-full rounded-full bg-gradient-to-r from-[#5B21B6] via-[#7C3AED] to-[#D4A017] transition-all duration-1000"
                            style={{
                              width: `${100 - (event.spots / 200) * 100}%`,
                            }}
                          />
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                        <button className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#4C1D95] px-5 py-3 text-sm font-semibold text-white shadow-[0_14px_30px_rgba(76,29,149,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#3B136B]">
                          Register Now
                          <ArrowIcon />
                        </button>
                        <button className="text-sm font-medium text-[#7C3AED] transition-colors hover:text-[#4C1D95]">
                          View Details →
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Empty State */}
          {filteredEvents.length === 0 && (
            <div className="py-20 text-center">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl border border-[#EEE7FA] bg-[#FAF8FF] text-[#8C7AAE]">
                <EmptyCalendarIcon />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-[#3B136B]">
                No events found
              </h3>
              <p className="mt-2 text-sm text-[#6F618A]">
                Check back soon for upcoming events in this category.
              </p>
              <button
                onClick={() => setActiveFilter("all")}
                className="mt-5 inline-flex items-center gap-2 rounded-2xl border border-[#E9DDFD] bg-white px-5 py-2.5 text-sm font-semibold text-[#4C1D95] transition-all hover:border-[#D4A017]/50 hover:shadow-sm"
              >
                View All Events
              </button>
            </div>
          )}

          {/* View All CTA */}
          <div
            className={`mt-12 text-center transition-all duration-700 delay-500 ${
              isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <Link
              href="/events"
              className="inline-flex items-center gap-2 rounded-2xl border border-[#E9DDFD] bg-white px-6 py-3.5 text-sm font-semibold text-[#4C1D95] transition-all duration-300 hover:border-[#D4A017]/50 hover:text-[#5B21B6] hover:shadow-sm"
            >
              <span>View All Events</span>
              <ArrowIcon className="h-5 w-5" />
            </Link>
          </div>

          {/* Newsletter CTA */}
          <div
            className={`mt-14 transition-all duration-700 delay-600 sm:mt-16 ${
              isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <div className="relative overflow-hidden rounded-[2rem] border border-[#E9DDFD] bg-[linear-gradient(135deg,#FAF7FF_0%,#FFFDF7_50%,#F7F3FF_100%)] p-8 shadow-[0_25px_80px_rgba(76,29,149,0.10)] sm:p-12">
              {/* glow */}
              <div className="pointer-events-none absolute -left-10 -top-10 h-40 w-40 rounded-full bg-[#F3E8FF] opacity-60 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-[#FFF5D9] opacity-60 blur-3xl" />

              <div className="relative z-10 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-3xl border border-[#F0E2B6] bg-[#FFF9EC] text-[#C89B3C] shadow-sm">
                  <BellIcon />
                </div>

                <h3 className="mt-6 text-2xl font-semibold text-[#3B136B]">
                  Never Miss an Event
                </h3>
                <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-[#6F618A]">
                  Get notified about upcoming lectures, conferences, and community
                  gatherings delivered to your inbox.
                </p>

                <div className="mx-auto mt-7 flex max-w-md flex-col gap-3 sm:flex-row">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 rounded-2xl border border-[#E9DDFD] bg-white px-5 py-3.5 text-sm text-[#3B136B] placeholder-[#B8A5D5] outline-none transition-all focus:border-[#7C3AED] focus:shadow-[0_0_0_3px_rgba(124,58,237,0.08)]"
                  />
                  <button className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#4C1D95] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_14px_30px_rgba(76,29,149,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#3B136B]">
                    Subscribe
                  </button>
                </div>

                <p className="mt-5 text-xs text-[#8C7AAE]">
                  Join 5,000+ subscribers · Unsubscribe anytime
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}