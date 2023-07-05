import React from 'react';

export const Fitness = ({ fitness, setFitness }) => {
  return (
    <form
      className="fitness"
      onSubmit={(event) => event.preventDefault()}>
      <section>
        <h1>What is <em>your</em> level of physical <mark>fitness</mark>?</h1>
        <section className="sliderSection">
          <input
            type="range"
            className="slider"
            min="1"
            max="10"
            value={fitness}
            id="fitness"
            onChange={(event) => setFitness(event.target.value)} />
        </section>
      </section>
    </form>
  );
}
