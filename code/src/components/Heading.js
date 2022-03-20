import React from "react";
import form from "./img/form.png";
import { TiStarFullOutline } from "react-icons/ti";
import familyImg from './img/family2.svg';


const Heading = ( {nextQuestion} ) => {
   return <div className='hero-section'>
   <div className='hero-text'>

   <h1>Tell us what you think</h1>
   <button className="start-btn" type="button" onClick={nextQuestion}>Give feedback</button>
   </div>
      <img className='hero-img' src={familyImg} alt='people are holding hand illustration'/>
   

   </div>
}

export default Heading;