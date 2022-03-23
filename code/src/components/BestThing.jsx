import React from 'react';

const BestThing = ({ bestChosen }) => {

  return (
    <section className='question-wrapper'>
      <div className='question'>

        <h2>The best thing with working from home/remotely is</h2>
        <textarea className="text-area" id="best"
          onChange={(event) => bestChosen(event.target.value)}
        />

      </div>
    </section>
  );
};
export default BestThing;

