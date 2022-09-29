/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';

const greenClosets = ['Second Hand Stores', 'Fast Fashion Stores']

const ThridQuestion = ({ nextQuestion, onThridQuestionChange }) => {
  const [choiceSelected, setChoiceSelected] = useState(false)
  const handleOnChange = (e) => {
    setChoiceSelected(true)
    onThridQuestionChange(e.target.value)
  }
  return (
    <section className="section">
      <div className="content-wrap">
        <h1>Green your closet</h1>
        <p>In what kind of stores do you usually buy your clothes and accessories?</p>
        <form className="form-radio-button" onSubmit={(e) => e.preventDefault()}>
          {greenClosets.map((clothes) => (
            <label key={clothes} htmlFor="green">
              <input
                type="radio"
                value={clothes}
                onChange={handleOnChange}
                id="green"
                name="green"
                className="input-radio" />
              {clothes}
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