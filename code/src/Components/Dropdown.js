import React from "react";

const Dropdown = ({ onChange, value }) => {
  const onSeasonChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <div>
      <label htmlFor="evaluation"></label>
      <select 
        className="dropdown-select"
        id="evaluation" 
        onChange={onSeasonChange} 
        value={value}>
        <option value="" disabled>Select here</option>
        <option value="super happy">Super happy</option>
        <option value="extreamly happy">Extreamly happy</option>
        <option value="quite happy">Quite happy</option>
      </select>
    </div>
  );
};

export default Dropdown;
