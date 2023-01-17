/* eslint-disable react/no-unescaped-entities */
import React from 'react';

const Summary = ({ formState }) => {
  console.log(`formState=${JSON.stringify(formState)}`)
  return (
    <section className="section">
      <div className="content-wrap summary">
        <h1>{formState.name}, thank you for participating!</h1>
        <div className="summary-wrapper">
          <p>Your answers were: </p>
          <p>Your gender is {formState.genderChoice}.</p>
          <p>Your 2 favourite electricity products are; {formState.electricityChoices.join(' and ')}.</p>
          <p>You are between {formState.ageChoice} years old.</p>
        </div>
        <button type="button" onClick={() => window.location.reload()} className="button button-summary">
          New survey!
        </button>
      </div>
    </section>
  )
}

export default Summary;