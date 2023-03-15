import React from 'react'

export const Colors = ({colors, setColors }) => {
  const handleColors = (event) => {
    setColors(event.target.value)
  }
  return (
    <form>
      <select 
        onChange={handleColors}
        value={colors}>
        <option value="" disabled>Select option</option>
        <option value="red">Red</option>
        <option value="blue">Blue</option>
        <option value="orange">Orange</option>
        <option value="black">Black</option>
        <option value="random">Random mix</option>
      </select>
    </form>
  )
}