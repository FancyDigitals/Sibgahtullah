import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Soft ambient background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 top-16 h-72 w-72 rounded-full bg-[#F3E8FF] opacity-70 blur-3xl" />
        <div className="absolute -right-16 bottom-10 h-72 w-72 rounded-full bg-[#FFF5D9] opacity-70 blur-3xl" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#D4A017]/30 to-transparent" />
      </div>

      <div className="relative mx-auto grid min-h-screen max-w-7xl items-center gap-14 px-6 pb-16 pt-32 sm:px-8 sm:pt-36 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:pb-20">
        {/* Left Content */}
        <div className="max-w-2xl">
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
          <div className="absolute -inset-5 rounded-[2.5rem] bg-[radial-gradient(circle_at_top_left,rgba(91,33,182,0.12),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(212,160,23,0.16),transparent_35%)] blur-2xl" />

          <div className="relative rounded-[2rem] border border-[#E9DDFD] bg-white/80 p-3 shadow-[0_25px_80px_rgba(76,29,149,0.14)] backdrop-blur-xl">
            {/* Frame bar */}
            <div className="flex items-center gap-2 px-2 pb-3">
              <span className="h-2.5 w-2.5 rounded-full bg-[#E9DDFD]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#F3E8FF]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#F6E7B8]" />
            </div>

            <div className="relative aspect-video overflow-hidden rounded-[1.5rem] bg-[#F7F3FF]">
              <video
                className="absolute inset-0 h-full w-full object-contain bg-[#F7F3FF]"
                src="/videos/hero.mp4"
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
              />

              {/* Very light overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent" />

              {/* Small top chip */}
              <div className="absolute left-4 top-4 max-w-[calc(100%-2rem)] rounded-full border border-white/20 bg-[#2B0F46]/40 px-3 py-1.5 text-[11px] font-medium text-white shadow-lg backdrop-blur-md">
                Live learning • Reflection • Community
              </div>

              {/* Small bottom chips instead of big card */}
              <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
                <span className="rounded-full border border-white/15 bg-[#2B0F46]/40 px-3 py-1.5 text-[11px] font-medium text-white backdrop-blur-md">
                  Weekly lectures
                </span>
                <span className="rounded-full border border-white/15 bg-[#2B0F46]/40 px-3 py-1.5 text-[11px] font-medium text-white backdrop-blur-md">
                  Events
                </span>
                <span className="rounded-full border border-white/15 bg-[#2B0F46]/40 px-3 py-1.5 text-[11px] font-medium text-white backdrop-blur-md">
                  Community
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}