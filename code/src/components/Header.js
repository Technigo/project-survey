import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <header className="header">
          <div className="logo-buttons-wrapper">
            {/* <img className="logo" src="./assets/logo.png" alt="World Travel Agency logo" /> */}
            <div className="media-buttons">
                <i className="fab fa-twitter"></i>
                <i className="fab fa-facebook"></i>
                <i className="fab fa-instagram"></i>
            </div>
          </div>
            <h1 className="heading-header">Are you ready for your next adventure?</h1>
        </header>
    )
}
export default Header