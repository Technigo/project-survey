import React from 'react';

const DropDown = ({ location, onLocationChange }) => {
  return (
    <section className="dropdown">
      <h2 className="label" id="dropdown-label">Where are you located?</h2>
      <select tabIndex="0" aria-labelledby="dropdown-label" className="dropdown-options" id="location" value={location} onChange={onLocationChange}>
        <option value="">Select a location</option>
        <option value="Stockholm county">Stockholm county</option>
        <option value="Uppsala county">Uppsala county</option>
        <option value="Somewhere else in Sweden">Somewhere else in Sweden</option>
        <option value="Somewhere else in Europe">Somewhere else in Europe</option>
        <option value="Somewhere else in the world">Somewhere else in the world</option>
      </select>
    </section>
  )
}

export default DropDown;