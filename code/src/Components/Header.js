import React from 'react';
import TravelImg from './Images/TravelImg.jpg'


const Header= () => {
  return (
    <>
    <header>
    <div className="headerText">
    <h1> VACATION PLANNER</h1>
    <p className="secondHeader"> Where will your next trip take you?</p>
    </div>
    <img className="headerImg" src={TravelImg} alt="Telescope" />
    </header>
    </>
);
}
export default Header;