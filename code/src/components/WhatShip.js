import React from 'react'

const WhatShip = ({ 
    whatTeam, 
    teamUpdate, 
    stepChange 
    }) => {
   
    return (
    <form>

      <label htmlFor="whodoyouship">The most important question of all, who do you ship?</label>
      
      <label>
      <input 
        id="whodoyouship" 
        type="radio" 
        value="Angel"
        onChange={ () => teamUpdate('Angel') }
        checked={whatTeam === 'Angel'}
      /> <span aria-label="Team Angel"> Team Angel!!! </span>
      </label>

      <label>
      <input 
        id="whodoyouship" 
        type="radio" 
        value="Spike"
        onChange={ () => teamUpdate('Spike') }
        checked={whatTeam === 'Spike'}
      /> <span aria-label="Team Spike"> Team Spike!!! </span>
      </label>



      <button 
      disabled={whatTeam === ''}
      onClick={stepChange}>Next question</button>

    </form>

    )
}
export default WhatShip