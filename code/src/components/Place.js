import React from 'react';
import ocean from '../img/ocean.png';

export const Place = ({ place, setPlace, step }) => {
  const handlePlaceChange = (event) => {
    setPlace(event.target.value);
  }
  return (
    <div className="place-container">
      <div className="head">
        <p>Current step: {step} / 7</p>
      </div>
      <h4> Where do you feel the most at ease?</h4>
      <div className="place-img-container">
        <img src={ocean} alt="The ocean" />
        <img src={ocean} alt="The ocean" />
        <img src={ocean} alt="The ocean" />
      </div>
      <form>
        <label htmlFor="ocean">
            The ocean
          <input
            type="radio"
            value="ocean"
            onChange={handlePlaceChange}
            checked={place === 'ocean'} />
        </label>
        <label htmlFor="forest">
            In the forest
          <input
            type="radio"
            value="forest"
            onChange={handlePlaceChange}
            checked={place === 'forest'} />
        </label>
        <label htmlFor="home">
            At home
          <input
            type="radio"
            value="home"
            onChange={handlePlaceChange}
            checked={place === 'home'} />
        </label>
      </form>
    </div>
  );
}