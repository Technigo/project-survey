import React from "react";

const ageGroups = 
[" that youngish overprized online fortuneteller",
 " that ancient excentric history-loving librarian", 
 " mom"];

 const RadioButtons = ({ageGroup, ageChange }) => {

  return (
    <form className="radio-options">
      <p className="question-text">Our boss is:</p>
      {ageGroups.map((group) => (
        <label key={group}>
          <input
            type="radio"
            value={group}
            onChange={ageChange}
            checked={ageGroup === group}
          />

          {group}
        </label>
      ))}

    </form>
  );
}

export default RadioButtons;
