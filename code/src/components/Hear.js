import React from 'react';

export const Hear = ({ hear, setHear, step }) => {
  return (
    <div className="container-hear">
      <h2>Question {step}</h2>
      <p>How did you hear about us?</p>
      <form className="form">
        <select
          onChange={(event) => setHear(event.target.value)}
          value={hear}>
          <option value="" disabled>Select:</option>
          <option value="Through a friend">Through a friend</option>
          <option value="Through Social Media">Through Social Media</option>
          <option value="Through Advertising">Through Advertising</option>
          <option value="Other">Other</option>
        </select>
      </form>
    </div>
  );
}