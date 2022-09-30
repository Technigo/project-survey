/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import React from 'react';

// eslint-disable-next-line max-len
const OtherIngredientQuestion = ({ otherIngredient, sortOfPasta, onOtherIngredientChange, onStepChange, onPreviousQuestionChange, onEnter }) => {
  return (
    <div className="survey-container">
      <form className="form-question">
        <label tabIndex="0" className="label-text" htmlFor="otherIngredient">
            What would you like to add to the {sortOfPasta}
        </label>
        <select
          id={otherIngredient}
          value={otherIngredient}
          onChange={onOtherIngredientChange}
          required
          onKeyPress={onEnter}>

          <option value="" disabled>Choose here:</option>
          <option value="Vegetables">Vegetables</option>
          <option value="Chicken">Chicken</option>
          <option value="Fish">Fish</option>
          <option value="Meat">Meat</option>
          <option value="Sauce">Sauce</option>
          <option value="Nothing">Nothing</option>
        </select>

        <div className="button-container">
          <button className="survey-button" type="button" onClick={onPreviousQuestionChange}>Back</button>
          <button className="survey-button" type="button" onClick={onStepChange}>Next</button>
        </div>
      </form>
    </div>
  )
}

export default OtherIngredientQuestion;
