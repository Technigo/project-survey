
import React from 'react';

export const Interest = ({ area, setArea }) => {
  const handleAreaChange = (event) => {
    setArea(event.target.value);
  };

  return (
    <>
      <p>What area are you interested in?</p>
      <select value={area} onChange={handleAreaChange}>
        <option value="">Select your area of interest</option>
        <option value="Design">Design</option>
        <option value="Frontend">Frontend</option>
        <option value="Backend">Backend</option>
        <option value="UX-UI">UX-UI</option>
        <option value="Machine Learning">Machine Learning</option>
      </select>
    </>
  );
};
