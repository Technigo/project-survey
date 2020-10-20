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
      <>
      <h2>Pick an animal!</h2>
        Animals
        {animals.map((animal)=> (
        <label key = {animal}>
        <input
            type = "radio"
            value = {animal}
            onChange = {(event) => setSpiritAnimal(event.target.value)}
            checked = {spiritAnimal === animal}
            required
        />
        {animal}
        </label>
        ))}
      </>
    )
}