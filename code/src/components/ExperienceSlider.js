import React from 'react';
import './ExperienceSlider.css';

export const ExperienceSlider = ({ experience, setExperience }) => {
  const handleExperienceChange = (event) => {
    setExperience(event.target.value);
  };

  return (
    <>
      <p>How many years of experience do you have?</p>
      <input
        type="range"
        min="0"
        max="10"
        value={experience}
        onChange={handleExperienceChange}
        aria-label="Experience Slider" />
      <p> experience: {experience}</p>
    </>
  );
};
