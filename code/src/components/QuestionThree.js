import React from 'react'

const QuestionThree = ({ onStepChange, onQuestThreeChange, questThree })=> {

    return (
        <div className='questions-container'>
            <form className='form' onSubmit={event => event.preventDefault()}>
                <h1 tabIndex='0'>3. Who made a gold statue of themself?</h1>
                
                  <div className='input-container'>
                  <label className='select-label'>
                      <select onChange={onQuestThreeChange} value={questThree} className='select' aria-label='Who has son Nikolaj'>
                          <option value='Hitchcock'>Hitchcock</option>
                          <option value='Gina'>Gina</option>
                          <option value='Holt'>Holt</option>
                          <option value='Scully'>Scully</option>
                      </select>
                      </label>
                    <button className='next-btn' type='button' onClick={onStepChange}>Next</button>
                  </div>
            </form>
        </div>
   
    )

 }

 export default QuestionThree;