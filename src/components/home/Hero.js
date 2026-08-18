import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Soft ambient background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 top-16 h-72 w-72 rounded-full bg-[#F3E8FF] blur-3xl opacity-70" />
        <div className="absolute -right-16 bottom-10 h-72 w-72 rounded-full bg-[#FFF5D9] blur-3xl opacity-70" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#D4A017]/30 to-transparent" />
      </div>

      <div className="relative mx-auto grid min-h-screen max-w-7xl items-center gap-14 px-6 pb-16 pt-32 sm:px-8 sm:pt-36 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:pb-20">
        {/* Left Content */}
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#E9DDFD] bg-[#FAF7FF] px-4 py-2 text-sm font-medium text-[#6B21A8] shadow-sm">
            <span className="h-2 w-2 rounded-full bg-[#D4A017]" />
            Rooted in revelation, relevant for today
          </div>

          <h1 className="mt-6 text-4xl font-semibold leading-[1.05] tracking-tight text-[#3B136B] sm:text-5xl lg:text-6xl xl:text-7xl">
            Knowledge that
            <span className="block">shapes the mind.</span>
            <span className="block text-[#5B21B6]">
              Faith that steadies the heart.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-[#6F618A] sm:text-lg sm:leading-8">
            Sibgahtullah Islamic Foundation brings timeless Islamic teaching
            into a clear, thoughtful, and modern experience for learning,
            reflection, and community growth.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/lectures"
              className="inline-flex items-center justify-center rounded-2xl bg-[#4C1D95] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_14px_30px_rgba(76,29,149,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#3B136B]"
            >
              Explore Lectures
            </Link>

            <Link
              href="/events"
              className="inline-flex items-center justify-center rounded-2xl border border-[#E9DDFD] bg-white px-6 py-3.5 text-sm font-semibold text-[#4C1D95] transition-all duration-300 hover:border-[#D4A017]/50 hover:text-[#5B21B6] hover:shadow-sm"
            >
              Upcoming Events
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-[#7B6B98]">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-[#D4A017]" />
              Weekly lectures
            </div>
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-[#D4A017]" />
              Community events
            </div>
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-[#D4A017]" />
              Faith-centered learning
            </div>
          </div>
        </div>

        {/* Right Video Frame */}
        <div className="relative">
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-[#F6EDFF] via-transparent to-[#FFF5D8] blur-2xl opacity-80" />

          <div className="relative rounded-[2rem] border border-[#E9DDFD] bg-white/90 p-3 shadow-[0_25px_80px_rgba(76,29,149,0.14)] backdrop-blur">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-[#F7F3FF] sm:aspect-[16/11] lg:aspect-[4/5]">
              <video
                className="absolute inset-0 h-full w-full object-cover"
                src="/videos/hero.mp4"
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
              />

              {/* Soft overlay for elegance */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#2B0F46]/20 via-transparent to-white/10" />

              {/* Top Tag */}
              <div className="absolute left-4 top-4 rounded-full border border-white/70 bg-white/85 px-3 py-2 text-xs font-medium text-[#4C1D95] shadow-lg backdrop-blur">
                Live learning • Reflection • Community
              </div>

              {/* Bottom Card */}
              <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/70 bg-white/82 p-4 shadow-xl backdrop-blur">
                <p className="text-sm font-semibold text-[#3B136B]">
                  A more human way to learn
                </p>
                <p className="mt-1 text-sm leading-6 text-[#6F618A]">
                  Short reflections, lectures, and events designed to meet
                  people where they are.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}