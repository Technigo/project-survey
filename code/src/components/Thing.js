import React from 'react';

export const Thing = ({ thing, setThing, counterFromApp, setCounter }) => {
  const handleThingChange = (event) => {
    setThing(event.target.value);
    setCounter(counterFromApp + 1);
    console.log('thing picked: ', event.target.value);
  }

  return (
    <div className="radioButton">
      <h2>What do you prefer?</h2>

      <form className="radioBtn">
        <label className="option1" htmlFor="ocean">
          <input
            type="radio"
            value="ocean"
            className="ocean"
            onChange={handleThingChange}
            checked={thing === 'ocean'} />
         Ocean
        </label>
        <label htmlFor="mountain">
          <input
            type="radio"
            id="mountain"
            value="Mountain"
            className="mountain"
            onChange={handleThingChange}
            checked={thing === 'Mountain'} />
         Mountain
        </label>
        <label htmlFor="sand">
          <input
            type="radio"
            id="sand"
            value="Sand"
            className="sand"
            onChange={handleThingChange}
            checked={thing === 'Sand'} />
         Sand
        </label>

        <label htmlFor="city">
          <input
            type="radio"
            id="city"
            value="City"
            className="city"
            onChange={handleThingChange}
            checked={thing === 'City'} />
       City
        </label>
      </form>
    </div>
  );
};

/* const handleThingChange = (event) => {
    setThing(event.target.value);
    console.log('value is:', event.target.value);
  } */
