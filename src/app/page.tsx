import Hero from "../components/home/Hero";
import FeaturedLectures from "../components/home/FeaturedLectures";
import UpcomingEvents from "../components/home/UpcomingEvents";
import AboutPreview from "../components/home/AboutPreview";
import Pillars from "../components/home/Pillars";
import FeaturedVideo from "../components/home/FeaturedVideo";
import Programs from "../components/home/Programs";
import DonationCTA from "../components/home/DonationCTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutPreview />
      <Pillars />
      <FeaturedLectures />
      <FeaturedVideo />
      <UpcomingEvents />
      <Programs />
      <DonationCTA />
    </main>
  );
}