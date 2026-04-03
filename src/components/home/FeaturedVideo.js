"use client";

import { useState, useRef, useEffect } from "react";

export default function FeaturedVideo() {
  const [currentLang, setCurrentLang] = useState("en");
  const [showTranscript, setShowTranscript] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const videoRef = useRef(null);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handlePlayClick = () => {
  if (!videoRef.current) return;

  if (isPlaying) {
    videoRef.current.pause();
  } else {
    videoRef.current.play();
  }

  setIsPlaying(!isPlaying);
};

  const handleVideoClick = () => {
    setShowControls(true);
    setTimeout(() => setShowControls(false), 3000);
  };
  return (
    <section className="py-24 bg-primary">
      
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 w-64 md:w-96 h-64 md:h-96 bg-gold/5 rounded-full blur-3xl -translate-x-1/2" />
        <div className="absolute bottom-1/4 right-0 w-64 md:w-96 h-64 md:h-96 bg-gold/5 rounded-full blur-3xl translate-x-1/2" />
      </div>

      <div className="max-w-6xl mx-auto px-6 text-center">


        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-gold">
          <span className={`inline-block transition-all duration-700 delay-100 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Featured Lecture
          </span>
        </h2>

        <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
          <span className={`inline-block text-sm md:text-base px-4 md:px-0 transition-all duration-700 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Watch a powerful session that inspires knowledge, faith, and transformation.
          </span>
        </p>

        {/* Video Stats - Mobile Optimized */}

        {/* Video */}
        <div className={`mt-8 md:mt-16 relative rounded-xl md:rounded-2xl overflow-hidden border border-gray-800 shadow-xl transition-all duration-700 delay-400 ${isLoaded ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'}`}>

          {/* Glow */}
          <div className="absolute inset-0 bg-gold/10 blur-3xl opacity-30"></div>

          {/* Decorative Corner Accents */}
          <div className="absolute top-0 left-0 w-16 md:w-24 h-16 md:h-24 border-l-2 border-t-2 border-gold/30 rounded-tl-xl md:rounded-tl-2xl pointer-events-none z-10" />
          <div className="absolute top-0 right-0 w-16 md:w-24 h-16 md:h-24 border-r-2 border-t-2 border-gold/30 rounded-tr-xl md:rounded-tr-2xl pointer-events-none z-10" />
          <div className="absolute bottom-0 left-0 w-16 md:w-24 h-16 md:h-24 border-l-2 border-b-2 border-gold/30 rounded-bl-xl md:rounded-bl-2xl pointer-events-none z-10" />
          <div className="absolute bottom-0 right-0 w-16 md:w-24 h-16 md:h-24 border-r-2 border-b-2 border-gold/30 rounded-br-xl md:rounded-br-2xl pointer-events-none z-10" />

          <div
  className="relative w-full max-w-4xl mx-auto aspect-video"
  onClick={handleVideoClick}
>
            
            {/* Custom Thumbnail Overlay - Mobile Touch Friendly */}
            {!isPlaying && (
              <div 
                className="absolute inset-0 z-20 cursor-pointer group"
                onClick={handlePlayClick}
              >
                {/* Thumbnail Image Placeholder */}
                <div className="absolute inset-0">
  <video
    className="w-full h-full object-cover"
    muted
    playsInline
    preload="metadata"
  >
    <source src="/videos/featured2.mp4" type="video/mp4" />
  </video>

  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />
</div>

<div className="absolute bottom-4 right-4 z-30 flex gap-2 bg-black/60 backdrop-blur-md px-2 py-1 rounded-lg border border-gray-700">
  {[
    { code: "en", label: "EN" },
    { code: "ha", label: "HA" },
    { code: "yo", label: "YO" },
    { code: "ig", label: "IG" },
  ].map((lang) => (
    <button
      key={lang.code}
      onClick={(e) => {
        e.stopPropagation();

        const tracks = videoRef.current.textTracks;

        for (let i = 0; i < tracks.length; i++) {
          tracks[i].mode = "disabled";
        }

        const track = [...tracks].find(t => t.language === lang.code);
        if (track) track.mode = "showing";

        setCurrentLang(lang.code);
      }}
      className={`px-2 py-1 text-xs rounded-md transition ${
        currentLang === lang.code
          ? "bg-gold text-black"
          : "text-white hover:bg-white/10"
      }`}
    >
      {lang.label}
    </button>
  ))}
</div>

                {/* Play Button - Larger for Mobile */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    {/* Ripple Effect */}
                    <div className="absolute inset-0 w-20 h-20 md:w-24 md:h-24 rounded-full bg-gold/30 animate-ping" />
                    <div className="absolute inset-0 w-20 h-20 md:w-24 md:h-24 rounded-full bg-gold/20 animate-pulse" style={{ animationDelay: '0.5s' }} />
                    
                    {/* Main Button */}
                    <button className="relative w-20 h-20 md:w-24 md:h-24 rounded-full bg-gold flex items-center justify-center shadow-lg shadow-gold/30 transform transition-all duration-300 group-hover:scale-110 group-active:scale-95">
                      <svg className="w-8 h-8 md:w-10 md:h-10 text-black ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Video Info Overlay - Mobile Optimized */}
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                  <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                    <div className="text-left">
                      <h3 className="text-lg md:text-2xl font-bold text-white mb-1 md:mb-2 line-clamp-2">
                        The Path to Spiritual Enlightenment
                      </h3>
                      <p className="text-gray-400 text-xs md:text-sm line-clamp-1 md:line-clamp-none">
                        A comprehensive guide to strengthening your faith
                      </p>
                    </div>
                  </div>
                </div>

                {/* Top Info Bar - Mobile Optimized */}
                <div className="absolute top-0 left-0 right-0 p-3 md:p-4 flex justify-between items-start">
                  <div className="flex gap-2">
                    <button className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/70 transition-colors">
                      <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                      </svg>
                    </button>
                    <button className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/70 transition-colors">
                      <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            )}

            <video
  ref={videoRef}
  className="w-full h-full object-cover"
  playsInline
  preload="metadata"
  controls={isPlaying}
>
  <source src="/videos/featured2.mp4" type="video/mp4" />

  <track src="/subtitles/sibgahtullah.en.vtt" kind="subtitles" srcLang="en" label="English" default />
<track src="/subtitles/sibgahtullah.ha.vtt" kind="subtitles" srcLang="ha" label="Hausa" />
<track src="/subtitles/sibgahtullah.yo.vtt" kind="subtitles" srcLang="yo" label="Yoruba" />
<track src="/subtitles/sibgahtullah.ig.vtt" kind="subtitles" srcLang="ig" label="Igbo" />
</video>
          </div>

        </div>

        {/* Action Buttons - Mobile Optimized Stack */}
        <div className={`mt-6 md:mt-10 flex flex-col sm:flex-row justify-center gap-3 md:gap-4 px-4 md:px-0 transition-all duration-700 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <button
  onClick={() => {
    const link = document.createElement("a");
    link.href = "/videos/featured2.mp4";
    link.download = "featured-lecture.mp4";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }}
  className="flex items-center justify-center gap-2 px-6 py-3 md:py-3.5 bg-gold text-black rounded-xl font-semibold hover:opacity-90 active:scale-95 transition-all"
>
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            <span className="text-sm md:text-base">Download</span>
          </button>
          <button
  onClick={async () => {
    const shareData = {
      title: "Featured Lecture",
      text: "Watch this powerful lecture",
      url: window.location.href,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(shareData.url);
        alert("Link copied to clipboard!");
      }
    } catch (err) {
      console.log("Share failed:", err);
    }
  }}
  className="flex items-center justify-center gap-2 px-6 py-3 md:py-3.5 border border-gold/50 text-gold rounded-xl font-semibold hover:bg-gold/10 active:scale-95 transition-all"
>
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
            </svg>
            <span className="text-sm md:text-base">Share</span>
          </button>
          <button
  onClick={() => setShowTranscript(true)}
  className="flex items-center justify-center gap-2 px-6 py-3 md:py-3.5 border border-gray-700 text-gray-300 rounded-xl font-semibold hover:bg-gray-800/50 active:scale-95 transition-all"
>
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
            <span className="text-sm md:text-base">Transcript</span>
          </button>
        </div>
        {showTranscript && (
  <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-6">
    <div className="bg-dark max-w-2xl w-full rounded-xl p-6 relative border border-gray-800">
      
      <button
        onClick={() => setShowTranscript(false)}
        className="absolute top-4 right-4 text-gray-400 hover:text-white"
      >
        ✕
      </button>

      <h3 className="text-2xl font-bold text-gold mb-4">
        Transcript
      </h3>

      <div className="text-gray-300 text-sm leading-relaxed max-h-[60vh] overflow-y-auto space-y-4">
        <p>
          In this lecture, we explore the path to spiritual enlightenment...
        </p>
        <p>
          True growth begins when you align your heart with purpose...
        </p>
        <p>
          Faith is not just belief, it is action and consistency...
        </p>
      </div>
    </div>
  </div>
)}

        {/* Quick Info Cards - Mobile Scroll */}
        <div className={`mt-8 md:mt-12 overflow-x-auto pb-4 -mx-6 px-6 md:mx-0 md:px-0 transition-all duration-700 delay-600 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex md:grid md:grid-cols-3 gap-4 min-w-max md:min-w-0">
            
            {/* Speaker Card */}
            <div className="w-64 md:w-auto bg-dark border border-gray-800 rounded-xl p-4 md:p-5 text-left hover:border-gold/30 transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center text-2xl shrink-0">
                  👨‍🏫
                </div>
                <div className="min-w-0">
                  <p className="text-gray-500 text-xs">Speaker</p>
                  <p className="text-gold font-semibold truncate">Imam Abdul-Wajuud Abdul-Lateef Adeleke</p>
                </div>
              </div>
            </div>

            {/* Topic Card */}
            <div className="w-64 md:w-auto bg-dark border border-gray-800 rounded-xl p-4 md:p-5 text-left hover:border-gold/30 transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center text-2xl shrink-0">
                  📖
                </div>
                <div className="min-w-0">
                  <p className="text-gray-500 text-xs">Topic</p>
                  <p className="text-gold font-semibold truncate">Spiritual Growth</p>
                </div>
              </div>
            </div>

            {/* Series Card */}
            <div className="w-64 md:w-auto bg-dark border border-gray-800 rounded-xl p-4 md:p-5 text-left hover:border-gold/30 transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center text-2xl shrink-0">
                  🎬
                </div>
                <div className="min-w-0">
                  <p className="text-gray-500 text-xs">Part of Series</p>
                  <p className="text-gold font-semibold truncate">Foundations of Faith</p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Mobile Swipe Indicator */}
        <div className="mt-2 flex justify-center gap-1 md:hidden">
          <div className="w-8 h-1 rounded-full bg-gold/50" />
          <div className="w-2 h-1 rounded-full bg-gray-700" />
          <div className="w-2 h-1 rounded-full bg-gray-700" />
        </div>

      </div>
    </section>

    
  );
}