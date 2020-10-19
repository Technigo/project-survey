import React from 'react';

export const Dropdown = ({ labelText, attributeID, value, setText }) => {
  return (
    <div className="form-group form-group-dropdown">
      <label htmlFor={attributeID}>{labelText}</label>
      <select
        id={attributeID}
        name={attributeID}
        onChange={(event) => setText(event.target.value)}
        value={value}
        required>
        <option value="">Select location:</option>
        <option value="Stockholm">Stockholm</option>
        <option value="Oslo">Oslo</option>
        <option value="Helsinki">Helsinki</option>
        <option value="Copenhagen">Copenhagen</option>
      </select>
    </div>
  );
};
