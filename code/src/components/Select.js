import React from 'react'

const Select = ( props ) => {
  let { label, inputId, values, placeholder, onInputResponse, options } = props
  let value = values[inputId]
  return (
    <>
      <label htmlFor={inputId}>{label}</label>
      <select 
        className="input select"
        required
        id={inputId} 
        value={value}
        onChange={(e) => onInputResponse(e)}
        // defaultValue="Please select your age"
        >
        <option hidden >{placeholder}</option> 
        {options.map(option => <option key={option} value={option}>{option}</option>)}
      </select>
    </>
  )
}

export default Select

