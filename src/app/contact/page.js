"use client";

import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  return (
    <main className="min-h-screen bg-primary text-white flex items-center justify-center p-6">
      <div className="max-w-md w-full bg-dark p-6 rounded-xl border border-gold/20">

        <h2 className="text-2xl font-bold text-gold mb-4">
          Contact Us
        </h2>

        <form
          onSubmit={(e) => {
            e.preventDefault();

            const mailto = `mailto:your@email.com?subject=CONTACT MESSAGE&body=
Name: ${formData.name}
Email: ${formData.email}
Message: ${formData.message}`;

            window.location.href = mailto;
          }}
          className="space-y-4"
        >

          <input
            type="text"
            placeholder="Name"
            required
            value={formData.name}
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
            className="w-full px-4 py-3 bg-primary border border-gray-700 rounded-lg"
          />

          <input
            type="email"
            placeholder="Email"
            required
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="w-full px-4 py-3 bg-primary border border-gray-700 rounded-lg"
          />

          <textarea
            placeholder="Message"
            required
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            className="w-full px-4 py-3 bg-primary border border-gray-700 rounded-lg"
          />

          <button className="w-full bg-gold text-black py-3 rounded-lg font-bold">
            Send Message
          </button>

        </form>
      </div>
    </main>
  );
}