/* eslint-disable max-len */
import React from 'react';
import ButtonNext from './ButtonNext';

const Destination = ({ place, onPlaceChange, onClickNext }) => {
  return (
    <section className="content-container">
      <h1 className="header-copy">
        Which trip would you like to book?
      </h1>
      <div className="destination-container">
        <select
          onChange={onPlaceChange}
          value={place}>
          <option value="">Select Destination</option>
          <option value="Dark Side of the Moon">Dark Side of the Moon 🌚</option>
          <option value="Sunny Sun">Sunny Sun 🥵</option>
          <option value="Around the Earth">Trip Around the Earth 🌎</option>
          <option value="Saturn Ring Honeymoon ">Saturn Ring Honeymoon 🪐</option>
        </select>
      </div>
      <div className="button-container">
        <ButtonNext button="Next" onClickNext={onClickNext} />
      </div>
    </section>
  )
}

export default Destination;