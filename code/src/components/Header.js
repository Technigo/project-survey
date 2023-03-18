/* eslint-disable max-len */
import React from 'react';
import Image from '../assets/astronaut.jpg'

const Header = () => {
  return (
    <div className="header">
      <h1 className="header-copy">Welcome to the <span className="color1"> Astral Escapes!</span></h1>
      <img className="icon" src={Image} alt="Astronaut" />
    </div>
  )
}

export default Header;