import React, { useState } from 'react'

export const Question2 = ({ wouldYouRather, setwouldYouRather }) => {


  return (
    <label>

      <h2>Choose one...</h2>
      <h1>Would you rather...</h1>
      <h1>have edible spaghetti hair that regrows every night or sweat maple syrup?</h1>

      <div className="radio-container">
        <div>
          <input
            className="form-radio"
            type="radio"
            value="spaghetti"
            onChange={event => setwouldYouRather(event.target.value)}
            checked={wouldYouRather === "spaghetti"}
            required
          />
          <p>Have spaghetti for hair</p>
        </div>
        <div>
          <input
            className="form-radio"
            type="radio"
            value="syrup"
            onChange={event => setwouldYouRather(event.target.value)}
            checked={wouldYouRather === "syrup"}
            required
          />

          <p>Sweat Syrup</p>
        </div>
      </div>
    </label>


  )
}

