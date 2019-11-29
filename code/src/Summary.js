import React from 'react';

export const Summary = (props) => {

  return (
    <div className="Summary">
      <p>{props.name} is so happy that you have picked them!</p>
      <p>{props.name} comes from the {props.unicorn}.</p>
      <p>{props.name} is very happy with the hairstyle you have chosen,{props.hair}</p>
    </div>
  )
};

