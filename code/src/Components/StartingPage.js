import React from 'react'

export const StartingPage = (props) => {
    const {onStepChange} = props
    return(
            <div className="container">
                <h1>Open application</h1>
                <h2>Didn't find a match from our open positions. Please fill
                    info about you, and we will contact if we find a suitable
                    position for you!
                </h2>
                <button className="button" onClick={onStepChange}>Start</button>
            </div>
      )
} 