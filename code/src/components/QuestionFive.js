import React from 'react'

const QuestionFive = ({ onStepChange, onQuestFiveChange, questFive})=> {

    return (
        <div className='questions-container'>
            <form className='form' onSubmit={event => event.preventDefault()}>
                <h1 tabIndex='0'>Which is Jake's favourite movie?</h1>
                
                  <div className='input-container'>
                      <select onChange={onQuestFiveChange} value={questFive} className='questOne-select' aria-label='Jakes favourite movie'>
                          <option value='Armageddon'>Armageddon</option>
                          <option value='Van Helsing'>Van Helsing</option>
                          <option value='Top Gun'>Top Gun</option>
                          <option value='Die Hard'>Die Hard</option>
                      </select>
                    <button className='btn' type='button' onClick={onStepChange} tabIndex='0'>Next</button>
                  </div>
            </form>
        </div>
   
    )

 }

 export default QuestionFive;