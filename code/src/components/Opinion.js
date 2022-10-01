import React from 'react';

const Opinion = ({ opinion, onOpinionChange, onCounterChange }) => {
  return (
    <div className="container">
      <h3> Give us your opinion</h3>
      <label htmlFor="opinion">
        <textarea
          name="opinion"
          rows="10"
          cols="70"
          maxLength="500"
          placeholder="To make this cake shop better, I think you need to..."
          value={opinion}
          onChange={onOpinionChange}
          required />
      </label>
      <button type="submit" onClick={onCounterChange} disabled={opinion === ''}>Submit Review</button>
    </div>
  )
}

export default Opinion;