import React from 'react'

export const ColorEntry = ({color, setColor}) => {
  return (
    <label>
      <select
        onChange={event => setColor(event.target.value)}
        value={color}
      >
        <option value=''>Select Color</option>
        <option value="blue">Blue</option>
        <option value='red'>Red</option>
        <option value='yellow'>Yellow</option>
        <option value='green'>Green</option>
      </select>
    </label>
  )
}

