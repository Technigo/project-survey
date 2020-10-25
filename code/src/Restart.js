import React from 'react';


const Restart = () => {
  const resetSurvey = () => {
    window.location.reload();
  }
  return (
    <button onClick={resetSurvey}>Start over</button>
  )
}

export default Restart;