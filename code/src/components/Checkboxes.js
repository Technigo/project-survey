import React from 'react'

const Checkboxes = (props) => {
  let { label, inputId, values, onInputResponse, options } = props
  let value = values[inputId]
console.log(value)
  return (
    <div>
      <p>{label}</p>
      {options.map((option, index) => {
        return (
          <div key={index} className="checkbox">
            <label htmlFor={option}>{option}</label>
            <input 
            // {value.includes(option) ? }
            type="checkbox" 
            defaultChecked={value.includes(option)}
            // {value.includes(option) ? return (checked)}
            id={inputId} 
            name={option}
            value={value}
            onChange={(e) => onInputResponse(e.target.id, e.target.name, e.target.type)}

            key={index} />
          </div>
        )
      })}
    </div>
  )
}

export default Checkboxes
