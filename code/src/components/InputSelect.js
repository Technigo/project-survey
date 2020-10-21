import React from 'react'
import './InputSelect.css'

export const InputSelect = ({ id, question, setSeason, value }) => {

  return (
    <>
      <label htmlFor={id}>
        <h2>{question}</h2>
        <select
          // id={id}
          value={value}
          // key={value.id}
          className="select-container"
          onChange={(event) => setSeason(event.target.value)}
        >
          <option value="Season">Favourite season?</option>
          <option value="Autumn">Autumn</option>
          <option value="Spring">Spring</option>
          <option value="Summer">Summer</option>
          <option value="Winter">Winter</option>
        </select>
      </label>
    </>
  )
}