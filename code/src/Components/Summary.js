import React from 'react';

export const Summary = (props) => {
  return (
    <div>
      <p>{props.answers.firstName}</p>
      <p>{props.answers.typeOfHome}</p>
      <p>{props.answers.rooms}</p>
      <p>{props.answers.price}</p>
    </div>
  );
}