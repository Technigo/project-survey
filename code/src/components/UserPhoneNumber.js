/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import React from 'react';

const UserPhoneNumber = ({ userphonenumber, setUserphonenumber }) => {
  const handlePhoneNumberInputChange = (event) => {
    setUserphonenumber(event.target.value);
  };
  return (
    <div>
      <p className="user-p" tabIndex="0">What is your mobile phone number?</p>
      <input value={userphonenumber} className="user-input" type="tel" placeholder="0123456789" required="required" onChange={handlePhoneNumberInputChange} />
    </div>
  )
}

export default UserPhoneNumber;