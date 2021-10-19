import React from "react";

const LevelEducation = ({
  onStepChange,
  levelEducation,
  onLevelEducationChange,
}) => {
  return (
    <div>
      <h2>What is your level of education?</h2>
      <select onChange={onLevelEducationChange} value={levelEducation}>
        <option disabled value="">
          Education
        </option>
        <option value="high-school">High school</option>
        <option value="university">University</option>
        <option value="master-phd">Master or Phd</option>
        <option value="other">Other</option>
      </select>
      <button onClick={onStepChange}>Next</button>
    </div>
  );
};

export default LevelEducation;
