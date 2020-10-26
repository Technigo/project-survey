import React from "react";

import "./form.css";

const Header = ({ title, subtitle }) => {
  return (
    <section className="section-container">
      <h1 tabIndex="0">{title}</h1>
      <p>{subtitle}</p>
    </section>
  );
};

export default Header;