import React from 'react'

const TextInput = (props) => {
  const { label, inputId, values, placeholder, onInputResponse } = props
  console.log(values)
  console.log(inputId)
  return (
    <>
      <label className="question-text" htmlFor={inputId}>{label}</label>
      <input className="input text"
        id={inputId} 
        spellCheck="false"
        autoComplete="off"
        type="text" 
        placeholder={placeholder}
        value={values[inputId]}
        onChange={(e) => onInputResponse(e.target.id, e.target.value, e.target.type)}
        />
    </>
  )
}

export default TextInput

