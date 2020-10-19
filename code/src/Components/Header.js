import React from 'react';
import plane from './../assets/plane.png';

const Header = () => {
    return (
        <>
            <h1 className="header" tabIndex="0">Travel the world!</h1>
            <img className="plane" src={plane} alt=""></img>
        </>
    )
}


export default Header