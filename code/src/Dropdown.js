import React, { useState } from "react";


export const Dropdown = () => {
  const [location, setLocation] = useState("");

  return (
    <form>
      <select
        onChange={event => setLocation(event.target.value)}
        value={location}
      >
        <option value="">Select location: </option>
        <option value="stockholm">Stockholm </option>
        <option value="barcelona">Barcelona </option>
        <option value="oslo">Oslo </option>
      </select>
    </form>
  );
};

