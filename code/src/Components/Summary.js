import React from 'react'

const Summary = ({name, ageGroup, bands, shirt, restart}) => {
    

// if (age === "0-17") {
//     alert
//}
    // if ageGroup is 0-17, display: you are not old enough????
    

    return (
        <article>
            <div>
                <p>Hello {name}, you are {ageGroup} and you are going to see {bands}. 
                You will recieve a shirt: {shirt}</p>
            </div>

            <button className="restart"
            onClick= {restart}
            >Go back to start</button>
        </article>
    )
}

export default Summary