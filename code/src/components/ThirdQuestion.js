import React from 'react'

const durationArray = ['1-2 days', 'A weekend', '1-2 weeks', 'A month or longer']

export const ThirdQuestion = ({dayInput, ondayInputChange, nextQuestion, previousQuestion, step}) => {
    return (
        <main className='main-container'>
             <button className='back-btn' onClick={previousQuestion}>Go back</button>
            <form className='form-container'>
                <p>Question {step} of 4</p>
                <h3 className='question-title'>For how long do you prefer to go away?</h3>
                {durationArray.map((days) => (
                    <label htmlFor={days} key={days} >
                        <input
                        id={days}
                        type='radio'
                        value= {days}
                        onChange = {ondayInputChange}
                        checked= {days === dayInput}
                        />
                        {days}
                    </label>
                ))}
                <button 
              className='next-btn' 
              disabled = {dayInput === ''}
              onClick={nextQuestion}>
                    Next
                </button>
            </form>

        </main>
    )
}