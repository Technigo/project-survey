import React from 'react'

const Select = ({ label, inputId, value, values, onInputResponse, options }) => {
  return (
    <>
      <label htmlFor={inputId}>{label}</label>
      <select 
        id={inputId} 
        value={value}
        onChange={(e) => onInputResponse(e)}
        // defaultValue="Please select your age"
        >
        <option value="" disabled hidden>Please select your age</option> 
        {options.map(option => <option key={option} value={option}>{option}</option>)}
      </select>
    </>
  )
}

export default Select

