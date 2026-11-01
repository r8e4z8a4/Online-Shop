import Footer from "@/Components/Common/Footer";
import Header from "@/Components/Common/Header";
import { Outlet, ScrollRestoration } from "react-router";
const UserLayout = () => {
  return (
    <>
      <ScrollRestoration />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default UserLayout;
