/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';

const ageChoices = ['0-19', '20-29', '30-49', '50-100']

const ThridQuestion = ({ nextQuestion, onThridQuestionChange }) => {
  const [choiceSelected, setChoiceSelected] = useState(false)
  const handleOnChange = (e) => {
    setChoiceSelected(true)
    onThridQuestionChange(e.target.value)
  }
  return (
    <section className="section">
      <div className="content-wrap">
        <h1>Age</h1>
        <p>How old are you?</p>
        <form className="form-radio-button" onSubmit={(e) => e.preventDefault()}>
          {ageChoices.map((age) => (
            <label key={age} htmlFor="choice">
              <input
                type="radio"
                value={age}
                onChange={handleOnChange}
                id="choice"
                name="choice"
                className="input-radio" />
              {age}
            </label>
          ))}
          <button type="submit" onClick={nextQuestion} className="button button-next" disabled={!choiceSelected}>
          Submit Answers!
          </button>
        </form>

      </div>

    </section>

  )
}

export default ThridQuestion;