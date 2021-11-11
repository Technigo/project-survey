import React from 'react'

const FirstPage = ({onStepChange}) => {

    return (
        <section className="intro-container">
            <img src= "/assets/two-girls.jpg" alt = "two children playing"/>
            <div className="text-container">
                <h1>Welcome to Bella & Bubbles</h1>
                <p>We are two curious children who would like to know more about you: what you like, where you live, 
                    and all of the other really important questions in life. Don't worry, we will go easy on you!
                </p>
            </div>
            <button className="intro-button" onClick = {onStepChange}>Let's start!</button>
        </section>
    )

}

export default FirstPage