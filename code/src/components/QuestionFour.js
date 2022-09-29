import React from 'react'

const QuestionFour = ({ onStepChange, onQuestFourChange, questFour }) => {

    return (
        <div className='questions-container'>
            <form className='form' onSubmit={event => event.preventDefault()}>
                <h1 tabIndex='0'>What is captain Holt's husband's name?</h1>
                
                  <div className='input-container'>
                      <select onChange={onQuestFourChange} value={questFour} className='select' aria-label='Holts husband'>
                          <option value='Jerry Adams'>Jerry Adams</option>
                          <option value='James Holt'>James Holt</option>
                          <option value='Kevin Cozner'>Kevin Cozner</option>
                          <option value='Sam Anderson'>Sam Anderson</option>
                      </select>
                    <button className='next-btn' type='button' onClick={onStepChange} tabIndex='0'>Next</button>
                  </div>
            </form>
        </div>
   
    )

 }

 export default QuestionFour;