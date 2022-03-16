import React from 'react'

export const SubmitSurvey = ({nextQuestion, previousQuestion}) => {
    return (
        <main className='main-container'>
             <button className='back-btn' onClick={previousQuestion}>Go back</button>
            <h3 className='question-title'>Ready to submit?</h3>
            <form onSubmit={nextQuestion}>
                <button type='submit'>
                    Yes, submit!
                </button>
            </form>
        </main>
    )
}