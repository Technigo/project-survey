import React, { useState } from 'react'

export const Dropdown = () => {
  const [color, setColor] = useState('')

  return (
    <form>
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
    </form>
  )
}