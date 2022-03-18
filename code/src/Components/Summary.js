import React from 'react'

const Summary = ({name, amountOfBands, bands, shirtColor, restart}) => {
    

// if (age === "0-17") {
//     alert
//}
    // if ageGroup is 0-17, display: you are not old enough????


    return (
        <article>
            <div className="container">

                <p>Hello {name}, you are {amountOfBands} and you are going to see {bands}. 
                You will recieve a shirt: {shirtColor}</p>
            

                <button className="restart"
                onClick= {restart}
                >Go back to start</button>

            </div>
        </article>


    )
}

export default Summary