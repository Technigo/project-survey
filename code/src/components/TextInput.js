import React from 'react'

const TextInput = (props) => {
  const { label, inputId, values, placeholder, onInputResponse } = props
  // const value = values.[inputId]
  console.log(placeholder)
  return (
    <>
      <label className="question-text" htmlFor={inputId}>{label}</label>
      <input className="text input"
        id={inputId} 
        autoComplete="off"
        type="text" 
        placeholder={placeholder}
        value={values.[inputId]}
        onChange={(e) => onInputResponse(e)}/>
    </>
  )
}

export default TextInput

