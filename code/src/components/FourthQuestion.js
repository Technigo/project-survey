import React from 'react'

const checkboxGroupArray = [
  'bleeding gums',
  'trauma',
  'dental anxiety',
  'tooth ache'
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
        <button type="button" className="glow-on-hover" onClick={onPreviousQuestionChange}>
          PREVIOUS
        </button>
        <button type="button" className="glow-on-hover" onClick={onNextQuestionChange}>
          CONTINUE
        </button>
      </div>
    </form>
  )
}
export default FourthQuestion