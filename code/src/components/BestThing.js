import React from 'react';

const BestThing = ({bestInput, bestChosen}) => {
  
  return (
  <div>
      <h1>The best thing with working from home is {bestInput}</h1>
      <input
        type="text"
        onChange={(event) => bestChosen(event.target.value)}
      />
     
    </div>
  );
};
export default BestThing;

/*<button 
className='button'
onClick = {onStepChange}>SUBMIT</button>*/