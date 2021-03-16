import React, { useState } from 'react'

export const Input2 = (props) => {
  const [optionselected, setOption] = useState("")
  console.log({optionselected})
  return (
    <div>
      <div>
      <h3>
        {props.question}
      </h3>
      </div>       
      <select 
        type={props.type}
        onChange={event => setOption(event.target.value)}
        value={optionselected}
      >
        {props.options.map((option) => {
          return (
            <option 
              key={option}
              value={option}
            >
               {option}
            </option>
          )
        })
      }
      </select>
    </div>
  )
}