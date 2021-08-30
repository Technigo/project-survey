import React from 'react'

import NextButton from 'components/NextButton'

import { checkboxValues } from '../reusable/constants'

const Checkbox = ({ setIsChecked, isChecked }) => {

  const onCheckboxToggle = (checkboxValue) => {
    if (isChecked.includes(checkboxValue)){
      setIsChecked(isChecked.filter(item => item !== checkboxValue))
    } else {
      setIsChecked([checkboxValue, ...isChecked])
    }
  }
  
   return (
    <div className="question-container">
      <h1 className="question-header">Our Policy</h1>
      {checkboxValues.map((checkboxValue, index) => {
        return(
          <div key={checkboxValue} className="checkbox-container">
          <label htmlFor={checkboxValue}></label>
          <input
            id={checkboxValue}
            type="checkbox"
            checked={isChecked.includes(`${checkboxValue}`)}
            onChange={() => onCheckboxToggle(`${checkboxValue}`)}
          />
          <p>{checkboxValue[0].toUpperCase() + checkboxValue.slice(1)}</p>
        </div>
        )
      })}
      <NextButton isChecked={isChecked} />
    </div>
  )
}

export default Checkbox