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
        {/* <div className="description__shared">
          <span>
            An app to keep track of sets, recovery times, calculate simple
            percentages and predict your 1RM.
          </span>
        </div>  */}
        <Outlet />
      </div>
      <Footer />
      <Bottomnav />
    </div>
  );
}

export default SharedLayout;
