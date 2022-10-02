import React from 'react';

export const Gender = ({ gender, setGender }) => {
  const handleGenderChange = (event) => {
    setGender(event.target.value);
  }
  return (
    <>
      <p>What is your gender?</p>
      <input type="text" value={gender} onChange={handleGenderChange} />
    </>
  );
}