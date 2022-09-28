import React from 'react'

const checkboxGroupArray = [
  'bleeding gums',
  'calculus',
  'dry mouth',
  'tooth ache',
  'bad breath',
  'plaque & bacteria',
  'ache in gumline'
]

const FourthQuestion = ({
  onChangeFunction,
  checkboxGroup,
  onPreviousQuestionChange,
  onNextQuestionChange
}) => {
  return (
    <form>
      <div className="question">
        <p className="question-title">Do you have any issues?</p>
        <p>Check the boxes that apply</p>
      </div>

      {checkboxGroupArray.map((box) => (
        <label htmlFor={box} className="checkbox-label-wrap" key={box}>
          <input
            type="checkbox"
            id={box}
            onChange={() => onChangeFunction(box)}
            checked={checkboxGroup.includes(box)}
            className="checkbox-group" />
          <p className="option-checkbox">{box}</p>
        </label>
      ))}

      <div className="button-container">
        <button type="button" className="back" onClick={onPreviousQuestionChange}>
          BACK
        </button>
        <button type="button" className="forward" onClick={onNextQuestionChange}>
          FORWARD
        </button>
      </div>
    </form>
  )
}
export default FourthQuestion