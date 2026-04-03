export default function CTA() {
  return (
    <section className="py-24 bg-gradient-to-b from-dark to-primary">
      <div className="max-w-5xl mx-auto px-6 text-center">

        <h2 className="text-4xl md:text-5xl font-bold text-gold leading-tight">
          Join the Path of Knowledge & Faith
        </h2>

        <p className="mt-6 text-gray-300 max-w-2xl mx-auto text-lg">
          Be part of a growing community dedicated to learning, spiritual growth, 
          and impactful Islamic teachings for the modern world.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">

          <button className="bg-gold text-black px-8 py-4 rounded-lg font-semibold text-lg hover:opacity-90 transition shadow-lg">
            Get Started
          </button>

          <button className="border border-gold text-gold px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gold hover:text-black transition">
            Watch Lectures
          </button>

        </div>

      </div>
    </section>
  );
}