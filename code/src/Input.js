import React from 'react'

export const Input = (props) =>  (
  
  <div className="thought">
    <label>
      {props.label}
      <input
        type="text"
        value={props.value}
        onChange={(event) => props.setValue(event.target.value)} />
    </label>
  </div>

)