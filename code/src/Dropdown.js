import React from "react"

export const Dropdown = (props) => {
  const { location, setLocation } = props;

  return (
      <select
        name={props.label}
        onChange={event => setLocation(event.target.value)}
        value={location}
        required
      >
        <option value="stockholm">Stockholm</option>
        <option value="göteborg">Göteborg</option>
        <option value="malmö">Malmö</option>
      </select>

  );
};
