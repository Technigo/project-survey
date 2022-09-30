/* eslint-disable linebreak-style */
import React from 'react';

// eslint-disable-next-line max-len
export const Result = ({ nameOfDate, lengthOfDating, allergies, foodPreferens, favContinent, budget, suggestedResturant }) => {
  return (
    <>
      <p> Your date is {nameOfDate} </p>
      <p> You have been seeing {nameOfDate} for {lengthOfDating} </p>
      <p> {nameOfDate} has {allergies} and </p>
      <p> {nameOfDate} preferes {foodPreferens} </p>
      <p> {nameOfDate}s favourite continent is {favContinent} and </p>
      <p> your wallet says {budget} tonight! </p>
      <p> We therefor suggest you to book a table for two at {suggestedResturant}</p>
    </>
  );
}