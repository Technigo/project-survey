import React, { useState } from "react";

export const Dropdown = (props) => {
  const { location, setLocation } = useState('');

  return (
      <select
        name={props.label}
        onChange={event => setLocation(event.target.value)}
        value={location}
        required
      >
        {console.log(location)}
        <option value={props.value}>{props.value1}</option>
        <option value={props.value}>{props.value2}</option>
        <option value={props.value}>{props.value3}</option>
      </select>

  );
};
