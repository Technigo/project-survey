import React from 'react'

/*In the () pass on to the next question and also onClick for the button*/ 
export const Introduction = ({nextQuestion}) => {
    return (
        <main className='main-container'>
            <h1 className='question-title'>Ready for a weekend trip?</h1>
            <form>
                <button className='next-btn' onClick={nextQuestion}>
                    Lets find destination!
                </button>
            </form>
        </main>
    )
}

