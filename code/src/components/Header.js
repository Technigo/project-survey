import React from 'react';

import './Header.css'

const Header = (props) => {
    return (
        <header style={{ backgroundColor: props.backgroundColor }}>
            <img className="profile-image" src={props.imgsrc}/>
            <h1 style={{ textColor: props.textColor}}>{props.title}</h1>
        </header>

    )

}

export default Header;
