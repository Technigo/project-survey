import React from 'react'

const Summary = ({name, amountOfBands, bands, musicType, restart}) => {
    

// if (age === "0-17") {
//     alert
//}
    // if ageGroup is 0-17, display: you are not old enough????


    return (
        <article>
            <div className="container">

                <p>Hello {name}, you listen to {amountOfBands} number of bands per week, that's cool.
                You also listed {bands} as your favourite band. 
                 You generally listen to this type of music: 
                 <span className="music-type">{musicType}</span>
                 </p>
            

                <button className="restart"
                onClick={restart}
                >Go back to start</button>

            </div>
        </article>


    )
}

export default Summary