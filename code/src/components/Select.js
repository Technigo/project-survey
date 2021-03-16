import React from 'react'

const Select = (props) => {
  let { label, inputId, values, handleResponse, options } = props
  return (
    <>
      <label htmlFor={inputId}>{label}</label>
      <select 
        id={inputId} 
        value={values.[inputId]}
        onChange={handleResponse(inputId)}>
        {options.map(option => <option value={option}>{option}</option>)}
      </select>
    </>
  )
}

export default Select

