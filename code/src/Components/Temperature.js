import React from 'react';

const Temperature= ({temperature, setTemperature}) => {
    const handleTemperatureChange = (event) => {
        setTemperature(event.target.value)
      }
      return (
        <>
        <p> How hot should it be?</p>
        <div>
        <span role="img" className="emoji" aria-label="img">🥱</span>
        <span role="img" className="emoji" aria-label="img">😀</span>
        </div>
        <input
        type="range"
        min="1"
        max="3"
        onInput={temperature}
        onChange={event => setTemperature(event.target.value)}
        value={temperature}

        />
        </>
      )
}

export default Temperature;








