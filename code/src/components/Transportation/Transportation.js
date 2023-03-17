import React from 'react';
import './Transportation.css';

export const Transportation = ({ transportation, setTransportation }) => {
  const handleTransportationChange = (event) => {
    console.log(event.target.value);
    setTransportation(event.target.value);
  };
  return (
    <fieldset aria-label="Transportation method">
      <legend>Choose your transportation method</legend>
      <section className="radio-wrapper">
        <label htmlFor="taxi">
          <input
            type="radio"
            id="taxi"
            name="transportation"
            value="taxi"
            checked={transportation === 'taxi'}
            onChange={handleTransportationChange}
            aria-checked={transportation === 'taxi'}
            required />
            Taxi
        </label>

        <label htmlFor="shuttle">
          <input
            type="radio"
            id="shuttle"
            name="transportation"
            checked={transportation === 'shuttle'}
            value="shuttle"
            onChange={handleTransportationChange}
            aria-checked={transportation === 'shuttle'}
            required />
            Hotel shuttle
        </label>

        <label htmlFor="car">
          <input
            type="radio"
            id="car"
            name="transportation"
            checked={transportation === 'car'}
            value="car"
            onChange={handleTransportationChange}
            aria-checked={transportation === 'car'}
            required />
            Car
        </label>
      </section>
    </fieldset>
  );
};
