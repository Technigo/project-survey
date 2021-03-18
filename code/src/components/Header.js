import React from "react";

import "./Header.css";

export const Header = ({title}) => {
  return (
    <div className="header-bg">
      <div className="header-bg__circle circle--big"></div>
      <div className="header-bg__circle circle--small"></div>
      <h1>{title}</h1>
    </div>
  );
};
