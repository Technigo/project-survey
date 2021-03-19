import React from 'react'

const Checkboxes = (props) => {
  let { label, inputId, values, placeholder, onInputResponse, options } = props
  let value = values[inputId]

  return (
    <div>
      <p>{label}</p>
      {options.map((option, index) => {
        return (
          <div key={index} className="checkbox">
            <label htmlFor={option}>{option}</label>
            <input 
            type="checkbox" 
            id={inputId} 
            name={option}
            value={option}
            onChange={(e) => onInputResponse(e)}

            key={index} />
          </div>
        )
      })}
    </div>
  )
}

export default Checkboxes
