import React from 'react';

export const Time = ({ time, setTime }) => {
  const handleTimeChange = (event) => {
    setTime(event.target.value);
  }
  return (
    <label htmlFor="time" className="time-label">
      <p>How long have you worked here?</p>
      <select value={time} onChange={(e) => setTime(e.target.value)} required>
        <option value="0">select years</option>
        <option value="0-1 yrs">0-1 years</option>
        <option value="1-3 yrs">1-3 years</option>
        <option value="3-5 yrs">3-5 years</option>
        <option value="+5 yrs">+5 years</option>
      </select>
      <input
        id="time"
        value={time}
        onChange={handleTimeChange}
        readOnly
        className="input-field" />
    </label>
  );
}