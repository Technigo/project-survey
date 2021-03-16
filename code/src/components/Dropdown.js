import React, { useState } from 'react'

const Dropdown = () => {
  
  const [color, setColor] = useState('')

  return (
    <>
    <form>
      <label>Please select your favourite color
        <select
          onChange={event => setColor(event.target.value)}
          value={color}
        >
          <option value="pink">Pink</option>
          <option value="purple">Purple</option>
          <option value="blue">Blue</option>
          <option value="yellow">Yellow</option>
        </select>
      </label>
    </form>
    </>
  )
}

export default Dropdown