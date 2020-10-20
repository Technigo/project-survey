import React from 'react';

const animals = [
  'Rabbit',
  'Elephant',
  'Fox',
  'Snake',
  'Hippo',
  'Zebra'
]

export const RadiobuttonInput = ({spiritAnimal, setSpiritAnimal}) => {

  return (
    <section className="survey-question-container">
      <h2 tabIndex="0">Pick an animal!</h2>
        {animals.map((animal)=> (
        <label 
          key = {animal} 
          htmlFor = {animal}>
        <input
          type = "radio"
          id = {animal}
          value = {animal}
          onChange = {(event) => setSpiritAnimal(event.target.value)}
          checked = {spiritAnimal === animal}
          required
        />
        {animal}
        </label>
        ))}
    </section>
  )
}