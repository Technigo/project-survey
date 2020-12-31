import React from 'react';

import logo from '../images/bluebottle.png';

export const Header = () => {

    return (
        <header>
            <div className="logo-container">
            <h1 tabIndex="0">CRAFT BEER Co.</h1>
            <img src={logo} alt="bottle logo" className="logo-image" />
            </div>

            <div className="hamburger-menu">
            <div></div>
            <div></div>
            <div></div>
            </div>       
        </header>
    );
};