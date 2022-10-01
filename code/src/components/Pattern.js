import React from 'react';

const patternGroup = ['🎈', '❤', '🦛', '🥕', '🍀', '💥', '⭐'];

export const Pattern = ({ pattern, setPattern }) => {
  const handlePatternChange = (event) => {
    setPattern(event.target.value);
  };

  return (
    <form>
      <p>
        Which emoji would you like to add?
      </p>
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