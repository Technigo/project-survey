import React from 'react';
import { WelcomeMessagePhone } from './WelcomeMessagePhone';

export const WelcomeMessage = ({ name, setName, phone, setPhone }) => {
  const handleNameChange = (event) => {
    setName(event.target.value);
  }

  return (
    <>
      <div className="welcomeMessage">
        <h2>Welcome to magical travel agency.</h2>
        <h3>We will help you with your dreamed holiday!</h3>
        <h4>To assist you in the best possible way
              we will need to know a little more about you.
              This survay will help us to make your dream comes true.
        </h4>
        <p>What is your name?</p>
        <input type="text" placeholder="Your name" value={name} onChange={handleNameChange} required />
      </div>
      <WelcomeMessagePhone phone={phone} setPhone={setPhone} />
    </>
  )
}