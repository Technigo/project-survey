import React from 'react'

const Question2 = ({ goal,  onGoalChange, onStepChange}) => {
    
    const goals = [
        'Getting some fresh air', 
        'Working on my skiing skills', 
        'Having a good time with friends', 
        'Training for the Olympics']

    return (
      <div>
            <article className="letter-container">
                <form className="form">
                    <h1 tabindex="0">What are you main goal for this ski trip?</h1>
                    <div className="goal-input-container">
                        {goals.map(goal => (
                            <label className="radio-button-text" key={goal} tabindex="0">
                                <input
                                    className="radio-button"
                                    type="radio"
                                    value={goal}
                                    onChange={onGoalChange}
                                    tabindex="0"
                                    >
                                </input>
                                {goal}
                            </label>
                        ))}
                    </div>
                   <button className='btn' type="button" onClick={onStepChange} tabindex="0">Next</button>  
                </form>
            </article>
      </div>
    )
  }
  export default Question2