import { Outlet } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";
import "../CSS/sharedlayout.css";

function SharedLayout() {
  return (
    <>
      <Header />
      <div className="home__outlet">
         <div className="description__shared">
          <span>
            An app to keep track of sets, recovery times, calculate simple
            percentages and predict your 1RM.
          </span>
        </div> 
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default SharedLayout;
