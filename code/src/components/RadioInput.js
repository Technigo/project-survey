import React from 'react'
import './radioInput.css'

export const RadioInput = ({ text, radioAlt, input, setFunction }) => {

  return (
    <div>
      <h2>{text}</h2>
      {radioAlt.map(group => (
        <label className="radioContainer" key={group}>
          <input
            type="radio"
            name={text}
            value={group}
            onChange={event => setFunction(event.target.value)}
            checked={input === group}
            required
          />
          <span className="checkmark"></span>
          {group}
        </label>
      ))}
    </div>
  )
}
