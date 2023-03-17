import React from 'react';
import './Date.css';

export const Date = ({ date, setDate }) => {
  const handleDateChange = (event) => {
    console.log(event.target.value);
    setDate(event.target.value);
  };
  return (
    <label htmlFor="date-input">
        What is your arrival date?
      <input
        type="date"
        id="date-input"
        onChange={handleDateChange}
        value={date}
        required
        autoComplete="off"
        pattern="\d{4}-\d{2}-\d{2}"
        min="2023-03-17"
        max="2024-12-31" />
    </label>
  );
};
