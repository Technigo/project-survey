import React from 'react';
import './Experience.css';

export const Experience = ({ experience, setExperience }) => {
  const handleExpChange = (event) => {
    setExperience(event.target.value);
  };

  return (
    <div className="dropdown">
      <span className="experience-title">Do you have previous dog owner experience?</span>
      <form>
        <select value={experience} onChange={handleExpChange}>
          <option value="none" selected>Select an Option</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </form>
    </div>
  );
};
