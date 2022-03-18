import React from 'react'

const Overview = ({name, wand, house, pet}) => {
    
  
    return (
      <div>
          <article className="letter-container">

          <div className="overview">
            <h1 className="h1-overview">Here is a overview:</h1>
            <p className="answer-overview">Your name: {name}</p>
            <p className="answer-overview">House: {house}</p>
            <p className="answer-overview">Pet: {pet}</p>
            <p className="answer-overview">Wand: <span>{wand}</span></p>
          </div>
          </article>
        
      </div>
    )
  }

  export default Overview