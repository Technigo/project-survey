import React from 'react';

const DropDown = ({ location, onLocationChange }) => {
  return (
    <section className="dropdown">
      <label htmlFor="location">
        <h2 className="label">1 - Where are you located?</h2>
      </label>
      <select className="dropdown-options" id="location" value={location} onChange={onLocationChange}>
        <option value="">Select a location</option>
        <option value="stockholm">Stockholm</option>
        <option value="uppsala">Uppsala</option>
        <option value="gothenburg">Gothenburg</option>
        <option value="abroad">Abroad</option>
      </select>
    </section>
  )
}

export default DropDown;