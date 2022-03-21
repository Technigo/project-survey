import React from 'react';

const BestThing = ({bestInput, bestChosen}) => {
  
  return (
    <section className='question-wrapper'>
          <div className='question'>
          
      <h1>The best thing with working from home is {bestInput}</h1>
      <textarea class="text-area"
        onChange={(event) => bestChosen(event.target.value)}
      />
     
    </div>
    </section>
  );
};
export default BestThing;

