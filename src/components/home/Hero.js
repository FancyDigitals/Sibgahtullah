export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">

      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        src="/videos/hero.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/65"></div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8">

        <div className="max-w-3xl">

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-gold">
            Knowledge.
            <br />
            Faith.
            <br />
            Transformation.
          </h1>

          <p className="mt-6 text-base sm:text-lg text-gray-300 leading-relaxed max-w-xl">
            Sibgahtullah Islamic Foundation blends timeless revelation
            with modern understanding.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">

            <button className="bg-gold text-black px-7 py-4 rounded-xl font-semibold hover:opacity-90 transition">
              Explore Lectures
            </button>

            <button className="border border-gold text-gold px-7 py-4 rounded-xl hover:bg-gold hover:text-black transition">
              Upcoming Events
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}