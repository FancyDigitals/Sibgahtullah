export default function HelpPage() {
  const faqs = [
    {
      q: "How can I attend events?",
      a: "You can register through the Events page. Each event has a registration button.",
    },
    {
      q: "Are the lectures free?",
      a: "Most lectures are free. Some special programs may require registration.",
    },
    {
      q: "How can I support the foundation?",
      a: "You can donate or become a sponsor through our support section.",
    },
    {
      q: "Can I join as a volunteer?",
      a: "Yes, we welcome volunteers. Reach out through our contact section.",
    },
  ];

  return (
    <main className="bg-primary text-white">

      {/* HERO */}
      <section className="py-24 text-center">
        <div className="max-w-4xl mx-auto px-6">

          <h1 className="text-5xl md:text-6xl font-bold text-gold">
            Help & Support
          </h1>

          <p className="mt-6 text-gray-300 text-lg">
            Find answers, get support, and connect with us.
          </p>

        </div>
      </section>

      {/* SEARCH */}
      <section className="pb-10">
        <div className="max-w-6xl mx-auto px-6">

          <input
            type="text"
            placeholder="Search help topics..."
            className="w-full md:w-1/3 px-4 py-3 rounded-lg bg-dark border border-gray-800 focus:outline-none text-sm"
          />

        </div>
      </section>

      {/* FAQ */}
      <section className="pb-24">
        <div className="max-w-4xl mx-auto px-6 space-y-6">

          {faqs.map((item, index) => (
            <div
              key={index}
              className="bg-dark border border-gray-800 rounded-2xl p-6"
            >
              <h3 className="text-gold font-semibold">
                {item.q}
              </h3>

              <p className="mt-3 text-gray-400 text-sm">
                {item.a}
              </p>
            </div>
          ))}

        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="py-24 bg-gradient-to-b from-primary to-dark text-center">
        <div className="max-w-3xl mx-auto px-6">

          <h2 className="text-3xl md:text-4xl font-bold text-gold">
            Still Need Help?
          </h2>

          <p className="mt-4 text-gray-300">
            Our team is here to assist you. Reach out anytime.
          </p>

          <button className="mt-8 bg-gold text-black px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition">
            Contact Us
          </button>

        </div>
      </section>

    </main>
  );
}