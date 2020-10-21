import React from 'react';
export const Questionaddress = ({answeraddress, onAddressChange}) => {

return(
  <>
      <p>{answeraddress}</p>
      <div>
        <label htmlFor="answerAdress">What is your address?</label>
<input
  value = {answeraddress}
  onChange = {event => onAddressChange(event.target.value)} 
  id="address"
  type="text"
  required/>
      </div>
</>
);
};