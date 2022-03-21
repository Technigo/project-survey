import React from "react";

const MemberConfimation = ["Yes", "No"]

export const CheckboxInput = ({ membership, onMembershipInputChange, Counter}) => {

  return (
    <form className="member-form">
      <h3>Are you already a member of our art assocation <span className="highlight">Art Emergence?</span></h3>
      {MemberConfimation.map(answer => (
        <label 
          htmlFor="membership" 
          aria-label="membership"
          key={answer}>
          <input
          type="checkbox"
          required
          value={answer}
          checked={membership === answer}
          onChange={onMembershipInputChange}
          />
          {answer}
        </label>
      ))}
        <button 
        type="button"
        onClick={Counter}
        >NEXT</button>
    </form>
  )
}