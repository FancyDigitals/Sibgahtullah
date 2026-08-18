import dynamic from "next/dynamic";
import Hero from "@/components/home/Hero";
import AboutPreview from "@/components/home/AboutPreview";
import Pillars from "@/components/home/Pillars";
import UpcomingEvents from "@/components/home/UpcomingEvents";
import WeeklyInspiration from "@/components/home/WeeklyInspiration";

/* ─── Loading placeholder ─── */
function SectionLoader({ label }: { label: string }) {
  return (
    <div className="flex h-[300px] items-center justify-center">
      <div className="flex flex-col items-center gap-3 text-[#8C7AAE]">
        <svg
          className="h-6 w-6 animate-spin"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
        <p className="text-sm font-medium">Loading {label}...</p>
      </div>
    </div>
  );
}

/* ─── Lazy sections ─── */
const YoutubeShortsFeed = dynamic(
  () => import("@/components/YoutubeShortsFeed"),
  { loading: () => <SectionLoader label="shorts" /> }
);

const FeaturedLectures = dynamic(
  () => import("@/components/home/FeaturedLectures"),
  { loading: () => <SectionLoader label="lectures" /> }
);

const FeaturedVideo = dynamic(
  () => import("@/components/home/FeaturedVideo"),
  { loading: () => <SectionLoader label="video" /> }
);

const Programs = dynamic(
  () => import("@/components/home/Programs"),
  { loading: () => <SectionLoader label="programs" /> }
);

const DonationCTA = dynamic(
  () => import("@/components/home/DonationCTA"),
  { loading: () => <SectionLoader label="donation" /> }
);

/* ─── Page ─── */
export default function Home() {
  return (
    <main className="overflow-hidden bg-white">
      {/* Above the fold — loaded immediately */}
      <Hero />
      <AboutPreview />
      <Pillars />
      <WeeklyInspiration />

      {/* Below the fold — lazy loaded */}
      <YoutubeShortsFeed />
      <FeaturedLectures />
      <FeaturedVideo />
      <UpcomingEvents />
      <Programs />
      <DonationCTA />
    </main>
  );
}