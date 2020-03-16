import React from 'react'
import { useState } from 'react'


export const ChooseVacation = () => {

  const vacations = [
    'Weekend in Paris',
    'Spring in Tokyo',
    'Oktoberfest in München',
    'Ice Cave tour in Iceland',
    'Relaxing and yoga in Bali'
  ]

  const [vacation, setVacation] = useState()

  return (
    <label>
      Your idea of the perfect vacation: 
      {vacations.map((tour) => (
        <label key={tour}>
          <input
          type="radio"
          value={tour}
          onChange={(event) => setVacation(event.target.value)}
          checked={vacation === tour}
          />
          {tour}
        </label>
      ))}
    </label>
  )
}