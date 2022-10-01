/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/self-closing-comp */
import React, { useState } from 'react';

const SecondQuestion = ({ nextQuestion, onSecondQuestionChange }) => {
  const [transportChoices, setTransportChoices] = useState([])

  const handleTransportChoicesChanged = (e, transportChoice) => {
    if (e.target.checked) {
      setTransportChoices([...transportChoices, transportChoice])
    } else {
      setTransportChoices(transportChoices.filter((item) => transportChoice !== item))
    }
  }

  const handleBusInputChanged = (e) => {
    handleTransportChoicesChanged(e, 'bus')
  }

  const handleBikeInputChanged = (e) => {
    handleTransportChoicesChanged(e, 'bike')
  }

  const handleWalkingInputChanged = (e) => {
    handleTransportChoicesChanged(e, 'walking')
  }

  const handleOnClick = () => {
    onSecondQuestionChange(transportChoices) // Fix me!
    nextQuestion()
  }
  return (
    <section className="section">
      <div className="content-wrap">
        <h1>Travel Sustainably</h1>
        <p>What is your most chosen transport?</p>
        <p>Just choose two options! ⚠️</p>
        <form className="form-checkbox">
          <label htmlFor="bus">
            <input
              type="checkbox"
              onChange={handleBusInputChanged}
              id="bus"
              name="bus"
              className="input-checkbox" />
            Bus
          </label>
          <label htmlFor="bike">
            <input
              type="checkbox"
              onChange={handleBikeInputChanged}
              id="bike"
              name="bike"
              className="input-checkbox" />
            Bike
          </label>
          <label htmlFor="walking">
            <input
              type="checkbox"
              onChange={handleWalkingInputChanged}
              id="walking"
              name="walking"
              className="input-checkbox" />
            Walking
          </label>
          <button type="button" onClick={handleOnClick} className="button button-next">
            Next Question!
          </button>
        </form>
      </div>
    </section>

  )
}

export default SecondQuestion;