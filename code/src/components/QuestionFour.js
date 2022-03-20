import React from 'react'

const TravelArray = ['Yes', 'No']

export const QuestionFour = ({
    travelInput,
    ontravelInputChange,
    nextQuestion,
    previousQuestion,
    step
}) => {
    return (
        <main className='main-container'>
            <form className='form-container'>
                <p className='question-number' tabIndex='0'>Question {step} of 4</p>
                <h3 className='question-title' tabIndex='0'>Have you a travel booked for this year?</h3>
                <div className='input-container'>
                    {TravelArray.map((travel) => (
                        <label className='radio-btn' htmlFor={travel} key={travel} tabIndex='0'>
                            <input
                                className='radio'
                                id={travel}
                                type='radio'
                                value={travel}
                                onChange={ontravelInputChange}
                                checked={travel === travelInput}
                                tabIndex='0'
                            />
                            {travel}
                        </label>
                    ))}
                </div>
            </form>
            <div className='btn-container'>
                <button
                    className='back-btn'
                    aria-label='Go back'
                    onClick={previousQuestion}>
                    Go back
                </button>
                <button
                    className='next-btn'
                    disabled={travelInput === ''}
                    onClick={nextQuestion}>
                    Next
                </button>
            </div>
        </main>
    )

}