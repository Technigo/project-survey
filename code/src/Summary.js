import React from "react";
import './Summary.css'

export const Summary = props => {
    const {text, teletubbies, sailorMoon, turtles} = props
    return (
        <section className="summary-wrapper">
            <h1 tabIndex="0">Your favourite color is <span className="blue">blue!</span> <span role="img" aria-label="smiling face">&#128513;</span></h1>
            <h2 className="h2-summary" tabIndex="0">Here is a summary of the answers you gave:</h2>
            <p tabIndex="0">You chose the {text} Power Ranger!</p>
            <p tabIndex="0">And {teletubbies}</p>
            <p tabIndex="0">You chose {sailorMoon} character</p>
            <p tabIndex="0">And, lastly {turtles}</p>
            <p tabIndex="0">Pretty cool!</p>
            <p tabIndex="0">P.S. the most common favourite color is blue - so this quizz is totally accurate <span role="img" aria-label="winking face"></span>&#128540;</p>
        </section>
    )
}

export default Summary