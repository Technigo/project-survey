/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react'

const Dropdown = ({ dropdown, onDropdownChange }) => {
  return (
    <div className="musicDropdown" type="dropdown">

                Where do you prefer to listen to music:
      {/* <select value={dropdown} onChange={onDropdownChange}> */}
      <select value={dropdown} onChange={onDropdownChange}>
        <option disabled value="">
          Choose an option
        </option>
        <option>Home</option>
        <option>Live</option>
        <option>Workout</option>
        <option>Party</option>
        <option>In the car</option>
      </select>
    </div>
  )
}

export default Dropdown;