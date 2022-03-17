import React from 'react'

const Overview = ({name, wand, house, pet}) => {
    
  
    return (
      <div>
        <section className="container">
          <article className="letter-container">
            <div className="overview">
          <h1>Here is a overview:</h1>
          <p className="answer-overview">Your name: {name}</p>
          <p className="answer-overview">House: {house}</p>
          <p className="answer-overview">Pet: {pet}</p>
          <p className="answer-overview">Wand: {wand}</p>
             {console.log(name)}
             {console.log(house)}
             {console.log(pet)}
             {console.log(wand)}

             

          </div>
          </article>
        </section>
      </div>
    )
  }

  export default Overview