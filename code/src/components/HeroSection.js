import React from "react";
import familyImg from './img/family2.svg';


const HeroSection = ( {nextQuestion} ) => {
   return <div className='hero-section flex'>
   <div className='hero-text flex'>

      <h1>Tell us what you think</h1>
      <button className="start-btn" type="button" onClick={nextQuestion}>Give feedback</button>
   </div>
   <img aria-hidden='true' className='hero-img' src={familyImg} alt='people are holding hand illustration'/>
   

   </div>
}

export default HeroSection;