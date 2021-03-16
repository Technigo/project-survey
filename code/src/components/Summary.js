import React from 'react'

const Summary = ({ email, workArea, place}) => {

    return (
        <div className='summaryContainer'>
            <div className='summaryContent'>
            <p>Thank you for submitting your information!</p>
            <p>We will contact you on {email} when we have any open positions as a {workArea} in {place}.</p>
            </div>
        </div>
    )
} 

export default Summary