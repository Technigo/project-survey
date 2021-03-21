import React from 'react'

const Select = ( props ) => {
  let { label, inputId, values, placeholder, onInputResponse, options } = props
  let value = values[inputId]
  return (
    <div className="question select">
      <label className="question-text" htmlFor={inputId}>{label}</label>
      <select 
        className="input select"
        required
        type="select"
        id={inputId} 
        value={value}
        onChange={(e) => onInputResponse(e.target.id, e.target.value, e.target.type)}
        >
        <option hidden >{placeholder}</option> 
        {options.map(option => <option key={option} value={option}>{option}</option>)}
      </select>
    </div>
  )
}

export default Select

