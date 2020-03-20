import React from 'react'

export const ColorQuestion = (props) => {
  const { color, setColor } = props
  return (
    <label>
      What's your favorite color?
      <select
        onChange={event => setColor(event.target.value)}
        value={color}
      >
        <option value="default">select option</option>
        <option value="red">Red</option>
        <option value="orange">Orange</option>
        <option value="yellow">Yellow</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
        <option value="navy">Navy</option>
        <option value="purple">Purple</option>
      </select>
    </label>
  )
}