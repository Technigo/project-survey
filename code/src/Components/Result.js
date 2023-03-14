import React from 'react';

export const Result = ({ name, food, drink, group, taste }) => {
  return (
    <>
      <h1 className="nametext">Your name is {name}</h1>
      <h1 className="nametext">Your favorite food is {food}</h1>
      <h1 className="nametext">Your age is {group}</h1>
      <h1 className="nametext">Your favorite drink is {drink}</h1>
      <h1 className="nametext">Your favorite taste is {taste}</h1>
    </>

  );
};
