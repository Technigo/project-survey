import React from "react";

export const Summary = props => {
    const {text, teletubbies, sailorMoon, turtles} = props
    return (
        <section className="summary-wrapper">
            <h1>Error - sadly we cannot reveal your favourite color <span role="img" aria-label="disappointed face">&#128542;</span></h1>
            <h2>Here are is a summary of the answers you gave!</h2>
            <h3>You chose the {text} power ranger!</h3>
            <h3>And {teletubbies}</h3>
            <h3>And, {sailorMoon}, as the coolest Sailor Moon character</h3>
            <h3>And, lastly {turtles}</h3>
            <h3>Pretty cool though!</h3>
            <h4>Ps. the most common favourite color is blue - so yours is probablu too <span role="img" aria-label="Face with stuck-out tongue and winking eye"></span>&#128540;</h4>
        </section>
    )
}

export default Summary