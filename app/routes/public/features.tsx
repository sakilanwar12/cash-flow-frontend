import StatSection from "@/components/features/section/StatSection";
import FeatureCategories from "@/components/features/section/FeatureCategories";
import FeatureComparison from "@/components/features/section/FeatureComparison";
import FeatureHero from "@/components/features/section/FeatureHero";
import FeatureCta from "@/components/features/section/FeatureCta";
import { getSeoMeta } from "@/lib/getPageSeoMeta";

export const meta = () => getSeoMeta({ title: "Features" });

const FeaturesPage = () => {
  return (
    <div className="mt-16">
      <FeatureHero />
      <StatSection />
      <FeatureCategories />
      <FeatureComparison />
      <FeatureCta />
    </div>
  );
};

export default FeaturesPage;
