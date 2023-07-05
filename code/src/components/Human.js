import React from 'react';

export const Human = (human, setHuman) => {
  return (
    <form>
      <section className="human">
        <h1><em>Question</em> is: </h1>
        <label htmlFor="checkboxHuman">
          Are you <mark>human?</mark>
          <input
            id="checkboxHuman"
            type="checkbox"
            /* checked={human} */
            onChange={(event) => setHuman(event.target.checked)} />
        </label>
      </section>
    </form>
  );
}