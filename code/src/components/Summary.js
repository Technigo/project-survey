import React from 'react'

// const reloadSurvey = () => window.location.reload() 

const Summary = (props) => {
    const { age, actor, username, personality, person } = props
    return (
        <section className='wrap'>
           <div className='content-wrap summary'>
                <h1>Thank you {username}!</h1>
                <div className='summary-wrap'>
                    <p className='bold-text'>Summary of your answers:</p>
                    <p>{actor} should be the next president.</p>
                    {personality === true && <p>You checked yourself and think you are a fearless person.</p>}
                    {personality === false && <p>You don't see yourself as a fearless person.</p>}
                    {person === true && <p>You think you are judgemental person.</p>}
                    {person === false && <p>You are not a judgemental person.</p>}
                    <p>Somewhere between the age of {age} you saw yourself as a strong, independent person.</p>
                </div>
                <button 
                    className='btn btn-summary' 
                    type="button"
                    onClick={() => window.location.reload()}>Start over
                </button>
            </div>
        </section>
    )
}

export default Summary;
