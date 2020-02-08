import React from 'react'

export const DishQuestion = ({ handleSetDish }) => {
  return (
    <section className="dish-section">
      <label>
        What is your favorite dish?
      </label>
      <div>
        <label>
          <input
            required
            type="radio"
            name="dish"
            value="taco"
            onClick={(event) => handleSetDish(event.target.value)} />
          Taco
        </label>
        <label>
          <input
            required
            type="radio"
            name="dish"
            value="pizza"
            onClick={(event) => handleSetDish(event.target.value)} />
          Pizza
        </label>
      </div>
    </section>
  )
}