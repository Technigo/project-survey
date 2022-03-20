import React from 'react'

export const Introduction = ({ nextQuestion }) => {
    return (
        <main className='main-container'>
            <h1 className='question-title' tabIndex='0'>Travel survey </h1>
            <p tabIndex='0'>A survey about your travel preferences</p>
            <form>
                <button className='next-btn' onClick={nextQuestion}>
                    Lets start!
                </button>
            </form>
        </main>
    )
}

