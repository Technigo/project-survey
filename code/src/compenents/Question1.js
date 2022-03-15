import React from 'react'



const Question1 = ({name, house, onHouseChange, onStepChange}) => {
    
    return (
      <div>
    <section className="container">
      <article className="letter-container">

      <form className="form"onSubmit={event => event.preventDefault()}>
          <h1>Hi {name}!</h1>
          <h2>Which house would you want to join?</h2>
          
      
          <select
            onChange={onHouseChange}
            value={house}
            >
              <option>Gryffindor</option>
              <option>Hufflepuff</option>
              <option>Slytherin</option>
              <option>Ravenclaw</option>

          </select>

          <button className='next-btn' type="button" onClick={onStepChange}>Next</button>
        </form>

      </article>
    </section>
        
      </div>
    )
  }

  export default Question1