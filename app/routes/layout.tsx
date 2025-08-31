import ReduxStoreProvider from "@/store/ReduxStoreProvider";
import { Outlet } from "react-router";

const RootLayout = () => {
  return (
    <ReduxStoreProvider>
      <Outlet />
    </ReduxStoreProvider>
  );
};

export default RootLayout;
