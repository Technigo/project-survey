import React from 'react'

const TextInput = ({ questionName, questionText, chosenValue, handleInputChange }) => {

  const onValueChange = (event) => {
    handleInputChange(event.target.name, event.target.value) 
  }

  return (
    <>
      <label className="form-label" htmlFor={questionName}>{questionText}</label>
      <input className="form-text-input"
        name={questionName} 
        type="text" 
        required
        onChange={onValueChange}
        value={chosenValue}
      /> 
    </>
  )
}

export default TextInput