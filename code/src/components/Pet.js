import React, { useState } from 'react'

const pets = ["dog", "cat", "fish"]

export const PetForm = props => {
  const { pet, setPet } = props


  return (
    <div>
      {pets.map(item => (
        <label key={item}>
          <input
            type="radio"
            value={item}
            onChange={event => setPet(event.target.value)}
            checked={pet === item} />
          {item}
        </label>
      ))}
    </div>
  )
}
