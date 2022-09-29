import React from 'react';

export const Strength = ({ meetsStrength, setMeetsStrength, question }) => {
  return (
    <form onSubmit={(event) => event.preventDefault()}>
      <label>
        {question}
        <input
          type="checkbox"
          checked={meetsStrength}
          value={question}
          onChange={(event) => setMeetsStrength(event.target.checked)} />
      </label>
    </form>
  );
}