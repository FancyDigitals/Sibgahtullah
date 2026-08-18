"use client";

import { useEffect, useMemo, useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

const STORAGE_KEY = "islamic-popup-closed-v2";
const OPEN_DELAY = 8000;

const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_mbhb50r";
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_4mb7gy4";
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "CHEs7TgQbRs_Y4mB2";

const BENEFITS = [
  { key: "adhkar", title: "Morning Adhkar", text: "Start your day with remembrance and supplication.", compactText: "Daily remembrance and supplication." },
  { key: "hadith", title: "Daily Hadith", text: "Authentic prophetic wisdom for everyday life.", compactText: "Authentic prophetic wisdom daily." },
  { key: "quran", title: "Qur'anic Reflections", text: "Short reflections to deepen faith and understanding.", compactText: "Reflections to deepen faith." },
  { key: "reminders", title: "Beneficial Reminders", text: "Practical Islamic guidance that nourishes the heart.", compactText: "Guidance that nourishes the heart." },
];

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

/* ─── Icons ─── */

function CloseIcon() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

function CheckIcon({ className = "h-9 w-9" }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

function SpinnerIcon() {
  return <span className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />;
}

function BenefitIcon({ type, className = "h-5 w-5" }) {
  switch (type) {
    case "adhkar":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M12 3V5.25" strokeWidth="1.6" strokeLinecap="round" />
          <path d="M5.64 5.64L7.23 7.23" strokeWidth="1.6" strokeLinecap="round" />
          <path d="M3 12H5.25" strokeWidth="1.6" strokeLinecap="round" />
          <path d="M18.75 12H21" strokeWidth="1.6" strokeLinecap="round" />
          <path d="M16.77 7.23L18.36 5.64" strokeWidth="1.6" strokeLinecap="round" />
          <path d="M7.5 18.5H16.5" strokeWidth="1.6" strokeLinecap="round" />
          <path d="M8 14.5C8.7 12.3 10.15 11.2 12 11.2C13.85 11.2 15.3 12.3 16 14.5" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      );
    case "quran":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M5.5 4.75H10.25C11.35 4.75 12 5.4 12 6.5V19.25C12 18.15 11.35 17.5 10.25 17.5H5.5C4.67 17.5 4 16.83 4 16V6.25C4 5.42 4.67 4.75 5.5 4.75Z" strokeWidth="1.6" strokeLinejoin="round" />
          <path d="M18.5 4.75H13.75C12.65 4.75 12 5.4 12 6.5V19.25C12 18.15 12.65 17.5 13.75 17.5H18.5C19.33 17.5 20 16.83 20 16V6.25C20 5.42 19.33 4.75 18.5 4.75Z" strokeWidth="1.6" strokeLinejoin="round" />
          <path d="M7 8.5H9.5" strokeWidth="1.6" strokeLinecap="round" />
          <path d="M14.5 8.5H17" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      );
    case "hadith":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M7 4.75H17C18.1 4.75 19 5.65 19 6.75V17.25C19 18.35 18.1 19.25 17 19.25H7C5.9 19.25 5 18.35 5 17.25V6.75C5 5.65 5.9 4.75 7 4.75Z" strokeWidth="1.6" />
          <path d="M8.5 8.5H15.5" strokeWidth="1.6" strokeLinecap="round" />
          <path d="M8.5 12H15.5" strokeWidth="1.6" strokeLinecap="round" />
          <path d="M8.5 15.5H12.5" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      );
    default:
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M12 20.25C12 20.25 5 16.25 5 9.75C5 6.95 6.95 5 9.25 5C10.55 5 11.5 5.6 12 6.4C12.5 5.6 13.45 5 14.75 5C17.05 5 19 6.95 19 9.75C19 16.25 12 20.25 12 20.25Z" strokeWidth="1.6" strokeLinejoin="round" />
          <path d="M9.25 11.75H14.75" strokeWidth="1.6" strokeLinecap="round" />
          <path d="M12 9V14.5" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      );
  }
}

/* ─── Ambient ─── */

function AmbientBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute -left-16 top-10 h-56 w-56 rounded-full bg-[#F3E8FF] opacity-80 blur-3xl" />
      <div className="absolute -right-12 bottom-10 h-48 w-48 rounded-full bg-[#FFF5D9] opacity-70 blur-3xl" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#D4A017]/40 to-transparent" />
      {/* Islamic geometric pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg className="h-full w-full text-[#4C1D95]" viewBox="0 0 400 400" fill="none">
          <path d="M200 20L380 200L200 380L20 200Z" stroke="currentColor" strokeWidth="1" />
          <path d="M200 70L330 200L200 330L70 200Z" stroke="currentColor" strokeWidth="1" />
          <path d="M200 120L280 200L200 280L120 200Z" stroke="currentColor" strokeWidth="1" />
          <circle cx="200" cy="200" r="60" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="200" cy="200" r="120" stroke="currentColor" strokeWidth="0.5" />
        </svg>
      </div>
    </div>
  );
}

/* ─── Pill ─── */

function Pill({ children, className = "" }) {
  return (
    <div className={`inline-flex items-center rounded-full border border-[#E9DDFD] bg-[#FAF7FF] px-4 py-2 text-xs font-medium text-[#6B21A8] sm:text-sm ${className}`}>
      {children}
    </div>
  );
}

/* ─── Switches ─── */

function TopSwitch({ value, onChange }) {
  return (
    <div className="mb-5">
      <div className="grid grid-cols-2 gap-2 rounded-2xl border border-[#EEE7FA] bg-[#FAF8FF] p-1.5">
        <button
          type="button"
          onClick={() => onChange("join")}
          className={`rounded-[14px] px-4 py-3 text-sm font-semibold transition ${
            value === "join"
              ? "bg-[#4C1D95] text-white shadow-[0_8px_20px_rgba(76,29,149,0.20)]"
              : "text-[#6F618A] hover:bg-white hover:text-[#4C1D95]"
          }`}
        >
          Subscribe
        </button>
        <button
          type="button"
          onClick={() => onChange("benefits")}
          className={`rounded-[14px] px-4 py-3 text-sm font-semibold transition ${
            value === "benefits"
              ? "bg-white text-[#3B136B] shadow-sm"
              : "text-[#8C7AAE] hover:bg-white hover:text-[#4C1D95]"
          }`}
        >
          Benefits
        </button>
      </div>
    </div>
  );
}

function MethodSwitch({ method, setMethod, whatsappEnabled, showLabel = true, compact = false }) {
  return (
    <div className={compact ? "mt-4" : "mt-5"}>
      {showLabel && (
        <p className="mb-3 text-sm font-medium text-[#6F618A]">Choose delivery method</p>
      )}
      <div className="grid grid-cols-2 gap-2 rounded-2xl border border-[#EEE7FA] bg-[#FAF8FF] p-1.5">
        <button
          type="button"
          onClick={() => setMethod("email")}
          className={`rounded-[14px] px-4 py-3 text-sm font-semibold transition ${
            method === "email"
              ? "bg-[#4C1D95] text-white shadow-[0_8px_20px_rgba(76,29,149,0.20)]"
              : "text-[#6F618A] hover:bg-white hover:text-[#4C1D95]"
          }`}
        >
          Email
        </button>
        <button
          type="button"
          onClick={() => setMethod("whatsapp")}
          className={`rounded-[14px] px-4 py-3 text-sm font-semibold transition ${
            method === "whatsapp"
              ? "bg-white text-[#3B136B] shadow-sm"
              : "text-[#8C7AAE] hover:bg-white hover:text-[#4C1D95]"
          }`}
        >
          WhatsApp
        </button>
      </div>
      {method === "whatsapp" && !whatsappEnabled && (
        <p className="mt-2 text-center text-xs text-[#8C7AAE]">WhatsApp coming soon</p>
      )}
    </div>
  );
}

/* ─── Cards ─── */

function BenefitCard({ item, compact = false }) {
  return (
    <div className={`rounded-2xl border border-[#EEE7FA] bg-white ${compact ? "p-3" : "p-4"}`}>
      <div className="flex items-start gap-3">
        <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-[#F0E2B6] bg-[#FFF9EC] text-[#C89B3C]">
          <BenefitIcon type={item.key} className="h-4 w-4" />
        </div>
        <div className="min-w-0">
          <p className={`font-semibold text-[#3B136B] ${compact ? "text-[13px]" : "text-sm"}`}>
            {item.title}
          </p>
          <p className={`mt-1 text-[#6F618A] ${compact ? "text-[11px] leading-4" : "text-sm leading-6"}`}>
            {compact ? item.compactText : item.text}
          </p>
        </div>
      </div>
    </div>
  );
}

/* ─── Panels ─── */

function JoinPanel({
  method, setMethod, value, setValue,
  isLoading, onSubscribe, onShowBenefits, onDismiss,
  inputPlaceholder, inputType, inputMode, autoComplete,
  whatsappEnabled, compact, veryCompact, tiny, showDetailsLink = true,
}) {
  return (
    <div className="mx-auto max-w-lg">
      {/* Arabic Greeting — prominent */}
      <div className="text-center">
        <p className="font-arabic text-3xl leading-relaxed text-[#3B136B] sm:text-4xl" dir="rtl">
          السَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ
        </p>
        <div className="mx-auto mt-3 flex items-center justify-center gap-2">
          <div className="h-px w-10 bg-gradient-to-r from-transparent to-[#D4A017]/50" />
          <div className="h-2 w-2 rounded-full bg-[#D4A017]" />
          <div className="h-px w-10 bg-gradient-to-l from-transparent to-[#D4A017]/50" />
        </div>
      </div>

      <div className={veryCompact ? "mt-4 text-center" : "mt-5 text-center"}>
        <h2
          id="islamic-popup-title"
          className={`mx-auto font-semibold leading-[1.08] tracking-tight text-[#3B136B] ${
            tiny ? "mt-2 max-w-[280px] text-xl"
              : veryCompact ? "mt-2 max-w-[320px] text-2xl"
              : "mt-3 max-w-md text-2xl sm:text-3xl"
          }`}
        >
          Begin every morning with remembrance
        </h2>
        <p className={`mx-auto text-[#6F618A] ${
          tiny ? "mt-3 max-w-[300px] text-[13px] leading-5"
            : veryCompact ? "mt-3 max-w-[340px] text-sm leading-6"
            : "mt-4 max-w-md text-[15px] leading-7"
        }`}>
          {veryCompact
            ? "Receive authentic hadith, reflections, adhkar, and beneficial reminders."
            : "Receive authentic hadith, Qur'anic reflections, morning adhkar, and beneficial Islamic reminders to nourish your faith."}
        </p>
      </div>

      {!compact && !tiny && (
        <div className="mt-5 flex flex-wrap justify-center gap-2">
          {["Adhkar", "Hadith", "Reflections", "Reminders"].map((item) => (
            <span key={item} className="rounded-full border border-[#EEE7FA] bg-[#FAF8FF] px-3 py-1.5 text-[11px] font-medium text-[#7C3AED]">
              {item}
            </span>
          ))}
        </div>
      )}

      <MethodSwitch method={method} setMethod={setMethod} whatsappEnabled={whatsappEnabled} showLabel={!veryCompact} compact={compact} />

      <div className={compact ? "mt-4" : "mt-6"}>
        {!veryCompact && (
          <label className="mb-3 block text-sm font-medium text-[#6F618A]">
            {method === "email" ? "Email address" : "WhatsApp number"}
          </label>
        )}
        <input
          type={inputType}
          inputMode={inputMode}
          autoComplete={autoComplete}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder={inputPlaceholder}
          className="w-full rounded-2xl border border-[#E9DDFD] bg-white px-4 py-4 text-base text-[#3B136B] outline-none transition placeholder:text-[#B8A5D5] focus:border-[#7C3AED] focus:shadow-[0_0_0_3px_rgba(124,58,237,0.08)]"
        />
      </div>

      <div className={compact ? "mt-5" : "mt-6"}>
        <button
          onClick={onSubscribe}
          disabled={isLoading}
          className="inline-flex min-h-[54px] w-full items-center justify-center gap-3 rounded-2xl bg-[#4C1D95] px-5 py-4 text-sm font-semibold text-white shadow-[0_14px_30px_rgba(76,29,149,0.22)] transition hover:-translate-y-0.5 hover:bg-[#3B136B] active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isLoading ? (
            <><SpinnerIcon /> Sending...</>
          ) : method === "email" ? (
            "Join the Circle of Remembrance"
          ) : (
            "WhatsApp Coming Soon"
          )}
        </button>
      </div>

      {showDetailsLink && (
        <button type="button" onClick={onShowBenefits} className="mt-4 w-full text-sm font-medium text-[#7C3AED] transition hover:text-[#4C1D95]">
          See what you will receive
        </button>
      )}

      <p className="mt-3 text-center text-xs text-[#8C7AAE]">No spam. Unsubscribe anytime.</p>

      <button onClick={onDismiss} className="mt-4 w-full text-sm font-medium text-[#B8A5D5] transition hover:text-[#6F618A]">
        Not now
      </button>
    </div>
  );
}

function BenefitsPanel({ onPrimaryAction, onDismiss, compact, veryCompact, tiny, split = false }) {
  return (
    <div className="mx-auto max-w-lg">
      <div className={split ? "" : "text-center"}>
        <Pill>What you will receive</Pill>
        <h3 className={`font-semibold leading-[1.08] tracking-tight text-[#3B136B] ${
          tiny ? "mt-3 text-xl" : veryCompact ? "mt-4 text-2xl" : "mt-5 text-2xl sm:text-3xl"
        }`}>
          Rich, beneficial reminders delivered beautifully
        </h3>
        {!tiny && !veryCompact && (
          <p className="mt-4 text-[15px] leading-7 text-[#6F618A]">
            A calm stream of authentic Islamic content to strengthen the heart, renew intention, and begin each day with clarity.
          </p>
        )}
      </div>

      <div className={compact ? "mt-5 grid grid-cols-2 gap-2.5" : "mt-6 grid grid-cols-2 gap-3"}>
        {BENEFITS.map((item) => (
          <BenefitCard key={item.key} item={item} compact={compact} />
        ))}
      </div>

      {!veryCompact && (
        <div className={`rounded-2xl border border-[#F0E2B6] bg-[#FFFDF7] text-center ${compact ? "mt-5 px-4 py-4" : "mt-6 px-5 py-5"}`}>
          <p className="font-arabic text-lg text-[#3B136B]" dir="rtl">
            أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ
          </p>
          <p className={`mt-2 italic text-[#6F618A] ${compact ? "text-[12px] leading-5" : "text-sm leading-6"}`}>
            "Verily, in the remembrance of Allah do hearts find rest."
          </p>
          <p className="mt-2 text-sm font-medium text-[#C89B3C]">Qur'an 13:28</p>
        </div>
      )}

      {!split && (
        <>
          <button type="button" onClick={onPrimaryAction} className="mt-5 inline-flex min-h-[54px] w-full items-center justify-center rounded-2xl bg-[#4C1D95] px-5 py-4 text-sm font-semibold text-white shadow-[0_14px_30px_rgba(76,29,149,0.22)] transition hover:-translate-y-0.5 hover:bg-[#3B136B] active:scale-[0.99]">
            Continue to subscription
          </button>
          <button onClick={onDismiss} className="mt-4 w-full text-sm font-medium text-[#B8A5D5] transition hover:text-[#6F618A]">
            Not now
          </button>
        </>
      )}
    </div>
  );
}

function SuccessPanel({ onContinue, tiny }) {
  return (
    <div className="relative z-10 px-5 pb-[calc(1rem+env(safe-area-inset-bottom))] pt-8 sm:px-8 sm:pb-8 sm:pt-10">
      <div className="mx-auto max-w-md text-center">
        <div className={`mx-auto flex items-center justify-center rounded-[24px] border border-[#D1FAE5] bg-[#ECFDF5] shadow-[0_8px_30px_rgba(16,185,129,0.10)] ${tiny ? "h-16 w-16" : "h-20 w-20"}`}>
          <CheckIcon className={`${tiny ? "h-8 w-8" : "h-9 w-9"} text-emerald-500`} />
        </div>

        {!tiny && (
          <div className="mt-6">
            <p className="font-arabic text-2xl text-[#3B136B]" dir="rtl">
              بَارَكَ اللهُ فِيكُمْ
            </p>
          </div>
        )}

        <h2 id="islamic-popup-title" className={`mx-auto font-semibold leading-[1.08] tracking-tight text-[#3B136B] ${
          tiny ? "mt-4 max-w-[280px] text-xl" : "mt-5 max-w-sm text-2xl sm:text-3xl"
        }`}>
          Welcome to the Circle of Remembrance
        </h2>

        <p className={`mx-auto mt-4 max-w-md text-[#6F618A] ${tiny ? "text-sm leading-6" : "text-[15px] leading-7"}`}>
          Your journey of daily remembrance, beneficial knowledge, and spiritual growth has begun.
        </p>

        {!tiny && <p className="mt-3 text-sm text-[#8C7AAE]">Please check your inbox.</p>}

        <div className="mt-7">
          <button onClick={onContinue} className="inline-flex w-full items-center justify-center rounded-2xl bg-[#4C1D95] px-5 py-4 text-sm font-semibold text-white shadow-[0_14px_30px_rgba(76,29,149,0.22)] transition hover:-translate-y-0.5 hover:bg-[#3B136B] active:scale-[0.99]">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}

/* ─── Main ─── */

export default function IslamicGreetingPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [method, setMethod] = useState("email");
  const [value, setValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [pane, setPane] = useState("join");
  const [viewport, setViewport] = useState({ width: 0, height: 0 });

  const whatsappEnabled = false;

  useEffect(() => {
    const forceOpen = typeof window !== "undefined" && new URLSearchParams(window.location.search).has("popup");
    if (forceOpen) { setIsOpen(true); return; }
    const dismissed = localStorage.getItem(STORAGE_KEY);
    if (dismissed) return;
    const timer = window.setTimeout(() => setIsOpen(true), OPEN_DELAY);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    const update = () => setViewport({ width: window.visualViewport?.width || window.innerWidth || 0, height: window.visualViewport?.height || window.innerHeight || 0 });
    update();
    window.addEventListener("resize", update);
    window.visualViewport?.addEventListener("resize", update);
    return () => { window.removeEventListener("resize", update); window.visualViewport?.removeEventListener("resize", update); };
  }, []);

  useEffect(() => {
    if (!isOpen && !isSubscribed) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e) => { if (e.key === "Escape") dismissPopup(); };
    window.addEventListener("keydown", onKey);
    return () => { document.body.style.overflow = prev; window.removeEventListener("keydown", onKey); };
  }, [isOpen, isSubscribed]);

  const inputPlaceholder = useMemo(() => method === "email" ? "Enter your email address" : "Enter your WhatsApp number", [method]);
  const inputType = method === "email" ? "email" : "tel";
  const inputMode = method === "email" ? "email" : "tel";
  const autoComplete = method === "email" ? "email" : "tel";

  const isCompact = viewport.height > 0 && viewport.height < 760;
  const isVeryCompact = viewport.height > 0 && viewport.height < 680;
  const isTiny = viewport.height > 0 && viewport.height < 620;
  const showDesktopSplit = viewport.width >= 1100 && viewport.height >= 740;

  function dismissPopup() { localStorage.setItem(STORAGE_KEY, "true"); setIsOpen(false); setIsSubscribed(false); setPane("join"); }
  function closeSuccess() { setIsSubscribed(false); setIsOpen(false); setPane("join"); }

  async function handleSubscribe() {
    const trimmed = value.trim();
    if (method === "whatsapp" && !whatsappEnabled) { toast("WhatsApp subscription is coming soon."); return; }
    if (!trimmed) { toast.error(method === "email" ? "Please enter your email address." : "Please enter your WhatsApp number."); return; }
    if (method === "email" && !isValidEmail(trimmed)) { toast.error("Please enter a valid email address."); return; }
    setIsLoading(true);
    try {
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, { name: "Sibgahtullah Islamic Foundation", to_email: trimmed, subscriber_value: trimmed, delivery_method: method }, EMAILJS_PUBLIC_KEY);
      localStorage.setItem(STORAGE_KEY, "true");
      setIsSubscribed(true);
      setValue("");
    } catch (error) {
      console.error("EMAILJS ERROR:", error);
      toast.error("Unable to complete subscription. Please try again.");
    } finally { setIsLoading(false); }
  }

  if (!isOpen && !isSubscribed) return null;

  const modalMaxH = viewport.height > 0 ? `${Math.max(viewport.height - (viewport.width < 640 ? 10 : 24), 320)}px` : "calc(100svh - 12px)";

  return (
    <div className="fixed inset-0 z-[9999] overflow-hidden bg-[#2B0F46]/25 backdrop-blur-md">
      <div className="flex h-[100svh] items-end justify-center p-1.5 sm:items-center sm:p-4">
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="islamic-popup-title"
          style={{ maxHeight: modalMaxH }}
          className={`relative w-full overflow-hidden border border-[#E9DDFD] bg-white shadow-[0_32px_120px_rgba(76,29,149,0.18)] ${
            showDesktopSplit ? "max-w-5xl rounded-[34px]" : "max-w-lg rounded-[30px]"
          }`}
        >
          <AmbientBackground />

          <button onClick={dismissPopup} aria-label="Close popup" className="absolute right-4 top-4 z-20 inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#F1EAFB] bg-white text-[#7A63A8] transition hover:text-[#4C1D95]">
            <CloseIcon />
          </button>

          <div className="popup-scrollbar overflow-y-auto" style={{ maxHeight: modalMaxH }}>
            {isSubscribed ? (
              <SuccessPanel onContinue={closeSuccess} tiny={isTiny} />
            ) : showDesktopSplit ? (
              <div className="relative z-10 grid grid-cols-[1.02fr_0.98fr]">
                <div className="border-r border-[#F1EAFB] px-8 pb-8 pt-8">
                  <JoinPanel
                    method={method} setMethod={setMethod} value={value} setValue={setValue}
                    isLoading={isLoading} onSubscribe={handleSubscribe}
                    onShowBenefits={() => {}} onDismiss={dismissPopup}
                    inputPlaceholder={inputPlaceholder} inputType={inputType}
                    inputMode={inputMode} autoComplete={autoComplete}
                    whatsappEnabled={whatsappEnabled}
                    compact={false} veryCompact={false} tiny={false} showDetailsLink={false}
                  />
                </div>
                <div className="px-8 pb-8 pt-8">
                  <BenefitsPanel split compact={false} veryCompact={false} tiny={false} />
                </div>
              </div>
            ) : (
              <div className={`relative z-10 ${isVeryCompact ? "px-4 pb-[calc(0.9rem+env(safe-area-inset-bottom))] pt-5" : "px-5 pb-[calc(1rem+env(safe-area-inset-bottom))] pt-6 sm:px-6 sm:pb-6"}`}>
                {!isTiny && (
                  <div className="mb-3 flex justify-center sm:hidden">
                    <div className="h-1.5 w-12 rounded-full bg-[#E9DDFD]" />
                  </div>
                )}
                <TopSwitch value={pane} onChange={setPane} />
                {pane === "join" ? (
                  <JoinPanel
                    method={method} setMethod={setMethod} value={value} setValue={setValue}
                    isLoading={isLoading} onSubscribe={handleSubscribe}
                    onShowBenefits={() => setPane("benefits")} onDismiss={dismissPopup}
                    inputPlaceholder={inputPlaceholder} inputType={inputType}
                    inputMode={inputMode} autoComplete={autoComplete}
                    whatsappEnabled={whatsappEnabled}
                    compact={isCompact} veryCompact={isVeryCompact} tiny={isTiny}
                  />
                ) : (
                  <BenefitsPanel
                    onPrimaryAction={() => setPane("join")} onDismiss={dismissPopup}
                    compact={isCompact} veryCompact={isVeryCompact} tiny={isTiny}
                  />
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}