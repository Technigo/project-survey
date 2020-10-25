import React from "react";

const SelectPage = ({ setLocation, location }) => {
  return (
    <div>
      <h2>What ticket do you want?</h2>
      <select
        onChange={(event) => setLocation(event.target.value)}
        value={location}
      >
        <option value="">Select a pass:</option>
        <option value="gold">Gold pass</option>
        <option value="silver">Silver pass</option>
        <option value="platinum">Platinum pass</option>
      </select>
    </div>
  );
};

export default SelectPage;
