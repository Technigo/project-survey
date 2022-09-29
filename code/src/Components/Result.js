import React from 'react';

export const Result = ({ name, sandwich, pancakes, drink }) => {
  return (
    <>
      <p>Thank you {name}! This is your breakfast of choice:</p>
      <p>You are having a {sandwich} and fluffy pancakes with {pancakes}.
        With your breakfast you drink {drink}.
      </p>
    </>
  );
}