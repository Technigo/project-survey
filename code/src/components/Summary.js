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
          {/*
          <p>You eat meat {firstQuestion} 🍖</p>
          {bus === true && <p>You main transport is</p>}
          {bike === true && <p>Good option! Your main transport is</p>}
          {walking === true && <p>You're doing well! You prefer to</p>}
          {bus === false && <p>You main transport is</p>}
          {bike === false && <p>Good option! Your main transport is</p>}
          {walking === true && <p>You doing well! You prefer to</p>}
          <p>Usually, you buy your clothes at {closet} 👗👖</p> */}
        </div>
        <button type="button" onClick={() => window.location.reload()} className="button button-summary">
          Start Again! ⭐
        </button>
      </div>
    </section>

  )
}

export default Summary;