"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import events from "@/data/events";
import Image from "next/image";

export default function EventDetailPage() {
  const params = useParams();

  const [isSaved, setIsSaved] = useState(false);
  const { slug } = params;
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [showForm, setShowForm] = useState(false);
const [formData, setFormData] = useState({
  name: "",
  email: "",
  phone: "",
});

  const event = events.find((e) => e.slug === slug);
  if (!event) {
  return (
    <div className="min-h-screen flex items-center justify-center text-white">
      Event not found
    </div>
  );
}

  const handleShare = (platform) => {
    const url = window.location.href;
    const text = `Join me at ${event.title}!`;
    
    const shareUrls = {
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      whatsapp: `https://wa.me/?text=${encodeURIComponent(text + ' ' + url)}`,
      telegram: `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`
    };

    window.open(shareUrls[platform], '_blank', 'width=600,height=400');
    setShowShareMenu(false);
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-primary via-dark to-primary text-white">

      {showForm && (
  <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
    <div className="bg-dark border border-gold/20 rounded-xl p-6 w-full max-w-md relative">

      {/* Close */}
      <button
        onClick={() => setShowForm(false)}
        className="absolute top-3 right-3 text-gray-400 hover:text-white"
      >
        ✕
      </button>

      <h3 className="text-xl font-bold text-gold mb-4">
        Register for Event
      </h3>

      <form
        onSubmit={(e) => {
          e.preventDefault();

          const mailto = `mailto:your@email.com?subject=Event Registration&body=
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Event: ${event.title}`;

          window.location.href = mailto;
        }}
        className="space-y-4"
      >

        <input
          type="text"
          placeholder="Full Name"
          required
          value={formData.name}
          onChange={(e) =>
            setFormData({ ...formData, name: e.target.value })
          }
          className="w-full px-4 py-3 bg-primary border border-gray-700 rounded-lg text-white"
        />

        <input
          type="email"
          placeholder="Email Address"
          required
          value={formData.email}
          onChange={(e) =>
            setFormData({ ...formData, email: e.target.value })
          }
          className="w-full px-4 py-3 bg-primary border border-gray-700 rounded-lg text-white"
        />

        <input
          type="tel"
          placeholder="Phone Number"
          required
          value={formData.phone}
          onChange={(e) =>
            setFormData({ ...formData, phone: e.target.value })
          }
          className="w-full px-4 py-3 bg-primary border border-gray-700 rounded-lg text-white"
        />

        <button
          type="submit"
          className="w-full bg-gold text-black py-3 rounded-lg font-bold hover:opacity-90"
        >
          Submit Registration
        </button>

      </form>
    </div>
  </div>
)}

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-12 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 bg-gold rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6 flex-wrap">
            <Link href="/" className="hover:text-gold transition">Home</Link>
            <span>/</span>
            <Link href="/events" className="hover:text-gold transition">Events</Link>
            <span>/</span>
            <span className="text-gold truncate">{event.title}</span>
          </nav>

          {/* Title Section */}
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-8">
            <div className="flex-1">
              {/* Category Badge */}
              <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 rounded-full px-4 py-2 mb-4">
                <span className="w-2 h-2 bg-gold rounded-full animate-pulse"></span>
                <span className="text-gold text-sm font-semibold">{event.category}</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
                {event.title}
              </h1>

              <p className="text-gray-400 text-base sm:text-lg flex items-center gap-2">
                <span>🏢</span>
                <span>Organized by <span className="text-gold font-semibold">{event.organizer}</span></span>
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-row lg:flex-col gap-3">
              <button 
                onClick={() => setShowShareMenu(!showShareMenu)}
                className="relative flex-1 lg:flex-none bg-dark/50 border border-gray-800 text-gray-300 px-6 py-3 rounded-lg font-semibold hover:border-gold hover:text-gold transition-all flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
                <span className="hidden sm:inline">Share</span>
                
                {/* Share Menu */}
                {showShareMenu && (
                  <div className="absolute top-full right-0 mt-2 bg-dark border border-gold/20 rounded-lg shadow-xl p-2 min-w-[160px] z-50">
                    {[
                      { name: 'WhatsApp', icon: '💬', platform: 'whatsapp' },
                      { name: 'Twitter', icon: '🐦', platform: 'twitter' },
                      { name: 'Facebook', icon: '📘', platform: 'facebook' },
                      { name: 'Telegram', icon: '✈️', platform: 'telegram' },
                    ].map((social) => (
                      <button
                        key={social.platform}
                        onClick={() => handleShare(social.platform)}
                        className="w-full flex items-center gap-3 px-3 py-2 rounded hover:bg-gold/10 text-gray-300 hover:text-gold transition text-left"
                      >
                        <span>{social.icon}</span>
                        <span className="text-sm">{social.name}</span>
                      </button>
                    ))}
                  </div>
                )}
              </button>

              <button
  onClick={() => setIsSaved(!isSaved)}
  className={`flex-1 lg:flex-none px-6 py-3 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 border ${
    isSaved
      ? "bg-gold text-black border-gold"
      : "bg-dark/50 border-gray-800 text-gray-300 hover:border-gold hover:text-gold"
  }`}
>
  <svg className="w-5 h-5" fill={isSaved ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
  </svg>
  <span className="hidden sm:inline">
    {isSaved ? "Saved" : "Save"}
  </span>
</button>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 bg-dark/30 backdrop-blur-sm border border-gold/10 rounded-2xl p-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-gold">{event.registered}</div>
              <div className="text-xs text-gray-400 mt-1">Registered</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gold">{event.capacity}</div>
              <div className="text-xs text-gray-400 mt-1">Capacity</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gold">8 hrs</div>
              <div className="text-xs text-gray-400 mt-1">Duration</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gold">{event.price}</div>
              <div className="text-xs text-gray-400 mt-1">Entry</div>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="py-12 pb-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-3 gap-8 items-start">

            {/* LEFT COLUMN - Main Content */}
            <div className="lg:col-span-2 space-y-8">

              {/* Hero Image */}
              <div className="relative h-64 sm:h-80 lg:h-96 bg-gradient-to-br from-gold/20 to-primary/20 rounded-2xl overflow-hidden group">
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(245,166,35,0.4),transparent_70%)]"></div>
                </div>
                
                {/* Play button overlay for potential video */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="w-20 h-20 bg-gold/90 backdrop-blur-sm rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform shadow-2xl">
                    <svg className="w-8 h-8 text-black ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </button>
                </div>

                {/* Image placeholder text */}
                <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <p className="text-sm text-white">📸 Event Preview</p>
                </div>
              </div>

              {/* About Section */}
              <div className="bg-dark/50 border border-gray-800 rounded-2xl p-6 sm:p-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-gold mb-6 flex items-center gap-3">
                  <span className="w-1 h-8 bg-gold rounded-full"></span>
                  About This Event
                </h2>

                <div className="prose prose-invert max-w-none">
                  {(event.description || "").split('\n\n').map((paragraph, index) => (
                    <p key={index} className="text-gray-300 leading-relaxed mb-4">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              {/* Event Highlights */}
              <div className="bg-dark/50 border border-gray-800 rounded-2xl p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-6">
                  What to Expect
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {(event.highlights || []).map((highlight, index) => (
                    <div 
                      key={index} 
                      className="flex items-start gap-3 bg-primary/30 border border-gold/10 rounded-lg p-4 hover:border-gold/30 transition"
                    >
                      <div className="w-6 h-6 bg-gold/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-4 h-4 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-300 text-sm">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Schedule */}
              <div className="bg-dark/50 border border-gray-800 rounded-2xl p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-6">
                  Event Schedule
                </h3>
                <div className="space-y-4">
  {(event.schedule || []).map((item, index) => (
                    <div 
                      key={index}
                      className="flex gap-4 pb-4 border-b border-gray-800 last:border-0 last:pb-0"
                    >
                      <div className="flex-shrink-0">
                        <div className="bg-gold/10 border border-gold/30 rounded-lg px-4 py-2 min-w-[100px] text-center">
                          <p className="text-gold font-bold text-sm">{item.time}</p>
                        </div>
                      </div>
                      <div className="flex-1 pt-2">
                        <p className="text-gray-300">{item.activity}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* RIGHT COLUMN - Sidebar */}
            <div className="space-y-6">

              {/* Registration Card - Sticky */}
              <div className="lg:sticky lg:top-24 self-start bg-gradient-to-br from-dark to-dark/50 border-2 border-gold/30 rounded-2xl p-6 shadow-[0_0_40px_rgba(245,166,35,0.15)]">
                
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-gold">
                    Event Details
                  </h3>
                  <span className="bg-green-500/20 text-green-400 text-xs font-bold px-3 py-1 rounded-full border border-green-500/30">
                    Open
                  </span>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3 text-sm">
                    <span className="text-xl flex-shrink-0">📍</span>
                    <div>
                      <p className="text-gray-400 text-xs mb-1">Location</p>
                      <p className="text-white font-medium">{event.location}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 text-sm">
                    <span className="text-xl flex-shrink-0">📅</span>
                    <div>
                      <p className="text-gray-400 text-xs mb-1">Date</p>
                      <p className="text-white font-medium">{event.date}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 text-sm">
                    <span className="text-xl flex-shrink-0">⏰</span>
                    <div>
                      <p className="text-gray-400 text-xs mb-1">Time</p>
                      <p className="text-white font-medium">{event.time}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 text-sm">
                    <span className="text-xl flex-shrink-0">🎤</span>
                    <div>
                      <p className="text-gray-400 text-xs mb-1">Speaker</p>
                      <p className="text-white font-medium">{event.speaker}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 text-sm">
                    <span className="text-xl flex-shrink-0">💰</span>
                    <div>
                      <p className="text-gray-400 text-xs mb-1">Price</p>
                      <p className="text-gold font-bold text-lg">{event.price}</p>
                    </div>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mb-6">
                  <div className="flex justify-between text-xs text-gray-400 mb-2">
                    <span>{event.registered} registered</span>
                    <span>{event.capacity}</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-gold to-yellow-600 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${(parseInt(event.registered) / parseInt(event.capacity)) * 100}%` }}
                    ></div>
                  </div>
                </div>

                <button 
  onClick={() => setShowForm(true)}
  className="w-full bg-gradient-to-r from-gold to-yellow-600 text-black py-4 rounded-lg font-bold text-base hover:shadow-[0_0_30px_rgba(245,166,35,0.5)] transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 mb-3"
>
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
  <span>Register Now</span>
</button>

                <button className="w-full border-2 border-gold/50 text-gold py-3 rounded-lg font-semibold hover:bg-gold hover:text-black transition-all duration-300 text-sm">
                  Add to Calendar
                </button>

                {/* Trust Signals */}
                <div className="mt-6 pt-6 border-t border-gray-800 space-y-2">
                  <div className="flex items-center gap-2 text-xs text-gray-400">
                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Safe & Secure Registration</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-400">
                    <svg className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    <span>Instant Email Confirmation</span>
                  </div>
                </div>
              </div>

              {/* Contact Card */}
              <div className="bg-dark/50 border border-gray-800 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-white mb-4">
                  Have Questions?
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  Contact our event team for more information
                </p>
                <Link 
                  href="/contact"
                  className="block w-full bg-primary border border-gold/30 text-gold py-3 rounded-lg font-semibold hover:bg-gold hover:text-black transition-all text-center"
                >
                  Contact Us
                </Link>
              </div>

              {/* Share Card */}
              <div className="bg-dark/50 border border-gray-800 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-white mb-4">
                  Spread the Word
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  Help us reach more people by sharing this event
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { name: 'WhatsApp', icon: '💬', color: 'hover:bg-green-500/10 hover:border-green-500/50', platform: 'whatsapp' },
                    { name: 'Twitter', icon: '🐦', color: 'hover:bg-blue-500/10 hover:border-blue-500/50', platform: 'twitter' },
                    { name: 'Facebook', icon: '📘', color: 'hover:bg-blue-600/10 hover:border-blue-600/50', platform: 'facebook' },
                    { name: 'Telegram', icon: '✈️', color: 'hover:bg-sky-500/10 hover:border-sky-500/50', platform: 'telegram' },
                  ].map((social) => (
                    <button
                      key={social.platform}
                      onClick={() => handleShare(social.platform)}
                      className={`flex flex-col items-center gap-2 p-3 border border-gray-800 rounded-lg transition ${social.color}`}
                    >
                      <span className="text-2xl">{social.icon}</span>
                      <span className="text-xs text-gray-400">{social.name}</span>
                    </button>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* FLOATING CTA - Mobile Only */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-dark/95 backdrop-blur-xl border-t border-gold/20 p-4 z-40 shadow-[0_-10px_30px_rgba(0,0,0,0.3)]">
        <button 
          onClick={() => setShowForm(true)}
          className="w-full bg-gradient-to-r from-gold to-yellow-600 text-black py-4 rounded-lg font-bold hover:shadow-[0_0_25px_rgba(245,166,35,0.5)] transition-all flex items-center justify-center gap-2"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>Register Now - {event.price}</span>
        </button>
      </div>

      {/* Related Events Section */}
      <section className="py-16 bg-gradient-to-b from-transparent to-dark border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8">
            You Might Also Like
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <Link 
                key={i}
                href={`/events/related-event-${i}`}
                className="group bg-dark/50 border border-gray-800 rounded-2xl overflow-hidden hover:border-gold transition-all hover:shadow-[0_0_30px_rgba(245,166,35,0.2)]"
              >
                <div className="h-40 bg-gradient-to-br from-gold/10 to-primary/10"></div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-white group-hover:text-gold transition mb-2">
                    Related Event {i}
                  </h3>
                  <p className="text-sm text-gray-400 mb-4">Coming soon...</p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>📅 TBA</span>
                    <span className="text-gold">Learn more →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
  
}