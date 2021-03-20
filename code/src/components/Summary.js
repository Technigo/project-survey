import React from 'react'

const Summary = ( { value, weekvalue, result, timeOrRounds } ) => {
    return (
        <>
        <div>
            <h3>Summary:</h3>
            <p>{value}</p>
            <p>{weekvalue}</p>
            <p>{timeOrRounds}: {result} </p>
            <p>Thank you for participating and good luck with next week's challenge!</p>
        </div>
        </>
    )
}

export default Summary
