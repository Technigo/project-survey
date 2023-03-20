import React from 'react';

export const Thing = ({ things, setThing, counterFromApp, setCounter }) => {
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
            checked={things === 'ocean'} />
          <span>Ocean </span>
        </label>
        <label htmlFor="mountain">
          <input
            type="radio"
            id="mountain"
            value="mountain"
            className="mountain"
            onChange={handleThingChange}
            checked={things === 'Mountain'} />
          <span>Mountain </span>
        </label>

        <label htmlFor="city">
          <input
            type="radio"
            id="city"
            value="city"
            className="city"
            onChange={handleThingChange}
            checked={things === 'City'} />
          <span>City </span>
        </label>
      </form>
    </div>
  );
};

