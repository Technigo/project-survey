import React from "react";
import form from "./img/form.png";
import { TiStarFullOutline } from "react-icons/ti";


const Heading = ( {nextQuestion} ) => {
   return <div className='hero-section'>
   <div>

   <h1>Your feedback means the world to us</h1>
   <button className="start-btn" type="button" onClick={nextQuestion}>Give feedback</button>
   </div>
   <div className="hero-img-container">
      <img className='hero-img' src={form} alt='a happy woman'/>
      <TiStarFullOutline className="star-icon" />
      <TiStarFullOutline className="star-icon star-icon-two" />
      </div>
   

   </div>
}

export default Heading;