import React from 'react';

export const ConsiderationInput = ({ consideration, setConsideration }) => {
  const handleConsiderationInput = (event) => {
    setConsideration(event.target.value);
  }
  return (
    <div>
      <p>You might want to consider</p>
      <form>
        <select>
        onChange={handleConsiderationInput}
        value={consideration}
          <option value="">Select option</option>
          <option value="Reassessing your priorities">Reassessing your priorities</option>
          <option value="Trying meditation">Trying meditation</option>
          <option value="Finishing what you`ve started">Finishing what you`ve started</option>
          <option value="Lightening up">Lightening up</option>
          <option value="Positive thinking">Positive thinking</option>
          <option value="Smiling once in a while">Smiling once in a while</option>
          <option value="Asking for help next time">Asking for help next time</option>
          <option value="Listening to others">Listening to others</option>
          <option value="Getting a life">Getting a life</option>
        </select>
      </form>
    </div>
  );
}