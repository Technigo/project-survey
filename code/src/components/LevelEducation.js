import React from "react";

const LevelEducation = ({
  levelEducation,
  onLevelEducationChange,
  onStepChange,
}) => {
  return (
    <div className="question-wrapper">
      <h2 className="question-header">What is your level of education?</h2>
      <select onChange={onLevelEducationChange} value={levelEducation}>
        <option value="">Education</option>
        <option value="high-school">High school</option>
        <option value="university">University</option>
        <option value="master-phd">Master or Phd</option>
        <option value="other">Other</option>
      </select>
      <button className="button" onClick={onStepChange}>
        Next
      </button>
    </div>
  );
};

export default LevelEducation;
