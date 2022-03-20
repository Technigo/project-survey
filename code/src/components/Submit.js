import React from 'react'

export const SubmitSurvey = ({nextQuestion, previousQuestion}) => {
    return (
        <main className='main-container'>
            <h3 className='question-title'>Ready to submit?</h3>
            <form onSubmit={nextQuestion}>
            <button className='back-btn' onClick={previousQuestion}>Go back</button>
                <button className='submit-btn' type='submit'>
                    Submit!
                </button>
            </form>
        </main>
    )
}