import React from 'react';

export const Thing = ({ thing, setThing }) => {
  /* const handleThingChange = (event) => {
    setThing(event.target.value);
    console.log('value is:', event.target.value);
  } */

  return (
    <div className="radioButton">
      <h2>What´s your thing?</h2>

      <form className="radioBtn">
        <label className="option1" htmlFor="ocean">
          <input
            type="radio"
            value="ocean"
            className="ocean"
            onChange={(event) => { setThing(event.target.value); }}
            checked={thing === 'ocean'} />
         Ocean
        </label>
        <label htmlFor="mountain">
          <input
            type="radio"
            id="mountain"
            value="Mountain"
            className="mountain"
            onChange={(event) => { setThing(event.target.value); }}
            checked={thing === 'Mountain'} />
         Mountain
        </label>
        <label htmlFor="sand">
          <input
            type="radio"
            id="sand"
            value="Sand"
            className="sand"
            onChange={(event) => { setThing(event.target.value); }}
            checked={thing === 'Sand'} />
         Sand
        </label>

        <label htmlFor="city">
          <input
            type="radio"
            id="city"
            value="City"
            className="city"
            onChange={(event) => { setThing(event.target.value); }}
            checked={thing === 'City'} />
       City
        </label>
      </form>
    </div>
  );
};
