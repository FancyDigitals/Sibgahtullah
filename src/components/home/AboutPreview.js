export default function AboutPreview() {
  return (
    <section className="py-24 bg-primary">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* Left Content */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-gold leading-tight">
            A New Standard of Islamic Excellence
          </h2>

          <p className="mt-6 text-gray-300 text-lg leading-relaxed">
            Sibgahtullah Islamic Foundation is dedicated to bridging the gap 
            between timeless Islamic knowledge and the realities of the modern world.
          </p>

          <p className="mt-4 text-gray-400">
            We cultivate minds, strengthen faith, and build a generation rooted 
            in purpose, clarity, and global impact.
          </p>

          <div className="mt-8">
            <a
              href="/about"
              className="inline-block bg-gold text-black px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition shadow-[0_0_20px_rgba(245,166,35,0.3)]"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Right Visual */}
        <div className="relative">

          {/* Glow Background */}
          <div className="absolute inset-0 bg-gold/10 blur-3xl rounded-full"></div>

          {/* Card */}
          <div className="relative bg-dark border border-gray-800 rounded-2xl p-8 backdrop-blur-xl">

            <h3 className="text-gold text-xl font-semibold">
              Our Mission
            </h3>

            <p className="mt-4 text-gray-400 leading-relaxed">
              To raise a generation grounded in authentic Islamic teachings, 
              empowered with knowledge, and equipped to thrive in a rapidly 
              evolving world.
            </p>

            <div className="mt-6 border-t border-gray-800 pt-6">
              <h4 className="text-gold font-medium">Our Vision</h4>

              <p className="mt-2 text-gray-400 text-sm">
                A globally recognized Islamic institution shaping minds, 
                transforming lives, and impacting societies.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}