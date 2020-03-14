import React, { useState } from 'react';


export const Dropdown = () => {
  const [location, setLocation] = useState("");
  return (
    <form>
      <select
        onChange={event => setLocation(event.target.value)}
        value={location}
      >
        <option value="">How do you want to work?"></option>
        <option value="office">At the office</option>
        <option value="remote">Remote</option>
        <option value="mixed">Both remote and at the office</option>


      </select>

    </form>
  );
};