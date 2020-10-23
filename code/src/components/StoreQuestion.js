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
          <option value="">* Select where you buy cheese *</option>
          <option value="at a local cheese store.">At a local cheese store.</option>
          <option value="at a coventional food store.">At a coventional food store.</option>
          <option value="somewhere else!">somewhere else!</option>
        </select>
      </div>
    </label>
  );
};

