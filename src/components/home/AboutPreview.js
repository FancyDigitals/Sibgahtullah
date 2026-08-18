import Link from "next/link";

export default function AboutPreview() {
  return (
    <section className="relative overflow-hidden bg-white py-24 sm:py-28">
      {/* Soft ambient background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-[#F3E8FF] opacity-70 blur-3xl" />
        <div className="absolute right-0 top-1/3 h-72 w-72 rounded-full bg-[#FFF5D9] opacity-60 blur-3xl" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#D4A017]/30 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          {/* Left Content */}
          <div className="max-w-2xl">

            <h2 className="mt-6 text-4xl font-semibold leading-tight tracking-tight text-[#3B136B] sm:text-5xl lg:text-6xl">
              A new standard of
              <span className="block text-[#5B21B6]">Islamic excellence.</span>
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-[#6F618A]">
              Sibgahtullah Islamic Foundation is dedicated to bridging timeless
              Islamic knowledge with the realities of the modern world.
            </p>

            <p className="mt-4 max-w-xl text-base leading-7 text-[#7B6B98]">
              We cultivate minds, strengthen faith, and help build a generation
              rooted in purpose, clarity, and meaningful global impact.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link
                href="/about"
                className="inline-flex items-center justify-center rounded-2xl bg-[#4C1D95] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_14px_30px_rgba(76,29,149,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#3B136B]"
              >
                Learn More
              </Link>

              <div className="text-sm text-[#8C7AAE]">
                Authentic knowledge • Purpose • Impact
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="absolute -inset-6 rounded-[2.5rem] bg-[radial-gradient(circle_at_top_left,rgba(91,33,182,0.12),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(212,160,23,0.16),transparent_35%)] blur-2xl" />

            <div className="relative rounded-[2rem] border border-[#E9DDFD] bg-white/85 p-6 shadow-[0_25px_80px_rgba(76,29,149,0.10)] backdrop-blur-xl sm:p-8">
              {/* Top label */}
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#F0E2B6] bg-[#FFF9EC] text-[#C89B3C] shadow-sm">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.8}
                      d="M12 3l2.4 4.86L20 8.7l-4 3.9.94 5.5L12 15.8 7.06 18.1 8 12.6 4 8.7l5.6-.84L12 3z"
                    />
                  </svg>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#C89B3C]">
                    Our Mission
                  </p>
                  <h3 className="text-xl font-semibold text-[#3B136B]">
                    Grounded in truth, built for this generation
                  </h3>
                </div>
              </div>

              <p className="mt-6 text-base leading-8 text-[#6F618A]">
                To raise a generation grounded in authentic Islamic teachings,
                empowered with knowledge, and equipped to thrive in a rapidly
                evolving world.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-[#F1EAFB] bg-[#FAF8FF] p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#C89B3C]">
                    Our Vision
                  </p>
                  <p className="mt-3 text-sm leading-7 text-[#6F618A]">
                    A globally recognized Islamic institution shaping minds,
                    transforming lives, and positively impacting societies.
                  </p>
                </div>

                <div className="rounded-2xl border border-[#F5E7BE] bg-[#FFFDF7] p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#C89B3C]">
                    What We Build
                  </p>
                  <div className="mt-3 space-y-2 text-sm text-[#6F618A]">
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-[#D4A017]" />
                      Clarity in belief
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-[#D4A017]" />
                      Strength in character
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-[#D4A017]" />
                      Service to community
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating mini card */}
            <div className="relative -mt-6 ml-auto max-w-[240px] rounded-3xl border border-[#EEE2C2] bg-white/90 p-5 shadow-[0_18px_40px_rgba(76,29,149,0.08)] backdrop-blur-md">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#C89B3C]">
                Why it matters
              </p>
              <p className="mt-2 text-sm font-semibold leading-6 text-[#3B136B]">
                Faith-rooted guidance for real lives, real questions, and real
                growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}