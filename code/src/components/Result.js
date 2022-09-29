/* eslint-disable linebreak-style */
import React from 'react';

// eslint-disable-next-line max-len
export const Result = ({ nameOfDate, lengthOfDating, favContinent, foodPreferens, budget, suggestedResturant }) => {
  return (
    <>
      <p> Your date is {nameOfDate} </p>
      <p> You have been seeing {nameOfDate} for {lengthOfDating} </p>
      <p> {nameOfDate}s favourite continent is {favContinent} </p>
      <p> {nameOfDate} preferes {foodPreferens} and </p>
      <p> your wallet says {budget} tonight, </p>
      <p> so therefor we suggest you to book a table for two at {suggestedResturant}</p>
    </>
  );
}