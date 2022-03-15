import React from 'react'

const Summary = (props) => {
    const name = props.name
    const age = props.ageGroup


    // if ageGroup is 0-17, display: you are not old enough????
    

    return (
        <div className='summary-will-show'>
            <p>Hello {name}, you are {age}</p>
        </div>
    )
}

export default Summary