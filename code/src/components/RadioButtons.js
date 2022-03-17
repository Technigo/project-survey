import React from "react";

const ageGroups = ["0-18", "19-30", "30+"];

 const RadioButtons = ({ ageGroup, AgeChange }) => {
    

  return (
    <form>
      Age Group:
      {ageGroups.map((group) => (
        <label key={group}>
          <input
            type="radio"
            value={group}
            onChange={AgeChange}
            checked={ageGroup === group}
          />

          {group}
        </label>
      ))}

    </form>
  );
}

export default  RadioButtons;