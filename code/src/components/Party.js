import React from 'react';
import JSConfetti from 'js-confetti';

const jsConfetti = new JSConfetti();

export const Party = ({ name, place, food, drink }) => {
  return (
    <>
        <div className="header">
        <h1><span>{name}</span></h1>
        </div>
        <div className="question">
       <p>🌪! Now imagine you are in your favourite place {place}</p>
       <p>eating {food} and drinking {drink}.</p>
       <p>Your favourite music is on and we're having a party just for YOU!</p>
       <p>
       I know, it's been a crappy day but tomorrow - You get a new change!
       Lets celebrate that by pushing the magic partybutton! 
        </p>
        </div>
        <div className="party-btn">
        <button type="submit" className="partyBtn" onClick={() => 
        {(jsConfetti.addConfetti({ 
            confettiRadius: 8, 
            confettiNumber: 500, 
            confettiColors:[
              '#ff0a54', '#efe378', '#ff7096', '#ff85a1', '#fbb1bd', '#78cfef',
              ],
            }))}}>MAGIC PARTYBUTTON</button>
        </div>
    </>
    );
};