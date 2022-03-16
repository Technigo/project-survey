import React from 'react'

const Summary = (props) => {
    const name = props.name
    const age = props.ageGroup
    const band = props.bands
    const shirt = props.shirt

// if (age === "0-17") {
//     alert
//}
    // if ageGroup is 0-17, display: you are not old enough????
    

    return (
        <article>
            <div className='summary-will-show'>
                <p>Hello {name}, you are {age} and you are going to see {band}. 
                You will recieve a shirt: {shirt}</p>
            </div>
        </article>
    )
}

export default Summary