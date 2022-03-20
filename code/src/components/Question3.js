import React from 'react'


const Question3 = ({weather, onWeatherChange, onStepChange}) => {
    
const weathers = [
'Sunshine and clear sky', 
'Snow, snow and some more snow', 
'Icy winds and thick fog', 
'Light drizzle of rain']

    return (
      <div>
        
        <article className="survey-container">
        <form className="form" onSubmit={event => event.preventDefault()}>
          <h1 tabindex="0">Choose your preferred weather</h1>
          <div className="weather-input-container">
            {weathers.map(weather => (
                 <label className="weather-button-text" key={weather} tabindex="0">
                    <input
                      className="radio-button"
                      type="radio"
                      value={weather}
                      onChange={onWeatherChange}
                       >
                    </input>
                    {weather}
                </label>
                    ))}
          </div>
          
          <button className='btn' type="button" onClick={onStepChange} tabindex="0">Next</button>

        </form>
        </article>
      </div>
    )
  }

  export default Question3