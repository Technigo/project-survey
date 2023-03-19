import React from 'react';

export const Result = ({ name, sign, item }) => {
  return (
    <div className="result">
      <p>Your name is {name}! 💗</p>
      <p>You are a  {sign}</p>
      <p> You are the {item} laid back kind of {sign} </p>
      <p> Wow that´s totally awesome! </p>
    </div>
  );
}

