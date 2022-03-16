import React from 'react'

export const SubmitSurvey = ({nextQuestion}) => {
    return (
        <main className='main-container'>
            <h3 className='question-title'>Ready to submit?</h3>
            <form onSubmit={nextQuestion}>
            
                <button type='submit'>
                    Yes, submit!
                </button>
            </form>
        </main>
    )
}