import BankingCTA from "@/components/features/section/BankingCTA";
import HeroSection from "@/components/features/section/HeroSection";
import Services from "@/components/features/section/Services";
import { getSeoMeta } from "@/lib/getPageSeoMeta";

export const meta = () => getSeoMeta({ title: "Home" });
const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <Services />
      <BankingCTA />
    </div>
  );
};

export default HomePage;
