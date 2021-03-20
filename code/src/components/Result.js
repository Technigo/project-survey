import React, { useState } from "react";

import "./components.css";

const Result = ( {onTimeOrRoundsChange, onResultChange, result}) => {
 

  return (
    <>
      <h3>Add your result</h3>
      <form>
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
          <p>Write your result there <span role="img" alt="finger pointing right">👉</span></p>
          <input
            id="name"
            type="text"
            value={result}
            onChange={onResultChange}
          />
        </div>
        <button>Click to get the summary</button>
      </form>
    </>
  );
};

export default Result;
