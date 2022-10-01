/* eslint-disable react/no-unescaped-entities */
import React from 'react';

const Summary = ({ formState }) => {
  console.log(`formState=${JSON.stringify(formState)}`)
  return (
    <section className="section">
      <div className="content-wrap summary">
        <h1>{formState.name}, thank you for participating! 🍄</h1>
        <div className="summary-wrapper">
          <p>Your answers were: </p>
          <p>You eat meat {formState.meatFrequency} 🍖.</p>
          <p>You main transports are {formState.transportChoices.join(' and ')} 🏠.</p>
          <p>Usually, you buy your clothes at {formState.storesChoice} 👗👖.</p>
        </div>
        <button type="button" onClick={() => window.location.reload()} className="button button-summary">
          Start Again! ⭐
        </button>
      </div>
    </section>
  )
}

export default Summary;