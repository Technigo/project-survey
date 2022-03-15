import React from 'react'

const Overview = ({name, house, pet, wand}) => {
    
    return (
      <div>
        <section>
          <h1>Here is a overview:</h1>
          <p className="answer-overview">Your name: {name}</p>
          <p className="answer-overview">House: {house}</p>
          <p className="answer-overview">Pet: {pet}</p>
          <p className="answer-overview">Wand: {wand}</p>


        </section>
      </div>
    )
  }

  export default Overview