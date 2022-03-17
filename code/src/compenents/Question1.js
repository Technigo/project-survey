import React from 'react'



const Question1 = ({name, house, onHouseChange, onStepChange}) => {
    
    return (
      <div>
    <section className="container">
      <article className="letter-container">

      <form className="form" onSubmit={event => event.preventDefault()}>
          <h1>Hi {name}!</h1>
          <h2>Which house would you want to join?</h2>
          
      <div className="input-container">
          <select
            onChange={onHouseChange}
            value={house}
            className="house-select"
            >
              <option disabled value=''>Select an option:</option>
              <option>Gryffindor</option>
              <option id="hufflepuff">Hufflepuff</option>
              <option>Slytherin</option>
              <option>Ravenclaw</option>

          </select>

          <button className='btn' type="button" onClick={onStepChange}>Next</button>
          </div>
        </form>
      </article>
    </section>
   
        
      </div>
    )
  }

  export default Question1