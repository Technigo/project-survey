import React from 'react'

const QuestionOne = ({ onStepChange, setQuestOne, questOne })=> {

    const choices = ['Rosa', 'Terry', 'Jake', 'Boyle']

    const onQuestOneChange = (event) => {
        setQuestOne(event.target.value)
      }

    return (
        <div className='questions-container'>
            <form className='form'>
                <h1 tabIndex='0'>1. Who LOVES yoghurt?</h1>

                <div className='radio-btns'>
                {choices.map((name => {
                    return (
                    <label className="radio-label" key={name} tabIndex="0" aria-label='Loves yoghurt'>
                        <input 
                        type='radio'
                        value={name} 
                        onChange={onQuestOneChange} 
                        checked={name === questOne} /> 
                        {name}
                    </label>
                        )
                    }))}
                </div>
           
                <button className='next-btn' type='button' onClick={onStepChange}>Next</button>
            </form> 
        </div>
   
    )

 }

 export default QuestionOne;