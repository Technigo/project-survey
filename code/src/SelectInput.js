import React from 'react'
import './selectInput.css'

export const SelectInput = ({ selections, input, setFunction }) => {

  return (
    <label>
      <select
        onChange={event => setFunction(event.target.value)}
        value={input}
        required
        className="select-css"
      >

        {selections.map(alt => (
          <option key={alt} value={alt}>{alt}</option>
        ))}

      </select>
    </label>
  )
}
