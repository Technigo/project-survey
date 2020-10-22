import React from "react"

const 
interests = ["Adventure", "Beach", "History", "Nature", "City-pulse", "Winter Sport"]

export const Radiobuttons = (props) => {

  const { interest, setInterest } = props

  return (
    <>
      <h2>What kind of holiday are you interested in?</h2>
      <section className="radio-button-wrapper">
        {interests.map(option => (
          <label key={option} >{option}
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
