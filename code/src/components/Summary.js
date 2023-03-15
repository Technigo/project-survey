import React from 'react';

export const Summary = ({ name, frequently, brand, spend, secondHand }) => {
  return (
    <>
      <h1>Thank you for taking part in this survey, please see summary below</h1>
      <p>Name entered: {name}</p>
      <p>How often do you buy sneakers: {frequently}</p>
      <p>Your favourite brand of the option presented: {brand}</p>
      <p>How much you are willing to spend on a pair of sneakers: {spend}</p>
      <p>Thank you for your sharing your best tips <strong>{secondHand}{' '}</strong>
      when it comes to second hand treasures
      </p>
    </>
  )
}