import React from "react";

const Dropdown = ({ onChange, value }) => {
  const onSeasonChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <div>
      <label htmlFor="option">Select something</label>
      <select id="season" onChange={onSeasonChange} value={value}>
        <option disabled></option>
        <option value="Winter">Winter</option>
        <option value="Spring">Spring</option>
        <option value="Fall">fall</option>
        <option value="Fall">summer</option>
      </select>
    </div>
  );
};

export default Dropdown;
