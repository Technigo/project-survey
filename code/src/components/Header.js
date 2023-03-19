import React from 'react';

export const Header = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <a href="#">Clothing</a>
        <a href="#">Trends</a>
        <a href="#">Fashion</a>
      </div>
      <div className="navbar-logo">
        <h2>LE FASHION</h2>
      </div>
      <div className="navbar-right">
        <a href="#">Sport</a>
        <a href="#">Beauty</a>
        <a href="#">Home</a>
      </div>
    </nav>
  );
};
