import React from 'react'

export const SelectInput = ({ location, setLocation }) => {


  return (
    <label>
      <select
        onChange={event => setLocation(event.target.value)}
        value={location}
      >
        <option value="">Select location:</option>
        <option value="stockholm">Stockholm</option>
        <option value="oslo">Oslo</option>
        <option value="london">London</option>

      </select>
    </label>
  )
}
