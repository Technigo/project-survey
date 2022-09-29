import React from 'react'

const QuestionTwo = ({ onStepChange, setQuestTwo, questTwo }) => {

    const howMany = ['2', '4', '7', '0']

    const onQuestTwoChange = (event) => {
        setQuestTwo(event.target.value)
      }

    return (
        <div className='questions-container'>
            <form className='form'>
                <h1 tabIndex='0'>How many brothers does Amy have?</h1>
                 
                <div className='radio-btns'>
                {howMany.map((siblings => {
                    return (
                    <label className="radio-label" key={siblings} tabIndex="0" aria-label='How many brothers'>
                        <input 
                        type='radio'
                        value={siblings} 
                        onChange={onQuestTwoChange} 
                        checked={siblings === questTwo} /> 
                        {siblings}
                    </label>
                    )
                    }))}
                </div>
                
                <button className='next-btn' type='button' onClick={onStepChange}>Next</button>
            </form> 
        </div>
   
    )

 }

 export default QuestionTwo;