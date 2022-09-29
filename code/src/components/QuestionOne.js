import React from 'react'

const QuestionOne = ({ onStepChange, setQuestOne, questOne })=> {

    const choices = ['Rosa', 'Terry', 'Jake', 'Boyle']

    const onQuestOneChange = (event) => {
        setQuestOne(event.target.value)
      }

    return (
        <div className='questions-container'>
            <form className='form'>
                <h1 tabIndex='0'>Who LOVES yoghurt?</h1>

                {choices.map((name => {
                    return (
                    <label className="radio-label" key={name} tabIndex="0">
                        <input 
                        type='radio'
                        value={name} 
                        onChange={onQuestOneChange} 
                        checked={name === questOne} /> 
                        {name}
                    </label>
                        )
                    }))}
        
                <button className='next-btn' type='button' onClick={onStepChange} tabIndex='0'>Next</button>
            </form> 
        </div>
   
    )

 }

 export default QuestionOne;