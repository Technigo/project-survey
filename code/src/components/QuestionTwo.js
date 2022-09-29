import React from 'react'

const QuestionTwo = ({ onStepChange, setQuestTwo, questTwo }) => {

    const howMany = ['Two', 'Four', 'Seven', 'None']

    const onQuestTwoChange = (event) => {
        setQuestTwo(event.target.value)
      }

    return (
        <div className='questions-container'>
            <form className='form'>
                <h1 tabIndex='0'>How many brothers does Amy have?</h1>
                 
                {howMany.map((siblings => {
                    return (
                    <label className="radio-label" key={siblings} tabIndex="0">
                        <input 
                        type='radio'
                        value={siblings} 
                        onChange={onQuestTwoChange} 
                        checked={siblings === questTwo} /> 
                        {siblings}
                    </label>
                    )
                    }))}
               
                <button className='next-btn' type='button' onClick={onStepChange} tabIndex='0'>Next</button>
            </form> 
        </div>
   
    )

 }

 export default QuestionTwo;