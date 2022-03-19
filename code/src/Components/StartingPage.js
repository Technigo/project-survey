import React from 'react'

export const StartingPage = (props) => {
    const {onStepChange} = props
    return(
            <div className="container">
                <h1>Open application</h1>
                <h2>We are also looking for creative developers. 
                    Please fill the open application form and we will get back to you. 
                </h2>
                <button className="button" onClick={onStepChange}>Start</button>
            </div>
      )
} 