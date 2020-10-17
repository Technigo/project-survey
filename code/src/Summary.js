import React from 'react';

const Summary = (props) => {
    return (
        <section className="summary">
            <h1>Hey {props.name}</h1> 
            <h2>{props.place}, what a great choice for your next destination!</h2>
            <p>We wish you a nice trip with your {props.partner}!</p>
        </section>
    )
}

export default Summary;