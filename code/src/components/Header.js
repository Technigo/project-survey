import React from 'react';
import BackgroundImage from '../assets/images/background.webp'

const Header = () => {
  return (
    <header style={{
      background: `url(${BackgroundImage})`,
      backgroundSize: 'cover'
    }}>
      <div className="overlay">
        <div className="header-text">
          <h1>Hogwarts Community College tryouts</h1>
          <p>Since Harry Potters victory over You-Know-Who, and the Wizarding Worlds exposure
            to the muggles by J.K Rowling beloved books, the Ministry of Magic will leave no
            stone unturend searching for any and all magical ability.
          </p>
          <p>
            Do you think there is some magic within you? Sign up for
            Hogwarts Community College tryouts today to secure your ticket to the HCC Express!
          </p>
        </div>
      </div>
    </header>
  )
}

export default Header;