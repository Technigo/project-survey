import React from 'react'
import logo from './logo.png'; 

console.log(logo); 

const Header = () => {

  return (
    <div className="logo-wrapper">
    <img src={logo} alt="Logo" />
    </div>
  )
}
export default Header