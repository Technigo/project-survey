import React from 'react';

export const Human = (human, setHuman) => {
  return (
    <>
      <h1>The question is: </h1>
      <form onSubmit={(event) => event.precentDefault()}>
        <label>
        Are you human?
          <input
            type="checkbox"
            /* checked={human} not working */
            onChange={(event) => setHuman(event.target.checked)} />
        </label>
      </form>
    </>
  );
}