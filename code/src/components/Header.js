import React from 'react';

const Header = (props) => {
    return (
        <header className="header">
            <img className="logo" src="./assets/logo_white.png" alt="Logo"/>
            <div className="media-buttons">
                <i className="fab fa-twitter"></i>
                <i className="fab fa-facebook"></i>
                <i className="fab fa-instagram"></i>
            </div>
        </header>
    )
}
export default Header