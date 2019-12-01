import React from 'react';

export const Thanks = ({ whenNext, answer }) => {
  const handleClick = (event) => {
    event.preventDefault();
    whenNext();
  }
  const userTypeChoice = answer[0];
  const userFavoritChoice = answer[1];
  const userTimeChoice = answer[2];

  return (
    <div className="question-box">
      <h2 className="thanks-message">
     So you want to depent on {userTypeChoice} <br/>

      Your favorit game is {userFavoritChoice} <br/>

{userTimeChoice === "5-10 min" && "You don't seem to like games"}
{userTimeChoice === "20-60 min" && "You are a normal gamer"}
{userTimeChoice === "1-2 h" && "You seem to LOOOVE games"}
{userTimeChoice === "more" && "Don't you have anything else to do?"}
      </h2>
      
      <button type="button" className="thanks-button" onClick={handleClick}></button>
    </div>
  )
}