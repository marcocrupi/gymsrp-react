import { Outlet } from "react-router-dom";
import Bottomnavbar from "../components/bottomnavbar";
import Header from "../components/header";
import "../CSS/sharedlayout.css"

function SharedLayout() {
  return (
    <>
      <Header />
      <div className="home__outlet">
        <Outlet />
      </div>
      <Bottomnavbar />
    </>
  );
}

export default SharedLayout;
