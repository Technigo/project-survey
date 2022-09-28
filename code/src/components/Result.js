import React from 'react'

const Result = ({ questOne, questTwo, questThree, questFour, questFive, restartGame, username }) => {
    
    return (
      
      <div className='result-page'>
        <h1 tabIndex='0'>Good job, {username}!</h1>
  
        <h3>Your answers: </h3>
          <p>Who loves youghurt: {questOne}</p>
          <p>Amys brothers: {questTwo}</p>
          <p>Has son Nikolaj: {questThree}</p>
          <p>Holts husband: {questFour}</p>
          <p>Jakes favourite movie: {questFive}</p>
        
         <button id='playAgainBtn' tabIndex='0' onClick={restartGame}>Play Again?</button>
        </div>
     );

}

export default Result;

 
