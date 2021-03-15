import React from 'react';

const Header = (props) => {
    return (
        <header className="header">
            <img className="logo" src="./assets/logo_white.png" />
            <div className="media-buttons">
                <i class="fab fa-facebook"></i>
                <i class="fab fa-facebook"></i>
                <i class="fab fa-facebook"></i>
            </div>
            <h1>{props.title}</h1>
        </header>
    )
}
export default Header