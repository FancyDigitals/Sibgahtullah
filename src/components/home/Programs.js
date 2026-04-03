"use client";

import { useState, useEffect } from "react";

export default function Programs() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const programs = [
    {
      title: "Educational Programs",
      desc: "Structured learning designed to deepen Islamic knowledge and understanding.",
      icon: "📚",
      features: ["Online Courses", "Live Sessions"],
      color: "from-purple-500 to-purple-700",
    },
    {
      title: "Youth Development",
      desc: "Empowering the next generation with faith, discipline, and purpose.",
      icon: "🌟",
      features: ["Mentorship", "Leadership", "Workshops"],
      color: "from-purple-600 to-purple-800",
    },
    {
      title: "Community Outreach",
      desc: "Extending knowledge and support to communities locally and globally.",
      icon: "🤝",
      features: ["Local Events", "Charity"],
      color: "from-purple-500 to-purple-700",
    },
  ];

  return (
    <section className="py-24 bg-primary">
      
      {/* Decorative Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-0 w-64 md:w-80 h-64 md:h-80 bg-purple-500/10 rounded-full blur-3xl -translate-x-1/2" />
        <div className="absolute bottom-1/4 right-0 w-64 md:w-80 h-64 md:h-80 bg-purple-500/10 rounded-full blur-3xl translate-x-1/2" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
        
        {/* Grid Pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.02]">
          <pattern id="programs-grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="1"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#programs-grid)" />
        </svg>

        {/* Floating Elements */}
        <div className="hidden md:block absolute top-32 right-32 w-4 h-4 rounded-full bg-purple-500/20 animate-pulse" />
        <div className="hidden md:block absolute bottom-40 left-24 w-3 h-3 rounded-full bg-purple-500/30 animate-pulse" style={{ animationDelay: '0.5s' }} />
        <div className="hidden md:block absolute top-1/3 left-1/4 w-2 h-2 rounded-full bg-purple-500/40 animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">

        {/* Section Badge */}
        <div className={`inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full border border-purple-500/30 bg-purple-500/10 mb-6 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
          <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
          <span className="text-purple-400 text-xs md:text-sm font-medium tracking-wider uppercase">
            What We Offer
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-gold">
          <span className={`inline-block transition-all duration-700 delay-100 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Our Programs
          </span>
        </h2>

        <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
          <span className={`inline-block text-sm md:text-base transition-all duration-700 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            We are committed to building knowledge, strengthening faith, and impacting lives.
          </span>
        </p>

        {/* Decorative Divider */}
        <div className={`flex justify-center mt-8 transition-all duration-700 delay-300 ${isLoaded ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`}>
          <div className="flex items-center gap-3">
            <div className="w-12 md:w-16 h-[1px] bg-gradient-to-r from-transparent to-purple-500/50" />
            <div className="flex gap-1">
              <div className="w-1.5 h-1.5 rounded-full bg-purple-500/50" />
              <div className="w-1.5 h-1.5 rounded-full bg-purple-500/70" />
              <div className="w-1.5 h-1.5 rounded-full bg-purple-500/50" />
            </div>
            <div className="w-12 md:w-16 h-[1px] bg-gradient-to-l from-transparent to-purple-500/50" />
          </div>
        </div>

        {/* Cards */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">

          {programs.map((program, index) => (
            <div
              key={index}
              className="group relative bg-dark border border-gray-800 rounded-2xl p-8 text-left hover:border-gold transition duration-300"
              style={{
                transform: isLoaded ? 'translateY(0)' : 'translateY(30px)',
                opacity: isLoaded ? 1 : 0,
                transition: `all 0.6s ease ${index * 150 + 300}ms`
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gold/5 blur-2xl rounded-2xl"></div>

              {/* Corner Decoration */}
              <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden rounded-tr-2xl pointer-events-none">
                <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Top Row: Icon & Badge */}
              <div className="flex items-start justify-between mb-6">
                {/* Icon */}
                <div className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br ${program.color} flex items-center justify-center text-2xl md:text-3xl shadow-lg shadow-purple-500/20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                  {program.icon}
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gold relative">
                {program.title}
              </h3>

              <p className="mt-4 text-gray-400 text-sm leading-relaxed relative">
                {program.desc}
              </p>

              {/* Features Tags */}
              <div className="mt-5 flex flex-wrap gap-2">
                {program.features.map((feature, fIndex) => (
                  <span 
                    key={fIndex}
                    className="px-2.5 py-1 rounded-lg bg-gray-800/80 text-gray-400 text-xs border border-gray-700/50 group-hover:border-purple-500/30 group-hover:text-purple-300 transition-all duration-300"
                    style={{ transitionDelay: `${fIndex * 50}ms` }}
                  >
                    {feature}
                  </span>
                ))}
              </div>

              {/* Progress Bar */}
              <div className="mt-6 w-full h-1 bg-gray-800 rounded-full overflow-hidden">
                <div 
                  className={`h-full bg-gradient-to-r ${program.color} rounded-full transition-all duration-700`}
                  style={{ width: hoveredIndex === index ? '100%' : '0%' }}
                />
              </div>

              {/* Decorative Number */}
              <div className="absolute bottom-4 right-4 text-6xl md:text-7xl font-bold text-gray-800/50 select-none pointer-events-none group-hover:text-purple-500/10 transition-colors duration-300">
                0{index + 1}
              </div>

            </div>
          ))}

        </div>

        {/* Bottom Section */}
        <div className={`mt-16 transition-all duration-700 delay-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          
          {/* Stats Row */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-10">
            {[
              { icon: "👨‍🎓", value: "8,700+", label: "Enrolled Students" },
              { icon: "📖", value: "50+", label: "Courses Available" },
              { icon: "🌍", value: "30+", label: "Countries Reached" },
            ].map((stat, index) => (
              <div 
                key={stat.label}
                className="flex items-center gap-3 px-4 md:px-5 py-3 bg-gray-800/30 rounded-xl border border-gray-700/50"
              >
                <span className="text-xl md:text-2xl">{stat.icon}</span>
                <div className="text-left">
                  <div className="text-base md:text-lg font-bold text-white">{stat.value}</div>
                  <div className="text-xs text-gray-500">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <a 
            href="/programs"
            className="inline-flex items-center gap-2 px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-purple-500/25 active:scale-95 transition-all group"
          >
            <span>Explore All Programs</span>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>

          {/* Trust Text */}
          <p className="mt-6 text-gray-500 text-xs md:text-sm flex items-center justify-center gap-2">
            <span className="flex -space-x-2">
              {['👨‍🎓', '👩‍🎓', '🧕', '👨‍💼'].map((emoji, i) => (
                <span 
                  key={i} 
                  className="w-6 h-6 md:w-7 md:h-7 rounded-full bg-gray-800 border-2 border-primary flex items-center justify-center text-xs"
                >
                  {emoji}
                </span>
              ))}
            </span>
            <span>Join thousands of students on their journey</span>
          </p>
        </div>

      </div>
    </section>
  );
}