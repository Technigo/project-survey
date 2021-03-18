import React from 'react'

const TextInput = ({ label, inputId, value, onInputResponse }) => {
  // const value = values.value
  return (
    <>
      <label htmlFor={inputId}>{label}</label>
      <input 
        id={inputId} 
        type="text" 
        value={value}
        onChange={(e) => onInputResponse(e)}/>
    </>
  )
}

export default TextInput

