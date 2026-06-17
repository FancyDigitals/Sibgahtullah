"use client";

import { useEffect, useState } from "react";

export default function AboutPage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const values = [
    { name: "Knowledge", icon: "📚", description: "Rooted in authentic sources" },
    { name: "Faith", icon: "🕌", description: "Strengthening spiritual bonds" },
    { name: "Integrity", icon: "⚖️", description: "Truth in every action" },
    { name: "Impact", icon: "✨", description: "Transforming communities" },
  ];

  const leaders = [
  {
    id: 1,
    name: "Sheikh Muneerudeen Salahudeen (AR-RIYAADY)",
    position: "Spiritual Father",
    image: "/team/sheikh.jpg",
    socials: {
      facebook: "#",
      instagram: "#",
      youtube: "#",
      tiktok: "#",
    },
  },
  {
    id: 2,
    name: "Imam Abdul-Wajuud Abdul-Lateef Adeleke (AL-WAJUUDY)",
    position: "Founder",
    image: "/team/imam.jpg",
    socials: {
      facebook: "#",
      instagram: "#",
      youtube: "#",
      tiktok: "#",
    },
  },
  {
    id: 3,
    name: "MuhammedBashir Ismail (FANCY)",
    position: "Educator",
    image: "/team/fancy.jpg",
    socials: {
      facebook: "#",
      instagram: "#",
      youtube: "#",
      tiktok: "#",
    },
  },
];

  return (
    <main className="bg-primary text-white">

      {/* Decorative Background Pattern */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gold/5 rounded-full blur-3xl" />
        <svg className="absolute inset-0 w-full h-full opacity-[0.02]">
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* HERO */}
      <section className="py-28 text-center">
        <div className="max-w-4xl mx-auto px-6">

          {/* Decorative Badge */}
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/30 bg-gold/10 mb-8 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            <span className="text-gold text-sm font-medium tracking-wider uppercase">Established 2020</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-gold">
            <span className={`inline-block transition-all duration-700 delay-100 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              About Us
            </span>
          </h1>

          <p className="mt-6 text-gray-300 text-lg">
            <span className={`inline-block transition-all duration-700 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              A foundation built on knowledge, faith, and transformation.
            </span>
          </p>

        </div>
      </section>

      {/* STORY */}
      <section className="py-20 bg-dark">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          <div>
            {/* Section Label */}
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-8 h-[2px] bg-gold" />
              <span className="text-gold/70 text-sm uppercase tracking-wider">Our Journey</span>
            </div>

            <h2 className="text-3xl font-bold text-gold">
              Our Story
            </h2>

            <p className="mt-6 text-gray-300 leading-relaxed">
              Sibgahtullah Islamic Foundation was established to bridge the gap 
              between authentic Islamic teachings and the realities of the modern world.
            </p>

            <p className="mt-4 text-gray-400">
              In a time of confusion and misinformation, we provide clarity, 
              structure, and guidance rooted in truth and understanding.
            </p>

            {/* Timeline */}
            <div className="mt-8 space-y-4">
              {[
                { year: "2020", event: "Foundation Established" },
                { year: "2024", event: "National Expansion" },
              ].map((item, index) => (
                <div key={item.year} className="flex items-center gap-4 group">
                  <div className="w-16 text-gold font-bold group-hover:scale-110 transition-transform">{item.year}</div>
                  <div className="w-2 h-2 rounded-full bg-gold/50" />
                  <div className="text-gray-400 group-hover:text-gray-300 transition-colors">{item.event}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-primary border border-gray-800 rounded-2xl p-8">
            {/* Quote Icon */}
            <div className="text-6xl text-gold/20 font-serif leading-none mb-4">"</div>
            
            <p className="text-gray-300 italic">
              "We are not just teaching knowledge. We are shaping minds, 
              strengthening faith, and building a future."
            </p>

            <div className="mt-6 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
                <span className="text-gold font-bold">S</span>
              </div>
              <div>
                <div className="text-gold text-sm font-medium">Sibgahtullah Foundation</div>
                <div className="text-gray-500 text-xs">Core Philosophy</div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10">

          <div className="bg-dark border border-gray-800 rounded-2xl p-8">
            {/* Icon */}
            <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <svg className="w-7 h-7 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>

            <h3 className="text-xl font-semibold text-gold">
              Our Mission
            </h3>

            <p className="mt-4 text-gray-400">
              To provide authentic Islamic knowledge, empower individuals, 
              and nurture a generation grounded in faith and purpose.
            </p>

            {/* Decorative Line */}
            <div className="mt-6 flex items-center gap-2">
              <div className="flex-1 h-[1px] bg-gradient-to-r from-gold/50 to-transparent" />
            </div>
          </div>

          <div className="bg-dark border border-gray-800 rounded-2xl p-8">
            {/* Icon */}
            <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mb-6">
              <svg className="w-7 h-7 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>

            <h3 className="text-xl font-semibold text-gold">
              Our Vision
            </h3>

            <p className="mt-4 text-gray-400">
              To become a globally recognized Islamic institution that transforms 
              lives and impacts societies through knowledge and guidance.
            </p>

            {/* Decorative Line */}
            <div className="mt-6 flex items-center gap-2">
              <div className="flex-1 h-[1px] bg-gradient-to-r from-gold/50 to-transparent" />
            </div>
          </div>

        </div>
      </section>

      {/* CORE VALUES */}
      <section className="py-24 bg-dark">
        <div className="max-w-6xl mx-auto px-6 text-center">

          {/* Section Label */}
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-8 h-[2px] bg-gold" />
            <span className="text-gold/70 text-sm uppercase tracking-wider">What Drives Us</span>
            <div className="w-8 h-[2px] bg-gold" />
          </div>

          <h2 className="text-4xl font-bold text-gold">
            Our Values
          </h2>

          <div className="mt-16 grid md:grid-cols-4 gap-8">

            {values.map((value, index) => (
              <div
                key={value.name}
                className="bg-primary border border-gray-800 rounded-2xl p-6 hover:border-gold transition"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Icon */}
                <div className="text-4xl mb-4">{value.icon}</div>
                
                <p className="text-gold font-semibold">{value.name}</p>
                
                {/* Description */}
                <p className="text-gray-500 text-sm mt-2">{value.description}</p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">

          {/* Section Label */}
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-8 h-[2px] bg-gold" />
            <span className="text-gold/70 text-sm uppercase tracking-wider">Our Team</span>
            <div className="w-8 h-[2px] bg-gold" />
          </div>

          <h2 className="text-4xl font-bold text-gold">
            Leadership
          </h2>

          <p className="mt-4 text-gray-400">
            Guided by knowledge, driven by purpose.
          </p>

          <div className="mt-16 grid md:grid-cols-3 gap-8">

            {leaders.map((leader) => (
              <div
                key={leader.id}
                className="bg-dark border border-gray-800 rounded-2xl p-6"
              >
                {/* Image with Overlay */}
                <div className="aspect-square bg-gray-800 rounded-lg relative overflow-hidden group">
                  {/* Placeholder Avatar */}
                  <div className="aspect-square rounded-lg overflow-hidden relative group">
  <img
    src={leader.image}
    alt={leader.name}
    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
  />

  <div className="absolute inset-0 bg-gold/10 opacity-0 group-hover:opacity-100 transition-opacity" />
</div>
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gold/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                <h3 className="mt-4 text-gold font-semibold">
                  {leader.name}
                </h3>

                <p className="text-gray-400 text-sm">
                  {leader.position}
                </p>

                {/* Social Links */}
<div className="mt-4 flex justify-center gap-3">

  {/* Facebook */}
  <a
    href={leader.socials.facebook}
    target="_blank"
    rel="noopener noreferrer"
    className="w-9 h-9 rounded-lg bg-gray-800 flex items-center justify-center transition-all duration-300 hover:bg-blue-600 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/30"
  >
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M22 12.07C22 6.48 17.52 2 11.93 2S2 6.48 2 12.07c0 5.02 3.66 9.19 8.44 9.93v-7.02H7.9v-2.91h2.54V9.41c0-2.5 1.5-3.88 3.77-3.88 1.09 0 2.23.2 2.23.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.91h-2.34V22c4.78-.74 8.44-4.91 8.44-9.93z"/>
    </svg>
  </a>

  {/* Instagram */}
  <a
    href={leader.socials.instagram}
    target="_blank"
    rel="noopener noreferrer"
    className="w-9 h-9 rounded-lg bg-gray-800 flex items-center justify-center transition-all duration-300 hover:bg-pink-500 hover:scale-110 hover:shadow-lg hover:shadow-pink-500/30"
  >
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M7.75 2C4.57 2 2 4.57 2 7.75v8.5C2 19.43 4.57 22 7.75 22h8.5C19.43 22 22 19.43 22 16.25v-8.5C22 4.57 19.43 2 16.25 2h-8.5zm0 2h8.5A3.75 3.75 0 0120 7.75v8.5A3.75 3.75 0 0116.25 20h-8.5A3.75 3.75 0 014 16.25v-8.5A3.75 3.75 0 017.75 4zm4.25 3.5A4.5 4.5 0 1016.5 12 4.5 4.5 0 0012 7.5zm0 2A2.5 2.5 0 1114.5 12 2.5 2.5 0 0112 9.5zm4.75-2.75a1 1 0 101 1 1 1 0 00-1-1z"/>
    </svg>
  </a>

  {/* YouTube */}
  <a
    href={leader.socials.youtube}
    target="_blank"
    rel="noopener noreferrer"
    className="w-9 h-9 rounded-lg bg-gray-800 flex items-center justify-center transition-all duration-300 hover:bg-red-600 hover:scale-110 hover:shadow-lg hover:shadow-red-500/30"
  >
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M23.5 6.2a3 3 0 00-2.1-2.1C19.7 3.5 12 3.5 12 3.5s-7.7 0-9.4.6A3 3 0 00.5 6.2 31.6 31.6 0 000 12a31.6 31.6 0 00.5 5.8 3 3 0 002.1 2.1c1.7.6 9.4.6 9.4.6s7.7 0 9.4-.6a3 3 0 002.1-2.1A31.6 31.6 0 0024 12a31.6 31.6 0 00-.5-5.8zM9.75 15.5v-7l6.25 3.5-6.25 3.5z"/>
    </svg>
  </a>

  {/* TikTok */}
  <a
    href={leader.socials.tiktok}
    target="_blank"
    rel="noopener noreferrer"
    className="w-9 h-9 rounded-lg bg-gray-800 flex items-center justify-center transition-all duration-300 hover:bg-black hover:scale-110 hover:shadow-lg hover:shadow-white/20"
  >
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12.75 2h2.5a4.75 4.75 0 004.75 4.75v2.5a7.2 7.2 0 01-4.75-1.75v7.5a5.75 5.75 0 11-5.75-5.75 5.5 5.5 0 011 .08v2.55a3.25 3.25 0 102.25 3.12V2z"/>
    </svg>
  </a>

</div>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-b from-primary to-dark text-center">
        <div className="max-w-3xl mx-auto px-6">

          {/* Decorative Element */}

          <h2 className="text-4xl font-bold text-gold">
            Be Part of the Journey
          </h2>

          <p className="mt-4 text-gray-300">
            Join us in spreading knowledge and building a stronger Ummah.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <button className="mt-8 bg-gold text-black px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition">
              Get Involved
            </button>

            <button className="mt-8 border border-gold/50 text-gold px-6 py-3 rounded-lg font-semibold hover:bg-gold/10 transition">
              Contact Us
            </button>
          </div>

        </div>
      </section>

    </main>
  );
}