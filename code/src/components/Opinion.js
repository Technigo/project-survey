import React from 'react';

const Opinion = ({ opinion, onOpinionChange, onCounterChange }) => {
  return (
    <div className="container">
      <h3> Give us your opinion</h3>
      <textarea
        name="opinion"
        className="opinion"
        rows="10"
        cols="50"
        placeholder="To make this cake shop better, I think you need to..."
        value={opinion}
        onChange={onOpinionChange} />
      <button type="button" onClick={onCounterChange}>Submit Review</button>
    </div>
  )
}

export default Opinion;