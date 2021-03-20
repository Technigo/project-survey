import React from 'react'

const Summary = ({ email, workArea, place}) => {

    return (

        <div className='summaryContainer' id='summary' tabIndex='0'>
            <div className='summaryContent'>
            <p tabIndex='0'>Thank you for submitting your information!</p>
            <p tabIndex='0'>We will contact you on {email} when we have any open {workArea} positions in {place}.</p>
            </div>
        </div>
    )
} 

export default Summary