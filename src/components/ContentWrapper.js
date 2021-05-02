import React from "react";
import MainPageContent from "../components/MainPageContent";
import SideBar from "../components/SideBar";
import "../css/ContentWrapper.css";

export default function ContentWrapper() {
  return (
    <div className={"content-wrapper"}>
      <SideBar />
      <MainPageContent />
    </div>
  );
}