import React from 'react';

export const Power = ({ power, setPowers }) => {
  const handlePowerChange = (event) => {
    setPowers(event.target.value);
  }
  return (
    <form onSubmit={(event) => event.preventDefault()}>
      <div className="superpower-selection">
        <p className="question">If you could have ONE Super Power. What would that be?</p>

        <label htmlFor="first">
          <input
            className="checkbox-power"
            type="radio"
            id="power1"
            aria-label="First checkbox"
            value="Fire"
            checked={power === 'Fire'}
            onChange={handlePowerChange} />
          <span role="img" className="emoji" aria-label="img">🔥</span>Create fire
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
          <span role="img" className="emoji" aria-label="img">💦</span>Move like water
        </label>

        <label htmlFor="third">
          <input
            className="checkbox-power"
            type="radio"
            id="power3"
            aria-label="Third checkbox"
            value="Time"
            checked={power === 'Time'}
            onChange={handlePowerChange} />
          <span role="img" className="emoji" aria-label="img">⌛</span>Timetravel
        </label>

        <label htmlFor="forth">
          <input
            className="checkbox-power"
            type="radio"
            id="power4"
            aria-label="forth checkbox"
            value="Transparency"
            checked={power === 'Transparency'}
            onChange={handlePowerChange} />
          <span role="img" className="emoji" aria-label="img">🔍</span>Be transparent
        </label>
      </div>
    </form>
  );
}