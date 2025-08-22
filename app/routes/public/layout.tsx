import { Outlet } from "react-router";

const PublicLayout = () => {
  return (
    <div>
      Public Pages
      <Outlet />
    </div>
  );
};

export default PublicLayout;
