import React, { useState } from 'react';

export const Time = ({ whenNext }) => {
  const [timeSpent, setTimeSpent] = useState();
  const handleSubmit = (event) => {
    event.preventDefault();
    whenNext(timeSpent);
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>
    For how long do you prefer to play?
        <select name="Choose" id="" value={timeSpent} onChange={(event) => setTimeSpent(event.target.value)}>
          <option value=""> Choose Time</option>
          <option value="5 min">5 min</option>
          <option value="10 min">10 min</option>
        </select>
      </label>
      <button type="submit" className="sub-button" />
    </form>
  )
}