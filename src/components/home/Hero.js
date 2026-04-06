export default function Hero() {
  return (
    <section className="relative h-[90vh] flex items-center overflow-hidden">

      {/* 🎥 BACKGROUND VIDEO */}
      <video
  className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        src="/videos/hero.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* 🔥 DARK OVERLAY (important for readability) */}
      <div className="absolute inset-0 bg-black/60 pointer-events-none"></div>

      {/* ✨ CONTENT */}
      <div className="relative z-10 max-w-6xl mx-auto px-6">

        <h1 className="text-5xl md:text-6xl font-bold leading-tight text-gold">
          Knowledge. Faith. Transformation.
        </h1>

        <p className="mt-6 text-lg text-gray-300 max-w-xl">
          Sibgahtullah Islamic Foundation blends timeless revelation with modern understanding.
        </p>

        <div className="mt-8 flex gap-4">
          <button className="bg-gold text-black px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition">
            Explore Lectures
          </button>

          <button className="border border-gold text-gold px-6 py-3 rounded-lg hover:bg-gold hover:text-black transition">
            Upcoming Events
          </button>
        </div>

      </div>
    </section>
  );
}