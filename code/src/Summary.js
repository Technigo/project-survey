import React from "react";

export const Summary = props => {
    const {text, teletubbies, sailorMoon, turtles} = props
    return (
        <section>
            <h1>This survey is under construction. Sadly, we cannot reveal your ... </h1>
            <h2>But here are is a summary of the answers you gave!</h2>
            <h3>Your text input is {text}</h3>
            <h3>The select input is {teletubbies}</h3>
            <h3>And, the sailor input is {sailorMoon}</h3>
            <h3>And, the turtle input is {turtles}</h3>
        </section>
    )
}

export default Summary