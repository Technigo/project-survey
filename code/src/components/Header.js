import React from "react";
import companyLogo from "../images/punttis.jpg";

const Header = () => {
  return (
    <>
      <div className="header">
        <img src={companyLogo} />
        <h1 className="header-title">WEEK CHALLENGE REGISTRATION</h1>
      </div>
    </>
  );
};

export default Header;
