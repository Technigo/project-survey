import React, { useState } from 'react'

// Do I need a separate mapping for radio options & radio labels?

export const Input3 = (props) => {

  const [radioValue, setRadioValue] = useState()
  console.log({radioValue})
  return (
    <div>
      <h3>
        {props.question}
      </h3>

      <div>
        {props.options.map((option) => {
          return (
            <div key={option}>
              <label>
                {option}
                  <input 
                    id="{option}" 
                    type={props.type}
                    value={option}
                    onChange={event => setRadioValue(event.target.value)}
                    checked={radioValue === option}
                  />
              </label>              
            </div>
          )
        })}
      </div>
    </div>
  )
}