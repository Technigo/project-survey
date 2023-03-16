import React from 'react';

export const Time = ({ time, setTime }) => {
  const handleTimeChange = (event) => {
    setTime(event.target.value);
  }
  return (
    <label htmlFor="time" className="time-label">
      <p>How long have you worked here?</p>
      <select value={time} onChange={(e) => setTime(e.target.value)} required>
        <option value="0-1">0-1 years</option>
        <option value="1-3">1-3 years</option>
        <option value="3-5">3-5 years</option>
        <option value="+5">+5 years</option>
      </select>
      <input
        id="time"
        value={time}
        onChange={handleTimeChange}
        className="input-field" />
    </label>
  );
}