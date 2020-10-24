import React from'react'

const WelcomeSection = ({section, setSection}) =>{
    return (
        <section className="welcome-text">
            <h1> Amazing dog generator </h1>
            <h2> - which fluffy friend would be a perfect match for you ? </h2>
            <button className= "question1-button" 
                value="firstQuestion"
                onClick={event => setSection(event.target.value)}
                type="button"> Start to generate a new dog friend
            </button>
            
        </section>

    )}

export default WelcomeSection