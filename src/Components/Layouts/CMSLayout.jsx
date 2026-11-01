import { Outlet, ScrollRestoration } from "react-router";
import Sidebar from '../Common/Sidebar'
const CMSLayout = () => {

  return (
    <main className="flex gap-5 min-h-dvh md:pl-3">
      <ScrollRestoration />
      <Sidebar />
      <section className="container mx-auto py-4" id="content">
        <Outlet />
      </section>
    </main>
  );
};

export default CMSLayout;