import { Outlet } from "react-router-dom";
import Description from "../components/description";
import Bottomnavbar from "../components/bottomnavbar";
import Header from "../components/header";

function SharedLayout() {
  return (
    <>
      <Header />
      <Description />
      <Outlet />
      <Bottomnavbar />
    </>
  );
}

export default SharedLayout;
