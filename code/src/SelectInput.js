import React from 'react'

export const SelectInput = ({ selections, input, setFunction }) => {

  return (
    <label>
      <select
        onChange={event => setFunction(event.target.value)}
        value={input}
        required
      >

        {selections.map(alt => (
          <option key={alt} value={alt}>{alt}</option>
        ))}

      </select>
    </label>
  )
}
