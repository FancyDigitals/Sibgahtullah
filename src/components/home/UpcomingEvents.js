"use client";

import { useState, useEffect } from "react";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";

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
      image: "📖",
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
      image: "🎤",
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
      image: "👨‍👩‍👧‍👦",
      featured: false,
    },
  ];

  const filters = [
    { id: "all", label: "All Events", icon: "📅" },
    { id: "lecture", label: "Lectures", icon: "📖" },
    { id: "conference", label: "Conferences", icon: "🎤" },
    { id: "gathering", label: "Gatherings", icon: "👥" },
  ];

  const filteredEvents = activeFilter === "all" 
    ? events 
    : events.filter(e => e.type === activeFilter);

  return (
    <section className="py-20 bg-gradient-to-b from-purple-50 via-white to-purple-50">
      
      {/* Decorative Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-72 md:w-96 h-72 md:h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 md:w-96 h-72 md:h-96 bg-purple-600/10 rounded-full blur-3xl" />
        
        {/* Subtle Pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.03]">
          <pattern id="events-grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="20" cy="20" r="1" fill="currentColor" className="text-purple-500" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#events-grid)" />
        </svg>
      </div>

      <Container>

        {/* Section Badge */}

        <SectionTitle 
          title="Upcoming Events"
          subtitle="Join gatherings and lectures near you"
        />

        {/* Filter Tabs - Mobile Scroll */}
        <div className={`mt-8 mb-10 transition-all duration-700 delay-100 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex justify-center">
            <div className="inline-flex flex-wrap justify-center gap-2 md:gap-3 p-1.5 bg-white rounded-2xl shadow-sm border border-gray-100">
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`flex items-center gap-1.5 md:gap-2 px-3 md:px-5 py-2 md:py-2.5 rounded-xl text-xs md:text-sm font-medium transition-all duration-300 ${
                    activeFilter === filter.id
                      ? 'bg-gradient-to-r from-purple-600 to-purple-700 text-white shadow-lg shadow-purple-500/25'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <span className="text-base md:text-lg">{filter.icon}</span>
                  <span className="hidden sm:inline">{filter.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {filteredEvents.map((event, index) => (
            <div 
              key={event.id} 
              className={`group border rounded-xl p-5 bg-white hover:shadow-xl hover:shadow-purple-500/10 hover:border-purple-500/30 transition-all duration-500 ${
                event.featured ? 'md:col-span-2 md:row-span-1' : ''
              }`}
              style={{
                transform: isLoaded ? 'translateY(0)' : 'translateY(20px)',
                opacity: isLoaded ? 1 : 0,
                transition: `all 0.5s ease ${index * 100}ms`
              }}
            >
              
              {/* Featured Badge */}
              {event.featured && (
                <div className="mb-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-purple-500 to-purple-600 text-white text-xs font-medium">
                  <span>⭐</span>
                  <span>Featured Event</span>
                </div>
              )}

              <div className={`flex flex-col ${event.featured ? 'md:flex-row md:gap-6' : ''}`}>
                
                {/* Date Box */}
                <div className={`flex items-start gap-4 ${event.featured ? 'md:flex-col md:items-center' : ''}`}>
                  <div className="shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-700 flex flex-col items-center justify-center text-white shadow-lg shadow-purple-500/30 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-xl md:text-2xl font-bold leading-none">{event.day}</span>
                    <span className="text-xs font-medium opacity-80">{event.month}</span>
                  </div>

                  {/* Mobile: Title next to date */}
                  <div className={`flex-1 ${event.featured ? 'md:hidden' : 'hidden'}`}>
                    <h3 className="font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">
                      {event.title}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">
                      {event.location}
                    </p>
                  </div>
                </div>

                {/* Content */}
                <div className={`flex-1 ${event.featured ? '' : 'mt-4'}`}>
                  <h3 className={`font-semibold text-gray-900 group-hover:text-purple-600 transition-colors ${event.featured ? 'hidden md:block text-xl' : ''}`}>
                    {event.title}
                  </h3>
                  
                  <p className={`text-sm text-gray-500 mt-1 ${event.featured ? 'hidden md:block' : ''}`}>
                    {event.location} • {event.date}
                  </p>

                  {/* Event Details */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="inline-flex items-center gap-1 px-2 py-1 rounded-lg bg-gray-100 text-gray-600 text-xs">
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {event.city}
                    </span>
                    <span className="inline-flex items-center gap-1 px-2 py-1 rounded-lg bg-gray-100 text-gray-600 text-xs">
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {event.time}
                    </span>
                    <span className="inline-flex items-center gap-1 px-2 py-1 rounded-lg bg-purple-100 text-purple-600 text-xs">
                      <span>👤</span>
                      {event.speaker}
                    </span>
                  </div>

                  {/* Spots Remaining */}
                  <div className="mt-4">
                    <div className="flex justify-between items-center text-xs text-gray-500 mb-1.5">
                      <span>{event.spots} spots remaining</span>
                      <span className="text-purple-600 font-medium">
                        {Math.round((event.spots / 200) * 100)}% available
                      </span>
                    </div>
                    <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-purple-500 to-purple-600 rounded-full transition-all duration-1000"
                        style={{ width: `${100 - (event.spots / 200) * 100}%` }}
                      />
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="mt-5 flex flex-col sm:flex-row gap-2 sm:gap-3">
                    <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-xl text-sm font-medium hover:shadow-lg hover:shadow-purple-500/25 active:scale-95 transition-all">
                      <span>Register Now</span>
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </button>
                    <button className="mt-4 text-primary text-sm">
                      View Details →
                    </button>
                  </div>
                </div>

              </div>

              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden rounded-tr-xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-purple-500/10 to-transparent" />
              </div>

            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredEvents.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">📅</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No events found</h3>
            <p className="text-gray-500">Check back soon for upcoming events in this category</p>
            <button 
              onClick={() => setActiveFilter("all")}
              className="mt-4 px-4 py-2 bg-purple-100 text-purple-600 rounded-lg hover:bg-purple-200 transition"
            >
              View All Events
            </button>
          </div>
        )}

        {/* View All Link */}
        <div className={`mt-10 md:mt-12 text-center transition-all duration-700 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <a 
            href="/events"
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-purple-500 text-purple-600 rounded-xl font-semibold hover:bg-purple-50 active:scale-95 transition-all group"
          >
            <span>View All Events</span>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

        {/* Newsletter CTA - Mobile Optimized */}
        <div className={`mt-12 md:mt-16 bg-gradient-to-r from-purple-600 to-purple-800 rounded-2xl md:rounded-3xl p-6 md:p-10 text-center relative overflow-hidden transition-all duration-700 delay-600 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          
          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-40 h-40 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
          
          <div className="relative z-10">
            <div className="text-4xl md:text-5xl mb-4">🔔</div>
            <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Never Miss an Event</h3>
            <p className="text-purple-200 text-sm md:text-base mb-6 max-w-md mx-auto">
              Get notified about upcoming lectures, conferences, and community gatherings
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-purple-200 focus:outline-none focus:border-white/40 transition text-sm md:text-base"
              />
              <button className="px-6 py-3 bg-white text-purple-700 rounded-xl font-semibold hover:bg-purple-50 active:scale-95 transition-all whitespace-nowrap text-sm md:text-base">
                Subscribe
              </button>
            </div>

            <p className="mt-4 text-purple-300 text-xs">
              Join 5,000+ subscribers • Unsubscribe anytime
            </p>
          </div>
        </div>

      </Container>
    </section>
  );
}