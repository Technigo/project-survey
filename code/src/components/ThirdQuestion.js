import React from 'react'

const durationArray = ['Thu-Sun','Fri-Sun', 'Sat-Sun']

export const ThirdQuestion = ({dayInput, ondayInputChange, nextQuestion, step}) => {
    return (
        <main className='main-container'>
            <form className='form-container'>
                <p>Question number: {step}</p>
                <h3 className='question-title'>For how long do you want to go away?</h3>
                {durationArray.map((days) => (
                    <label>
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
              onClick={nextQuestion}>
                    Next
                </button>
            </form>

        </main>
    )
}