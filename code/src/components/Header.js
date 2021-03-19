import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <header className="header">
          <div className="logo-buttons-wrapper">
            <div className="media-buttons">
                <i className="fab fa-twitter"></i>
                <i className="fab fa-facebook"></i>
                <i className="fab fa-instagram"></i>
            </div>
          </div>
        </header>
    )
}
export default Header