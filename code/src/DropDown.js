import React from 'react';

const DropDown = ({ location, onLocationChange }) => {
  return (
    <section className="dropdown">
      <label htmlFor="location">
        <h2 className="label">1 - Where are you located?</h2>
      </label>
      <select tabIndex="0" className="dropdown-options" id="location" value={location} onChange={onLocationChange}>
        <option value="">Select a location</option>
        <option value="Stockholm">Stockholm</option>
        <option value="Uppsala">Uppsala</option>
        <option value="Gothenburg">Gothenburg</option>
        <option value="Abroad">Abroad</option>
      </select>
    </section>
  )
}

export default DropDown;