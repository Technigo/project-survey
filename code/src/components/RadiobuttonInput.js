import React from 'react';

const animals = [
  'Rabbit',
  'Elephant',
  'Fox',
  'Snake',
  'Hippo',
  'Zebra'
]

export const RadiobuttonInput = ({spiritAnimal, onSpiritAnimalChange}) => {

  return (
    <div className="form-question-container">
      <h2 tabIndex="0">Pick an animal!</h2>
      <div className="radiobutton-container">
        {animals.map((animal)=> (
        <label 
          key = {animal} 
          htmlFor = {animal}>
        <input
          type = "radio"
          id = {animal}
          value = {animal}
          onChange = {onSpiritAnimalChange}
          checked = {spiritAnimal === animal}
          className="radio-input"
          required
        />
        <div className="radio-input-container">
        {animal}
        </div>
        </label>
        ))}
        </div>
    </div>
  )
}