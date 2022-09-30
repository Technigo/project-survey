import React from 'react'
import ProgressBar from './ProgressBar';

const barData = [
  { bgcolor: '#b62e88', completed: 55 }
];

const checkboxGroupArray = [
  ' bleeding gums ',
  ' calculus  ',
  ' dry mouth  ',
  ' tooth ache  ',
  ' bad breath  ',
  ' plaque & bacteria  ',
  ' dental anxiety/ fear of dentists ',
  ' ache in gumline  '
]

const FourthQuestion = ({
  onChangeFunction,
  checkboxGroup,
  onPreviousQuestionChange,
  onNextQuestionChange
}) => {
  return (
    <form className="question-wrap">
      <div className="progressbar">
        {barData.map((item, idx) => (
          <ProgressBar key={idx} bgcolor={item.bgcolor} completed={item.completed} />
        ))}
      </div>
      <div className="question">
        <p className="question-title">Do you have any issues?</p>
        <p className="question-specify">Check the boxes that apply</p>
      </div>

      {checkboxGroupArray.map((box) => (
        <label htmlFor={box} className="checkbox-label" key={box}>
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
        NEXT
        </button>
      </div>
    </form>
  )
}
export default FourthQuestion