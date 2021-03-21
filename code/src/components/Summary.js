import React from 'react'

export const Summary = ({name, brand, frequency}) => {

    return(
        <>
            <section className="summary-container">
                <p>Thank you <span className="highlighted-text">{name}</span> for taking your time!</p>
                <p>Your favourite brand is:<span className="highlighted-text"> {brand}</span></p>
                <p>How often you wear sneakers:<span className="highlighted-text"> {frequency}</span></p>
            </section>
        </>
    )
}