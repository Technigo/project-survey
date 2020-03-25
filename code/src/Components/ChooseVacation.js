import React from 'react'

import './chooseVacation.css'

export const ChooseVacation = (props) => {
  const {vacation, vacations, setVacation} = props

  return (
    <label className='vacation question'>
    <h3>Your idea of the perfect vacation: </h3>
    {vacations.map((tour) => (
      <label key={tour}>
        <input
        className='radio'
        type='radio'
        name='radio'
        value={tour}
        onChange={(event) => setVacation(event.target.value)}
        required
        checked={vacation === tour}
        />
        {tour}
      </label>
    ))}
  </label>
  )
}