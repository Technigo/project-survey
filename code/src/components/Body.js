import React from 'react';

export const Body = ({ body, setBody }) => {
  return (
    <section>

      <h1>Which one do you think is your best body part? </h1>
      <form>
        <label htmlFor="heart">
          <input type="radio" id="heart" value={body} onChange={(event) => setBody(event.target.value)} /> Heart
        </label>

        <label htmlFor="brain">
          <input type="radio" id="brain" value={body} onChange={(event) => setBody(event.target.value)} /> Brain
        </label>
      </form>
    </section>
  );
}
