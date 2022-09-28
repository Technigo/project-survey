/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react'

export const Food = ({ foodHabit, setFoodHabit }) => {
  const handleUserFoodHabitChange = (event) => {
    setFoodHabit(event.target.value)
  }
  return (
    <div>
      <h3>How much veggies/fruit do you eat a day?</h3>
      <label>
        <select onChange={handleUserFoodHabitChange}>
          <option selected="true" disabled value="Select an">Select an option:</option>
          <option value="None">I do not eat any fruit och veggies </option>
          <option value="0-200g">No more than 200g</option>
          <option value="200-400g">200-400g</option>
          <option value="400-600g">400-600g</option>
          <option value=">600g">More than 600g</option>
        </select>
      </label>
      <p>Your answer: {foodHabit}</p>

    </div>
  )
}