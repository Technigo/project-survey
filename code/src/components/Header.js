import React from 'react';
import BackgroundImage from './background.webp'

const Header = () => {
  return (
    <header style={{
      background: `url(${BackgroundImage})`,
      backgroundSize: 'cover'
    }}>
      <div className="overlay">
        <div className="header-text">
          <h1>Hogwarts Community College tryouts</h1>
          <p>Since Harry Potters victory against You-Know-Who and the Wizarding Worlds exposure
            by J.K Rowling, the Ministry of Magic will leave no stone unturend searching for any
            and all magical ability. Do you think there is some magic within you? Sign up for
            Hogwarts Community College tryouts today to secure your ticket to the HCC Express!
          </p>
        </div>
      </div>
    </header>
  )
}

export default Header;