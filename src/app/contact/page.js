"use client";

import { useState } from "react";
import Link from "next/link";

/* ─── Icons ─── */

const MailIcon = ({ className = "h-6 w-6" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.6}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const PhoneIcon = ({ className = "h-6 w-6" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.6}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

const WhatsAppIcon = ({ className = "h-6 w-6" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

const MapPinIcon = ({ className = "h-6 w-6" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.6}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const ClockIcon = ({ className = "h-5 w-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.6}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const SendIcon = ({ className = "h-5 w-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
  </svg>
);

const SpinnerIcon = () => (
  <svg className="h-5 w-5 animate-spin" fill="none" viewBox="0 0 24 24">
    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
  </svg>
);

const CheckIcon = ({ className = "h-10 w-10" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

const ChevronIcon = ({ className = "h-5 w-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
  </svg>
);

const ArrowIcon = ({ className = "h-4 w-4" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
);

const ExternalIcon = ({ className = "h-4 w-4" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
);

const CoinIcon = ({ className = "h-5 w-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const CalendarIcon = ({ className = "h-5 w-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);

/* Social SVGs */
const YouTubeIcon = () => (
  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

const InstagramIcon = () => (
  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const TwitterIcon = () => (
  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const FacebookIcon = () => (
  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const TelegramIcon = () => (
  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
  </svg>
);

/* ─── Shared input class ─── */
const inputClass = "w-full rounded-2xl border border-[#E9DDFD] bg-white px-4 py-3.5 text-sm text-[#3B136B] placeholder-[#B8A5D5] outline-none transition-all focus:border-[#7C3AED] focus:shadow-[0_0_0_3px_rgba(124,58,237,0.08)]";

/* ─── Component ─── */

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      const mailto = `mailto:info@sibgahtullah.com.ng?subject=${encodeURIComponent(formData.subject || "Contact Message")}&body=${encodeURIComponent(
        `Assalamu Alaikum,\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone || "Not provided"}\n\nMessage:\n${formData.message}\n\n---\nSent from Sibgahtullah Website Contact Form`
      )}`;
      window.location.href = mailto;
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1000);
  };

  const contactInfo = [
    { icon: <MailIcon />, label: "Email Us", value: "info@sibgahtullah.com.ng", href: "mailto:info@sibgahtullah.com.ng", bg: "bg-[#EEE7FA]", color: "text-[#5B21B6]" },
    { icon: <PhoneIcon />, label: "Call Us", value: "+234 907 240 4901", href: "tel:+2349072404901", bg: "bg-[#EEF2FF]", color: "text-[#4338CA]" },
    { icon: <WhatsAppIcon />, label: "WhatsApp", value: "+234 907 240 4901", href: "https://wa.me/2349072404901?text=Assalamu%20Alaikum", bg: "bg-[#DCFCE7]", color: "text-[#16A34A]" },
    { icon: <MapPinIcon />, label: "Location", value: "Lagos, Nigeria", href: "#", bg: "bg-[#FFF9EC]", color: "text-[#C89B3C]" },
  ];

  const faqs = [
    { question: "How can I attend your events?", answer: "You can register for our events through the Events page on our website. Most events are free, and registration helps us prepare adequately for attendees." },
    { question: "How can I become a sponsor?", answer: "Visit our Sponsorship page to learn about supporting our mission. You can make bank transfers and submit your details for acknowledgment." },
    { question: "Do you offer online programs?", answer: "Yes! We have regular online lectures and programs. Follow us on social media or subscribe to our newsletter for updates." },
    { question: "How can I volunteer?", answer: "We welcome volunteers! Send us a message through this contact form expressing your interest, and our team will get back to you." },
  ];

  const socials = [
    { name: "YouTube", icon: <YouTubeIcon />, href: "#" },
    { name: "Instagram", icon: <InstagramIcon />, href: "#" },
    { name: "X (Twitter)", icon: <TwitterIcon />, href: "#" },
    { name: "Facebook", icon: <FacebookIcon />, href: "#" },
    { name: "Telegram", icon: <TelegramIcon />, href: "#" },
  ];

  return (
    <main className="relative overflow-hidden bg-white text-[#3B136B]">
      {/* Ambient */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-[#F3E8FF] opacity-70 blur-3xl" />
        <div className="absolute bottom-40 right-0 h-80 w-80 rounded-full bg-[#FFF5D9] opacity-60 blur-3xl" />
        <svg className="absolute inset-0 h-full w-full opacity-[0.03] text-[#7C3AED]">
          <pattern id="contact-grid" width="50" height="50" patternUnits="userSpaceOnUse">
            <path d="M 50 0 L 0 0 0 50" fill="none" stroke="currentColor" strokeWidth="1" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#contact-grid)" />
        </svg>
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#D4A017]/30 to-transparent" />
      </div>

      {/* ── HERO ── */}
      <section className="relative pt-32 pb-16 text-center sm:pt-36 sm:pb-20">
        <div className="mx-auto max-w-4xl px-6">
          <nav className="mb-6 flex items-center justify-center gap-2 text-sm text-[#8C7AAE]">
            <Link href="/" className="transition hover:text-[#4C1D95]">Home</Link>
            <span>/</span>
            <span className="font-medium text-[#4C1D95]">Contact</span>
          </nav>

          <div className="inline-flex items-center gap-2 rounded-full border border-[#E9DDFD] bg-[#FAF7FF] px-4 py-2 text-sm font-medium text-[#6B21A8] shadow-sm">
            <span className="h-2 w-2 rounded-full bg-[#D4A017]" />
            We would love to hear from you
          </div>

          <h1 className="mt-6 text-5xl font-semibold tracking-tight text-[#3B136B] sm:text-6xl lg:text-7xl">
            Get in Touch
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-[#6F618A] sm:text-lg sm:leading-8">
            Have a question, suggestion, or want to collaborate? We are here to help. Reach out and we will respond as soon as possible, In Shaa Allah.
          </p>

          <div className="mt-8 flex justify-center">
            <div className="flex items-center gap-2">
              <div className="h-[2px] w-10 bg-gradient-to-r from-transparent to-[#5B21B6]/40 sm:w-14" />
              <div className="h-2 w-2 rounded-full bg-[#D4A017]" />
              <div className="h-[2px] w-10 bg-gradient-to-l from-transparent to-[#5B21B6]/40 sm:w-14" />
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT CARDS ── */}
      <section className="relative pb-14">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            {contactInfo.map((info) => (
              <a
                key={info.label}
                href={info.href}
                target={info.href.startsWith("http") ? "_blank" : "_self"}
                rel="noopener noreferrer"
                className="group rounded-[1.75rem] border border-[#EEE7FA] bg-white/85 p-5 shadow-[0_20px_50px_rgba(76,29,149,0.08)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-[#E8D7A8] hover:shadow-[0_24px_60px_rgba(76,29,149,0.12)]"
              >
                <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${info.bg} ${info.color} mb-4 transition-transform duration-300 group-hover:scale-110`}>
                  {info.icon}
                </div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#8C7AAE]">{info.label}</p>
                <p className="mt-1 text-sm font-semibold text-[#3B136B] group-hover:text-[#4C1D95] transition-colors break-all">
                  {info.value}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── MAIN CONTENT ── */}
      <section className="relative pb-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">

            {/* Contact Form */}
            <div className="rounded-[1.75rem] border border-[#EEE7FA] bg-white/85 p-7 shadow-[0_20px_50px_rgba(76,29,149,0.08)] backdrop-blur-xl sm:p-8">
              <div className="flex items-center gap-3 mb-2">
                <span className="h-8 w-1 rounded-full bg-[#D4A017]" />
                <h2 className="text-2xl font-semibold text-[#3B136B] sm:text-3xl">Send a Message</h2>
              </div>
              <p className="text-sm text-[#8C7AAE] mb-8">Fill out the form and we will get back to you shortly.</p>

              {submitted ? (
                <div className="py-16 text-center">
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl border border-[#D1FAE5] bg-[#ECFDF5]">
                    <CheckIcon className="h-10 w-10 text-emerald-500" />
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-[#3B136B]">Message Sent!</h3>
                  <p className="mt-2 text-sm text-[#6F618A]">Jazākallāhu Khairan. We will respond soon, In Shaa Allah.</p>
                  <button
                    onClick={() => { setSubmitted(false); setFormData({ name: "", email: "", phone: "", subject: "", message: "" }); }}
                    className="mt-6 text-sm font-medium text-[#7C3AED] transition hover:text-[#4C1D95]"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-medium text-[#6F618A]">Full Name <span className="text-[#D4A017]">*</span></label>
                      <input type="text" placeholder="Your name" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className={inputClass} />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-medium text-[#6F618A]">Email <span className="text-[#D4A017]">*</span></label>
                      <input type="email" placeholder="your@email.com" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className={inputClass} />
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-medium text-[#6F618A]">Phone Number</label>
                      <input type="tel" placeholder="+234 XXX XXX XXXX" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className={inputClass} />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-medium text-[#6F618A]">Subject</label>
                      <select value={formData.subject} onChange={(e) => setFormData({ ...formData, subject: e.target.value })} className={`${inputClass} cursor-pointer appearance-none`}>
                        <option value="">Select a topic</option>
                        <option>General Inquiry</option>
                        <option>Event Registration</option>
                        <option>Sponsorship</option>
                        <option>Volunteering</option>
                        <option>Collaboration</option>
                        <option>Feedback</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-[#6F618A]">Message <span className="text-[#D4A017]">*</span></label>
                    <textarea placeholder="How can we help you?" required rows={5} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className={`${inputClass} resize-none`} />
                  </div>

                  <button type="submit" disabled={isSubmitting} className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[#4C1D95] py-4 text-sm font-semibold text-white shadow-[0_14px_30px_rgba(76,29,149,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#3B136B] disabled:cursor-not-allowed disabled:opacity-70">
                    {isSubmitting ? <><SpinnerIcon /><span>Sending...</span></> : <><SendIcon /><span>Send Message</span></>}
                  </button>
                </form>
              )}
            </div>

            {/* Right column */}
            <div className="space-y-6">
              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/2349072404901?text=Assalamu%20Alaikum%2C%20I%20have%20a%20question"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-[1.75rem] border border-[#BBF7D0] bg-[#F0FDF4] p-6 shadow-[0_20px_50px_rgba(22,163,74,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(22,163,74,0.12)]"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#16A34A] text-white shadow-lg transition-transform group-hover:scale-110">
                  <WhatsAppIcon className="h-7 w-7" />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-[#15803D]">Quick Response via WhatsApp</p>
                  <p className="mt-1 text-sm text-[#4ADE80]/80 text-[#166534]">Faster replies — message us directly</p>
                </div>
                <ArrowIcon className="h-5 w-5 text-[#16A34A] transition-transform group-hover:translate-x-1" />
              </a>

              {/* FAQs */}
              <div className="rounded-[1.75rem] border border-[#EEE7FA] bg-white/85 p-7 shadow-[0_20px_50px_rgba(76,29,149,0.08)] backdrop-blur-xl sm:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <span className="h-6 w-1 rounded-full bg-[#D4A017]" />
                  <h3 className="text-xl font-semibold text-[#3B136B]">Frequently Asked Questions</h3>
                </div>
                <div className="space-y-3">
                  {faqs.map((faq, index) => (
                    <div key={index} className="overflow-hidden rounded-2xl border border-[#EEE7FA]">
                      <button
                        onClick={() => setOpenFaq(openFaq === index ? null : index)}
                        className="flex w-full items-center justify-between p-4 text-left transition hover:bg-[#FAF8FF]"
                      >
                        <span className="pr-4 text-sm font-semibold text-[#3B136B]">{faq.question}</span>
                        <ChevronIcon className={`h-5 w-5 shrink-0 text-[#C89B3C] transition-transform duration-300 ${openFaq === index ? "rotate-180" : ""}`} />
                      </button>
                      <div className={`overflow-hidden transition-all duration-300 ${openFaq === index ? "max-h-40" : "max-h-0"}`}>
                        <p className="px-4 pb-4 text-sm leading-7 text-[#6F618A]">{faq.answer}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Response Hours */}
              <div className="rounded-[1.75rem] border border-[#EEE7FA] bg-white/85 p-6 shadow-[0_20px_50px_rgba(76,29,149,0.08)] backdrop-blur-xl">
                <div className="flex items-center gap-2 mb-5">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#F0E2B6] bg-[#FFF9EC] text-[#C89B3C]">
                    <ClockIcon />
                  </span>
                  <h3 className="text-base font-semibold text-[#3B136B]">Response Hours</h3>
                </div>
                <div className="space-y-3">
                  {[
                    { day: "Saturday – Thursday", time: "9:00 AM – 6:00 PM" },
                    { day: "Friday", time: "2:00 PM – 6:00 PM" },
                  ].map((row) => (
                    <div key={row.day} className="flex items-center justify-between rounded-2xl border border-[#F1EAFB] bg-[#FAF8FF] px-4 py-3 text-sm">
                      <span className="text-[#6F618A]">{row.day}</span>
                      <span className="font-semibold text-[#4C1D95]">{row.time}</span>
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-xs text-[#8C7AAE]">We aim to respond within 24–48 hours.</p>
              </div>

              {/* Socials */}
              <div className="rounded-[1.75rem] border border-[#EEE7FA] bg-white/85 p-6 shadow-[0_20px_50px_rgba(76,29,149,0.08)] backdrop-blur-xl">
                <h3 className="mb-5 text-base font-semibold text-[#3B136B]">Follow Us</h3>
                <div className="flex flex-wrap gap-2">
                  {socials.map((s) => (
                    <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-2 rounded-xl border border-[#EEE7FA] bg-white px-4 py-2.5 text-sm font-medium text-[#7A63A8] transition-all hover:-translate-y-0.5 hover:border-[#E9D59C] hover:text-[#4C1D95] hover:shadow-sm"
                    >
                      {s.icon}
                      {s.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MAP ── */}
      <section className="relative pb-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="overflow-hidden rounded-[1.75rem] border border-[#EEE7FA] bg-white/85 shadow-[0_20px_50px_rgba(76,29,149,0.08)]">
            <div className="flex items-center gap-3 border-b border-[#F1EAFB] px-7 py-5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#F0E2B6] bg-[#FFF9EC] text-[#C89B3C]">
                <MapPinIcon className="h-5 w-5" />
              </span>
              <h3 className="text-base font-semibold text-[#3B136B]">Our Location</h3>
            </div>
            <div className="flex h-64 items-center justify-center bg-[linear-gradient(135deg,#FAF7FF,#FFFDF7)] sm:h-80">
              <div className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-3xl border border-[#F0E2B6] bg-[#FFF9EC] text-[#C89B3C]">
                  <MapPinIcon className="h-8 w-8" />
                </div>
                <p className="mt-4 text-sm font-semibold text-[#3B136B]">Lagos, Nigeria</p>
                <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-[#7C3AED] transition hover:text-[#4C1D95]">
                  Open in Google Maps
                  <ExternalIcon />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section className="relative pb-24">
        <div className="mx-auto max-w-4xl px-6 text-center sm:px-8">
          <div className="relative overflow-hidden rounded-[2rem] border border-[#E9DDFD] bg-[linear-gradient(135deg,#FAF7FF_0%,#FFFDF7_50%,#F7F3FF_100%)] p-10 shadow-[0_25px_80px_rgba(76,29,149,0.10)] sm:p-14">
            <div className="pointer-events-none absolute -left-10 -top-10 h-40 w-40 rounded-full bg-[#F3E8FF] opacity-60 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-[#FFF5D9] opacity-60 blur-3xl" />
            <div className="relative">
              <h2 className="text-3xl font-semibold tracking-tight text-[#3B136B] sm:text-4xl">Want to Support Our Mission?</h2>
              <p className="mx-auto mt-4 max-w-lg text-base leading-7 text-[#6F618A]">
                Your generous support helps spread authentic Islamic knowledge and organise impactful community programs.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                <Link href="/sponsorship" className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#4C1D95] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_14px_30px_rgba(76,29,149,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#3B136B]">
                  <CoinIcon />
                  Become a Sponsor
                </Link>
                <Link href="/events" className="inline-flex items-center justify-center gap-2 rounded-2xl border border-[#E9DDFD] bg-white px-6 py-3.5 text-sm font-semibold text-[#4C1D95] transition-all duration-300 hover:border-[#D4A017]/50 hover:text-[#5B21B6] hover:shadow-sm">
                  <CalendarIcon />
                  View Events
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}