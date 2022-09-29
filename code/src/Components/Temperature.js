import React from 'react';

    const Temperature= ({temperature, setTemperature}) => {
           
      // const tempWordToUse = () => {
      //   if (temperature === 1) {
      //     return "Cold"
      //   } else if (temperature === 2) {
      //     return "Middle"
      //   } else {
      //     return "Hot"
      //   }
      // }

      return (
        <>
        <div className="questionWrapper">
        <p> Temperature?</p>
        <span role="img" className="emoji" aria-label="img">🌨</span>
        <span role="img" className="emoji" aria-label="img">😎</span>
        <input
        name="temperature"
        type="range"
        min="1"
        max="3"
        value= {temperature}
        onChange={event => setTemperature(event.target.value)}
        />
        </div>
        </>
      );
      }

export default Temperature;