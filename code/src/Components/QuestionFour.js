import React from "react";

const AgeGroups = ["Art student", "Artist", "Curator", "Other"];

export const QuestionFour = ({ ageGroup, onAgeGroupInputChange }) => {

  return (
    <form className="age-form" onSubmit={event => event.preventDefault()}>
      What is your occupatoion?
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