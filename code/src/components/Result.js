import React from 'react';

export const Result = ({ nameOfDate, lengthOfDating, favContinent }) => {
  return (
    <>
      <p> Your date is {nameOfDate} </p>
      <p> You have been dating {nameOfDate} for {lengthOfDating} </p>
      <p> {nameOfDate}s favourite continent is {favContinent} </p>
      <p> We therefor sugest you to book a table at </p>
    </>
  );
}