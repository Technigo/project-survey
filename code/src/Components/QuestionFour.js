import React, { useState } from "react";

const AgeGroups = ["0-18", "19-30", "30+"];

export const QuestionFour = () => {
  const [ageGroup, SetAgeGroup] = useState();

  return (
    <form onSubmit={event => event.preventDefault()}>
      Your Age:
      {AgeGroups.map(group => (
        <label key={group}>
          <input
            type="radio"
            value="0-18"
            onChange={event => SetAgeGroup(event.target.value)}
            checked={ageGroup === "0-18"}
          />
          {group}
        </label>
      ))}
    </form>
  )
}