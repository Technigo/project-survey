import React from 'react'
import './components.css'

const ages = ['18', '27', '55', '90']

export const AgeQuestion = ({ yourAge, setYourAge }) => {
  const handleAgeChange = (event) => {
    setYourAge(event.target.value);
  }
  return (
    <form>
      <p className="question">How old are you in this dream?</p>
      {ages.map((age) => (
        <label htmlFor="age" key={age}>
          <input
            type="radio"
            id=""
            onChange={handleAgeChange}
            value={age}
            checked={yourAge === age} />
          {age}
        </label>
      ))}
    </form>
  )
}