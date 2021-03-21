import React from 'react'

const Summary = ({radioValue, dropDown, firstThought, societysPortrayal}) => {
    return (
        <div>
            <h2>Your answers</h2>
            <p>1: {firstThought}</p>
            <p>2: {radioValue}</p>
            <p>3: {dropDown}</p>
            <p>4: {societysPortrayal}</p>
        </div>
    )
}

export default Summary;