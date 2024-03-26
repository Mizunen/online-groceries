import MainNavigation from "../components/UIElements/MainNavigation";
import { Outlet } from "react-router-dom";

import Footer from "../components/UIElements/Footer";
//"flex flex-col  items-center p-[2rem]"
const RootLayout = () => {
  return (
    <>
      <MainNavigation />
      <main className="mb-[2rem]">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default RootLayout;
