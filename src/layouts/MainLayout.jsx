import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <div>
      {/* navbar */}
      <Navbar />
      {/* outlet */}
      <div>
        <Outlet />
      </div>
      {/* footer */}
      <Footer />
    </div>
  );
};

export default MainLayout;
