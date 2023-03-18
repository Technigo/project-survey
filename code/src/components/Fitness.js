import React from 'react';

export const Fitness = ({ fitness, setFitness }) => {
  return (
    <>
      <h1>What is your level of physical fitness?</h1>
      <section>
        <input id="name" value={fitness} onChange={(event) => setFitness(event.target.value)} placeholder="Your Fitness" required />
      </section>
    </>
  );
}
