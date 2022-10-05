import React from 'react';

const patternGroup = ['🎈', '❤', '🦛', '🥕', '🍀', '💥', '⭐'];

export const Pattern = ({ pattern, setPattern }) => {
  const handlePatternChange = (event) => {
    setPattern(event.target.value);
  };

  return (
    <form onSubmit={(event) => event.preventDefault()}>
      <label htmlFor="emoji-input">
        Which emoji do you like the most?
        <div className="radioParent">
          {patternGroup.map((group) => (
            <label key={group} htmlFor="group">
              <input
                type="radio"
                className="radioCircle"
                value={group}
                onChange={handlePatternChange}
                checked={pattern === group}
                aria-label={group}
                id="emoji-input" />
              {group}
            </label>
          ))}
        </div>
      </label>
    </form>
  );
};