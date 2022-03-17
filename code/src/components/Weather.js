import React from 'react';

const weatherGroup = ['warm', 'winter', 'rainy'];

const Weather = ({ weather, onWeatherChange }) => {
  return (
    <form>
      <h2>Radio buttons</h2>
      {weatherGroup.map((group) => (
        <label key={group}>
          <input
            type='radio'
            value={group}
            onChange={(event) => onWeatherChange(event.target.value)}
            checked={weather === group}
          />
          {group}
        </label>
      ))}
    </form>
  );
};

export default Weather;

// use map for WeatherGroup
