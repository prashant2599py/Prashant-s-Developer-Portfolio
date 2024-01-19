import React from "react";
import "./Header.css";
import HeaderList from "./HeaderList";
import listItem from "../data.js";

export default function Header() {
  return (
    <div>
      <header>
        <nav>
          <div className="left">Prashant's Portfolio</div>
          <div className="right">
            <HeaderList listItem={listItem}></HeaderList>
          </div>
        </nav>
      </header>
    </div>
  );
}
