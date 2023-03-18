/* eslint-disable linebreak-style */
import React from 'react';
import traveller from '../assets/traveller.gif'

export const Summary = ({ name, travel, location, covid }) => {
  return (
    <div className="summary-container">
      <img src={traveller} alt="A man looking at a map" />
      <h2>Thank you for filling out this survey, {name}.</h2>
      <h3>Just to summarise...</h3>
      <div className="summary">
        <p>When asked whether you will be travelling, you answered <span className="bold">{travel}</span>. </p>
        <p>As for your planned/dream destinations, you answered: <span className="bold">{location}</span></p>
        <p>And lastly, has covid-19 changed your travel-habits? <span className="bold">{covid}</span>.</p>
      </div>
      <button type="button" onClick={() => window.location.reload(false)}>Start Over</button>
    </div>
  )
}