import React from 'react';

export const Party = ({ name, place, food, drink }) => {
  return (
    <>
    <div className="question">
        <h1>{name}!</h1>
       <p>Imagine you are in your favourite place {place}, eating {food} and drinking {drink}. Your favouritemusic is on so do a little dance now! Yes, common!</p>
       <p>
       It's been a crappy day but you know what? Tomorrow, you get a new change.
       Lets celebrate that by pushing the magic partybutton! 
        </p>
        </div>
        <button type="button" onClick="change">MAGIC PARTYBUTTON</button>
        
        </>
    );
}