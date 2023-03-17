import React from 'react';
import myImage from './linkedin.png';
import myOtherImage from './github.png';

export const Summary = ({ name, points, bestThing, impression, answer }) => {
  return (
    <div className="summary">
      <h2>Thank you {name}, this was helpful!</h2>
      <h3>Your overall impression: {points}</h3>
      <h3>The best thing about our site: {bestThing}</h3>
      <h3>The looks of our site is: {impression}</h3>
      <h3>Would you recommend it to a friend? {answer}</h3>
      <div className="aboutme">
        <p>Made by Emilia G. Anundi @Technigo</p>
      </div>
      <div className="contactme">
        <div className="contactE">
          <a href="https://www.linkedin.com/in/emiliaga/"><img src={myImage} className="contact-logo" alt="linkedin link" /></a>
          <a href="https://github.com/EmiliaGA"><img src={myOtherImage} className="contact-logo" alt="github link" /></a>
        </div>
      </div>
    </div>
  )
}