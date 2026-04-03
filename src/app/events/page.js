"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function EventsPage() {
  const [filter, setFilter] = useState("all");
  const [viewMode, setViewMode] = useState("grid"); // grid or list

  const events = [
    {
      slug: "faith-conference-2026",
      title: "Faith Conference 2026",
      desc: "A powerful gathering focused on strengthening faith and clarity.",
      location: "Lagos, Nigeria",
      date: "March 30, 2026",
      time: "10:00 AM",
      category: "Conference",
      attendees: "500+",
      status: "upcoming",
      featured: true,
    },
    {
      slug: "youth-empowerment",
      title: "Youth Empowerment Summit",
      desc: "Equipping young Muslims with purpose, discipline, and direction.",
      location: "Abuja, Nigeria",
      date: "April 12, 2026",
      time: "12:00 PM",
      category: "Summit",
      attendees: "300+",
      status: "upcoming",
      featured: false,
    },
    {
      slug: "knowledge-series",
      title: "Knowledge Series",
      desc: "Weekly sessions focused on deep Islamic teachings.",
      location: "Online",
      date: "Every Friday",
      time: "6:00 PM",
      category: "Weekly",
      attendees: "200+",
      status: "recurring",
      featured: false,
    },
    {
      slug: "ramadan-special",
      title: "Ramadan Special Program",
      desc: "Daily reminders and reflections throughout Ramadan.",
      location: "Ibadan, Nigeria",
      date: "Ramadan 2026",
      time: "After Maghrib",
      category: "Special",
      attendees: "1000+",
      status: "upcoming",
      featured: true,
    },
    {
      slug: "community-outreach",
      title: "Community Outreach",
      desc: "Supporting communities through education and charity.",
      location: "Kano, Nigeria",
      date: "May 5, 2026",
      time: "9:00 AM",
      category: "Outreach",
      attendees: "150+",
      status: "upcoming",
      featured: false,
    },
    {
      slug: "leadership-training",
      title: "Leadership Training",
      desc: "Developing strong Muslim leaders for the future.",
      location: "Online",
      date: "June 2026",
      time: "TBA",
      category: "Training",
      attendees: "100+",
      status: "upcoming",
      featured: false,
    },
  ];

  const filteredEvents = events.filter((event) => {
    if (filter === "all") return true;
    return event.status === filter;
  });

  return (
    <main className="min-h-screen bg-gradient-to-b from-primary via-dark to-primary text-white">
      
      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gold rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gold rounded-full blur-3xl animate-pulse delay-700"></div>
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 text-center">
          {/* Breadcrumb */}
          <div className="flex items-center justify-center gap-2 text-sm text-gray-400 mb-6">
            <Link href="/" className="hover:text-gold transition">Home</Link>
            <span>/</span>
            <span className="text-gold">Events</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gold via-yellow-300 to-gold bg-clip-text text-transparent">
              Upcoming Events
            </span>
          </h1>

          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Join our gatherings, lectures, and impactful community programs designed to strengthen faith and build community.
          </p>

          {/* Stats Bar */}
          <div className="mt-12 grid grid-cols-3 gap-4 max-w-2xl mx-auto">
            <div className="bg-dark/50 backdrop-blur-sm border border-gold/20 rounded-xl p-4">
              <div className="text-2xl sm:text-3xl font-bold text-gold">{events.length}</div>
              <div className="text-xs sm:text-sm text-gray-400 mt-1">Total Events</div>
            </div>
            <div className="bg-dark/50 backdrop-blur-sm border border-gold/20 rounded-xl p-4">
              <div className="text-2xl sm:text-3xl font-bold text-gold">2K+</div>
              <div className="text-xs sm:text-sm text-gray-400 mt-1">Attendees</div>
            </div>
            <div className="bg-dark/50 backdrop-blur-sm border border-gold/20 rounded-xl p-4">
              <div className="text-2xl sm:text-3xl font-bold text-gold">12+</div>
              <div className="text-xs sm:text-sm text-gray-400 mt-1">Cities</div>
            </div>
          </div>
        </div>
      </section>

      {/* FILTER & VIEW CONTROLS */}
      <section className="sticky top-16 sm:top-20 z-40 bg-primary/95 backdrop-blur-xl border-y border-gray-800/50 py-4 shadow-lg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
            
            {/* Filter Buttons */}
            <div className="flex gap-2 overflow-x-auto pb-2 sm:pb-0 scrollbar-hide">
              {[
                { label: "All Events", value: "all" },
                { label: "Upcoming", value: "upcoming" },
                { label: "Recurring", value: "recurring" },
              ].map((tab) => (
                <button
                  key={tab.value}
                  onClick={() => setFilter(tab.value)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                    filter === tab.value
                      ? "bg-gold text-black shadow-[0_0_20px_rgba(245,166,35,0.3)]"
                      : "bg-dark/50 text-gray-400 hover:text-gold hover:bg-dark border border-gray-800"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center gap-2 bg-dark/50 border border-gray-800 rounded-lg p-1">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded transition-all ${
                  viewMode === "grid" ? "bg-gold text-black" : "text-gray-400 hover:text-gold"
                }`}
                aria-label="Grid view"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 rounded transition-all ${
                  viewMode === "list" ? "bg-gold text-black" : "text-gray-400 hover:text-gold"
                }`}
                aria-label="List view"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-4 text-sm text-gray-400">
            Showing <span className="text-gold font-semibold">{filteredEvents.length}</span> event{filteredEvents.length !== 1 ? 's' : ''}
          </div>
        </div>
      </section>

      {/* EVENTS GRID/LIST */}
      <section className="py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          
          {filteredEvents.length === 0 ? (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">📅</div>
              <p className="text-gray-400 text-lg">No events found</p>
            </div>
          ) : (
            <div className={viewMode === "grid" 
              ? "grid sm:grid-cols-2 lg:grid-cols-3 gap-6" 
              : "space-y-6"
            }>
              {filteredEvents.map((event, index) => (
                <Link 
                  key={event.slug} 
                  href={`/events/${event.slug}`}
                  className="block group"
                  style={{
                    animation: "fadeInUp 0.5s ease-out",
                    animationDelay: `${index * 0.1}s`,
                    animationFillMode: "both",
                  }}
                >
                  <div className={`relative bg-gradient-to-br from-dark to-dark/50 border border-gray-800 rounded-2xl overflow-hidden hover:border-gold transition-all duration-300 hover:shadow-[0_0_30px_rgba(245,166,35,0.2)] hover:-translate-y-1 h-full ${
                    viewMode === "list" ? "flex flex-col sm:flex-row" : ""
                  }`}>
                    
                    {/* Featured Badge */}
                    {event.featured && (
                      <div className="absolute top-4 left-4 z-10 bg-gold text-black px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                        <span>⭐</span>
                        <span>Featured</span>
                      </div>
                    )}

                    {/* Image */}
                    <div className={`relative bg-gradient-to-br from-gold/20 to-primary/20 overflow-hidden ${
                      viewMode === "list" ? "sm:w-64 h-48 sm:h-auto" : "h-48"
                    }`}>
                      {/* Placeholder pattern */}
                      <div className="absolute inset-0 opacity-10">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(245,166,35,0.3),transparent_50%)]"></div>
                      </div>

                      {/* Category Badge */}
                      <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm text-gold px-3 py-1 rounded-full text-xs font-semibold border border-gold/30">
                        {event.category}
                      </div>

                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                          <div className="inline-flex items-center gap-2 bg-gold text-black px-4 py-2 rounded-full font-semibold text-sm">
                            <span>View Details</span>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className={`p-5 sm:p-6 flex flex-col ${viewMode === "list" ? "flex-1" : ""}`}>
                      
                      {/* Title */}
                      <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-gold transition-colors mb-3 line-clamp-2">
                        {event.title}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-2 flex-grow">
                        {event.desc}
                      </p>

                      {/* Event Details */}
                      <div className="space-y-2 mb-5">
                        <div className="flex items-center gap-3 text-sm text-gray-400">
                          <span className="text-base">📍</span>
                          <span className="truncate">{event.location}</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm text-gray-400">
                          <span className="text-base">📅</span>
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm text-gray-400">
                          <span className="text-base">⏰</span>
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm text-gray-400">
                          <span className="text-base">👥</span>
                          <span>{event.attendees} expected</span>
                        </div>
                      </div>

                      {/* CTA Button */}
                      <button className="w-full bg-gradient-to-r from-gold to-yellow-600 text-black py-3 rounded-lg text-sm font-bold hover:shadow-[0_0_25px_rgba(245,166,35,0.4)] transition-all duration-300 transform group-hover:scale-105 flex items-center justify-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Register Now</span>
                      </button>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 border-t border-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Don't See What You're Looking For?
          </h2>
          <p className="text-gray-400 mb-8">
            Stay updated with our latest events and programs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-gold text-black px-8 py-4 rounded-lg font-bold hover:shadow-[0_0_25px_rgba(245,166,35,0.4)] transition-all duration-300"
            >
              Contact Us
            </Link>
            <button className="border-2 border-gold text-gold px-8 py-4 rounded-lg font-bold hover:bg-gold hover:text-black transition-all duration-300">
              Subscribe to Updates
            </button>
          </div>
        </div>
      </section>

      {/* Animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }

        .delay-700 {
          animation-delay: 700ms;
        }
      `}</style>
    </main>
  );
}