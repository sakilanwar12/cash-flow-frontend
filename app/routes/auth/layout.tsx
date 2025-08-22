import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <div>
      Auth Pages
      <Outlet />
    </div>
  );
};

export default AuthLayout;
