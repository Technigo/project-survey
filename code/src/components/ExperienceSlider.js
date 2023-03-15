import React, { useState } from 'react';

export const ExperienceSlider = () => {
  const [experience, setExperience] = useState(1);

  const handleExperienceChange = (event) => {
    setExperience(event.target.value);
  };

  return (
    <>
      <p>Years of Experience do you have</p>
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
