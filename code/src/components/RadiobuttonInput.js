import React from 'react'

const animals = [
  'rabbit',
  'elephant',
  'fox',
  'snake',
  'hippo',
  'zebra'
]

export const RadiobuttonInput = ({spiritAnimal, onSpiritAnimalChange}) => {

  return (
    <div className='form-question-container'>
      <h2 tabIndex='0'>Pick an animal!</h2>
      <div className='radiobutton-container'>
        {animals.map((animal) => (
        <label 
            key={animal} 
            htmlFor={animal}>
          <input
              type='radio'
              id={animal}
              value={animal}
              name='animals'
              onChange={onSpiritAnimalChange}
              checked={spiritAnimal === animal}
              className='radio-input'
              required
          />
          <div className='radio-text-container'>
          {animal}
          </div>
        </label>
        ))}
      </div>
    </div>
  )
}