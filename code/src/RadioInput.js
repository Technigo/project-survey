import React from 'react'

export const RadioInput = ({ text, radioAlt, input, setFunction }) => {

  return (
    <>
      {text}
      {radioAlt.map(group => (
        <label key={group}>
          <input
            type="radio"
            name="age"
            value={group}
            onChange={event => setFunction(event.target.value)}
            checked={input === group}
            required
          />
          {group}
        </label>
      ))}

    </>
  )
}
