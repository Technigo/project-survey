import React from 'react'

export const InputRange = ({ id, question, value, setValue }) => {
  return (
    <label htmlFor={id}>
      <h2>{question}</h2>
      <input
        type="range"
        min='1'
        max='10'
        id={id}
        key={value.id}
        value={value}
        className="input-range-container"
        onChange={event => setValue(event.target.value)}

      />
    </label>
  )
}