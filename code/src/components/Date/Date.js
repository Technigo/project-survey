import React from 'react';
import './Date.css';

export const Date = ({ date, setDate }) => {
  const handleDateChange = (event) => {
    console.log(event.target.value);
    setDate(event.target.value);
  };
  return (
    <>
      <h2>What is your arrival date?</h2>
      <input
        type="date"
        onChange={handleDateChange}
        value={date}
        required />
    </>
  );
};
