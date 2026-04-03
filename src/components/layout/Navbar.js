"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const navLinks = [
    { name: "Home", href: "/", icon: "🏠" },
    { name: "About", href: "/about", icon: "ℹ️" },
    { name: "Lectures", href: "/lectures", icon: "📚" },
    { name: "Events", href: "/events", icon: "📅" },
    { name: "Blog", href: "/blog", icon: "✍️" },
    { name: "Help", href: "/help", icon: "💬" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-primary/95 backdrop-blur-xl shadow-lg shadow-black/20"
            : "bg-primary/80 backdrop-blur-md"
        } border-b border-gray-800/50`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 sm:h-20">
            
            {/* Logo */}
            <Link 
              href="/" 
              className="flex items-center gap-2 sm:gap-3 group relative z-50"
              onClick={() => setIsOpen(false)}
            >
              <div className="relative">
                <Image
                  src="/logo1.png"
                  alt="Sibgahtullah Logo"
                  width={40}
                  height={40}
                  className="sm:w-[45px] sm:h-[45px] object-contain drop-shadow-[0_0_10px_rgba(245,166,35,0.5)] group-hover:drop-shadow-[0_0_15px_rgba(245,166,35,0.7)] transition-all duration-300"
                />
                {/* Pulse ring on hover */}
                <span className="absolute inset-0 rounded-full bg-gold/20 scale-0 group-hover:scale-150 opacity-0 group-hover:opacity-100 transition-all duration-500"></span>
              </div>

              <div className="flex flex-col">
                <span className="text-xs sm:text-sm font-bold text-gold tracking-wide">
                  SIBGAHTULLAH
                </span>
                <span className="text-[10px] sm:text-xs text-gray-400 -mt-1 hidden xs:block">
                  Islamic Foundation
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 group ${
                    pathname === link.href
                      ? "text-gold bg-gold/10"
                      : "text-gray-300 hover:text-gold hover:bg-gold/5"
                  }`}
                >
                  {link.name}
                  
                  {/* Active indicator */}
                  {pathname === link.href && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-gold rounded-full"></span>
                  )}
                  
                  {/* Hover underline */}
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center gap-3 sm:gap-4">
              
              {/* Sponsor Button - Desktop */}
              <Link
                href="/sponsorship"
                className="hidden sm:flex items-center gap-2 bg-gradient-to-r from-gold to-yellow-600 text-black px-5 py-2.5 rounded-lg text-sm font-bold hover:shadow-[0_0_25px_rgba(245,166,35,0.4)] transition-all duration-300 hover:scale-105 group"
              >
                <span>Sponsor</span>
                <svg 
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>

              {/* Sponsor Button - Mobile (Icon only) */}
              <Link
                href="/sponsorship"
                className="sm:hidden flex items-center justify-center w-10 h-10 bg-gold text-black rounded-lg font-bold hover:opacity-90 transition-opacity"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </Link>

              {/* Hamburger Menu Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden relative w-10 h-10 flex items-center justify-center text-gold focus:outline-none group"
                aria-label="Toggle menu"
              >
                <div className="w-6 h-5 flex flex-col justify-between">
                  <span
                    className={`w-full h-0.5 bg-gold rounded-full transition-all duration-300 ${
                      isOpen ? "rotate-45 translate-y-2" : ""
                    }`}
                  ></span>
                  <span
                    className={`w-full h-0.5 bg-gold rounded-full transition-all duration-300 ${
                      isOpen ? "opacity-0" : ""
                    }`}
                  ></span>
                  <span
                    className={`w-full h-0.5 bg-gold rounded-full transition-all duration-300 ${
                      isOpen ? "-rotate-45 -translate-y-2" : ""
                    }`}
                  ></span>
                </div>
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      ></div>

      {/* Mobile Menu Slide-in Panel */}
      <div
        className={`fixed top-0 right-0 bottom-0 w-full sm:w-80 bg-gradient-to-b from-primary via-primary to-dark z-40 lg:hidden transform transition-transform duration-300 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } shadow-2xl border-l border-gold/20`}
      >
        {/* Mobile Menu Header */}
        <div className="flex items-center justify-between p-6 border-b border-gold/10">
          <div className="flex items-center gap-3">
            <Image
              src="/logo1.png"
              alt="Logo"
              width={35}
              height={35}
              className="object-contain drop-shadow-[0_0_10px_rgba(245,166,35,0.5)]"
            />
            <span className="text-sm font-bold text-gold">MENU</span>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gold transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation Links */}
        <nav className="flex flex-col p-4 space-y-1 overflow-y-auto h-[calc(100vh-180px)]">
          {navLinks.map((link, index) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`flex items-center gap-4 px-5 py-4 rounded-xl text-base font-medium transition-all duration-300 ${
                pathname === link.href
                  ? "bg-gold/20 text-gold border border-gold/30 shadow-lg shadow-gold/10"
                  : "text-gray-300 hover:bg-gold/5 hover:text-gold border border-transparent"
              }`}
              style={{
                animationDelay: `${index * 50}ms`,
                animation: isOpen ? "slideInRight 0.3s ease-out" : "none",
              }}
            >
              <span className="text-2xl">{link.icon}</span>
              <span>{link.name}</span>
              {pathname === link.href && (
                <span className="ml-auto w-2 h-2 bg-gold rounded-full animate-pulse"></span>
              )}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-dark to-transparent border-t border-gold/10">
          <Link
            href="/sponsorship"
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-gold to-yellow-600 text-black px-6 py-4 rounded-xl font-bold text-base hover:shadow-[0_0_25px_rgba(245,166,35,0.4)] transition-all duration-300"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Become a Sponsor</span>
          </Link>
          <p className="text-center text-xs text-gray-500 mt-3">
            Every contribution makes a difference ✨
          </p>
        </div>
      </div>

      {/* Add keyframes for slide-in animation */}
      <style jsx>{`
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  );
}