import React from 'react'

export const Input2 = (props) => {
  return (
    <div>
      <div>
      <h3>
        {props.question}
      </h3>
      </div>       
      <select>
        {props.options.map((option) => {
          return (
            <option 
              key={option}>
               {option}
            </option>
          )
        })
      }
      </select>
    </div>
  )
}