import React from 'react';

const Opinion = ({ opinion, onOpinionChange, onCounterChange }) => {
  return (
    <div className="opinion-container">
      <p> Give us your opinion</p>
      <form>
        <textarea
          name="opinion"
          rows="10"
          cols="50"
          placeholder="To make this cake shop better, I think you need to..."
          value={opinion}
          onChange={onOpinionChange} />
      </form>
      <button type="button" onClick={onCounterChange}>Submit Review</button>
    </div>
  )
}

export default Opinion;