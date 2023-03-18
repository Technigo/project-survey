import React from 'react';

export const Name = ({ name, setName }) => {
  return (
    <section>
      <h1> How do other humans call you? </h1>
      <form onSubmit={(event) => event.precentDefault()}>
        <input id="name" value={name} onChange={(event) => setName(event.target.value)} placeholder="Your Name" required />
      </form>
    </section>
  );
}