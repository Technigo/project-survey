import React from 'react'

const Summary = ( {name, age, location} ) => {
    return (
        <>
        <div className='summary'>
            <h1 className='summary-heading'>Thank you for the information {name}!</h1>
            <p className='summary-paragraph'>You will be soon matched with the person that is {age} years old and lives in {location}. Don't forget to daily check your inbox.</p>
        </div>
        <button
            className = 'restart-btn'
            type="button"
            onClick={() => window.location.reload()}>
            Restart
        </button>
        </>
    )
}

export default Summary
