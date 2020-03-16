import React from 'react'
import "./select.css"

export const Select = props => {
  const { vacation, setVacation } = props
  return (
    <select
      onChange={event => setVacation(event.target.value)}
      value={vacation}
      required
    >
      <option value="">Select your dream vacation:</option>
      <option value="visiting New York City">visiting New York City</option>
      <option value="sun bathing on a tropical island">sun bathing on a tropical island</option>
      <option value="relaxing in a cottage">relaxing in a cottage</option>
      <option value="sailing around the world">sailing around the world</option>
    </select>
  )
}