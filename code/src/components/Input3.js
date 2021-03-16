import React from 'react'

// Do I need a separate mapping for radio options & radio labels?

export const Input3 = (props) => {
  return (
    <div>
      <h3>
        {props.question}
      </h3>

      <div>
        {props.options.map((option) => {
          return (
            <div key={option}>
              <label 
                htmlFor="{option}"
              >
                {option}
              </label>
              <input 
                id="{option}" 
                type="radio"
              >
              </input>
            </div>
          )
        })}
      </div>
    </div>
  )
}