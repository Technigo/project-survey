/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable max-len */
import React from 'react';
import resultspony from '../Images/resultspony.svg';

/* the result component returns three paragraphs that display the name, favorite food and favorite drink from the props */

export const Result = ({ toppingSelect, colorSelect, name, magicCrystalSelect, showAddMore, handleAddMoreClick, fruitSelect }) => {
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
        <div className="pony-name-present">
          <p>Your personal magical pony name is: </p>
          <p> 🌟 {colorSelect} {fruitSelect} {name}!🌟 </p>
          <p><strong> 💎 Cutie Mark:</strong> {magicCrystalSelect} </p>
          <p><strong> ⚡️ Your secret pony weapon: </strong>{toppingSelect} </p>
          <img
            className="resultspony-img"
            src={resultspony}
            alt="My Little Pony" />
        </div>
      )}
    </>
  );
}
