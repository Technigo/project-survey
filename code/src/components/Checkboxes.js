import React from 'react'

const Checkboxes = (props) => {
  let { label, inputId, values, onInputResponse, options } = props
  let value = values[inputId]
  return (
    <div className="question checkboxes">
      <p className="question-text">{label}</p>
      {options.map((option, index) => {
        return (
          <div key={index} className="checkbox">
            <label>
            <input 
            className="check"
            type="checkbox" 
            defaultChecked={value.includes(option)}
            id={inputId} 
            name={option}
            value={value}
            onChange={(e) => onInputResponse(e.target.id, e.target.name, e.target.type)}
            key={index}></input>
            {option}</label>
          </div>
        )
      })}
    </div>
  )
}

export default Checkboxes
