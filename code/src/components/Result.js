import React from 'react';

export const Result = ({ name, color, size, pattern }) => {
  return (
    <>
      <h1>Yay!</h1>
      <div className="yay">
        <p>You want to celebrate: {name}</p>
        <p>Colour: {color}</p>
        <p>Emoji: You like the {pattern}, but Emojis doesn´t belong in confetti</p>
        <p>Size: {size}</p>
      </div>
    </>
  );
};