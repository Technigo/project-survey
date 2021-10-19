import React from "react"

const Summary = ({ nameInput, ageInput, locationInput, checkboxGroup }) => {
  return (
    <section>
      <h2>My values from form </h2>
      <p> Name: {nameInput} </p>
      <p> Age: {ageInput} </p>
      <p> Location: {locationInput} </p>
      <p> Character: {checkboxGroup} </p>
    </section>
  )
}

export default Summary
