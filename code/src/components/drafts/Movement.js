import React from 'react';

export const Movement = ({ meetsMovement, setMeetsMovement, question }) => {
  return (
    <form onSubmit={(event) => event.preventDefault()}>
      <label>
        {question}
        <input
          type="checkbox"
          checked={meetsMovement}
          value={question}
          onChange={(event) => setMeetsMovement(event.target.checked)} />
      </label>
    </form>
  );
}