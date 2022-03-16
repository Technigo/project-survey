import React from "react";

const AgeGroups = ["0-18", "19-30", "30+"];

export const QuestionFour = ({ ageGroup, onAgeGroupInputChange }) => {

  return (
    <form onSubmit={event => event.preventDefault()}>
      Your Age:
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