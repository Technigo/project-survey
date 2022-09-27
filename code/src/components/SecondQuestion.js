/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/self-closing-comp */
import React, { useState } from 'react';

const SecondQuestion = ({ nextQuestion, secondQuestion }) => {
  const [bus, setBus] = useState(false);
  const [bike, setBike] = useState(false);
  const [walking, setWalking] = useState(false)
  return (
    <section className="section">
      <div className="content-wrap">
        <h1>Travel Sustainably</h1>
        <p>What is your most chosen transport?</p>
        <form className="form-checkbox">
          <label htmlFor="bus">
            <input
              type="checkbox"
              checked={bus}
              onChange={setBus}
              value={secondQuestion}
              id="bus"
              name="bus" />
            Bus
          </label>
          <label htmlFor="bike">
            <input
              type="checkbox"
              checked={bike}
              onChange={setBike}
              value={secondQuestion}
              id="bike"
              name="bike" />
            Bike
          </label>
          <label htmlFor="walking">
            <input
              type="checkbox"
              checked={walking}
              onChange={setWalking}
              value={secondQuestion}
              id="walking"
              name="walking" />
            Walking
          </label>
          <button type="button" onClick={nextQuestion} className="button" disabled={secondQuestion === ''}>
            Next Question!
          </button>
        </form>
      </div>
    </section>

  )
}

export default SecondQuestion;