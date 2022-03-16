import React from "react";

const SecondQuestion = ({ time, onTimeChange }) => {
  return (
    <>
      <div>
        <label htmlFor="time">
          <h2>What time will you be there?</h2>
          <select>
            <option value={time}>12:00-15:00</option>
            <option value={time}>15:00-18:00</option>
            <option value={time}>18:00-21:00</option>
          </select>
        </label>
      </div>
    </>
  );
};

export default SecondQuestion;
