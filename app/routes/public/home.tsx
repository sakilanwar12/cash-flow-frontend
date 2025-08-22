import { getSeoMeta } from "@/lib/getPageSeoMeta";

export const meta = () => getSeoMeta({ title: "Home" });
const HomePage = () => {
  return <div>HomePage</div>;
};

export default HomePage;
