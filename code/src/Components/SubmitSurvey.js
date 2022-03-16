import React from 'react'

const SubmitSurvey =({nextQuestion})=> {
    return (
        <main className='main-container'>
            <h3 className='question-title'>Ready to submit?</h3>
            <form onSubmit={nextQuestion}>
                <button className='next-btn' type='submit'>Lets book the trip</button>
            </form>
        </main>

    )
}

export default SubmitSurvey;