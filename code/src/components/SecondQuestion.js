/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/self-closing-comp */
import React, { useState } from 'react';

const SecondQuestion = ({ nextQuestion, onSecondQuestionChange }) => {
  const [electricityChoices, setElectricityChoices] = useState([])

  const handleElectricityChoicesChanged = (e, electricityChoice) => {
    if (e.target.checked) {
      setElectricityChoices([...electricityChoices, electricityChoice])
    } else {
      setElectricityChoices(electricityChoices.filter((item) => electricityChoice !== item))
    }
  }

  const handleOvenInputChanged = (e) => {
    handleElectricityChoicesChanged(e, 'oven')
  }

  const handleTelevisionInputChanged = (e) => {
    handleElectricityChoicesChanged(e, 'television')
  }

  const handleComputerInputChanged = (e) => {
    handleElectricityChoicesChanged(e, 'computer')
  }

  const handleOnClick = () => {
    onSecondQuestionChange(electricityChoices)
    nextQuestion()
  }
  return (
    <section className="section">
      <div className="content-wrap">
        <h1>Electricity consumption</h1>
        <p>What are your 2 favourite electricity products?</p>
        <p>Choose two options! ⚠️</p>
        <form className="form-checkbox">
          <label htmlFor="oven">
            <input
              type="checkbox"
              onChange={handleOvenInputChanged}
              id="oven"
              name="oven"
              className="input-checkbox" />
            Oven
          </label>
          <label htmlFor="television">
            <input
              type="checkbox"
              onChange={handleTelevisionInputChanged}
              id="television"
              name="television"
              className="input-checkbox" />
            Television
          </label>
          <label htmlFor="computer">
            <input
              type="checkbox"
              onChange={handleComputerInputChanged}
              id="computer"
              name="computer"
              className="input-checkbox" />
            Computer
          </label>
          <button type="button" onClick={handleOnClick} className="button button-next">
            Next question!
          </button>
        </form>
      </div>
    </section>

  )
}

export default SecondQuestion;