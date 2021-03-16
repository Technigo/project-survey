import React from 'react'

const Summary = (props) => {
    return (
        <>
        <div className='summary'>
            <h1 className='summary-heading'>Thank you for the information {props.name}!</h1>
            <p className='summary-paragraph'>You will be soon matched with the person that is {props.age} years old and lives in {props.location}. Don't forget to daily check your inbox.</p>
        </div>
        </>
    )
}

export default Summary
