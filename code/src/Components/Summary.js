import React from 'react';


const tempWordToUse = () => {
  if (temperature === 1) {
    return "Cold"
  } else if (temperature === 2) {
    return "Middle"
  } else {
    return "Hot"
  }
}

export const Summary= ({ userName, transportation, active}) => {
      return (
        <>
        <p> Hello {userName} We would recomand you to take the {transportation} to {tempWordToUse()} and {active} </p>
        </>
      );
}


