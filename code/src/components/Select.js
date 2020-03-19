import React from 'react'
import './select.css'

export const Select = ({ id, question, state, setState, array }) => {
  return (
    <label htmlFor={id}>
      <h2>{question}</h2>
      <div className="drop-down">
        <select
          id={id}
          value={state}
          onChange={(event) => setState(event.target.value)}>
          <option value="">select</option>
          {array.map((item) => (
            <option key={item} value={item}>{item}</option>
          ))}
        </select>
      </div>
    </label>
  )
}