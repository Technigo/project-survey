import React from "react";

const occupationGroups = ["Artist", "Curator", "Gallerist", "Art lover"];

export const RadioInput = ({ occupationGroup, onOccupationGroupInputChange, Counter }) => {

  return (
    <form className="occupation-form">
      <h3>Which of the following describes you best?</h3>
      {occupationGroups.map(group => (
        <label 
          htmlFor="occuationGroup" 
          aria-label="occupation"
          key={group}>
          <input
            type="radio"
            value={group}
            onChange={onOccupationGroupInputChange}
            checked={occupationGroup === group}
          />
          {group}
        </label>
      ))}
        <button 
        type="button"
        onClick={Counter}
        >NEXT</button>
    </form>
  )
}