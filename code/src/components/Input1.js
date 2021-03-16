import React, { useState } from 'react'

export const Input1 = (props) => {
  const [name, setName] = useState('')
  console.log({name})
  return (
    <div>
      <h3>
        {props.question}
      </h3>
      <input 
        type={props.type}
        onChange={(event) => setName(event.target.value)}
        value={name}
      >
      </input>
    </div>
  )
}