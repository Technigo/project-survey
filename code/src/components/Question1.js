import React, { useState } from 'react'
//import { App } from 'App'

export const Question1 = () => {
  const [animal, setAnimal]= useState("Cockroach")
  
  
  return(
    <form>
    <select
    onChange={event => setAnimal(event.target.value)}
    value = {animal}
    >
    <div className="dropdown">
      <option value ="">What would be the coolest animal to scale up to the size of a horse?</option>
      <div className="dropdownOptions">
        <option value ="">Cockroach</option>
        <option value ="">Tick</option>
        <option value ="">Rat</option>
      </div>
    </div>
    
    
    </select>
    </form>
    )
  }