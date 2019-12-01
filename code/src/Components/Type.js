import React, { useState } from 'react';

export const typeGroups = ['skill', 'luck', 'skill and luck'];

export const Type = ({ whenNext }) => {
  const [typeGroup, setTypeGroup] = useState();
  const handleSubmit = (event) => {
    event.preventDefault();
    whenNext(typeGroup);
  }
  return (
    <form onSubmit={handleSubmit} className="question-box">
      <div className="question">
        <h2 className="question-text">What do you want the game to depend on?</h2>
        {typeGroups.map((group) => (
          <label className="radio-container" key={group}>
            <input
              type="radio"
              value={group}
              onChange={(event) => setTypeGroup(event.target.value)}
              checked={typeGroup === group} />
            {group}
          </label>
        ))}
      </div>
      <button type="submit" className="next-button" />
    </form>
  );
};
