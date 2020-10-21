import React from 'react';

export const Questionname = ({answername, onNameChange}) => {

return(
  <>
      <p>{answername}</p>
      <div>
        <label htmlFor="answerName">What is your name?</label>
<input
  value = {answername}
  onChange = {event => onNameChange(event.target.value)} 
  id="name"
  type="text"
  required/>
      </div>
</>
);
};