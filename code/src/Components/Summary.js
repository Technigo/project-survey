import React from 'react'

const startOver = () => {
    document.location.href = "";
  };



  export const Summary = ({name, snack, drink, game,}) => {
      return (
        <>
            <h2> Cool {name}! I'll make sure {game} will be loading but while you wait... 
            there's some {snack} food and {drink} waiting for you!</h2>

            <button 
              type='startOver'
              tabIndex ='0'
              aria-label='Start the form again'
              onClick ={startOver}>Game over! Start Again!</button>
  
      </>
      )};