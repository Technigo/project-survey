import React from 'react';

export const Body = ({ body, setBody }) => {
  return (
    <form>
      <h1>Which one do you think is your best body part? </h1>
      <label htmlFor="asia">
        <input type="radio" id="asia" value={body} onChange={(event) => setBody(event.target.value)} checked />
      </label>
    </form>
  );
}
