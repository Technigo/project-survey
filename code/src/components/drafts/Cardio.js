import React from 'react';

export const Cardio = ({ meetsCardio, setMeetsCardio, question }) => {
  return (
    <form onSubmit={(event) => event.preventDefault()}>
      <label>
        {question}
        <input
          type="checkbox"
          checked={meetsCardio}
          value={question}
          onChange={(event) => setMeetsCardio(event.target.checked)} />
      </label>
    </form>
  );
}