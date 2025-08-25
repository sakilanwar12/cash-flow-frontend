import AboutHero from "@/components/features/section/AboutHero";
import JoinUsSection from "@/components/features/section/JoinUsSection";
import MileStone from "@/components/features/section/MileStone";
import OurStory from "@/components/features/section/OurStory";
import TeamSection from "@/components/features/section/TeamSection";
import { getSeoMeta } from "@/lib/getPageSeoMeta";

export const meta = () => getSeoMeta({ title: "About" });

const AboutPage = () => {
  return (
    <div className="mt-16">
      <AboutHero />
      <OurStory />
      <MileStone />
      <JoinUsSection />
      <TeamSection />
    </div>
  );
};

export default AboutPage;
