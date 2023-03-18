/* eslint-disable linebreak-style */
import React from 'react';
import traveller from '../assets/traveller.gif'

// a component that shows a summary of all answers, given by the user (step 5, final)¨
// has a restart button.
export const Summary = ({ name, travel, location, covid }) => {
  return (
    <div className="summary-container">
      <img src={traveller} alt="A man looking at a map" />
      <h2>Thank you for filling out this survey, {name}.</h2>
      <h3>Just to summarise...</h3>
      <div className="summary">
        <p>When asked whether you any upcoming travel-plans, you answered <span className="bold">{travel}</span>. </p>
        <p>As for your planned/dream destinations, you wrote: <span className="bold">{location}</span></p>
        <p>And lastly, covid-19 has changed your travel-habits <span className="bold">{covid}</span>.</p>
      </div>
      <button type="button" onClick={() => window.location.reload(false)}>Start Over</button>
      <div className="links-container">
        Illustration by <a href="https://icons8.com/illustrations/author/HxMFjfKZdNq2">Rosina Gavrilash</a>, <a href="https://icons8.com/illustrations/author/ZQDZn9ZZj5aQ">Violetta Barsuk</a>, <a href="https://icons8.com/illustrations/author/kP9rc8JiBCcz">Irene M. Ray</a> and <a href="https://icons8.com/illustrations/author/zD2oqC8lLBBA">Icons 8</a>
      </div>
    </div>
  )
}