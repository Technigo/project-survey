import React from 'react';

const patternGroup = ['🎈', '❤', '🦛', '🥕', '🍀', '💥', '⭐'];

export const Pattern = ({ pattern, setPattern }) => {
  const handlePatternChange = (event) => {
    setPattern(event.target.value);
  };

  return (
    <form onSubmit={(event) => event.preventDefault()}>
      <h2>
        Which emoji would you like to add?
      </h2>
      <div className="radioParent">
        {patternGroup.map((group) => (
          <label key={group} htmlFor="group">
            <input type="radio" className="radioCircle" value={group} onChange={handlePatternChange} checked={pattern === group} />
            {group}
          </label>
        ))}
      </div>
    </form>
  );
};