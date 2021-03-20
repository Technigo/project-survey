import React from 'react'

const Summary = ({nameValue, countryValue, companionValue, activityValue}) => {
    return (
        <div className="summary">
            <p>Excellent, {nameValue}! You definitely will enjoy a trip to {countryValue} where you will be able to 
               {activityValue} with your {companionValue}.
            </p>
            
        </div>
    )
}

export default Summary
