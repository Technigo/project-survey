import React from 'react'

const RadioButtons = (props) => {
  let { label, inputId, values, onInputResponse, options } = props
  let value = values[inputId]
  return (
    <div className="question radio">
      <p className="question-text">{label}</p>
      {options.map((option, index) => {
        return (
          <div key={index} className="radiobuttons">
            <input 
            type="radio" 
            className="actual-button"
            defaultChecked={value === option}
            id={option} 
            name={inputId}
            value={value}
            onChange={(e) => onInputResponse(e.target.name, e.target.id, e.target.type)}
            key={index} />
            <label htmlFor={option}>{option}</label>
          </div>
        )
      })}
    </div>
  )
}

export default RadioButtons
