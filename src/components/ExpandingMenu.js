import { useState } from "react";
import "../css/ExpandingMenu.css";
import "../css/Icons.css";
import exitIcon from "../icons/Exit-icon.svg";
import chevronIcon from "../icons/chevron-icon.svg";
const ExpandingMenu = (props) => {
  const [clicked, setClicked] = useState(false);
  const [rotate, setRotate] = useState("rotate-0");

  function handleClick() {
    setClicked(!clicked);
    if (rotate === "rotate-0") {
      setRotate("rotate-90");
    } else {
      setRotate("rotate-0");
    }
  }
  return (
    <>
      <img
        onClick={handleClick}
        className={`icon ${rotate}`}
        src={chevronIcon}
        alt="chevron icon"
        onClick={(e) => handleClick(e)}
      />
      {clicked ? (
        <div className={"expanding-menu-wrap"}>
          <div className={"expanding-menu-children-wrap"} onClick={handleClick}>
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
