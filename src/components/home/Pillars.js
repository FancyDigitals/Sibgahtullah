"use client";

import { useState, useEffect } from "react";

export default function Pillars() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const pillars = [
    {
      title: "Knowledge",
      desc: "Rooted in authentic Islamic teachings and intellectual depth.",
      icon: "📚",
      color: "from-purple-500 to-purple-700",
      lightColor: "purple",
    },
    {
      title: "Faith",
      desc: "Strengthening spiritual connection and unwavering belief.",
      icon: "🕌",
      color: "from-purple-600 to-purple-800",
      lightColor: "purple",
    },
    {
      title: "Community",
      desc: "Building a united and impactful global Muslim community.",
      icon: "👥",
      color: "from-purple-500 to-purple-700",
      lightColor: "purple",
    },
    {
      title: "Transformation",
      desc: "Empowering individuals to grow, lead, and influence the world.",
      icon: "✨",
      color: "from-purple-600 to-purple-800",
      lightColor: "purple",
    },
  ];

  return (
    <section className="py-24 bg-dark">
      
      {/* Decorative Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient Orbs */}
        <div className="absolute top-0 left-1/4 w-64 md:w-96 h-64 md:h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 md:w-96 h-64 md:h-96 bg-purple-500/10 rounded-full blur-3xl" />
        
        {/* Grid Pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.03]">
          <pattern id="pillars-grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#pillars-grid)" />
        </svg>

        {/* Floating Decorative Elements */}
        <div className="hidden md:block absolute top-20 right-20 w-3 h-3 rounded-full bg-purple-500/30 animate-pulse" />
        <div className="hidden md:block absolute bottom-32 left-20 w-2 h-2 rounded-full bg-purple-500/40 animate-pulse" style={{ animationDelay: '0.5s' }} />
        <div className="hidden md:block absolute top-1/2 right-32 w-4 h-4 rounded-full bg-purple-500/20 animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-gold">
          <span className={`inline-block transition-all duration-700 delay-100 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Our Core Pillars
          </span>
        </h2>

        <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
          <span className={`inline-block text-sm md:text-base transition-all duration-700 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            The foundation of everything we do is built on these guiding principles.
          </span>
        </p>

        {/* Decorative Line */}
        <div className={`flex justify-center mt-8 transition-all duration-700 delay-300 ${isLoaded ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`}>
          <div className="flex items-center gap-2">
            <div className="w-8 md:w-12 h-[2px] bg-gradient-to-r from-transparent to-purple-500/50" />
            <div className="w-2 h-2 rounded-full bg-purple-500/50" />
            <div className="w-8 md:w-12 h-[2px] bg-gradient-to-l from-transparent to-purple-500/50" />
          </div>
        </div>

        {/* Cards */}
        <div className="mt-16 grid sm:grid-cols-2 md:grid-cols-4 gap-8">

          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="group relative bg-primary border border-gray-800 rounded-2xl p-6 text-left hover:border-gold transition duration-300"
              style={{
                transform: isLoaded ? 'translateY(0)' : 'translateY(30px)',
                opacity: isLoaded ? 1 : 0,
                transition: `all 0.6s ease ${index * 100 + 300}ms`
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Glow effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 bg-gold/5 blur-2xl rounded-2xl"></div>

              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden rounded-tr-2xl pointer-events-none">
                <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Icon */}
              <div className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br ${pillar.color} flex items-center justify-center text-2xl md:text-3xl mb-5 shadow-lg shadow-purple-500/20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                {pillar.icon}
              </div>

              {/* Number Badge */}
              <div className="absolute top-4 right-4 w-6 h-6 md:w-7 md:h-7 rounded-full bg-gray-800/80 border border-gray-700 flex items-center justify-center">
                <span className="text-xs text-gray-500 font-medium">0{index + 1}</span>
              </div>

              <h3 className="text-xl font-semibold text-gold relative">
                {pillar.title}
              </h3>

              <p className="mt-3 text-gray-400 text-sm relative leading-relaxed">
                {pillar.desc}
              </p>

              {/* Progress Line */}
              <div className="mt-5 w-full h-1 bg-gray-800 rounded-full overflow-hidden">
                <div 
                  className={`h-full bg-gradient-to-r ${pillar.color} rounded-full transition-all duration-700`}
                  style={{ width: hoveredIndex === index ? '100%' : '0%' }}
                />
              </div>

              {/* Hover Arrow */}
              <div className="mt-4 flex items-center gap-2 text-purple-400 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <span className="text-xs font-medium">Learn more</span>
                <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>

            </div>
          ))}

        </div>

        {/* CTA Button */}
        <div className={`mt-12 transition-all duration-700 delay-800 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <a 
            href="/about"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-purple-500/25 active:scale-95 transition-all group"
          >
            <span>Discover Our Mission</span>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
}