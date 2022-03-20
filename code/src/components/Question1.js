import React from 'react'

const Question1 = ({name, level, onLevelChange, onStepChange}) => {
    
    return (
      <div>
        <article className="survey-container">
          <form className="form" onSubmit={event => event.preventDefault()}>
              <h1 tabindex="0">Hi {name}!</h1>
              <h2 tabindex="0">What's your level of experience when it comes to skiing?</h2>
              
                <div className="input-container">
                    <select
                      onChange={onLevelChange}
                      value={level}
                      className="level-select"
                      >
                        <option disabled value=''>Select an option:</option>
                        <option id="firsttimer">First time skier</option>
                        <option id="novice">Novice</option>
                        <option id="intermediate">Intermediate</option>
                        <option id="expert">Expert</option>
                    </select>
                  <button className='btn' type="button" onClick={onStepChange} tabindex="0">Next</button>
                </div>
          </form>
        </article>
      </div>
    )
  }

  export default Question1