import React from 'react';

export const Power = ({ power, setPowers }) => {
  const handlePowerChange = (event) => {
    setPowers(event.target.value);
  }
  return (
    <form onSubmit={(event) => event.preventDefault()}>
      <p className="question">Which superpower would you dream of having?</p>
      <div className="superpower-selection">

        <label htmlFor="first">
          <input
            className="checkbox-power"
            type="radio"
            id="power1"
            aria-label="First checkbox"
            value="Fire"
            checked={power === 'Fire'}
            onChange={handlePowerChange} />
            Burn like fire
        </label>

        <label htmlFor="second">
          <input
            className="checkbox-power"
            type="radio"
            id="power2"
            aria-label="Second checkbox"
            value="Water"
            checked={power === 'Water'}
            onChange={handlePowerChange} />
            Move like water
        </label>

        <label htmlFor="third">
          <input
            className="checkbox-power"
            type="radio"
            id="power3"
            aria-label="Second checkbox"
            value="Water"
            checked={power === 'Time'}
            onChange={handlePowerChange} />
            Timetravel
        </label>
      </div>
    </form>
  );
}