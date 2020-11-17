import React from "react";
import { PropsFromParents } from "./model";
import "./header.scss";

const Header = (props: PropsFromParents) => {
  return (
    <div className={"headerContainer"}>
      <input
        placeholder="Type photo tag"
        value={props.searchText}
        onChange={(event) => props.changeSearchText(event.target.value)}
      ></input>
      <div
        className={"searchButton"}
        onClick={() => props.onSearchClick(props.searchText)}
      >
        Search
      </div>
    </div>
  );
};

export default Header;
