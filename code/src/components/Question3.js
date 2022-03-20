import React from 'react'


const Question3 = ({weather, onWeatherChange, onStepChange}) => {
    
const weathers = [
'Sunshine and clear sky', 
'Snow, snow and some more snow', 
'Icy winds and thick fog', 
'Light drizzle of rain']

    return (
      <div>
        
        <article className="letter-container">
        <form className="form" onSubmit={event => event.preventDefault()}>
          <h1 tabindex="0">Choose your preferred weather</h1>

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

          {/* <div className="image-container">
            <img src={} alt="Weather 1" tabindex="0"/>    
            <img src={} alt="Weather 2" tabindex="0"/>   
            <img src={} alt="Weather 3" tabindex="0"/>      
            <img src={} alt="Weather 4" tabindex="0"/>    
          </div> */}
          
          <button className='btn' type="button" onClick={onStepChange} tabindex="0">Next</button>

        </form>
        </article>
      </div>
    )
  }

  export default Question3