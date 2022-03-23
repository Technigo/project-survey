import React from 'react'

import angel from './angel.png'
import spike from './spike.png'



const WhatShip = ({ 
    whatTeam, 
    teamUpdate, 
    stepChange 
    }) => {
   
    return (
    <form className="ship-form">
      <div className="pergament"> </div>

      <label className="question" htmlFor="whodoyouship">The most important question <br></br>of all, who do you ship?</label>
      
      <label className="ship-option">
      <span aria-label="Team Angel">
        <input 
        id="whodoyouship" 
        type="radio" 
        value="Angel"
        onChange={ () => teamUpdate('Angel') }
        checked={whatTeam === 'Angel'} /> 
      <img className="portrait" src={angel} alt="picture of Angel" /> 
       </span>
      </label>

      <label className="ship-option">
      <span aria-label="Team Spike">
      <input 
        id="whodoyouship" 
        type="radio" 
        value="Spike"
        onChange={ () => teamUpdate('Spike') }
        checked={whatTeam === 'Spike'}
      />
      <img className="portrait" src={spike} alt="picture of Spike" />
        </span>
      </label>



      <button 
      disabled={whatTeam === ''}
      onClick={stepChange}>Submit results</button>

    </form>

    )
}
export default WhatShip