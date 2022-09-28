import React from 'react'

const Result = ({ questOne, questTwo, questThree, questFour, questFive, restartGame, username }) => {
    
    return (
      
      <div classNam='result-page'>
        <h1 tabIndex='0'>Good job, {username}!</h1>
  
        <h3>Your answers: </h3>

          <p>Who loves youghurt: {questOne} {questOne === 'Terry' ? <i className='fa-sharp fa-solid fa-circle-check' id='check'/> : <i className='fa-solid fa-circle-xmark' id='wrong'/>}</p> 
          
          <p>Amys brothers: {questTwo} {questTwo === '7' ? <i className='fa-sharp fa-solid fa-circle-check' id='check'/> : <i className='fa-solid fa-circle-xmark' id='wrong'/>}</p>
          
          <p>Has daugher "Iggy" {questThree} {questTwo === '7' ? <i className='fa-sharp fa-solid fa-circle-check' id='check'/> : <i className='fa-solid fa-circle-xmark' id='wrong'/>}</p>

          <p>Holts husband: {questFour} {questTwo === '7' ? <i className='fa-sharp fa-solid fa-circle-check' id='check'/> : <i className='fa-solid fa-circle-xmark' id='wrong'/>}</p>

          <p>Jakes favourite movie: {questFive} {questTwo === '7' ? <i className='fa-sharp fa-solid fa-circle-check' id='check'/> : <i className='fa-solid fa-circle-xmark' id='wrong'/>}</p>
        
         <button id='playAgainBtn' tabIndex='0' onClick={restartGame}>Play Again?</button>
        </div>
     );

}

export default Result;

 
