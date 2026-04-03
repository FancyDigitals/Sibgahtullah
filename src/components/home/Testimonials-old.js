export default function Testimonials() {
  const testimonials = [
    {
      name: "Abdullah M.",
      text: "This foundation completely transformed my understanding of Islam in the modern world.",
    },
    {
      name: "Aisha K.",
      text: "The lectures are powerful, practical, and deeply inspiring. I keep coming back.",
    },
    {
      name: "Yusuf A.",
      text: "A rare platform that blends knowledge, faith, and clarity without confusion.",
    },
  ];

  return (
    <section className="py-24 bg-dark">
      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-gold">
          Voices from the Community
        </h2>

        <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
          Real experiences from people impacted by our teachings.
        </p>

        {/* Cards */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">

          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-primary border border-gray-800 rounded-2xl p-6 text-left hover:border-gold transition"
            >
              <p className="text-gray-300 leading-relaxed">
                “{item.text}”
              </p>

              <div className="mt-6">
                <p className="text-gold font-semibold">
                  {item.name}
                </p>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}