import React from 'react'
import '../index.css';

export const Colors = ({ colors, setColors }) => {
  const handleColors = (event) => {
    setColors(event.target.value)
  }
  return (
    <div className="color-container">
      <p>What color of shrimp would you like?</p>
      <form>
        <select
          onChange={handleColors}
          value={colors}>
          <option value="" disabled>Select option</option>
          <option value="red" img="red">Crystal red</option>
          <option value="blue">Blue</option>
          <option value="zebra">Zebra</option>
          <option value="orange">Orange</option>
          <option value="random">Random mix</option>
        </select>
      </form>
    </div>
  )
}