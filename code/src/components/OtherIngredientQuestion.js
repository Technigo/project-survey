import React from 'react';
// imort Alert from './Alert'

// eslint-disable-next-line max-len
const OtherIngredientQuestion = ({ otherIngredient, onOtherIngredientChange, onStepChange, onPreviousQuestionChange, onEnter }) => {
  return (
    <div className="outer-wrapper">
      <div className="survey-container">
        <form>
          <select
            id="otherIngredient"
            value={otherIngredient}
            onChange={onOtherIngredientChange}>

            <option value="" disabled>Select an ingredient</option>
            <option value="Vegetables">Vegetables</option>
            <option value="Chicken">Chicken</option>
            <option value="Fish">Fish</option>
            <option value="Meat">Meat</option>
          </select>
          <div className="button-container">
            <button className="survey-button" type="button" onClick={onPreviousQuestionChange}>Back</button>
            <button className="survey-button" type="button" onClick={onStepChange} onKeyPress={onEnter}>Next</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default OtherIngredientQuestion;
