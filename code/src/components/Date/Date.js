import React from 'react';
import './Date.css';

export const Date = ({ date, setDate }) => {
  const handleDateChange = (event) => {
    console.log(event.target.value);
    setDate(event.target.value);
  };
  return (
    <>
      <p>What is your arrival date?</p>
      <input
        type="date"
        onChange={handleDateChange}
        value={date}
        required />
    </>
  );
};
