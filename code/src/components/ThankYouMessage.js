import React from 'react';

export const ThankYouMessage = (message, setMessage) => {
  setMessage()
  return (
    <div className="ThankYouMessage">
      <h3>Thank you for your message. We will contact you with proposal within 24h</h3>
    </div>
  )
}