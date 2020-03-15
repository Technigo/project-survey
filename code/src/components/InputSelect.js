import React from 'react'

export const InputSelect = (props) => {
  const { location, setLocation } = props

  return (
    <select
      onChange={event => setLocation(event.target.value)}
      value={location}
    >
      <option value="">Select</option>
      <option value="lemon">Lemon</option>
      <option value="vanilla">Vanilla</option>
      <option value="butter">Butter</option>
    </select>
  )
}