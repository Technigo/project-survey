import React from "react";

const AgeGroups = ["Artist", "Curator", "Gallerist", "Art lover"];

export const QuestionFour = ({ ageGroup, onAgeGroupInputChange }) => {

  return (
    <form className="age-form" onSubmit={event => event.preventDefault()}>
      <h3>Which of the following describes you best?</h3>
      {AgeGroups.map(group => (
        <label htmlFor="ageGroup" key={group}>
          <input
            type="radio"
            value={group}
            onChange={onAgeGroupInputChange}
            checked={ageGroup === group}
          />
          {group}
        </label>
      ))}
    </form>
  )
}