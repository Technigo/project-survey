import React from 'react'

const QuestionTwo = ({ onStepChange, onQuestTwoChange, questTwo })=> {

    return (
        <div className='questions-container'>
            <form className='form' onSubmit={event => event.preventDefault()}>
                <h1 tabIndex='0'>How many brothers does Amy have?</h1>
                
                  <div className='input-container'>
                      <select onChange={onQuestTwoChange} value={questTwo} className='questTwo-select' aria-label='How many brothers'>
                          <option value='2'>2</option>
                          <option value='5'>5</option>
                          <option value='7'>7</option>
                          <option value='0'>0</option>
                      </select>
                    <button className='btn' type='button' onClick={onStepChange} tabIndex='0'>Next</button>
                  </div>
            </form>
        </div>
   
    )

 }

 export default QuestionTwo;