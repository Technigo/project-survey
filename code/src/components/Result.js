import React from "react";

const Result = ({ onTimeOrRoundsChange, onResultChange, result }) => {
  return (
    <>
      <form>
        <h3>Add your result</h3>
        <div>
          <p>Are you giving your result as time or as rounds?</p>
          <label htmlFor="time">Time</label>
          <input
            name="time-date"
            id="time"
            type="radio"
            value="time"
            onChange={onTimeOrRoundsChange}
          />
          <label htmlFor="rounds">Rounds</label>
          <input
            name="time-date"
            id="rounds"
            type="radio"
            value="rounds"
            onChange={onTimeOrRoundsChange}
          />
        </div>
        <div>
          <p>Write your result:</p>
          <input
            id="name"
            type="text"
            result={result}
            onChange={onResultChange}
          />
        </div>
      </form>
    </>
  );
};

export default Result;
