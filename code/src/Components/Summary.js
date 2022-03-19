import React from 'react'

const Summary = ({name, amountOfBands, bands, musicType, restart}) => {
    
    return (
        <article>
            <div className="container">

                <span>Hello {name}, nice to have you here!</span>
                <span>You listen to {amountOfBands} number of bands per week, that's cool.</span>
                <span>You have listed {bands} as your favourite band, nice choice.</span>
                <span>You generally listen to this type of music: {musicType.join(', ')}</span>
            
                <button className="restart"
                onClick={restart}
                >Go back to start</button>

            </div>
        </article>


    )
}

export default Summary