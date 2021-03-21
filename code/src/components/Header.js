import React from 'react';

import './Header.css'

const Header = (props) => {
    return (
        <header style={{ backgroundColor: props.backgroundColor }}>
            <div className="header-section">
            <div className="header-accessory" style={{ backgroundColor: props.headerAccessory}}> </div>
            <h1 style={{ color: props.color }}>{props.title}</h1>
            <div className="another-header-accessory" style={{ backgroundColor: props.anotherHeaderAccessory}}> </div>
            </div>
        </header>

    )

}

export default Header;
