import React from 'react';


const Summary= ({ userName, transportation, active, temperature, handleStartOverClick, counter}) => {

  const tempWordToUse = () => {
    if (temperature < 5 && active === 'sporty') {
      return "Garmisch Partenkirchen"
    } 
    else if (temperature < 5 && active === 'middle') {
      return "Svalbard"
    }
    
    else if (temperature < 5 && active === 'lazy') {
      return "Icehotel in Jukkasjärvi"
    }

    else if (temperature >23) {
      return "Thailand"
    } else {
      return "Amsterdam"
    }
  }


  const activeWordToUse = () => {
    if (temperature < 5 && active === 'sporty') {
      return "go skiing all day long"
    } 
    else if (temperature < 5 && active === 'middle') {
      return "go polar bear sightseeing"
    }
    
    else if (temperature < 5 && active === 'lazy') {
      return "relax with a large Irish coffee"
    }

    else if (temperature >23) {
      return "Thailand"
    } else {
      return "Amsterdam"
    }
  }


  // const activeWordToUse = () => {




      return (
        <>
        <div className="summaryWrapper">
        <p> Hello <span className="bold">{userName}</span>! We would recomend you to take the <span className="bold">{transportation}</span> to <span className="bold">{tempWordToUse()}</span> and <span className="bold">{activeWordToUse()}</span>. </p>
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
