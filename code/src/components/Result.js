import React from 'react';

export const Result = ({ name, food, drink }) => {
  return (
    <>
      <p>Your name is {name}! 💗</p>
      <p>Your favourite food is 🌮{food}, yummi!😋</p>
      <p>Your favourite drink is {drink}, 🍸 delich!</p>
    </>
  );
}

