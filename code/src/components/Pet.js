import React, { useState } from 'react'

const pets = ["Dog", "Cat", "Fish"]

export const PetForm = () => {
  const [pet, setPet] = useState()

  return (

    <div>
      {pets.map(item => (
        <label key={item}>
          <input
            type="radio"
            value={item}
            onChange={event => setPet(event.target.value)}
            checked={pet === item} />
        </label>
      ))}

    </div>


  )
}
