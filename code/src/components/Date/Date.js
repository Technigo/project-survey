import React from 'react';
import './Date.css';

export const Date = ({ date, setDate }) => {
  const handleDateChange = (event) => {
    setDate(event.target.value);
  }
  return (
    <>
      <p>What is your arrival date?</p>
      <input
        type="text"
        onChange={handleDateChange}
        value={date}
        required />
    </>
  )
};