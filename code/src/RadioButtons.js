import React from 'react'
import './radioButtons.css'

const animalsArray = ["butterfly", "dolphin", "snake", "eagle", "hippo"];

export const RadioButtons = ({ spiritAnimal, setSpiritAnimal }) => (
  <div className="radioContainer">
    Pick a spirit animal:
      {animalsArray.map(animal => (
      <label key={animal}>
        <input
          className="radioInput"
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
)