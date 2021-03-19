import React from 'react'

const Summary = ({name, country, companion, activity}) => {
    return (
        <div className="summary">
            <p>Excellent, {name}! You definitely will enjoy a trip to {country} where you will be able to 
               {activity} with your {companion}.
            </p>
            
        </div>
    )
}

export default Summary
