import React from 'react'

const Select = ({ label, inputId, values, onInputResponse, options }) => {
  return (
    <>
      <label htmlFor={inputId}>{label}</label>
      <select 
        id={inputId} 
        value={values.[inputId]}
        onChange={(e) => onInputResponse(e)}>
        {options.map(option => <option key={option} value={option}>{option}</option>)}
      </select>
    </>
  )
}

export default Select

