import React from 'react'

const Overview = ({name, wand, house, pet}) => {
    
  
    return (
      <div>
          <article className="letter-container">

          <div className="overview">
            <h1 className="h1-overview" tabindex="0">Here is a overview:</h1>
            <p className="answer-overview" tabindex="0">Your name: {name}</p>
            <p className="answer-overview" tabindex="0">House: {house}</p>
            <p className="answer-overview" tabindex="0">Pet: {pet}</p>
            <p className="answer-overview" tabindex="0">Wand: <span>{wand}</span></p>
          </div>
          </article>
        
      </div>
    )
  }

  export default Overview