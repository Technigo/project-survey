import React, { useState } from "react";

export const Dropdown = (props) => {
  const [Location, setLocation] = useState("");

  return (
      <select
        name={props.label}
        onChange={(event) => setLocation(event.target.value)}
        value={Location}
        required
      >
        <option value={props.value}>{props.value1}</option>
        <option value={props.value}>{props.value2}</option>
        <option value={props.value}>{props.value3}</option>
      </select>

  );
};
