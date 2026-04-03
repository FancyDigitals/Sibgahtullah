"use client";

import { useState } from "react";

export default function DonationCTA() {
  const [amount, setAmount] = useState("");
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary via-dark to-primary">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gold rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      {/* Geometric Patterns */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-10 w-32 h-32 border-2 border-gold rotate-45"></div>
        <div className="absolute bottom-10 left-10 w-24 h-24 border-2 border-gold rotate-12"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-6 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left: Content */}
          <div className="space-y-6 text-center lg:text-left">

            {/* Heading with Gradient */}
            <h2 className="text-4xl md:text-6xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-gold via-yellow-300 to-gold bg-clip-text text-transparent animate-gradient">
                Support the Mission.
              </span>
              <br />
              <span className="text-white">Empower the Ummah.</span>
            </h2>

            <p className="text-gray-300 text-lg leading-relaxed max-w-xl">
              Your support helps us spread authentic knowledge, organize impactful programs, 
              and build a generation grounded in faith and purpose.
            </p>

          </div>

          {/* Right: CTA Card */}
          <div className="relative">
            {/* Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-gold to-yellow-600 rounded-2xl blur-xl opacity-30 animate-pulse"></div>
            
            {/* Card */}
            <div className="relative bg-gradient-to-br from-dark/90 to-primary/90 backdrop-blur-xl border border-gold/20 rounded-2xl p-8 shadow-2xl">
              
              {/* Quick Donation Amounts */}
              <div className="space-y-4 mb-6">
                <p className="text-gray-400 text-sm font-medium">Select Amount</p>
                <div className="grid grid-cols-3 gap-3">
                  {[
  { label: "₦1k", value: 1000 },
  { label: "₦10k", value: 0 },
  { label: "₦100k", value: 100000 },
].map((item) => (
  <button 
    key={item.label}
    onClick={() => setAmount(item.value)}
    className="bg-primary/50 hover:bg-gold/20 border border-gold/30 hover:border-gold text-white hover:text-gold px-4 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
  >
    {item.label}
  </button>
))}
                </div>
                <input 
  type="number"
  value={amount}
  onChange={(e) => setAmount(e.target.value)}
  placeholder="Custom amount"
  className="w-full bg-primary/50 border border-gold/30 focus:border-gold text-white placeholder-gray-500 px-4 py-3 rounded-lg outline-none transition"
/>
              </div>

              {/* Main CTAs */}
              <div className="space-y-3">
                <button className="w-full bg-gradient-to-r from-gold to-yellow-600 text-black px-8 py-4 rounded-lg font-bold text-lg hover:shadow-[0_0_40px_rgba(245,166,35,0.5)] transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 group">
                  <span>Donate Now</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>

                <button className="w-full border-2 border-gold/50 text-gold px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gold hover:text-black transition-all duration-300 hover:border-gold">
                  Become a Monthly Sponsor
                </button>
              </div>

              {/* Trust Signals */}
              <div className="mt-6 pt-6 border-t border-gold/10 flex items-center justify-center gap-6 text-xs text-gray-400">
                <div className="flex items-center gap-1">
                  <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Secure Payment</span>
                </div>
                <div className="flex items-center gap-1">
                  <svg className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span>100% Tax Deductible</span>
                </div>
              </div>

              <p className="text-gray-500 text-xs text-center mt-4 italic">
                Every contribution makes a lasting difference. ✨
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Accent Line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold to-transparent"></div>
    </section>
  );
}