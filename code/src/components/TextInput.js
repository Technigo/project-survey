import React from 'react'

const TextInput = ({ label, inputId, values, onInputResponse }) => {
  return (
    <>
      <label htmlFor={inputId}>{label}</label>
      <input 
        id={inputId} 
        type="text" 
        value={values.[inputId]}
        onChange={(e) => onInputResponse(e)}/>
    </>
  )
}

export default TextInput

