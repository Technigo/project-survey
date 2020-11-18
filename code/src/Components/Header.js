import React from "react";

import "./header.css";

export const Header = ({ mainHeading, subHeading }) => {
  return (
    <header>
      <h1>{mainHeading}</h1>
      <h2>{subHeading}</h2>
    </header>
  );
};
