import React from 'react';


const Summary= ({ userName, transportation, active, temperature, handleStartOverClick, counter}) => {


  // const activeWordToUse = () => {
  //   if (temperature > 5 || active === 'sporty' || transportPreference === 'plane' ) {
  //     return "to go skiing all day long."
  //   } else if (temperature > 5 || active === 'sporty' || transportPreference === 'boat' ) {
  //     return "go for polar bear sightseeing"
  //   } else if (temperature > 5 || active === 'sporty'|| transportPreference === 'train' ) {
  //     return "Check in to ice hotell"
  //   } else {
  //     return "Thailand"
  //   }
  // }
 
  const tempWordToUse = () => {
    if (temperature > 5 || active === 'sporty' || transportPreference === 'plane' ) {
      return "to go skiing all day long."
    } else if (temperature > 5 || active === 'sporty' || transportPreference === 'boat' ) {
      return "go for polar bear sightseeing"
    } else if (temperature > 5 || active === 'sporty'|| transportPreference === 'train' ) {
      return "Check in to ice hotell"
    } else {
      return "Thailand"
    }
  }


      return (
        <>

        <div className="summaryWrapper">
        <p> Hello {userName} We would recomend you to take the {transportation} to {tempWordToUse()} and {activeWordToUse()} </p>
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
