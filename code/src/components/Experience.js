import React from 'react'

export const Experience = ({ experience, setExperience }) => {
  const handleExpChange = (event) => {
    setExperience(event.target.value);
  };

  return (
    <div>
      <p>Do you have previous dog owner experience?</p>
      <lable>
        Experience
        <select value={experience} onChange={handleExpChange}>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </lable>
    </div>
  );
};
