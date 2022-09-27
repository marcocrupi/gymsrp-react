import { Outlet } from "react-router-dom";
import Header from "../components/header";
import Bottomnav from "../components/bottomnav";
import "../CSS/sharedlayout.css";
import Footer from "../components/footer";

function SharedLayout() {
  return (
    <div className="shared__container">
      <Header />
      <div className="home__outlet">
        <Outlet />
      </div>
      <Footer />
      <Bottomnav />
    </div>
  );
}

export default SharedLayout;
