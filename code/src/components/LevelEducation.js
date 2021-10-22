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
        <option value="High-school">High school</option>
        <option value="University">University</option>
        <option value="Master-phd">Master or Phd</option>
        <option value="Other">Other</option>
      </select>
      <button
        disabled={!levelEducation}
        className="button"
        onClick={onStepChange}
      >
        Next
      </button>
    </div>
  );
};

export default LevelEducation;
