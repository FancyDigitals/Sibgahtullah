"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function ThankYou() {
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowConfetti(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-b from-primary via-dark to-primary text-white flex flex-col">
      
      {/* Confetti Animation */}
      {showConfetti && (
        <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-confetti"
              style={{
                left: `${Math.random() * 100}%`,
                top: `-5%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`,
              }}
            >
              <div 
                className="w-3 h-3 rounded-sm"
                style={{
                  backgroundColor: ['#F5A623', '#FFD700', '#FFA500', '#FFE4B5', '#FFFFFF'][Math.floor(Math.random() * 5)],
                  transform: `rotate(${Math.random() * 360}deg)`,
                }}
              />
            </div>
          ))}
        </div>
      )}

      {/* Background Effects */}
      <div className="fixed inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gold rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center px-4 py-20">
        <div className="relative max-w-2xl w-full">
          
          {/* Success Card */}
          <div className="bg-gradient-to-br from-dark/90 to-primary/90 backdrop-blur-xl border border-gold/30 rounded-3xl p-8 sm:p-12 text-center shadow-2xl">
            
            {/* Animated Checkmark */}
            <div className="relative inline-flex items-center justify-center mb-8">
              <div className="absolute w-32 h-32 bg-gold/20 rounded-full animate-ping"></div>
              <div className="absolute w-28 h-28 bg-gold/10 rounded-full animate-pulse"></div>
              <div className="relative w-24 h-24 bg-gradient-to-br from-gold to-yellow-600 rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(245,166,35,0.5)]">
                <svg 
                  className="w-12 h-12 text-black animate-checkmark" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={3} 
                    d="M5 13l4 4L19 7" 
                  />
                </svg>
              </div>
            </div>

            {/* Arabic Dua */}
            <p className="text-gold text-2xl sm:text-3xl font-arabic mb-2">
              جَزَاكُمُ اللَّهُ خَيْرًا</p>
            <p className="text-gray-400 text-sm mb-6">Jazākumullāhu Khairan</p>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-gold via-yellow-300 to-gold bg-clip-text text-transparent">
                Thank You!
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-white mb-2">
              Your support has been received
            </p>

            <p className="text-gray-300 max-w-md mx-auto mb-8 leading-relaxed">
              May Allah accept your generosity and multiply your rewards abundantly. 
              Your contribution will help spread authentic Islamic knowledge and benefit the Ummah.
            </p>

            {/* Hadith Quote */}
            <div className="bg-primary/50 border border-gold/20 rounded-2xl p-6 mb-8">
              <svg className="w-8 h-8 text-gold/50 mx-auto mb-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
              </svg>
              <p className="text-gold italic text-sm sm:text-base leading-relaxed">
                "The believer's shade on the Day of Resurrection will be their charity."
              </p>
              <p className="text-gray-500 text-xs mt-3">— Hadith, Al-Tirmidhi</p>
            </div>

            {/* What's Next */}
            <div className="space-y-4 mb-8">
              <h3 className="text-gold font-semibold text-sm uppercase tracking-wider">
                What happens next?
              </h3>
              <div className="grid gap-3 text-left max-w-sm mx-auto">
                <div className="flex items-start gap-3 bg-primary/30 border border-gold/10 rounded-xl p-4">
                  <div className="w-8 h-8 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-gold font-bold text-sm">1</span>
                  </div>
                  <div>
                    <p className="text-white font-medium text-sm">Confirmation Email</p>
                    <p className="text-gray-400 text-xs mt-0.5">You'll receive an email confirmation shortly</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-primary/30 border border-gold/10 rounded-xl p-4">
                  <div className="w-8 h-8 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-gold font-bold text-sm">2</span>
                  </div>
                  <div>
                    <p className="text-white font-medium text-sm">Acknowledgment</p>
                    <p className="text-gray-400 text-xs mt-0.5">Our team will verify and acknowledge your support</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-primary/30 border border-gold/10 rounded-xl p-4">
                  <div className="w-8 h-8 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-gold font-bold text-sm">3</span>
                  </div>
                  <div>
                    <p className="text-white font-medium text-sm">Impact Updates</p>
                    <p className="text-gray-400 text-xs mt-0.5">Stay connected to see how your support helps</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-gold to-yellow-600 text-black px-8 py-4 rounded-xl font-bold hover:shadow-[0_0_30px_rgba(245,166,35,0.5)] transition-all duration-300 hover:scale-105"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                <span>Return Home</span>
              </Link>
              <Link
                href="/events"
                className="inline-flex items-center justify-center gap-2 border-2 border-gold/50 text-gold px-8 py-4 rounded-xl font-bold hover:bg-gold hover:text-black transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>Explore Events</span>
              </Link>
            </div>
          </div>

          {/* Share Section */}
          <div className="mt-8 text-center">
            <p className="text-gray-400 text-sm mb-4">
              Inspire others to support the cause
            </p>
            <div className="flex justify-center gap-3">
              {[
                { 
                  name: 'WhatsApp', 
                  color: 'bg-green-600 hover:bg-green-700',
                  icon: (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                  ),
                  href: "https://wa.me/?text=I%20just%20supported%20Sibgahtullah%20Islamic%20Foundation!%20Join%20me%20in%20making%20a%20difference.%20https://sibgahtullah.org/sponsorship"
                },
                { 
                  name: 'Twitter', 
                  color: 'bg-sky-500 hover:bg-sky-600',
                  icon: (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  ),
                  href: "https://twitter.com/intent/tweet?text=I%20just%20supported%20Sibgahtullah%20Islamic%20Foundation!%20Join%20me%20in%20spreading%20authentic%20Islamic%20knowledge.&url=https://sibgahtullah.org/sponsorship"
                },
                { 
                  name: 'Facebook', 
                  color: 'bg-blue-600 hover:bg-blue-700',
                  icon: (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  ),
                  href: "https://www.facebook.com/sharer/sharer.php?u=https://sibgahtullah.org/sponsorship"
                },
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-12 h-12 ${social.color} rounded-xl flex items-center justify-center text-white transition-all duration-300 hover:scale-110 shadow-lg`}
                  aria-label={`Share on ${social.name}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="mt-8 text-center">
            <p className="text-gray-500 text-sm">
              Questions? Contact us at{' '}
              <a href="mailto:info@sibgahtullah.org" className="text-gold hover:underline">
                info@sibgahtullah.org
              </a>
            </p>
          </div>

        </div>
      </div>

      {/* Decorative Bottom */}
      <div className="h-1 bg-gradient-to-r from-transparent via-gold to-transparent"></div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes confetti {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) rotate(720deg);
            opacity: 0;
          }
        }

        .animate-confetti {
          animation: confetti linear forwards;
        }

        @keyframes checkmark {
          0% {
            stroke-dasharray: 100;
            stroke-dashoffset: 100;
          }
          100% {
            stroke-dasharray: 100;
            stroke-dashoffset: 0;
          }
        }

        .animate-checkmark {
          animation: checkmark 0.8s ease-out forwards;
          animation-delay: 0.3s;
          stroke-dasharray: 100;
          stroke-dashoffset: 100;
        }

        .delay-1000 {
          animation-delay: 1000ms;
        }

        .font-arabic {
          font-family: 'Scheherazade New', 'Traditional Arabic', serif;
        }
      `}</style>
    </main>
  );
}