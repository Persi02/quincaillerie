import { Outlet } from "react-router-dom";
import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";

const HomeLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Navbar />
      <div className="grow">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};

export default HomeLayout;
