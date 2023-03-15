/* eslint-disable max-len */
import React from 'react';

/* the result component returns three paragraphs that display the name, favourite food and favourite drink from the props */

export const Result = ({ name, food, drink, showAddMore, handleAddMoreClick }) => {
  return (
    <>
      {showAddMore && (
        <div>
          <p>Do you want to add anything to the packing list?</p>
          <button type="button" onClick={() => handleAddMoreClick('yes')}>Yes</button>
          <button type="button" onClick={() => handleAddMoreClick('no')}>No, that's all</button>
        </div>
      )}
      {!showAddMore && (
        <>
          <p>Your name is {name}</p>
          <p>Your favourite food is {food}</p>
          <p>Your favourite drink is {drink}</p>
        </>
      )}
    </>
  );
}

/* export const Result = ({ name, food, drink }) => {
  return (
    <>
      <p>Your name is {name}</p>
      <p>Your favourite food is {food}</p>
      <p>Your favourite drink is {drink}</p>
    </>
  );
} */

