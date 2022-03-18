import React from 'react'

import wand1 from "../assets/wand1.png"
import wand2 from "../assets/wand2.png"
import wand3 from "../assets/wand3.png"
import wand4 from "../assets/wand4.png"


const Question3 = ({wand, onWandChange, onStepChange}) => {
    
const wands = [
'Maple Wood with a dragon heartstring core, 12 ½', 
'Black Walnut wood with a phoenix feather core, 13', 
'Pine wood with a unicorn hair core, 10 ¾', 
'Ebony wood, Unicorn hair core, 11 1/2']

    return (
      <div>
        
        <article className="letter-container">
        <form className="form" onSubmit={event => event.preventDefault()}>
          <h1 tabindex="0">Choose your wand</h1>

            {wands.map(wand => (
                 <label className="wand-button-text" key={wand} tabindex="0">
                    <input
                      className="radio-button"
                      type="radio"
                      value={wand}
                      onChange={onWandChange}
                       >
                    </input>
                    {wand}
                </label>
                    ))}

          <div className="image-container">
            <img src={wand1} alt="Wand 1" tabindex="0"/>    
            <img src={wand2} alt="Wand 2" tabindex="0"/>   
            <img src={wand3} alt="Wand 3" tabindex="0"/>      
            <img src={wand4} alt="Wand 4" tabindex="0"/>    
          </div>
          
          <button className='btn' type="button" onClick={onStepChange} tabindex="0">Next</button>

        </form>
        </article>
      </div>
    )
  }

  export default Question3