import React from "react";
import HeaderSection from "./HeaderSection/HeaderSection";
import FooterSection from "./FooterSection/FooterSection";
import YouTubeVedio from "./YouTubeVedio/YouTubeVedio";
import { Outlet } from "react-router-dom";
import MainSection from "./MainSection/MainSection";
function Sharedlayout() {
  return (
    <>
      <HeaderSection />
      <Outlet />
      {/*<MainSection /> */}
      <YouTubeVedio />
      <FooterSection />
    </>
  );
}

export default Sharedlayout;
