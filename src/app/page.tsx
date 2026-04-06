import dynamic from "next/dynamic";

import Hero from "../components/home/Hero";
import AboutPreview from "../components/home/AboutPreview";
import Pillars from "../components/home/Pillars";
import UpcomingEvents from "../components/home/UpcomingEvents";

// Lazy-loaded components (NO ssr: false)
const FeaturedLectures = dynamic(
  () => import("@/components/home/FeaturedLectures"),
  {
    loading: () => (
      <div className="h-[300px] flex items-center justify-center text-gray-400">
        Loading lectures...
      </div>
    ),
  }
);

const FeaturedVideo = dynamic(
  () => import("@/components/home/FeaturedVideo"),
  {
    loading: () => (
      <div className="h-[300px] flex items-center justify-center text-gray-400">
        Loading video...
      </div>
    ),
  }
);

const Programs = dynamic(
  () => import("@/components/home/Programs"),
  {
    loading: () => (
      <div className="h-[300px] flex items-center justify-center text-gray-400">
        Loading programs...
      </div>
    ),
  }
);

const DonationCTA = dynamic(
  () => import("@/components/home/DonationCTA"),
  {
    loading: () => (
      <div className="h-[300px] flex items-center justify-center text-gray-400">
        Loading donation...
      </div>
    ),
  }
);

export default function Home() {
  return (
    <main>
      {/* Fast sections */}
      <Hero />
      <AboutPreview />
      <Pillars />

      {/* Lazy-loaded sections */}
      <FeaturedLectures />
      <FeaturedVideo />
      <UpcomingEvents />
      <Programs />
      <DonationCTA />
    </main>
  );
}