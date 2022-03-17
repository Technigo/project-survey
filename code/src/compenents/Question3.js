import React from 'react'

import wand1 from "../assets/wand1.png"
import wand2 from "../assets/wand2.png"
import wand3 from "../assets/wand3.png"
import wand4 from "../assets/wand4.png"


const Question3 = ({wand, onWandChange, onStepChange}) => {
    
const wands = ['1: Wand: Maple Wood with a dragon heartstring core, 12 ½', 
'2: Black Walnut wood with a phoenix feather core, 13', 
'Pine wood with a unicorn hair core, 10 ¾', 
'Ebony wood, Unicorn hair core, 11 1/2']


    return (
      <div>
        <section className="container">
          <article className="letter-container">

        <form className="form" onSubmit={event => event.preventDefault()}>
          <h1>Choose your wand?</h1>
           
         
                 <div className="wand-input-container">
                  <label key={wand} >Maple Wood with a dragon heartstring core, 12 ½</label>
                    <input
                      className="wands"
                      type="radio"
                      src={wand1}
                      value={wand}
                      onChange={onWandChange}
                      
                    ></input>
                     <img className="wands" src={wand1} alt=""/>
                  

                    <label key={wand}>Black Walnut wood with a phoenix feather core, 13</label>
                    <input
                      className="wands"
                      type="radio"
                      src={wand2}
                      value={wand}
                      onChange={onWandChange}
                    ></input>
                     <img className="wands" src={wand2} alt=""/>

                    

                    <label key={wand}>Pine wood with a unicorn hair core, 10 ¾</label>
                    <input
                      className="wands"
                      type="radio"
                      value={wand}
                      onChange={onWandChange}
                    ></input>
                     <img className="wands" src={wand3} alt=""/>

                    

                    <label key={wand}>Ebony wood, Unicorn hair core, 11 1/2</label>
                    <input
                      className="wands"
                      name="wand"
                      type="radio"
                      src={wand4}
                      value={wand}
                      onChange={onWandChange}
                      
                    ></input>
                     <img className="wands" src={wand4} alt=""/>

                               
                    <button className='btn' type="button" onClick={onStepChange}>Next</button>
                    </div> 

        </form>
        </article>
        </section>
      </div>
    )
  }

  export default Question3