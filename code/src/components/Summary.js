import React from 'react'

const Summary = ({nameValue, countryValue, companionValue, activityValue}) => {
    return (
        <div>
            <p>Excellent, <span className="tag">{nameValue}</span>! You can start packing your suitcase for an unforgettable trip to <span className="tag">{countryValue}</span> where you will be able to 
            <span className="tag">{activityValue}</span> with your <span className="tag">{companionValue}</span>!
            </p>
        </div>
    )
}

export default Summary
