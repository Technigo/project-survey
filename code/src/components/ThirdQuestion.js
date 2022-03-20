import React from 'react'

const durationArray = ['1-2 days', 'A weekend', '1-2 weeks', 'a month or longer']

export const ThirdQuestion = ({
    dayInput,
    ondayInputChange,
    nextQuestion,
    previousQuestion,
    step
}) => {
    return (
        <main className='main-container'>
            <form className='form-container'>
                <p className='question-number' tabIndex='0'>Question {step} of 4</p>
                <h3 className='question-title' tabIndex='0'>For how long do you prefer to go away?</h3>
                <div className='input-container'>
                    {durationArray.map((days) => (
                        <label className='radio-btn' htmlFor={days} key={days} tabIndex='0'>
                            <input
                                className='radio'
                                id={days}
                                type='radio'
                                value={days}
                                onChange={ondayInputChange}
                                checked={days === dayInput}
                                tabIndex='0'
                            />
                            {days}
                        </label>
                    ))}
                </div>
            </form>
            <div className='btn-container'>
                <button className='back-btn'
                    aria-label='Go back'
                    onClick={previousQuestion}>
                    Go back
                </button>
                <button
                    className='next-btn'
                    disabled={dayInput === ''}
                    onClick={nextQuestion}>
                    Next
                </button>
            </div>

        </main>
    )
}