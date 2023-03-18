import React from 'react';

export const Fitness = ({ fitness, setFitness }) => {
  return (
    <form onSubmit={(event) => event.precentDefault()}>
      <h1>What is your level of physical fitness?</h1>
      <section>
        <input type="range" min="1" max="10" value={fitness} id="fitness" onChange={(event) => setFitness(event.target.value)} />
      </section>
    </form>
  );
}
