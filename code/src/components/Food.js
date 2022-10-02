import React from 'react'
import { FoodIcon } from './FoodIcon'

export const Food = ({ foodHabit, setFoodHabit }) => {
  const handleUserFoodHabitChange = (event) => {
    setFoodHabit(event.target.value)
  }
  return (
    <div className="content">
      <FoodIcon />

      <h2>Healthy foods</h2>

      <h3>How much veggies/fruit do you eat a day?</h3>
      <div>
        <select onChange={handleUserFoodHabitChange}>
          <option selected="true" disabled value="Select an">Select an option:</option>
          <option label="0gr" value="0gr">I do not eat any fruit och veggies </option>
          <option label="0-200gr" value="0-200g">No more than 200g</option>
          <option label="200-400g" value="200-400g">200-400g</option>
          <option label="400-600g" value="400-600g">400-600g</option>
          <option label=">600g" value=">600g">More than 600g</option>
        </select>
      </div>
      <p>Your answer: {foodHabit}</p>

    </div>
  )
}