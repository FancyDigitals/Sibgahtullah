"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function SponsorshipPage() {
  const [copied, setCopied] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [fileName, setFileName] = useState("");
  const [topSponsors, setTopSponsors] = useState<any[]>([]);
  useEffect(() => {
  const data = JSON.parse(localStorage.getItem("sponsors") || "[]");

  const approved = data.filter((s: any) => s.approved);

  setTopSponsors(approved.slice(0, 6));
}, []);

  const copy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(""), 2000);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  const handleSubmit = (e: any) => {
  setIsSubmitting(true);

  const form = e.target;

  const name = form.name.value;
  const email = form.email.value;
  const phone = form.phone.value;
  const amount = form.amount.value;
  const reference = form.reference?.value || "";
  const message = form.message?.value || "";

  // SAVE LOCAL
  const newSponsor = {
    name,
    amount,
    approved: false,
    date: new Date().toISOString(),
  };

  const existing = JSON.parse(localStorage.getItem("sponsors") || "[]");
  localStorage.setItem("sponsors", JSON.stringify([newSponsor, ...existing]));

  // WHATSAPP
  const text = `Assalamu Alaikum,
I just made a sponsorship payment.

Name: ${name}
Email: ${email}
Phone: ${phone}
Amount: ₦${amount}
Reference: ${reference}

Message: ${message}`;

  const encoded = encodeURIComponent(text);

  // OPEN WHATSAPP (no delay needed)
  window.open(`https://wa.me/2349072404901?text=${encoded}`, "_blank");
};

  return (
    <main className="min-h-screen bg-gradient-to-b from-primary via-dark to-primary text-white">
      
      {/* HERO SECTION */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-96 h-96 bg-gold rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-gold rounded-full blur-3xl animate-pulse delay-700"></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6">
          
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8 flex-wrap justify-center">
            <Link href="/" className="hover:text-gold transition">Home</Link>
            <span>/</span>
            <span className="text-gold">Sponsorship</span>
          </nav>

          {/* Header Card */}
          <div className="bg-gradient-to-br from-dark/90 to-primary/90 backdrop-blur-xl border border-gold/30 rounded-3xl p-8 sm:p-12 text-center shadow-2xl">
            
            {/* Islamic Pattern/Icon */}
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gold/10 border-2 border-gold/30 rounded-2xl mb-6">
              <svg className="w-10 h-10 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-gold via-yellow-300 to-gold bg-clip-text text-transparent">
                Become a Sponsor
              </span>
            </h1>

            <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed mb-6">
              Support the mission of Sibgahtullah Islamic Foundation and earn continuous 
              rewards (Sadaqah Jariyah) by enabling authentic Islamic knowledge to reach countless souls.
            </p>

            {/* Hadith Quote */}
            <div className="bg-primary/50 border border-gold/10 rounded-xl p-4 max-w-xl mx-auto">
              <p className="text-gold italic text-sm">
                "When a person dies, all their deeds end except three: a continuing charity, 
                beneficial knowledge, or a righteous child who prays for them."
              </p>
              <p className="text-gray-500 text-xs mt-2">— Sahih Muslim</p>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          
          <div className="space-y-8">

            {/* Bank Details */}
            <div className="bg-dark/50 border border-gray-800 rounded-2xl p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gold mb-2 flex items-center gap-3">
                    <span className="w-1 h-6 bg-gold rounded-full"></span>
                    Bank Transfer Details
                  </h2>
                  <p className="text-gray-400 text-sm">
                    Use the account details below for your donation
                  </p>
                </div>
                <div className="bg-green-500/10 border border-green-500/30 rounded-lg px-3 py-1 self-start">
                  <span className="text-green-400 text-xs font-semibold flex items-center gap-1">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Verified
                  </span>
                </div>
              </div>

              <div className="space-y-3">
                {/* Bank Name */}
                <div className="bg-primary/50 border border-gold/10 rounded-xl p-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 mb-0.5">Bank Name</p>
                      <p className="text-white font-bold text-lg">GTBank</p>
                    </div>
                  </div>
                </div>

                {/* Account Name */}
                <div className="bg-primary/50 border border-gold/10 rounded-xl p-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 mb-0.5">Account Name</p>
                      <p className="text-white font-bold text-lg">Sibgah International Limited</p>
                    </div>
                  </div>
                </div>

                {/* Account Numbers Grid */}
                <div className="grid sm:grid-cols-2 gap-3">
                  {/* NGN Account */}
                  <div className="bg-gradient-to-br from-gold/5 to-primary/50 border border-gold/20 rounded-xl p-5 hover:border-gold/40 transition-all">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <span className="text-gold font-bold text-lg">₦</span>
                        <span className="text-xs text-gray-400">Naira Account</span>
                      </div>
                      <span className="bg-gold/10 text-gold text-xs px-2 py-0.5 rounded-full">NGN</span>
                    </div>
                    <p className="text-gold font-bold text-2xl tracking-wider mb-3">0666252974</p>
                    <button
                      onClick={() => copy("0666252974", "ngn")}
                      className={`w-full flex items-center justify-center gap-2 py-2.5 rounded-lg font-semibold text-sm transition-all ${
                        copied === "ngn" 
                          ? "bg-green-500 text-white" 
                          : "bg-gold text-black hover:shadow-lg hover:scale-105"
                      }`}
                    >
                      {copied === "ngn" ? (
                        <>
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Copied!</span>
                        </>
                      ) : (
                        <>
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                          </svg>
                          <span>Copy Number</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* Foreign Account */}
                  <div className="bg-gradient-to-br from-blue-500/5 to-primary/50 border border-blue-500/20 rounded-xl p-5 hover:border-blue-500/40 transition-all">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <span className="text-blue-400 font-bold text-lg">$</span>
                        <span className="text-xs text-gray-400">Foreign Currency</span>
                      </div>
                      <span className="bg-blue-500/10 text-blue-400 text-xs px-2 py-0.5 rounded-full">USD/GBP/EUR</span>
                    </div>
                    <p className="text-blue-400 font-bold text-2xl tracking-wider mb-3">0660307584</p>
                    <button
                      onClick={() => copy("0660307584", "fx")}
                      className={`w-full flex items-center justify-center gap-2 py-2.5 rounded-lg font-semibold text-sm transition-all ${
                        copied === "fx" 
                          ? "bg-green-500 text-white" 
                          : "bg-blue-500 text-white hover:shadow-lg hover:scale-105"
                      }`}
                    >
                      {copied === "fx" ? (
                        <>
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Copied!</span>
                        </>
                      ) : (
                        <>
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                          </svg>
                          <span>Copy Number</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>

              {/* Important Note */}
              <div className="mt-6 bg-gold/5 border border-gold/20 rounded-xl p-4">
                <div className="flex gap-3">
                  <svg className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div className="text-sm text-gray-300">
                    <p className="font-semibold text-gold mb-1">Jazākallāhu Khairan</p>
                    <p>After making your transfer, please submit your details below so we can acknowledge your generous contribution and keep you updated on our programs.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Submission Form */}
            <div className="bg-dark/50 border border-gray-800 rounded-2xl p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gold mb-2 flex items-center gap-3">
                <span className="w-1 h-6 bg-gold rounded-full"></span>
                Submit Payment Details
              </h2>
              <p className="text-gray-400 text-sm mb-6">
                Fill in your information and upload your payment receipt
              </p>

              <form
                action="https://formsubmit.co/fancydigitalsng@gmail.com"
                method="POST"
                encType="multipart/form-data"
                onSubmit={handleSubmit}
                className="space-y-5"
              >
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_subject" value="New Sponsorship Submission" />
                <input type="hidden" name="_next" value="http://localhost:3000/thank-you" />

                {/* Name & Email */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name <span className="text-gold">*</span>
                    </label>
                    <input
                      name="name"
                      type="text"
                      placeholder="Enter your full name"
                      required
                      className="w-full px-4 py-3.5 bg-primary/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold/50 transition"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address <span className="text-gold">*</span>
                    </label>
                    <input
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      required
                      className="w-full px-4 py-3.5 bg-primary/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold/50 transition"
                    />
                  </div>
                </div>

                {/* Phone & Amount */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Phone Number
                    </label>
                    <input
                      name="phone"
                      type="tel"
                      placeholder="+234 XXX XXX XXXX"
                      className="w-full px-4 py-3.5 bg-primary/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold/50 transition"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Amount Donated <span className="text-gold">*</span>
                    </label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gold font-semibold">₦</span>
                      <input
                        name="amount"
                        type="number"
                        placeholder="0.00"
                        required
                        className="w-full pl-10 pr-4 py-3.5 bg-primary/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold/50 transition"
                      />
                    </div>
                  </div>
                </div>

                {/* File Upload */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Upload Payment Receipt <span className="text-gold">*</span>
                  </label>
                  <div className="bg-primary/50 border-2 border-dashed border-gray-700 rounded-xl p-8 hover:border-gold/50 transition cursor-pointer relative">
                    <input
                      type="file"
                      name="attachment"
                      accept="image/*,.pdf"
                      required
                      onChange={handleFileChange}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    />
                    <div className="text-center">
                      {fileName ? (
                        <>
                          <div className="w-16 h-16 bg-green-500/10 border border-green-500/30 rounded-full flex items-center justify-center mx-auto mb-3">
                            <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <p className="text-green-400 font-semibold">{fileName}</p>
                          <p className="text-gray-500 text-sm mt-1">Click to change file</p>
                        </>
                      ) : (
                        <>
                          <svg className="w-12 h-12 text-gray-500 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                          </svg>
                          <p>
                            <span className="text-gold font-semibold">Click to upload</span>
                            <span className="text-gray-400"> or drag and drop</span>
                          </p>
                          <p className="text-xs text-gray-500 mt-2">PNG, JPG or PDF (MAX. 5MB)</p>
                        </>
                      )}
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Message / Dua Request (Optional)
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Share any message or dua request..."
                    className="w-full px-4 py-3.5 bg-primary/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold/50 transition resize-none"
                  />
                </div>

                {/* Anonymous Option */}
                <div className="flex items-center gap-3 bg-primary/30 border border-gold/10 rounded-lg p-4">
                  <input 
                    type="checkbox" 
                    name="anonymous" 
                    id="anonymous"
                    className="w-5 h-5 rounded border-gray-600 text-gold focus:ring-gold/50"
                  />
                  <label htmlFor="anonymous" className="text-sm text-gray-300 cursor-pointer">
                    I prefer to remain anonymous (Your name will not be displayed publicly)
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-gold to-yellow-600 text-black py-4 rounded-xl font-bold text-base hover:shadow-[0_0_30px_rgba(245,166,35,0.5)] transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      <span>Submitting...</span>
                    </>
                  ) : (
                    <>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Submit Details</span>
                    </>
                  )}
                </button>

                {/* Divider */}
                <div className="relative py-2">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-800"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-4 bg-dark text-gray-500">Or submit via</span>
                  </div>
                </div>

                {/* WhatsApp Alternative */}
                <button
  type="button"
  onClick={() => {
    const form = document.querySelector("form") as HTMLFormElement;

    const name = (form.elements.namedItem("name") as HTMLInputElement)?.value;
    const email = (form.elements.namedItem("email") as HTMLInputElement)?.value;
    const phone = (form.elements.namedItem("phone") as HTMLInputElement)?.value;
    const amount = (form.elements.namedItem("amount") as HTMLInputElement)?.value;
    const reference = (form.elements.namedItem("reference") as HTMLInputElement)?.value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement)?.value;

    const text = `Assalamu Alaikum,
I just made a sponsorship payment.

Name: ${name}
Email: ${email}
Phone: ${phone}
Amount: ₦${amount}
Reference: ${reference}

Message: ${message}`;

    const encoded = encodeURIComponent(text);

    window.open(`https://wa.me/2349072404901?text=${encoded}`, "_blank");
  }}
  className="block w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-xl font-bold text-base transition-all"
>
  Submit via WhatsApp
</button>
              </form>
            </div>

            {/* Recognized Sponsors */}
            <div className="bg-dark/50 border border-gray-800 rounded-2xl p-6 sm:p-8">
              <div className="text-center mb-8">
                <h2 className="text-xl sm:text-2xl font-bold text-gold mb-2">
                  Honored Supporters
                </h2>
                <p className="text-gray-400 text-sm">
                  May Allah reward all our generous sponsors abundantly
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {topSponsors.map((sponsor, index) => (
                  <div 
                    key={index}
                    className="bg-primary/30 border border-gold/10 rounded-xl p-4 text-center hover:border-gold/30 transition group"
                  >
                    <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-gold/20 transition">
                      <svg className="w-6 h-6 text-gold" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-white font-medium text-sm">{sponsor.name}</p>
                    <p className="text-gray-500 text-xs mt-1">
  {new Date(sponsor.date).getFullYear()}
</p>
                  </div>
                ))}
              </div>

              <p className="text-center text-gray-500 text-sm mt-6 italic">
                "Whoever guides someone to goodness will have a reward like one who did it." — Sahih Muslim
              </p>
            </div>

            {/* Your Impact Section */}
            <div className="bg-gradient-to-br from-gold/5 to-primary/30 border border-gold/20 rounded-2xl p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-6 text-center">
                Your Contribution Helps Us
              </h2>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  {
                    icon: (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    ),
                    title: "Spread Islamic Knowledge",
                    desc: "Fund authentic lectures, courses, and educational materials"
                  },
                  {
                    icon: (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    ),
                    title: "Organize Community Events",
                    desc: "Enable impactful conferences, seminars, and gatherings"
                  },
                  {
                    icon: (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    ),
                    title: "Support Charitable Work",
                    desc: "Help us reach those in need with essential aid and support"
                  },
                  {
                    icon: (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    ),
                    title: "Empower the Youth",
                    desc: "Build a generation grounded in faith, purpose, and excellence"
                  }
                ].map((item, index) => (
                  <div 
                    key={index}
                    className="bg-dark/50 border border-gold/10 rounded-xl p-5 hover:border-gold/30 transition"
                  >
                    <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center text-gold mb-4">
                      {item.icon}
                    </div>
                    <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Card */}
            <div className="bg-dark/50 border border-gray-800 rounded-2xl p-6 sm:p-8 text-center">
              <h3 className="text-lg font-bold text-white mb-2">
                Need Assistance?
              </h3>
              <p className="text-gray-400 text-sm mb-6">
                Have questions about sponsorship? We're here to help!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-primary border border-gold/30 text-gold px-6 py-3 rounded-xl font-semibold hover:bg-gold hover:text-black transition-all"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Contact Us
                </Link>
                <a 
                  href="tel:+2349072404901"
                  className="inline-flex items-center justify-center gap-2 bg-primary border border-gray-700 text-gray-300 px-6 py-3 rounded-xl font-semibold hover:border-gold hover:text-gold transition-all"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call Us
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      <style jsx>{`
        .delay-700 {
          animation-delay: 700ms;
        }
      `}</style>
    </main>
  );
}