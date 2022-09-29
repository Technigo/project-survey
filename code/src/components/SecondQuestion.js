/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/self-closing-comp */
import React, { useState } from 'react';

const SecondQuestion = ({ nextQuestion }) => {
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
              id="bus"
              name="bus"
              className="input-checkbox" />
            Bus
          </label>
          <label htmlFor="bike">
            <input
              type="checkbox"
              checked={bike}
              onChange={setBike}
              id="bike"
              name="bike"
              className="input-checkbox" />
            Bike
          </label>
          <label htmlFor="walking">
            <input
              type="checkbox"
              checked={walking}
              onChange={setWalking}
              id="walking"
              name="walking"
              className="input-checkbox" />
            Walking
          </label>
          <button type="button" onClick={nextQuestion} className="button button-next">
            Next Question!
          </button>
        </form>
      </div>
    </section>

  )
}

export default SecondQuestion;