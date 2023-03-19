import React from 'react';

export const Human = (human, setHuman) => {
  return (
    <form>
      <section className="human">
        <h1><em>Question</em> is: </h1>
        <label> Are you <mark>human?</mark>
          <input
            type="checkbox"
            /* checked={human} */
            onChange={(event) => setHuman(event.target.checked)} />
        </label>
      </section>
    </form>
  );
}