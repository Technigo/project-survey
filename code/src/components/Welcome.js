import React from 'react'

export const Welcome = ({stepChange}) => {

    return (
    <section className="welcome-screen"> 
       
    <h1>Slayer Survey</h1>
    <p className="welcome-text" >
    Welcome, fellow Buffy-buff! Whether you’re just taking your first steps into Sunnydale or if you’ve revisited the Buffyverse many times, we hope you’ll think this survey SLAYS.         </p>
    <button className="start-button" onClick={stepChange}>Let's go!</button>
    </section> 

    )
}