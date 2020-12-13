import React from 'react';

export const Questionaddress = ({answeraddress, onAddressChange}) => {

return(
  <>
    <div>
      <label tabIndex='0' htmlFor="answerAdress">What is your address?</label>
      <input
        value = {answeraddress}
        onChange = {event => onAddressChange(event.target.value)} 
        id="address"
        type="text"
        required
        aria-label="Enter your home address here"
      />
    </div>
  </>
);
};