/* eslint-disable linebreak-style */
import React from 'react';

// eslint-disable-next-line max-len
export const Result = ({ nameOfDate, lengthOfDating, allergies, foodPreferens, favContinent, budget }) => (
  <div className="resultText">
    <p> Your date is {nameOfDate} </p>
    <p> You have been seeing {nameOfDate} for {lengthOfDating} </p>
    <p> {nameOfDate} has {allergies} and </p>
    <p> preferes {foodPreferens} </p>
    <p> {nameOfDate}s favourite continent is {favContinent} and </p>
    <p> your wallet says {budget} tonight! </p>
    <p> Write your email below and we will send you 3 suggestions </p>
    <p>where you should book a table for two! </p>
  </div>
)