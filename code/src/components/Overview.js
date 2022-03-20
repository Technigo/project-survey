import React from 'react'

const Overview = ({name, weather, level, goal}) => {
    
  
    return (
      <div>
          <article className="letter-container">

          <div className="overview">
            <h1 className="h1-overview" tabindex="0">Here is your overview:</h1>
            <p className="answer-overview" tabindex="0">Your name: {name}</p>
            <p className="answer-overview" tabindex="0">Level: {level}</p>
            <p className="answer-overview" tabindex="0">Goal: {goal}</p>
            <p className="answer-overview" tabindex="0">Weather: <span>{weather}</span></p>
          </div>
          </article>
        
      </div>
    )
  }

  export default Overview