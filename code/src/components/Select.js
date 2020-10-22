import React from "react";

const Select = ({ setLocation, location }) => {
  return (
    <div>
      <h2>What ticket do you want?</h2>
      <select
        onChange={(event) => setLocation(event.target.value)}
        value={location}
      >
        <option value="">Select location:</option>
        <option value="stockholm">Stockholm</option>
        <option value="barcelona">Barcelona</option>
        <option value="oslo">Oslo</option>
      </select>
    </div>
  );
};

export default Select;
