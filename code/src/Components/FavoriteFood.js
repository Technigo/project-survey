import React from 'react'

import './favoriteFood.css'

export const FavoriteFood = (props) => {
  const {food, setFood} = props

  return (
    <label className="question">
      <p>What is your favorite food?</p>
      <input
        type='text'
        onChange={event => setFood(event.target.value)}
        value={food}
        className="text-input"
        placeholder="Omnomnom"
      />
    </label>
  )
}