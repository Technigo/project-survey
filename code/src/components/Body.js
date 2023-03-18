import React from 'react';

export const Body = ({ body, setBody }) => {
  return (
    <section>
      <form>
        <h1>Which one do you think is your best body part? </h1>
        <label>
          <input
            type="radio"
            id="Heart"
            value="Heart"
            onChange={(event) => setBody(event.target.value)}
            checked={body === 'Heart'} />
        Heart
        </label>
        <label>
          <input
            type="radio"
            id="Brain"
            value="Brain"
            onChange={(event) => setBody(event.target.value)}
            checked={body === 'Brain'} />
        Brain
        </label>
      </form>
    </section>
  );
}
