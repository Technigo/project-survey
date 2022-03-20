import React from 'react'


const IntroPage = ({name, onNameChange, onStepChange}) => {
  
    return (
      <div>
        <article className="survey-container" aria-label="Survey container">
          <form className="form" onSubmit={event => event.preventDefault()}>
            <h1 tabindex="0">Welcome to the Alps!</h1>
            <p tabindex="0">Before hitting the slopes, we need to get some information about you so you can get the best experience!</p>
            <h2 tabindex="0">Let's start with your name:</h2>
          
            <div className="input-container">
                  <input
                      className="input-form"
                      id="name"
                      type="text"
                      onChange={onNameChange}
                      value={name}
                  />
              <button className='btn' type="button" onClick={onStepChange} tabindex="0" >Next</button>
            </div>
          </form>
        </article>
      </div>
    )
  }

  export default IntroPage