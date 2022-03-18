import React from 'react'

export const StartingPage = (props) => {
    const {onStepChange} = props
    return(
            <div className="container">
                <h1>Open application</h1>
                <h2>Are you interested in our company but didn't find a perfect match from open positions? 
                    Fill open application form and we will get back to you. 
                </h2>
                <button className="button" onClick={onStepChange}>Start</button>
            </div>
      )
} 