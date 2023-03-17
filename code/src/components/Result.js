import React from 'react';

export const Result = ({ name, food, sign }) => {
  return (
    <>
      <p>Your name is {name}! 💗</p>
      <p>You are a  {sign}</p>
      <p>You like {food}, Yummi!</p>
    </>
  );
}

