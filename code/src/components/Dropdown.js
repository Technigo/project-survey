import React from 'react'

const Dropdown = ({ questionName, questionText, optionArray, chosenValue, handleInputChange }) => {

  const onSelectChange = (event) => {
    console.log(event.target.name)
    handleInputChange(event.target.name, event.target.value)
  }

  return (
    <>
      <label htmlFor={chosenValue} className="form-label" >{questionText}</label>
        <select className="drop-down"
          name={questionName}
          onChange={onSelectChange}
          value={chosenValue}
        >
          {optionArray.map(option => (
            <option key={option} 
              value={option} 
              >
              {option}
            </option>
          ))}
        </select>
    </>
  )
}
export default Dropdown