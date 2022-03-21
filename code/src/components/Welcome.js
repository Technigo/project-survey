import React from 'react'

export const Welcome = ({stepChange}) => {

    return (
    <section className="welcome-screen">    
    <h1>Slayer Survey</h1>
    <p className="welcome-text" >Nostrud turducken magna drumstick ham. Ea sausage proident, short ribs excepteur prosciutto hamburger sirloin salami minim. Cow bresaola ea ut shoulder leberkas minim. Bacon pork belly turkey pork, jowl swine biltong.</p>
    <button className="start-button" onClick={stepChange}>Let's go!</button>
    </section> 
    )
}