import React from 'react'

const SubmitSurvey =({nextQuestion})=> {
    return (
        <main className='main-container submit'>
            <h3 tabindex="0">Ready to submit your answer?</h3>
            <form onSubmit={nextQuestion}>
                <button className='next-btn' type='submit'>Lets take a trip</button>
            </form>
        </main>

    )
}

export default SubmitSurvey;