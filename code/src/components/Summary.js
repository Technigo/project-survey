import React from 'react';
import myImage from './linkedin.png';
import myOtherImage from './github.png';

export const Summary = (props) => {
  return (
    <div className="summary">
      <h2>Thank you {props.name}, this was helpful!</h2>
      <h3>The best thing about our site: {props.location}</h3>
      <h3>Your overall impression: {props.ageGroup}</h3>
      <h3>The looks of our site is: {props.impression}</h3>
      <h3>Would you recommend it to a friend? {props.answer}</h3>
      <h3><i>Have a nice day!</i></h3>
      <div className="aboutme">
        <p>Made by Emilia G. Anundi @Technigo</p>
      </div>
      <div className="contactme">
        <div className="contactE">
          <p>Contact Emilia</p>
          <a href="https://www.linkedin.com/in/emiliaga/"><img src={myImage} className="contact-logo" alt="small linkedin logo" /></a>
          <a href="https://github.com/EmiliaGA"><img src={myOtherImage} className="contact-logo" alt="small github logo" /></a>
        </div>
      </div>
    </div>
  )
}