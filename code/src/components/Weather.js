import React from 'react';

const weatherGroup = ['Hot and spicy', 'Winter wonderland', 'Wet and rainy'];

const Weather = ({ weather, onWeatherChange, onNextChange }) => {
  return (
    <section className='container'>
      <form>
        <h2 className='page-title'>What type of weather do you prefer?</h2>
        {weatherGroup.map((group) => (
          <div className='align-radio' key={group}>
            <label>
              <input
                id='weather'
                type='radio'
                value={group}
                onChange={(event) => onWeatherChange(event.target.value)}
                checked={weather === group}
              />
              {group}
            </label>
          </div>
        ))}
        <button onClick={onNextChange}>Next question</button>
      </form>
    </section>
  );
};

export default Weather;

// use map for WeatherGroup
