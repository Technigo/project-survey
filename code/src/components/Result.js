import React from 'react'

const Result = ({ questOne, questTwo, questThree, questFour, questFive, restartGame, username }) => {
    
    return (
      
      <div className='result-page'>
        <h1 tabIndex='0'>Good job, {username}!</h1>
  
        <h3 tabIndex='0'>Your answers: </h3>

          <p>Who loves youghurt: <span className='answer'>{questOne}</span> {questOne === 'Terry' ? <i className='fa-sharp fa-solid fa-circle-check' id='check'/> : <i className='fa-solid fa-circle-xmark' id='wrong'/>}</p> 
          <p>Amys brothers: <span className='answer'>{questTwo}</span> {questTwo === '7' ? <i className='fa-sharp fa-solid fa-circle-check' id='check'/> : <i className='fa-solid fa-circle-xmark' id='wrong'/>}</p>
          <p>Made gold statue: <span className='answer'>{questThree}</span> {questThree === 'Gina' ? <i className='fa-sharp fa-solid fa-circle-check' id='check'/> : <i className='fa-solid fa-circle-xmark' id='wrong'/>}</p>
          <p>Holts husband: <span className='answer'>{questFour}</span> {questFour === 'Kevin Cozner' ? <i className='fa-sharp fa-solid fa-circle-check' id='check'/> : <i className='fa-solid fa-circle-xmark' id='wrong'/>}</p>
          <p>Jakes favourite movie: <span className='answer'>{questFive}</span> {questFive === 'Die Hard' ? <i className='fa-sharp fa-solid fa-circle-check' id='check'/> : <i className='fa-solid fa-circle-xmark' id='wrong'/>}</p>
        
         <button id='playAgainBtn' onClick={restartGame}>Play Again?</button>
    
        <img className='result-image' src='/images/logo.png' alt='logo'/>

        </div>
     );

}

export default Result;

 
