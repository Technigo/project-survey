/* eslint-disable linebreak-style */
import React from 'react';

export const Age = ({ age, setAge }) => {
  const handleAgeChange = (event) => {
    setAge(event.target.value);
  }
  return (
    <>
      <p>How old are you?</p>
      <input type="number" min="0" value={age} onChange={handleAgeChange} required="required" />
    </>
  );
}