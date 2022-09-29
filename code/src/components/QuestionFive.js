import React from 'react'

const QuestionFive = ({ onStepChange, setQuestFive, questFive }) => {

    const movies = ['Armageddon', 'Van Helsing', 'Top Gun', 'Die Hard']

    const onQuestFiveChange = (event) => {
        setQuestFive(event.target.value)
      }

    return (
        <div className='questions-container'>
            <form className='form'>
                <h1 tabIndex='0'>Which is Jake's favourite movie?</h1>

                {movies.map((movie => {
                    return (
                    <label className="radio-label" key={movie} tabIndex="0" aria-label='Jakes favourite movie'>
                        <input 
                        type='radio'
                        value={movie} 
                        onChange={onQuestFiveChange} 
                        checked={movie === questFive} /> 
                        {movie}
                    </label>
                        )
                    }))}
        
                <button className='next-btn' type='button' onClick={onStepChange} tabIndex='0'>Next</button>
            </form> 
        </div>
   
    )

 }

 export default QuestionFive;