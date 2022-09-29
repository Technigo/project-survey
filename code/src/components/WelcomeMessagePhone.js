import React from 'react';

export const WelcomeMessagePhone = ({ phone, setPhone }) => {
  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
    console.log('setPhone', event.target.value)
  }

  return (
    <div className="phoneNumber">
      <p>What is your phone number??</p>
      <input type="tel" placeholder="Your phone number" value={phone} onChange={handlePhoneChange} />
    </div>
  )
}