import { useState } from "react";
import "../css/ExpandingMenu.css";
import StandardPageContentWrap from "./wrappers/StandardPageContentWrap";
import exitIcon from "../icons/Exit-icon.svg";
import chevronIcon from "../icons/chevron-icon.svg";
const ExpandingMenu = (props) => {
  const [clicked, setClicked] = useState(false);

  function handleClick() {
    setClicked(!clicked);
  }
  return (
    <>
      <img
        onClick={handleClick}
        className={"icon "}
        src={chevronIcon}
        alt="chevron icon"
        onClick={(e) => handleClick(e)}
      />
      {clicked ? (
        <div className={"expanding-menu-wrap"}>
          <div className={"expanding-menu-children-wrap"} onClick={handleClick}>
            <img
              className={"icon "}
              src={exitIcon}
              alt="exit icon"
              onClick={(e) => handleClick(e)}
            />
            {props.children}
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default ExpandingMenu;
