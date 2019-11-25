import React from 'react'
import { useState } from 'react'

//Creates an array of choices (numbers) and mapping them in component

const numbers = ["11", "32", "55"]

export const QuestionThree = () => {
  const [number, setNumber] = useState()
  return (
    <div className="question">
      <h2>Question Three...</h2>
      {numbers.map((choice) => (
        <label key={choice} className="label-radio">
          <input
            type="radio"
            value={choice}
            onChange={(event) => setNumber(event.target.value)}
            checked={number === choice}
          />
          <span className="checkmark"></span>
          {choice}
        </label>
      ))
      }
    </div>
  )
}