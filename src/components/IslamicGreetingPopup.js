"use client";

import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

export default function IslamicGreetingPopup() {
  const [show, setShow] = useState(false);
  const [method, setMethod] = useState("email");
  const [value, setValue] = useState("");
  const [message, setMessage] = useState(null);

  useEffect(() => {
    const dismissed = localStorage.getItem("islamic-popup-closed");

    if (!dismissed) {
      const timer = setTimeout(() => {
        setShow(true);
      }, 8000);

      return () => clearTimeout(timer);
    }
  }, []);
  

  const closePopup = () => {
    localStorage.setItem("islamic-popup-closed", "true");
    setShow(false);
  };

  const sendReminderSubscription = async () => {
  if (!value) {
    alert("Please enter your email address.");
    return;
  }

  try {
    const response = await emailjs.send(
  "service_mbhb50r",
  "template_4mb7gy4",
  {
    name: "Sibgahtullah Islamic Foundation",
    to_email: value,
  },
  "CHEs7TgQbRs_Y4mB2"
);

console.log("EMAILJS SUCCESS:", response);

    toast.custom((t) => (
  <div
    className={`${
      t.visible ? "animate-enter" : "animate-leave"
    } max-w-md w-full bg-dark border border-gold/30 shadow-2xl rounded-3xl p-5`}
  >
    <p className="text-gold text-lg text-center">
      السلام عليكم ورحمة الله وبركاته
    </p>

    <h3 className="mt-3 text-white font-bold text-xl text-center">
      Welcome to the Sibgahtullah Circle of Remembrance
    </h3>

    <p className="mt-3 text-gray-300 text-center text-sm leading-relaxed">
      May Allah bless your journey and reward you abundantly.
      Please check your email for your welcome message.
    </p>

    <div className="mt-4 text-center text-gold">
      🌙 Barakallahu Feek 🌙
    </div>
  </div>
));

    localStorage.setItem("islamic-popup-closed", "true");

    setShow(false);
  } catch (error) {
    console.error("EMAILJS ERROR:", error);

    setMessage({
  type: "error",
  title: "Subscription Failed",
  text: "Please try again in a few moments."
});
  }
};

{
  message && (
    <div className="fixed top-6 right-6 z-[10000] max-w-sm animate-bounce">

      <div
        className={`rounded-2xl shadow-2xl border p-5 backdrop-blur-xl ${
          message.type === "success"
            ? "bg-green-900/90 border-green-500"
            : "bg-red-900/90 border-red-500"
        }`}
      >

        <h3 className="font-bold text-white text-lg">
          {message.type === "success" ? "🌙 " : "⚠️ "}
          {message.title}
        </h3>

        <p className="text-gray-200 mt-2 text-sm leading-relaxed">
          {message.text}
        </p>

      </div>

    </div>
  )
}

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">

      <div className="relative w-full max-w-md max-h-[90vh] overflow-y-auto bg-dark border border-gold/20 rounded-3xl shadow-2xl popup-scrollbar">

        {/* Pattern */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <svg className="w-full h-full">
            <pattern
              id="popup-pattern"
              width="80"
              height="80"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M40 0 L80 40 L40 80 L0 40 Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              />
            </pattern>

            <rect width="100%" height="100%" fill="url(#popup-pattern)" />
          </svg>
        </div>

        <button
          onClick={closePopup}
          className="absolute top-5 right-5 text-gray-500 hover:text-white z-20"
        >
          ✕
        </button>

        <div className="relative z-10 p-6 md:p-8">

          <p className="text-center text-gold text-lg">
            السلام عليكم ورحمة الله وبركاته
          </p>

          <h2 className="mt-4 text-center text-2xl md:text-3xl font-bold text-gold leading-tight">
            Begin Every Morning With Remembrance
          </h2>

          <p className="mt-4 text-sm md:text-base text-gray-400 text-center leading-relaxed">
            Receive authentic hadith, Qur'anic reflections, morning adhkar,
            and beneficial Islamic reminders to nourish your faith.
          </p>

          {/* Tabs */}
          <div className="mt-8 grid grid-cols-2 bg-primary rounded-xl p-1">

            <button
  onClick={() => setMethod("email")}
  className={
    "py-3 rounded-lg font-semibold transition " +
    (method === "email"
      ? "bg-gold text-black"
      : "text-gray-400")
  }
>
  Email
</button>

<button
  onClick={() => setMethod("whatsapp")}
  className={
    "py-3 rounded-lg font-semibold transition " +
    (method === "whatsapp"
      ? "bg-gold text-black"
      : "text-gray-400")
  }
>
  WhatsApp
</button>

          </div>

          {/* Input */}
          <input
            type={method === "email" ? "email" : "text"}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder={
              method === "email"
                ? "Enter your email address"
                : "Enter your WhatsApp number"
            }
            className="mt-6 w-full bg-primary border border-gray-800 rounded-xl px-5 py-4 text-white outline-none focus:border-gold"
          />

          {/* Benefits */}
          <div className="mt-6 space-y-3 text-sm text-gray-300">

            <div className="flex gap-3">
              <span className="text-gold">✓</span>
              Morning Prayers & Adhkar
            </div>

            <div className="flex gap-3">
              <span className="text-gold">✓</span>
              Daily Hadith
            </div>

            <div className="flex gap-3">
              <span className="text-gold">✓</span>
              Qur'an Reflections
            </div>

            <div className="flex gap-3">
              <span className="text-gold">✓</span>
              Islamic Tips
            </div>

          </div>

          {/* Button */}
          <button
  onClick={sendReminderSubscription}
  className="mt-8 w-full bg-gold text-black py-4 rounded-xl font-bold hover:opacity-90 transition"
>
  Join the Circle of Remembrance
</button>

          {/* Quote */}
          <div className="mt-8 pt-6 border-t border-gray-800">

            <p className="text-center text-gray-500 italic text-sm">
              "Verily, in the remembrance of Allah do hearts find rest."
            </p>

            <p className="mt-2 text-center text-gold text-sm">
              Qur'an 13:28
            </p>

          </div>

          {/* Close */}
          <button
            onClick={closePopup}
            className="mt-6 w-full text-gray-400 hover:text-white transition"
          >
            Not Now
          </button>

        </div>

      </div>

    </div>
  );
}

