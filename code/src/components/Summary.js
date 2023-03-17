import React from 'react';

export const Summary = ({ name, frequently, brand, spend, secondHand }) => {
  return (
    <>
      <h1>Thank you {name}, please see summary below</h1>
      <p>You buy sneakers approximately <strong>{frequently}</strong></p>
      <p>Your favourite brand of the options presented is <strong>{brand}</strong></p>
      <p>You are willing to spend <strong>{spend}€</strong> on a pair of sneakers you like.</p>
      <p>Thank you for your sharing your best tips <strong>{secondHand}{' '}</strong>
      when it comes to second hand treasures
      </p>
      <h2>If you want to change your answers, please click below:</h2>
      <button type="button" onClick={() => window.location.reload()}>Start over</button>
      <h3>If you are happy with your answers please submit below:</h3>
    </>
  )
}
