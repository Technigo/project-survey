import React from 'react';

const weatherGroup = ['Hot and spicy', 'Winter wonderland', 'Wet and rainy'];

const Weather = ({ weather, onWeatherChange, onNextChange, onBackChange }) => {
  return (
    <section className='container'>
      <div className='background-transparent'>
        <form>
          <h2 className='page-title'>What type of weather do you prefer?</h2>
          {weatherGroup.map((group) => (
            <div className='align-radio' key={group}>
              <label className='radio-label'>
                <input
                  htmlFor='weather'
                  id='weather'
                  type='radio'
                  name='weather'
                  value={group}
                  onChange={(event) => onWeatherChange(event.target.value)}
                  checked={weather === group}
                />
                {group}
              </label>
            </div>
          ))}
        </form>
        <button className='btn' type='submit' onClick={onBackChange}>
          Back
        </button>
        <button className='btn' onClick={onNextChange}>
          Next
        </button>
      </div>
    </section>
  );
};

export default Weather;

// use map for WeatherGroup

// disabled will be used with weatherGroup?
// disabled not working..
// disabled={weather === ''}
