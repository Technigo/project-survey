import React from 'react'

const TextInput = (props) => {
  let { label, inputId, values, handleResponse } = props
  return (
    <>
      <label htmlFor={inputId}>{label}</label>
      <input 
        id={inputId} 
        type="text" 
        value={values.[inputId]}
        onChange={handleResponse(inputId)}/>
    </>
  )
}

export default TextInput

