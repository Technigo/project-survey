import React from 'react'
import './radioButtons.css'

const animalsArray = ["Snake", "Butterfly", "Dolphin", "Eagle", "Hippo"];

export const RadioButtons = props => {
  const {spiritAnimal, setSpiritAnimal} = props

  return (
    <div className="radioContainer">
      Spirit animal:
      {animalsArray.map(animal => (
        <label key={animal}>
          <input
            type="radio"
            name="animal"
            value={animal}
            onChange={event => setSpiritAnimal(event.target.value)}
            checked={spiritAnimal === animal}
            required
          />
          {animal}
        </label>
      ))}
    </div>
  );
};