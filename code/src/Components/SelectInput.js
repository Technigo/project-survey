import React from "react";

export const SelectInput = ({ location, onLocationInputChange, Counter }) => {

  return (
    <form>
      <h3>Which of our offices is closest to you?</h3>
      <select
        onChange={onLocationInputChange}
        value={location}
      >
        <option value="">Pick one... </option>
        <option value="Stockholm">Stockholm office</option>
        <option value="Malmö">Malmö office</option>
        <option value="Göteborg">Göteborg office</option>
      </select>
      <button 
        type="button"
        onClick={Counter}
        >NEXT</button>
    </form>
  )
}