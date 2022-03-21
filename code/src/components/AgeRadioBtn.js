import React from "react";


const ageGroups = ["18-25", "25-35", "35-45", ">45"];
const AgeRadioBtn = (props) => {
  const { group, handleFourthInputChange, onStepChange } = props;
  return (
    <div>
      <form onSubmit={onStepChange}>
      <h1>
        {" "}
        Choose your age group and get the opportunity to meet other gardening
        enthusiasts in your age
      </h1>
        Answer:
        {ageGroups.map((ageGroup) => (
          <label key={ageGroup}>
            <input
              type="radio"
              value={ageGroup}
              checked={ageGroup === group}
              onChange={handleFourthInputChange}
            />
            {ageGroup}
          </label>          
        ))}
        <button type="submit">Summary</button>
      </form>
    </div>
  );
};
export default AgeRadioBtn;
