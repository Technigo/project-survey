import React, { useState } from 'react';

export const Time = ({ whenNext }) => {
  const [timeSpent, setTimeSpent] = useState();
  const handleSubmit = (event) => {
    event.preventDefault();
    whenNext(timeSpent);
  }
  return (
    <form onSubmit={handleSubmit} className="question-box">
      <label>
        <div className="question">
          <h2 className="question-text">For how long do you prefer to play?</h2>
          <select className="time-style" name="Choose" value={timeSpent} onChange={(event) => setTimeSpent(event.target.value)}>
            <option value=""> Choose Time</option>
            <option value="5-10 min">5-10 minuts</option>
            <option value="20-60 min">20-60 minuts</option>
            <option value="1-2 h">1-2 hours</option>
            <option value="more">More</option>
          </select>
      </div>
      </label>
      <button type="submit" className="sub-button" />
    </form>
  )
}