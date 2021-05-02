import React from "react";
import "../css/MainPageContent.css";
import SearchBar from "./SearchBar";
import NomiantedUserCard from "./NomiantedUserCard";

const MainPageContent = () => {
  return (
    <div className={"main-page-content"}>
      <SearchBar />
      <NomiantedUserCard />
    </div>
  );
};

export default MainPageContent;
