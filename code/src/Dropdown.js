import React from "react"

export const Dropdown = ({ location, setLocation, label }) => {
 

  return (
      <div className="dropdown-field">
        <label htmlFor="location">
        <h1 className="typewriter">Where do you live?</h1>
        </label>
      <select
        name={label}
        onChange={event => setLocation(event.target.value)}
        value={location}
        required
      >
        <option value="stockholm">Stockholm</option>
        <option value="göteborg">Gothenburg</option>
        <option value="malmö">Malmo</option>
      </select>
      </div>
  );
};
