import React from 'react';

export const WelcomeMessagePhone = ({ phone, setPhone }) => {
  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  }

  return (
    <div className="phoneNumber">
      <p>What is your phone number??</p>
      <input type="text" value={phone} onChange={handlePhoneChange} />
    </div>
  )
}