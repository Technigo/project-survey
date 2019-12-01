import React, { useState } from 'react';

export const Thanks = ({ whenNext, answer }) => {
  const handleClick = (event) => {
    event.preventDefault();
    whenNext();
  }
  const userTypeChoice = answer[0];
  const userFavoritChoice = answer[1];
  const userTimeChoice = answer[2];

  return (
    <>
      <h2 className="thanks-page">
     You want to depent on {userTypeChoice} .

      Your favorit game is {userFavoritChoice} 

{userTimeChoice === "5 min" && "You don't seem to like games"}
{userTimeChoice === "10 min" && "You are a normal gamer"}
{/*       *5-20* - You don't seem to like games
      *30-60* - You are a normal gamer
      *1-2* - You seem to LOOOV game
      *more* - Don't you have a Life?
 */}
      </h2>
      <button type="button" className="thanks-button" onClick={handleClick}></button>
    </>
  )
}