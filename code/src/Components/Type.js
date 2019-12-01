import React, { useState } from 'react';

export const typeGroups = ['Skill', 'Luck', 'Skill and luck'];

export const Type = ({whenNext}) => {
  const [typeGroup, setTypeGroup] = useState();
  const handleSubmit = (event) => {
    event.preventDefault();
    whenNext();
 }
  return (
    <form onSubmit={handleSubmit} className="type-style">
      <h2 className="question-text">What do you want the game to depend on?</h2>
      {typeGroups.map((group) => (
        <label className="type-label" key={group}>
          <input
            type="radio"
            value={group}
            onChange={(event) => setTypeGroup(event.target.value)}
            checked={typeGroup === group}/>
          {group}
        </label>
      ))}
      <button type="submit" className="next-button">NEXT</button>
    </form>
  );
};
