import React from "react";

export const Summary = props => {
    const {text, select, radio} = props
    return (
        <section>
            <h1>This survey is under construction. Sadly, we cannot reveal your ... </h1>
            <h2>But here are is a summary of the answers you gave!</h2>
            <h3>Your text input is {text}</h3>
            <h3>The select input is {select}</h3>
            <h3>And, the radio input is {radio}</h3>
        </section>
    )
}

export default Summary