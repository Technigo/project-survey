import React from 'react'

const RadioButtons = (props) => {
  let { label, inputId, values, onInputResponse, options } = props
  let value = values[inputId]
console.log(values)
  return (
    <div>
      <p>{label}</p>
      {options.map((option, index) => {
        return (
          <div key={index} className="radiobuttons">
            <label htmlFor={option}>{option}</label>
            <input 
            type="radio" 
            defaultChecked={value === option}
            id={option} 
            name={inputId}
            value={value}
            onChange={(e) => onInputResponse(e.target.name, e.target.id, e.target.type)}
            key={index} />
          </div>
        )
      })}
    </div>
  )
}

export default RadioButtons
