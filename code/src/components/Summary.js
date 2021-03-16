import React from 'react'

const Summary = ({ email, workArea, place}) => {

    return (
        <div className='summaryContainer'>
        <p>Thank you for submitting your information!</p>
        <p>We have now registered {email} as your email adress and that you're interested in jobs as a {workArea} in {place}.</p>
        <p>We will contact you when we have an open position that matches your profile.</p>
        </div>
    )
} 

export default Summary