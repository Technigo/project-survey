import React, { useState } from "react";

const LevelEducation = () => {
  const [levelEducation, setLevelEducation] = useState();

  const onLevelEducationChange = (event) =>
    setLevelEducation(event.target.value);

  return (
    <select onChange={onLevelEducationChange} value={levelEducation}>
      <option disabled value="">
        Education
      </option>
      <option value="high-school">High school</option>
      <option value="university">University</option>
      <option value="master-phd">Master or Phd</option>
      <option value="other">Other</option>
    </select>
  );
};

export default LevelEducation;
