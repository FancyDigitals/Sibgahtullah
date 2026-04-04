"use client";

import { useState } from "react";

export default function DonationCTA() {
  const [amount, setAmount] = useState("");
  const [showForm, setShowForm] = useState(false);
const [formType, setFormType] = useState("donation");
const [formData, setFormData] = useState({
  name: "",
  email: "",
  phone: "",
  type: "",
  frequency: "",
  purpose: "",
  message: "",
});
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
          {showForm && (
  <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 overflow-y-auto">

    <div className="bg-dark border border-gold/20 rounded-xl p-4 sm:p-5 w-[95%] sm:w-full max-w-sm relative max-h-[90vh] overflow-y-auto shadow-2xl">

      {/* Close Button */}
      <button
        onClick={() => setShowForm(false)}
        className="absolute top-3 right-3 text-gray-400 hover:text-white"
      >
        ✕
      </button>

      <h3 className="text-lg font-bold text-gold mb-4 capitalize">
        {formType} Form
      </h3>

      <form
        onSubmit={(e) => {
          e.preventDefault();

          const mailto = `mailto:your@email.com?subject=DONATION SUBMISSION&body=
Full Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}

Amount: ₦${amount || "Not selected"}
Donation Type: ${formData.type}
Frequency: ${formData.frequency}
Purpose: ${formData.purpose}

Message:
${formData.message}
`;

          window.location.href = mailto;
        }}
        className="space-y-3"
      >

        <input
          type="text"
          placeholder="Full Name"
          required
          value={formData.name}
          onChange={(e) =>
            setFormData({ ...formData, name: e.target.value })
          }
          className="w-full px-3 py-2.5 bg-primary border border-gray-700 rounded-lg text-white text-sm"
        />

        <input
          type="email"
          placeholder="Email Address"
          required
          value={formData.email}
          onChange={(e) =>
            setFormData({ ...formData, email: e.target.value })
          }
          className="w-full px-3 py-2.5 bg-primary border border-gray-700 rounded-lg text-white text-sm"
        />

        <input
          type="tel"
          placeholder="Phone Number"
          required
          value={formData.phone}
          onChange={(e) =>
            setFormData({ ...formData, phone: e.target.value })
          }
          className="w-full px-3 py-2.5 bg-primary border border-gray-700 rounded-lg text-white text-sm"
        />

        <select
          required
          value={formData.type}
          onChange={(e) =>
            setFormData({ ...formData, type: e.target.value })
          }
          className="w-full px-3 py-2.5 bg-primary border border-gray-700 rounded-lg text-white text-sm"
        >
          <option value="">Donation Type</option>
          <option value="Zakat">Zakat</option>
          <option value="Sadaqah">Sadaqah</option>
          <option value="Lillah">Lillah</option>
          <option value="General Donation">General</option>
        </select>

        <select
          required
          value={formData.frequency}
          onChange={(e) =>
            setFormData({ ...formData, frequency: e.target.value })
          }
          className="w-full px-3 py-2.5 bg-primary border border-gray-700 rounded-lg text-white text-sm"
        >
          <option value="">Frequency</option>
          <option value="One-time">One-time</option>
          <option value="Monthly">Monthly</option>
        </select>

        <input
          type="text"
          placeholder="Purpose (optional)"
          value={formData.purpose}
          onChange={(e) =>
            setFormData({ ...formData, purpose: e.target.value })
          }
          className="w-full px-3 py-2.5 bg-primary border border-gray-700 rounded-lg text-white text-sm"
        />

        <textarea
          placeholder="Message (optional)"
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
          className="w-full px-3 py-2.5 bg-primary border border-gray-700 rounded-lg text-white text-sm"
        />

        <label className="flex items-start gap-2 text-xs text-gray-400">
          <input type="checkbox" required />
          <span>I confirm this donation is for the sake of Allah.</span>
        </label>

        <button
          type="submit"
          className="w-full bg-gold text-black py-2.5 rounded-lg font-bold text-sm"
        >
          Submit Donation
        </button>

      </form>
    </div>
  </div>
)}

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
  { label: "₦10k", value: 10000 },
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
  onChange={(e) => setAmount(Number(e.target.value))}
  placeholder="Custom amount"
  className="w-full bg-primary/50 border border-gold/30 focus:border-gold text-white placeholder-gray-500 px-4 py-3 rounded-lg outline-none transition"
/>
              </div>

              {/* Main CTAs */}
              <div className="space-y-3">
                <button
  onClick={() => {
    setFormType("donation");
    setShowForm(true);
  }}
  className="w-full bg-gradient-to-r from-gold to-yellow-600 text-black px-8 py-4 rounded-lg font-bold text-lg hover:shadow-[0_0_40px_rgba(245,166,35,0.5)] transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 group"
>
                  <span>Donate Now</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>

                <button
  onClick={() => {
    setFormType("sponsor");
    setShowForm(true);
  }}
  className="w-full border-2 border-gold/50 text-gold px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gold hover:text-black transition-all duration-300 hover:border-gold"
>
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