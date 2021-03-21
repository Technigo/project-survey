import React from 'react'

const Summary = ({ email, workArea, place }) => {

    const refreshPage = () => {
        window.location.reload()
      }

    return (

        <div className='summaryContainer' id='summary'>
            
            <div className='summaryContent'>
                <p tabIndex='0'>Thank you for submitting your information!</p>
                <p tabIndex='0'>We will contact you on {email} when we have any open {workArea} positions in {place}.</p>
            </div>

            <button
            className='startAndBackButton'
            type='button'
            onClick={refreshPage}
            >Back to start page!</button>

        </div>
    )
} 

export default Summary