/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable max-len */
import React from 'react';
import resultspony from '../Images/resultspony.svg';

/* the result component returns three paragraphs that display the name, favourite food and favourite drink from the props */

export const Result = ({ toppingSelect, colorSelect, name, magicCrystalSelect, flowerSelect, showAddMore, handleAddMoreClick, fruitSelect }) => {
  return (
    <>
      {showAddMore && (
        <div className="content-wrapper">
          <p>Woohoo all questions done!! Are you ready to </p>
          <button type="button" onClick={() => handleAddMoreClick('yes')}>Yes</button>
          <button type="button" onClick={() => handleAddMoreClick('no')}>No, thats all</button>
        </div>
      )}
      {!showAddMore && (
        <div className="results-wrapper">
          <p>Your personal magical pony name is: </p>
          <p className="pony-name-present"> 🌟 {colorSelect}-{fruitSelect}-{name}-{magicCrystalSelect}-{toppingSelect}! 🌟 </p>
          <img
            src={resultspony}
            alt="My Little Pony" />
        </div>
      )}
    </>
  );
}
