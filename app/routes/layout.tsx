import { Outlet } from "react-router";

const RootLayout = () => {
  return (
    <div>
      Root Layout
      <Outlet />
    </div>
  );
};

export default RootLayout;
