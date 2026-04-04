"use client";

import { lectures } from "@/data/lectures";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function LecturesPage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Get YouTube thumbnail URL
  const getThumbnail = (videoId: string, platform: string) => {
    if (platform === "youtube") {
      return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
    }
    return null;
  };

  // Filter lectures based on search and category
  const filteredLectures = lectures.filter((lecture) => {
    const matchesSearch = lecture.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lecture.desc.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lecture.speaker.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All Categories" || lecture.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = ["All Categories", "Faith", "Knowledge", "Spirituality"];

  return (
    <main className="bg-primary text-white">

      {/* Decorative Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gold/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-40 right-20 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/3 rounded-full blur-3xl" />
        
        {/* Grid Pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.02]">
          <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="1"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* HERO */}
      <section className="py-24 text-center">
        <div className="max-w-4xl mx-auto px-6">

          {/* Decorative Badge */}
          <h1 className="text-5xl md:text-6xl font-bold text-gold">
            <span className={`inline-block transition-all duration-700 delay-100 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              Lectures
            </span>
          </h1>

          <p className="mt-6 text-gray-300 text-lg">
            <span className={`inline-block transition-all duration-700 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              Explore powerful teachings designed to inspire knowledge and strengthen faith.
            </span>
          </p>

        </div>
      </section>

      {/* SEARCH + FILTER */}
      <section className="pb-12">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row gap-4 justify-between items-center">

          {/* Search with Icon */}
          <div className="relative w-full md:w-1/3">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">🔍</span>
            <input
              type="text"
              placeholder="Search lectures..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full md:w-full px-4 py-3 pl-12 rounded-lg bg-dark border border-gray-800 focus:outline-none text-sm focus:border-gold transition"
            />
          </div>

          <div className="flex gap-4 items-center">
            {/* Category Pills */}
            <div className="hidden lg:flex gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm transition-all ${
                    selectedCategory === cat
                      ? 'bg-gold text-black font-semibold'
                      : 'bg-dark border border-gray-800 text-gray-400 hover:border-gold/50'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <select 
              className="px-4 py-3 rounded-lg bg-dark border border-gray-800 text-sm focus:border-gold lg:hidden"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories.map((cat) => (
                <option key={cat}>{cat}</option>
              ))}
            </select>

            {/* View Toggle */}
            <div className="flex bg-dark border border-gray-800 rounded-lg overflow-hidden">
              <button className="px-3 py-2 bg-gold/20 text-gold">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
              </button>
              <button className="px-3 py-2 text-gray-500 hover:text-gray-300">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* Results Count */}
      <section className="pb-6">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-gray-500 text-sm">
            Showing <span className="text-gold font-semibold">{filteredLectures.length}</span> lectures
            {selectedCategory !== "All Categories" && (
              <span> in <span className="text-gold">{selectedCategory}</span></span>
            )}
          </p>
        </div>
      </section>

      {/* GRID */}
      <section className="pb-24">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">

          {filteredLectures.map((lecture, index) => (
            <Link key={lecture.slug} href={`/lectures/${lecture.slug}`}>
              
              <div 
                className="group cursor-pointer bg-dark border border-gray-800 rounded-2xl overflow-hidden hover:border-gold transition duration-300"
                style={{ 
                  animationDelay: `${index * 100}ms`,
                  transform: isLoaded ? 'translateY(0)' : 'translateY(20px)',
                  opacity: isLoaded ? 1 : 0,
                  transition: `all 0.5s ease ${index * 100}ms`
                }}
              >

                {/* Thumbnail */}
                <div className="h-48 bg-gray-800 relative overflow-hidden">

                  {/* Video Thumbnail */}
                  {lecture.platform === "local" ? (
  <img
    src={lecture.thumbnail}
    alt={lecture.title}
    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
  />
) : (
  <img
    src={getThumbnail(lecture.videoId, lecture.platform) || "/fallback.jpg"}
    alt={lecture.title}
    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
  />
)}

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent" />

                  {/* Platform Badge */}
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <span className="px-2 py-1 rounded-md bg-black/60 backdrop-blur-sm text-xs text-white flex items-center gap-1">
                      {lecture.platform === "youtube" ? (
                        <>
                          <svg className="w-4 h-4 text-red-500" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                          </svg>
                          YouTube
                        </>
                      ) : (
                        <>📱 TikTok</>
                      )}
                    </span>
                  </div>

                  {/* Duration Badge */}
                  <div className="absolute top-3 right-3">
                    <span className="px-2 py-1 rounded-md bg-black/60 backdrop-blur-sm text-xs text-gold">
                      {lecture.duration}
                    </span>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute bottom-3 left-3">
                    <span className="px-3 py-1 rounded-full bg-gold/20 backdrop-blur-sm text-xs text-gold border border-gold/30">
                      {lecture.category}
                    </span>
                  </div>

                  {/* Play Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition">
                    <div className="w-16 h-16 rounded-full bg-gold/90 flex items-center justify-center transform group-hover:scale-110 transition-transform shadow-lg shadow-gold/30">
                      <svg className="w-6 h-6 text-black ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>

                </div>

                {/* Content */}
                <div className="p-5">

                  <h3 className="text-lg font-semibold text-gold group-hover:underline">
                    {lecture.title}
                  </h3>

                  <p className="text-gray-400 text-sm mt-2 leading-relaxed">
                    {lecture.desc}
                  </p>

                  <div className="mt-4 flex justify-between text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                      <span className="w-6 h-6 rounded-full bg-gray-700 flex items-center justify-center text-xs">
                        👤
                      </span>
                      {lecture.speaker}
                    </span>
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {lecture.duration}
                    </span>
                  </div>

                  {/* Progress Bar (decorative) */}
                  <div className="mt-4 w-full h-1 bg-gray-800 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-gold/50 to-gold w-0 group-hover:w-1/3 transition-all duration-700" />
                  </div>

                </div>

              </div>

            </Link>
          ))}

        </div>

        {/* No Results */}
        {filteredLectures.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gold mb-2">No lectures found</h3>
            <p className="text-gray-400">Try adjusting your search or filter criteria</p>
            <button 
              onClick={() => { setSearchTerm(""); setSelectedCategory("All Categories"); }}
              className="mt-4 px-4 py-2 bg-gold/20 text-gold rounded-lg hover:bg-gold/30 transition"
            >
              Clear Filters
            </button>
          </div>
        )}
      </section>

      {/* Featured Section */}
      <section className="pb-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-gradient-to-r from-gold/10 to-transparent border border-gold/20 rounded-2xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/20 text-gold text-sm mb-4">
                  ⭐ Featured Series
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gold mb-4">
                  Foundations of Faith
                </h3>
                <p className="text-gray-400 mb-6">
                  A comprehensive 10-part series covering the essential aspects of Islamic belief and practice. Perfect for beginners and those seeking to strengthen their foundation.
                </p>
                <div className="flex items-center gap-4">
                  <button className="px-6 py-3 bg-gold text-black rounded-lg font-semibold hover:opacity-90 transition flex items-center gap-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                    Start Series
                  </button>
                  <span className="text-gray-500 text-sm">10 Episodes • 3.5 Hours</span>
                </div>
              </div>
              <div className="w-full md:w-80 h-48 bg-gray-800 rounded-xl relative overflow-hidden">
                <img
                  src="https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg"
                  alt="Featured Series"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gold flex items-center justify-center">
                      <svg className="w-5 h-5 text-black ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                    <span className="text-white font-medium">Watch Trailer</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Subscribe CTA */}
      <section className="pb-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-dark border border-gray-800 rounded-2xl p-8 text-center">
            <div className="text-4xl mb-4">🔔</div>
            <h3 className="text-2xl font-bold text-gold mb-2">Never Miss a Lecture</h3>
            <p className="text-gray-400 mb-6 max-w-md mx-auto">
              Subscribe to get notified when new lectures are published
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-primary border border-gray-800 focus:outline-none focus:border-gold transition"
              />
              <button className="px-6 py-3 bg-gold text-black rounded-lg font-semibold hover:opacity-90 transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}