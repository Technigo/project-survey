import React from 'react';

export const Age = ({ age, setAge }) => {
  const handleAgeChange = (event) => {
    setAge(event.target.value);
  }
  return (
    <>
      <p>How old are you?</p>
      <input type="text" value={age} onChange={handleAgeChange} />
    </>
  );
}