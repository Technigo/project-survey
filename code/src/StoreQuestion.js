import React from "react";

export const StoreQuestion = ({ whereBuy, onWhereBuyChange}) => {
  return (
    <label>
      <h2>Where do you buy cheese?</h2>
      <div className="drop-down">
        <select
          onChange={(event) => onWhereBuyChange(event.target.value)}
          value={whereBuy}
          required
        >
          <option value="">* Select where you buy your cheese *</option>
          <option value="1">At a local cheese store.</option>
          <option value="2">At a coventional food store.</option>
          <option value="3">I never buy cheese.</option>
        </select>
      </div>
    </label>
  );
};

