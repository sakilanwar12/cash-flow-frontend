import { getSeoMeta } from "~/lib/getPageSeoMeta";
import type { Route } from "../+types/root";

export function meta(_: Route.MetaArgs): ReturnType<typeof getSeoMeta> {
  return getSeoMeta({
    title: "Home",
  });
}
export default function Home() {
  return <div>Home Page</div>;
}
