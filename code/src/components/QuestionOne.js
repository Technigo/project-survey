import React from 'react'

const QuestionOne = ({ onStepChange, onQuestOneChange, questOne })=> {

    return (
        <div className='questions-container'>
            <form className='form'>
                <h1 tabIndex='0'>Who loves yoghurt more than anything?</h1>
                
                  <div className='input-container'>
                      <select onChange={onQuestOneChange} value={questOne} className='questOne-select' aria-label='Who eats youghurt'>
                          <option value='Rosa'>Rosa</option>
                          <option value='Terry'>Terry</option>
                          <option value='Jake'>Jake</option>
                          <option value='Boyle'>Boyle</option>
                      </select>
                    <button className='btn' type='button' onClick={onStepChange} tabIndex='0'>Next</button>
                  </div>
            </form>
        </div>
   
    )

 }

 export default QuestionOne;