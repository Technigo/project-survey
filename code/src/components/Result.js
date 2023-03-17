/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable max-len */
import React from 'react';

/* the result component returns three paragraphs that display the name, favourite food and favourite drink from the props */

export const Result = ({ name, food, drink, showAddMore, handleAddMoreClick, fruitSelect }) => {
  return (
    <>
      {showAddMore && (
        <div>
          <p>dasadasd</p>
          <button type="button" onClick={() => handleAddMoreClick('yes')}>Yes</button>
          <button type="button" onClick={() => handleAddMoreClick('no')}>No, thats all</button>
        </div>
      )}
      {!showAddMore && (
        <>
          <p>Your pony name is {name}-{food}-{drink}-{fruitSelect}!</p>
        </>
      )}
    </>
  );
}
