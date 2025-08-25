import Footer from "@/components/features/section/Footer";
import Header from "@/components/partial/Header";
import { Outlet } from "react-router";

const PublicLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default PublicLayout;
