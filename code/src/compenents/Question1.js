import React from 'react'

const Question1 = ({name, house, onHouseChange, onStepChange}) => {
    
    return (
      <div>
        <article className="letter-container">
          <form className="form" onSubmit={event => event.preventDefault()}>
              <h1 tabindex="0">Hi {name}!</h1>
              <h2 tabindex="0">Which house would you want to join?</h2>
              
                <div className="input-container">
                    <select
                      onChange={onHouseChange}
                      value={house}
                      className="house-select"
                      >
                        <option disabled value=''>Select an option:</option>
                        <option id="gryff">Gryffindor</option>
                        <option id="huff">Hufflepuff</option>
                        <option id="sly">Slytherin</option>
                        <option id="raven">Ravenclaw</option>
                    </select>
                  <button className='btn' type="button" onClick={onStepChange} tabindex="0">Next</button>
                </div>
          </form>
        </article>
      </div>
    )
  }

  export default Question1