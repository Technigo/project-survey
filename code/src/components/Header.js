/* eslint-disable indent */
/* eslint-disable max-len */
import React from 'react';
import './Header.css';
// eslint-disable-next-line import/no-absolute-path
import ponyLogo from '../Images/logo.svg';
import ponyLogo2 from '../Images/logo2.svg'

const Header = () => {
  return (
    <header className="header">
      <h1>My Little Pony</h1>
      <h2>Name Generator</h2>
      <div className="img-container">
        <img
          src={ponyLogo}
          alt="My Little Pony" />
        <img
          src={ponyLogo2}
          alt="My Little Pony 2" />
      </div>
    </header>
  );
};

export default Header;