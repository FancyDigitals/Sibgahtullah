"use client";

import { useState } from "react";

/* ─── SVG Icons ─── */

const ArrowIcon = ({ className = "h-5 w-5" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
  </svg>
);

const ShieldIcon = ({ className = "h-4 w-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
  </svg>
);

const StarIcon = ({ className = "h-4 w-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const CloseIcon = ({ className = "h-5 w-5" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const HeartIcon = ({ className = "h-7 w-7" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
  </svg>
);

const UsersIcon = ({ className = "h-7 w-7" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
  </svg>
);

const inputClass =
  "w-full rounded-2xl border border-[#E9DDFD] bg-white px-4 py-3 text-sm text-[#3B136B] placeholder-[#B8A5D5] outline-none transition-all focus:border-[#7C3AED] focus:shadow-[0_0_0_3px_rgba(124,58,237,0.08)]";

const selectClass =
  "w-full rounded-2xl border border-[#E9DDFD] bg-white px-4 py-3 text-sm text-[#3B136B] outline-none transition-all focus:border-[#7C3AED] focus:shadow-[0_0_0_3px_rgba(124,58,237,0.08)] appearance-none";

/* ─── Component ─── */

export default function DonationCTA() {
  const [amount, setAmount] = useState(0);
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

  const presetAmounts = [
    { label: "₦1,000", value: 1000 },
    { label: "₦10,000", value: 10000 },
    { label: "₦100,000", value: 100000 },
  ];

  const highlights = [
    {
      icon: <HeartIcon />,
      title: "Spread authentic knowledge",
      desc: "Fund lectures, educational content, and scholarly programs.",
    },
    {
      icon: <UsersIcon />,
      title: "Build community",
      desc: "Support events, youth programs, and outreach initiatives.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white py-24 sm:py-28">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 top-10 h-80 w-80 rounded-full bg-[#F3E8FF] opacity-70 blur-3xl" />
        <div className="absolute bottom-10 right-0 h-80 w-80 rounded-full bg-[#FFF5D9] opacity-60 blur-3xl" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#D4A017]/30 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#D4A017]/30 to-transparent" />

        <svg className="absolute inset-0 h-full w-full opacity-[0.035] text-[#7C3AED]">
          <pattern id="donation-grid" width="50" height="50" patternUnits="userSpaceOnUse">
            <path d="M 50 0 L 0 0 0 50" fill="none" stroke="currentColor" strokeWidth="1" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#donation-grid)" />
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16">

          {/* Left Content */}
          <div className="max-w-xl">

            <h2 className="mt-6 text-4xl font-semibold leading-tight tracking-tight text-[#3B136B] sm:text-5xl lg:text-6xl">
              Support the Mission.
              <span className="block text-[#5B21B6]">
                Empower the Ummah.
              </span>
            </h2>

            <p className="mt-6 text-base leading-7 text-[#6F618A] sm:text-lg sm:leading-8">
              Your support helps spread authentic knowledge, organise impactful
              programs, and build a generation grounded in faith and purpose.
            </p>

            <div className="mt-10 space-y-5">
              {highlights.map((h) => (
                <div key={h.title} className="flex items-start gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-[#F0E2B6] bg-[#FFF9EC] text-[#C89B3C] shadow-sm">
                    {h.icon}
                  </div>
                  <div>
                    <p className="font-semibold text-[#3B136B]">{h.title}</p>
                    <p className="mt-1 text-sm leading-6 text-[#6F618A]">{h.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Card */}
          <div className="relative">
            <div className="absolute -inset-5 rounded-[2.5rem] bg-[radial-gradient(circle_at_top_left,rgba(91,33,182,0.12),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(212,160,23,0.16),transparent_35%)] blur-2xl" />

            <div className="relative rounded-[2rem] border border-[#E9DDFD] bg-white/90 p-7 shadow-[0_25px_80px_rgba(76,29,149,0.14)] backdrop-blur-xl sm:p-8">

              <div className="mb-6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#C89B3C]">
                  Select Amount
                </p>

                <div className="mt-3 grid grid-cols-3 gap-3">
                  {presetAmounts.map((item) => (
                    <button
                      key={item.value}
                      onClick={() => setAmount(item.value)}
                      className={`rounded-2xl border px-4 py-3 text-sm font-semibold transition-all duration-200 ${
                        amount === item.value
                          ? "border-[#4C1D95] bg-[#4C1D95] text-white shadow-[0_8px_20px_rgba(76,29,149,0.20)]"
                          : "border-[#E9DDFD] bg-[#FAF8FF] text-[#4C1D95] hover:border-[#4C1D95]"
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>

                <input
                  type="number"
                  value={amount || ""}
                  onChange={(e) => setAmount(Number(e.target.value))}
                  placeholder="Enter custom amount"
                  className={`${inputClass} mt-3`}
                />
              </div>

              <div className="space-y-3">
                <button
                  onClick={() => { setFormType("donation"); setShowForm(true); }}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[#4C1D95] px-6 py-4 text-base font-semibold text-white shadow-[0_14px_30px_rgba(76,29,149,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#3B136B]"
                >
                  <span>Donate Now</span>
                  <ArrowIcon />
                </button>

                <button
                  onClick={() => { setFormType("sponsor"); setShowForm(true); }}
                  className="inline-flex w-full items-center justify-center rounded-2xl border border-[#E9DDFD] bg-white px-6 py-4 text-base font-semibold text-[#4C1D95] transition-all duration-300 hover:border-[#D4A017]/60 hover:text-[#5B21B6] hover:shadow-sm"
                >
                  Become a Monthly Sponsor
                </button>
              </div>

              {/* Trust signals */}
              <div className="mt-7 border-t border-[#F1EAFB] pt-6 flex flex-wrap items-center justify-center gap-6">
                <div className="flex items-center gap-1.5 text-xs text-[#6F618A]">
                  <ShieldIcon className="h-4 w-4 text-emerald-500" />
                  <span>Secure Payment</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-[#6F618A]">
                  <StarIcon className="h-4 w-4 text-[#D4A017]" />
                  <span>100% Tax Deductible</span>
                </div>
              </div>

              <p className="mt-4 text-center text-xs italic text-[#8C7AAE]">
                Every contribution makes a lasting difference.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Donation Modal */}
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-[#2B0F46]/20 p-4 backdrop-blur-sm">
          <div className="relative w-full max-w-sm rounded-[2rem] border border-[#E9DDFD] bg-white p-7 shadow-[0_30px_80px_rgba(76,29,149,0.18)]">

            <button
              onClick={() => setShowForm(false)}
              className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-[#F1EAFB] text-[#7A63A8] transition-colors hover:text-[#4C1D95]"
            >
              <CloseIcon />
            </button>

            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#F0E2B6] bg-[#FFF9EC] text-[#C89B3C] shadow-sm">
                <HeartIcon />
              </div>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#C89B3C]">
                  Contribution
                </p>
                <h3 className="text-xl font-semibold capitalize text-[#3B136B]">
                  {formType} Form
                </h3>
              </div>
            </div>

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
${formData.message}`;
                window.location.href = mailto;
              }}
              className="mt-6 space-y-3"
            >
              <input
                type="text"
                placeholder="Full Name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className={inputClass}
              />

              <input
                type="email"
                placeholder="Email Address"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className={inputClass}
              />

              <input
                type="tel"
                placeholder="Phone Number"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className={inputClass}
              />

              <select
                required
                value={formData.type}
                onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                className={selectClass}
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
                onChange={(e) => setFormData({ ...formData, frequency: e.target.value })}
                className={selectClass}
              >
                <option value="">Frequency</option>
                <option value="One-time">One-time</option>
                <option value="Monthly">Monthly</option>
              </select>

              <input
                type="text"
                placeholder="Purpose (optional)"
                value={formData.purpose}
                onChange={(e) => setFormData({ ...formData, purpose: e.target.value })}
                className={inputClass}
              />

              <textarea
                rows={3}
                placeholder="Message (optional)"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className={inputClass}
              />

              <label className="flex items-start gap-2.5 text-xs text-[#6F618A]">
                <input
                  type="checkbox"
                  required
                  className="mt-0.5 accent-[#4C1D95]"
                />
                <span>I confirm this donation is for the sake of Allah.</span>
              </label>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[#4C1D95] py-3.5 text-sm font-semibold text-white shadow-[0_14px_30px_rgba(76,29,149,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#3B136B]"
              >
                Submit {formType === "donation" ? "Donation" : "Sponsorship"}
                <ArrowIcon className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}