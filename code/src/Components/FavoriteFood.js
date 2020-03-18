import React from 'react'

import './favoriteFood.css'

export const FavoriteFood = (props) => {
  const {food, setFood} = props

  return (
    <label className="question">
      <h3>What is your favorite food?</h3>
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