import React, { useState } from "react";

export const CompanyLocation = props => {
  const [location, setLocation] = useState();
  return (
    <form>
      Where is your compnay located?
      <select
        onChange={event => setLocation(event.target.value)}
        value={location}
      >
        <option value="">Select location</option>
        <option value="City">City</option>
        <option value="Norrmalm">Norrmalm</option>
        <option value="Södermalm">Södermalm</option>
        <option value="Östermalm">Östermalm</option>
        <option value="Outside Stockholm">Outside Stockholm</option>
      </select>
      <h2>{location}</h2>
    </form>
  );
};
