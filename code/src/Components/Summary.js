import React from 'react'

const startOver = () => {
    document.location.href = "";
  };

  export const Summary = ({name, setName, snack, setSnack, drink, setDrink, game, setGamesList}) => {
      return (
        <section className="summary-container">
            <p> Okay {name}, I'll make sure {game} will be loading but while you wait... 
            there's some {snack} and {drink} waiting for you!</p>
            <button onClick ={startOver}>Start Over!</button>
        </section>
      )



  }