import React from "react";
import "../css/MainPageContent.css";
import MainButton from "./MainButton";
import SearchBar from "./SearchBar";

const MainPageContent = () => {
  return (
    <div className={"main-page-content"}>
      <h3>This is the main content</h3>
      <MainButton text={"Add"} theme={""} />
      <SearchBar />
    </div>
  );
};

export default MainPageContent;
