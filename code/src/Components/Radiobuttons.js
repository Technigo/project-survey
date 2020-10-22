import React from "react"

const 
interests = ["Adventure", "Beach", "Nature", "History", "City-pulse", "Winter Sport"]

export const Radiobuttons = (props) => {

  const { interest, setInterest } = props

  return (
    <>
      <h2 tabIndex="0">What kind of holiday are you interested in?</h2>
      <section className="radio-button-wrapper">
        {interests.map(option => (
          <label tabIndex="0" key={option} >{option}
            <input
              type="radio"
              value={option}
              onChange={event => setInterest(event.target.value)}
              checked={
              interest === option}
            />
          </label>
        ))}
      </section>
     
    </>
  )
}
