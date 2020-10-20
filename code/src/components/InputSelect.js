import React from 'react'
import './InputSelect.css'

export const InputSelect = ({ id, question, setSeason, value }) => {

  return (
    <>
      <label htmlFor={id}>
        <h2>{question}</h2>
        <select
          onChange={(event) => setSeason(event.target.value)}
          id={id}
          value={value}
          key={value.id}
          className="select-container"
        >
          <option value="Season">Favorite season?</option>
          <option value="Autum">Autum</option>
          <option value="Spring">Spring</option>
          <option value="Summer">Summer</option>
          <option value="Winter">Winter</option>
        </select>
      </label>
    </>
  )
}