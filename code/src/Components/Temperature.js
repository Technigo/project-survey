import React from 'react';
import { render } from 'react-dom';


    // destination = {
    //     key1: 'Alaska',
    //     key2: 'Amsterdam',
    //     key3: 'Thailand',
    // };

    // temperature = {
    //     temperature < 5 && {'Alaska'}
    //     temperature > 25 && {'Amsterdam'}
    // }


    const Temperature= ({temperature, setTemperature}) => {

        const handleTemperatureChange = (event) => {
            this.setTemperature(event.target.value)
          }

        // const {item} = destination;
   

      return (
        <>
        <p> How hot should it be?</p>
        <span role="img" className="emoji" aria-label="img">🥶</span>
        <span role="img" className="emoji" aria-label="img">🥵</span>
        <input
        name="temperature"
         type="range"
         min="1"
         max="3"
        value= {temperature}
        onChange={event => setTemperature(event.target.value)}



        />
        </>
      );
    }
// }

export default Temperature;





 // const destination = (temp) => {
    //     if (temp && temperature === 30) {
    //         <p>Thailand</p>
    //     }
    // }









