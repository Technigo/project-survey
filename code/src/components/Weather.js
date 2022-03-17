import React from 'react';

const weatherGroup = ['warm', 'winter', 'rainy'];

const Weather = ({ weather, onWeatherChange, onNextChange }) => {
  return (
    <section className='container'>
      <form>
        <h2>Radio buttons</h2>
        {weatherGroup.map((group) => (
          <label key={group}>
            <input
              id='weather'
              type='radio'
              value={group}
              onChange={(event) => onWeatherChange(event.target.value)}
              checked={weather === group}
            />
            {group}
          </label>
        ))}
        <button onClick={onNextChange}>Next question</button>
      </form>
    </section>
  );
};

export default Weather;

// use map for WeatherGroup
