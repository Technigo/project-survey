import React from "react";

const ThirdQuestion = ({
  onStepChange,
  experienceInput,
  onExperienceInputChange,
  prevent,
}) => {
  return (
    <form onSubmit={prevent}>
      <h2>How did you experience the earth</h2>

      <button>Klick me!</button>

      <select value={experienceInput} onChange={onExperienceInputChange}>
        <option>Chose a experience</option>

        <option value="really bad">Crappiest planet in space!</option>
        <option value="bad">Have bin on better ones</option>
        <option value="okey">This planet was okey</option>
        <option value="good">Liked it allot</option>
        <option value="really good">
          This was a really cool planet. Loved it!
        </option>
      </select>
      <button onClick={onStepChange}>Next questions</button>
    </form>
  );
};
export default ThirdQuestion;
