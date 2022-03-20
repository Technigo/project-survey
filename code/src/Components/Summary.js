import React from 'react'

const Summary = ({name, amountOfBands, bands, musicType, restart}) => {
    
    return (
        <article>
            <div className="text-group">

                <p>Hello <span className="answer">{name}</span>, nice to have you here!</p>
                <p>You listen to <span className="answer">{amountOfBands}</span> number of bands per week, that's cool.</p>
                <p>You have listed <span className="answer">{bands}</span> as your favourite band, nice choice.</p>
                <p>You generally listen to this type of music: <span className="answer">{musicType.join(', ')}</span></p>
            
            <div className="btn-group">
                <button className="restart"
                onClick={restart}
                >Go back to start</button>
            </div>

            </div>
        </article>


    )
}

export default Summary