import React from 'react';


const Summary= ({ userName, transportation, active, temperature, handleStartOverClick, counter}) => {

  const tempWordToUse = () => {
    if (temperature < 5 ) {
      return "Kiruna"
    } else if (temperature >24) {
      return "Thailand"
    } else {
      return "Amsterdam"
    }
  }

      return (
        <>
        <div className="summaryWrapper">
        <p> Hello {userName} We would recomend you to take the {transportation} to {tempWordToUse()} and {active} </p>
        <p>Have a nice trip!</p>
        </div>
    
  <div className='buttonWrapper'>
    <button 
    className='startOverButton'
    type="button" 
    value={counter}
    onClick={handleStartOverClick}>
    Start Over</button>
  </div>
        </>
      );
}

export default Summary;
