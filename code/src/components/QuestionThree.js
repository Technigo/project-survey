import React from 'react'

const QuestionThree = ({ onStepChange, onQuestThreeChange, questThree})=> {

    return (
        <div className='questions-container'>
            <form className='form' onSubmit={event => event.preventDefault()}>
                <h1 tabIndex='0'>Who has a son named Nikolaj?</h1>
                
                  <div className='input-container'>
                      <select onChange={onQuestThreeChange} value={questThree} className='questThree-select' aria-label='Who has son Nikolaj'>
                          <option value='Boyle'>Boyle</option>
                          <option value='Gina'>Gina</option>
                          <option value='Holt'>Holt</option>
                          <option value='Scully'>Scully</option>
                      </select>
                    <button className='btn' type='button' onClick={onStepChange} tabIndex='0'>Next</button>
                  </div>
            </form>
        </div>
   
    )

 }

 export default QuestionThree;