import React from 'react';

export const Name = ({ name, setName }) => {
  return (
    <form>
      <section>
        <h1> How do <em>other</em> humans call <mark>you?</mark></h1>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Your Name"
          minLength="2"
          required />
      </section>
    </form>
  );
}