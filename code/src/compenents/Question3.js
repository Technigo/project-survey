import React from 'react'

const Question3 = ({wand, onWandChange, onStepChange}) => {
    
    const wands = ['Wand1', 'Wand2', 'Wand3', 'Wand4']

    return (
      <div>
        <form className="wand-container"onSubmit={event => event.preventDefault()}>
          <h1>What wand do you want?</h1>
           
          {wands.map(wand => (
                        <label className="radio-button-overlay" key={wand}>
                            <input
                                className="radio-button"
                                type="radio"
                                value={wand}
                                onChange={onWandChange}
                                checked={wands === wand}>
                            </input>
                            {wand}
                        </label>
                    ))}
                    

          
        </form>
        <button className='start-btn' type="button" onClick={onStepChange}>Next</button>
      </div>
    )
  }

  export default Question3