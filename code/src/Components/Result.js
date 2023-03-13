import React from 'react';
import { Seasons } from './Seasons';

export const Result = ({ name, food, drink, season }) => {
  return (
    <>
      <p>Your name is {name}</p>
      <p>Your favorite food is {food}</p>
      <p>Your favorite drink is {drink}</p>
      <p>Your favorite season is {season}</p>

    </>

  );
};
