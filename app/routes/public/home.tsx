import HeroSection from "@/components/features/section/HeroSection";
import { getSeoMeta } from "@/lib/getPageSeoMeta";

export const meta = () => getSeoMeta({ title: "Home" });
const HomePage = () => {
  return (
    <div>
      <HeroSection />
    </div>
  );
};

export default HomePage;
