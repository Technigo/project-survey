import React from 'react';

const patternGroup = ['🎈', '❤', '🦛', '🥕', '🍀', '💥', '⭐'];

export const Pattern = ({ pattern, setPattern }) => {
  const handlePatternChange = (event) => {
    setPattern(event.target.value);
  };

  return (
    <form onSubmit={(event) => event.preventDefault()}>
      <p>
        Which emoji do you like the most?
      </p>
      <div className="radioParent">
        {patternGroup.map((group) => (
          <label key={group} htmlFor="group">
            <input
              type="radio"
              className="radioCircle"
              value={group}
              onChange={handlePatternChange}
              checked={pattern === group}
              aria-label={group} />
            {group}
          </label>
        ))}
      </div>
    </form>
  );
};