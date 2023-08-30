import React from 'react';
import './thankyoupage.css'

export const ThankYouPage = () => {
  return (
    <div className="thank-you-page">
      <h1>Thank you!</h1>
      <h2>Have a nice day!</h2>
      <button className="start-over-btn-last-page" type="button" onClick={() => window.location.reload()}>Leave quiz</button>
    </div>
  )
}