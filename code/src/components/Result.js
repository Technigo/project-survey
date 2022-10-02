import React from 'react'

const Result = ({ riddleOne, riddleTwo, riddleThree, riddleFour, riddleFive, restartGame, username }) => {
    
    return (
      
      <div className='result-page'>
        <p>You answered Gollum's riddles, but before he got the chance to tell you whether you answered them all correctly, you put on the ring, turning yourself invisible, and run away. Behind you, you hear the creature screaming your name in desperation and rage: "{username}! Thief! Thief! We hates you forever!"</p>
        <p>As you finally find your way back to the outdoors and reunite with your friends, you feel a sense of relief, but also certainty that you have not seen the last of Gollum...</p>
  
        <p>Your answers:</p>

          <p>First Riddle: <span className='answer'>{riddleOne}</span> {riddleOne === 'Mountains' ? <i className='fa-sharp fa-solid fa-circle-check' id='check'/> : <i className='fa-solid fa-circle-xmark' id='wrong'/>}</p> 
          <p>Second Riddle: <span className='answer'>{riddleTwo}</span> {riddleTwo === 'The wind' ? <i className='fa-sharp fa-solid fa-circle-check' id='check'/> : <i className='fa-solid fa-circle-xmark' id='wrong'/>}</p>
          <p>Third Riddle: <span className='answer'>{riddleThree}</span> {riddleThree === 'The dark' ? <i className='fa-sharp fa-solid fa-circle-check' id='check'/> : <i className='fa-solid fa-circle-xmark' id='wrong'/>}</p>
          <p>Fourth Riddle: <span className='answer'>{riddleFour}</span> {riddleFour === 'Fish' ? <i className='fa-sharp fa-solid fa-circle-check' id='check'/> : <i className='fa-solid fa-circle-xmark' id='wrong'/>}</p>
          <p>Fifth Riddle: <span className='answer'>{riddleFive}</span> {riddleFive === 'Time' ? <i className='fa-sharp fa-solid fa-circle-check' id='check'/> : <i className='fa-solid fa-circle-xmark' id='wrong'/>}</p>
        
         <button id='playAgainBtn' onClick={restartGame}>Play Again?</button>
    
        {/* <img className='result-image' src='/images/logo.png' alt='logo'/> */}

        </div>
     );

}

export default Result;
