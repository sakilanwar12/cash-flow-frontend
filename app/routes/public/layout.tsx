import Header from "@/components/partial/Header";
import { Outlet } from "react-router";

const PublicLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default PublicLayout;
