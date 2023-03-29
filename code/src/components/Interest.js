
import React from 'react';

export const Interest = ({ area, setArea }) => {
  const handleAreaChange = (event) => {
    setArea(event.target.value);
  };

  return (
    <>
      <p>Which area are you interested in?</p>
      <select value={area} onChange={handleAreaChange}>
        <option value="">Select your area of interest</option>
        <option value="Frontend">Frontend</option>
        <option value="Backend">Backend</option>
        <option value="UX-UI">UX-UI</option>
        <option value="Machine Learning">Machine Learning</option>
      </select>
    </>
  );
};
