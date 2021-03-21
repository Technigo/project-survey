import React from 'react'

const Summary = ({ email, workArea, place }) => {

    const refreshPage = () => {
        window.location.reload()
      }

    return (

        <summary className='summaryContainer' id='summary'>
            
            <div className='summaryContent'>
            <p>Thank you for submitting your information!</p>
            <p>We will contact you on {email} when we have any open {workArea} positions in {place}.</p>
            </div>

            <button
            className='startAndBackButton'
            type='button'
            onClick={refreshPage}
            >Back to start page!</button>

        </summary>
    )
} 

export default Summary