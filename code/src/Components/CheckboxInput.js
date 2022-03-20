import React from "react";

const MemberConfimation = ["Yes", "No"]

export const CheckboxInput = ({ membership, onMembershipInputChange}) => {

  return (
    <form className="member-form" onSubmit={event => event.preventDefault()}>
      <h3>Are you already a member of our art assocation <span className="highlight">Art Emergence?</span></h3>
      {MemberConfimation.map(answer => (
        <label 
          htmlFor="membership" 
          aria-label="membership"
          key={answer}>
          <input
          type="checkbox"
          value={answer}
          aria-pressed ="false"
          checked={membership === answer}
          onChange={onMembershipInputChange}
          />
          {answer}
        </label>
      ))}
    </form>
  )
}