import React from "react";
import "../css/MainPageContent.css";
import MainButton from "./MainButton";

const MainPageContent = () => {
  return (
    <div className={"main-page-content"}>
      <h3>This is the main content</h3>
      <MainButton />
    </div>
  );
};

export default MainPageContent;
