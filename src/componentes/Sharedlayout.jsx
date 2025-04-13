import React from "react";
import HeaderSection from "./HeaderSection/HeaderSection";
import FooterSection from "./FooterSection/FooterSection";
import YouTubeVedio from "./YouTubeVedio/YouTubeVedio";
import { Outlet } from "react-router-dom";
function Sharedlayout() {
  return (
    <>
      <HeaderSection />

      <Outlet />
      <YouTubeVedio />
      <FooterSection />
    </>
  );
}

export default Sharedlayout;
