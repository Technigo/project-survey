import React from 'react'

const Dropdown = ({ questionName, questionText, optionArray, chosenValue, handleInputChange }) => {

  const onSelectChange = (event) => {
    handleInputChange(event.target.name, event.target.value)
  }

  return (
    <>
      <label className="form-label" name={questionName}>{questionText}</label>
        <select className="drop-down"
          onChange={onSelectChange}
          value={chosenValue}
        >
          {optionArray.map(option => (
            <option value={option} htmlFor={questionName}>{option}</option>
          ))}
        </select>
    </>
  )
}
export default Dropdown