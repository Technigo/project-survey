import React from "react";

export const Summary = props => {
    const {text, select, radio}
    
    return (
        <section>
            <h1>This survey is under construction. Sadly, we cannot reveal your ... </h1>
            <h2>But here are is a summary of the answers you gave!</h2>
            <h3>Your lala is {text}</h3>
            <h3>The lala is {select}</h3>
            <h3>And, your lala is {radio}</h3>
        </section>
    )
}

export default Summary