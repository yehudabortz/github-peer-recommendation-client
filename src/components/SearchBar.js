import React, { Component } from "react";
import "../css/SearchBar.css";

export default class SearchBar extends Component {
  render() {
    return (
      <>
        <form className="search-bar">
          <input type="text" />
          <input type="submit" />
        </form>
      </>
    );
  }
}
