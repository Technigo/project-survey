import React from 'react'
import { useState } from 'react'

export const FavoriteFood = () => {
  const [food, setFood] = useState()

  return (
    <form onSubmit={(event) => event.preventDefault()}>
      <p>What is your favorite food?</p>
      <input
        type='text'
        onChange={event => setFood(event.target.value)}
        value={food}
      />
    </form>
  )
}