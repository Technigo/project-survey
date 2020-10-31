import React from 'react';
import 'styles/header.css';

const Header = () => {
  return (
    <header className="header">
      <img
        src="../images/questions-logo.svg"
        alt="Logotype"
        className="header-logo"
      />
      <nav className="top-menu">
        <a className="top-menu__item">FAQ</a>
      </nav>
    </header>
  );
};

export default Header;
