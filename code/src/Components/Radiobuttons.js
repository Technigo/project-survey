import React from "react"

const interest = ["Adventure", "Beach", "History", "City-pulse", "Winter Sport",]

export const Radio = (props) => {

  const { interests, setInterests } = props

  return (
    <>
      <h2>What kind of holiday are you interested in?</h2>
      <section className="radio-button-container">
        {interest.map(option => (
          <label key={option} >{option}
            <input
              type="radio"
              value={option}
              onChange={event => setInterests(event.target.value)}
              checked={interests === option}
            />
          </label>
        ))}
      </section>
    </>
  )
}