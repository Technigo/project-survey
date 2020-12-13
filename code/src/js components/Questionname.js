import React from 'react';

import "css components/questionname.css";

export const Questionname = ({answername, onNameChange}) => {

return(
<>
  <div className="name">
    <label 
      tabIndex='0' 
      for="name"        
      htmlFor="answerName">What is your name?
    </label>
    <input 
      className="inputname"
      value = {answername}
      onChange = {event => onNameChange(event.target.value)} 
      id="name"
      type="text"
      required minLength="2"
      aria-label="Enter your name here" />
  </div>
</>
);
};