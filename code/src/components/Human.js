import React from 'react';

export const Human = (human, setHuman) => {
  return (
    <form onSubmit={(event) => event.precentDefault()}>
      <section className="human">
        <h1><mark>Question</mark> is: </h1>
        <label> Are you <em>human?</em>
          <input
            type="checkbox"
            /* checked={human} not working */
            onChange={(event) => setHuman(event.target.checked)} />
        </label>
      </section>
    </form>
  );
}