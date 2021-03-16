import React from "react";
import "./Header.css";

export const Header = (props) => {
  return (
    <div className="header-bg">
      <div className="header-bg__circle circle--big"></div>
      <div className="header-bg__circle circle--small"></div>
      <h1>{props.title}</h1>
    </div>
  );
};
