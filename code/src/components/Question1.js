import React, { useState } from 'react'
//import { App } from 'App'

export const Question1 = ({ animal, setAnimal }) => {

  return (
    <label>
      <h1>What would be the coolest animal to scale up to the size of a horse?</h1>
      <div className="selectdiv">
      <select
        name='dropdown'
        value={animal}
        onChange={event => setAnimal(event.target.value)}
      >
        
        <option id='0'>Cockroach</option>
        <option id='1'>Tick</option>
        <option id='2'>Rat</option>
        
      </select>
      </div>
    </label>
  )
}

